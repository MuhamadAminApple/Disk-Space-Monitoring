require('dotenv').config()
const disk = require('diskusage')
const { Kafka, Partitioners } = require('kafkajs')

const kafka = new Kafka({
	brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
	clientId: 'kafka-producer'
})

// Get the available storage in bytes
async function getAvailableStorage() {
	try {
		const diskInfo = await disk.check("/")
		return diskInfo.available
	} catch (error) {
		console.log(`Error on getting available storage. ${error.message}`)
	}
}

// Convert bytes to the appropriate unit (KB, MB, GB)
function formatStorage(size) {
  const KB = 1 << 10
  const MB = 1 << 20
  const GB = 1 << 30

  if (size >= GB) {
    return `${(size / GB).toFixed(2)} GB`
  } else if (size >= MB) {
    return `${(size / MB).toFixed(2)} MB`
  } else if (size >= KB) {
    return `${(size / KB).toFixed(2)} KB`
  } else {
    return `${size} Bytes`
  }
}

// Send the message to Kafka
function sendToKafka(totalAvailable) {
	return new Promise(async (resolve, reject) => {
		let producer
		try {
			producer = kafka.producer({ 
				createPartitioner: Partitioners.LegacyPartitioner 
			})
			await producer.connect()
		} catch (error) {
			return reject(`Error on connecting to Kafka. ${error.message}`)
		}

		try {
			await producer.send({
				topic: process.env.KAFKA_TOPIC,
				messages: [
					{ 
						key: process.env.KAFKA_TOPIC, 
						value: JSON.stringify({ 
							storage: totalAvailable,
							date: new Date
						})
					},
				],
			})
		
			await producer.disconnect()
			resolve()
		}
		catch (error) {
			return reject(`Error on sending to Kafka. ${error.message}`)
		}
	})
}

// Main function
async function main() {
  try {
    const availableStorage = await getAvailableStorage()
    const formattedStorage = formatStorage(availableStorage)

    await sendToKafka(formattedStorage)
		console.log("Total available disk has been sent.")
  } catch (error) {
    console.error(error)
  }
}

main()