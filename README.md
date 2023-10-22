# Disk Space Monitoring

This project aims to monitor available disk space on a Linux VM and send this information to a Kafka message broker. It consists of two components: a Node.js application for data collection (producer) and a Laravel PHP application for data consumption (consumer).

## Components

### Node.js Disk Space Monitor (Producer)
The Node.js application is responsible for gathering available disk space information from the Linux VM and sending it to a Kafka topic. This component uses the following libraries and tools:
- [diskusage](https://www.npmjs.com/package/diskusage) to obtain disk usage information.
- [dotenv](https://github.com/motdotla/dotenv) for storing configuration in the environment.
- [kafkajs](https://www.npmjs.com/package/kafkajs) to produce messages to a message broker.

### Laravel PHP Disk Space Monitor (Consumer)
The PHP application subscribes to a Kafka topic, consuming messages from the message broker. It plays a vital role in providing real-time insights into available disk space on the Linux VM. This component uses the [laravel-kafka](https://github.com/mateusjunges/laravel-kafka) package to consume messages from the message broker.

## Getting Started
Follow the individual READMEs in the `linux-application` and `php-application` directories for detailed instructions on setting up and running the producer and consumer components.

## License
The Node.js and Laravel components in this project are open-sourced software, each licensed under the [MIT license](https://opensource.org/licenses/MIT).

Feel free to explore each component's directory for specific setup and usage instructions.

**Note**: Ensure you have the required prerequisites and configurations set up before running these components.