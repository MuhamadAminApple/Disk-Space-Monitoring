# Disk Space Monitor and Kafka Producer

## Description
This Node.js application will get available disk space and sends the information to a Kafka topic.

## Getting Started
These instructions will help you set up and run the Kafka producer in your Node.Js project.

### Prerequisites
- Node.js
- NPM (Node Package Manager)
- Apache Kafka Server (for sending data to Kafka)

### Installation
1. **Install project dependencies**
    ```bash
    npm install
    ```

2. **Copy the example environment file and configure it for your Kafka setup.**
    ```bash
    cp .env.example .env
    ```

Open the `.env` file and replace the placeholder values with your actual Kafka broker information.

## Usage
To run the application, execute the following command in the project directory:
```bash
npm run serve
```

This will monitor the available storage on your system and send this information to the Kafka topic specified in your `.env` file.

## Configuration
You can configure the application by editing the `.env` file:
- `KAFKA_HOST`: The hostname or IP address of your Kafka broker.
- `KAFKA_PORT`: The port number of your Kafka broker.
- `KAFKA_TOPIC`: The Kafka topic where data will be sent.

## License
Node.js is available under the [MIT license](https://opensource.org/licenses/MIT). Node.js also includes
external libraries that are available under a variety of licenses.  See [LICENSE](https://github.com/nodejs/node/blob/HEAD/LICENSE) for the full license text.

## Acknowledgments
This app relies on libraries, packages, or tools:
  - [diskusage](https://www.npmjs.com/package/diskusage) for obtain disk usage information.
  - [dotenv](https://github.com/motdotla/dotenv) for storing configuration in the environment.
  - [kafkajs](https://www.npmjs.com/package/kafkajs) for produce messages to a message broker.