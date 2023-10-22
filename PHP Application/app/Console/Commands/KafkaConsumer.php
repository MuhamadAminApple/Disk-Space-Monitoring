<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Junges\Kafka\Facades\Kafka;
use Carbon\Carbon;

class KafkaConsumer extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'kafka:consume';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Consume messages from Kafka topics';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {
            $consumer = Kafka::createConsumer([config('kafka.topic')])
                ->withHandler(function ($message) {
                    try {
                        $data = $message->getBody();
                        $date = Carbon::parse($data['date'])->setTimezone(config('app.timezone'))->format('d-m-Y h:i:s A');
                        $this->info('(' . $date . ') - Available disk space: ' . $data['storage']);
                    } catch (\Exception $e) {
                        $this->error('Error processing message: ' . $e->getMessage());
                    }
                })->build();

            $consumer->consume();
        } catch (\Exception $e) {
            $this->error('Error on connecting to Kafka. ' . $e->getMessage());
        }
    }
}
