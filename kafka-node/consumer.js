const kafka = require('kafka-node');

// Set up the Kafka consumer
const consumer = new kafka.Consumer(
  new kafka.KafkaClient({kafkaHost: 'localhost:9093'}),
  [{topic:"intro" }]
);

// Callback function to handle messages received
function processMessage(ready) {
  // output the message
  return ready;

}

// Register the callback function with the consumer
const mesage = consumer.on('ready', processMessage);
console.log(mesage.payloads);