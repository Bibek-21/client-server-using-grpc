const kafka = require('kafka-node');

const user = new kafka.KafkaClient({
  kafkaHost: 'localhost:9093'
});

const producer = new kafka.Producer(user);

producer.on('ready', () => {
  const payload = [
    {
      topic: 'intro',
      messages: 'Hello! man what are you doing right now ?'
    }
  ];

  producer.send(payload, (error, data) => {
    if (error) {
      console.error('Error in publishing message:', error);
    } else {
      console.log('Message successfully published:', data);
    }
  });
});

producer.on('error', (error) => {
  console.error('Error connecting to Kafka:', error);
});