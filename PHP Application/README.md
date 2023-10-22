# Disk Space Monitor and Kafka Consumer

## Description
The PHP App is a designed to subscribe to a Kafka topic and consume messages from a message broker. This component plays a vital role in the project by providing real-time insights into available disk space. 

## Getting Started
These instructions will help you set up and run the Kafka consumer in your Laravel project.

### Prerequisites
- Laravel 10.x requires a minimum PHP version of 8.1.
- [Composer](https://getcomposer.org/) for managing PHP dependencies.

### Installation
1.  **Install Dependencies**
    ```bash
    composer install
    ```

2.  **Environment Configuration**
Copy the example environment file and configure it for your Kafka setup.
    ```bash
    cp .env.example .env
    ```

Open the `.env` file and replace the placeholder values with your actual Kafka broker information.

## Usage
To consume messages from the Kafka topic, execute the following command in the project directory:
```bash
php artisan kafka:consume
```

The Kafka consumer will start processing messages from the specified topic.

## Configuration
You can configure the application by editing the `.env` file:
- `KAFKA_HOST`: The hostname or IP address of your Kafka broker.
- `KAFKA_PORT`: The port number of your Kafka broker.
- `KAFKA_TOPIC`: The Kafka topic where data will be sent.
  
## License
The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Acknowledgments
This app relies on libraries, packages, or tools:
  - [laravel-kafka](https://github.com/mateusjunges/laravel-kafka) for consume messages from a message broker.