const {Kafka} = require('kafkajs')


const kafka = new Kafka({
    clientId:'client1',
    ssl:true,
    brokerIs: ['localhost:9093']
});


const producer = kafka.producer()

const producerFnc = async()=>{
try {
    await producer.connect();
   await producer.send({
        topic:'maths',
        messages:[

            { value:'This is a kafkajs message for topic maths'},
            {value:  'This is a second message'}


        ]
    })
    await consumer.connect()
    await consumer.subscribe({ topic: 'maths', fromBeginning: true })
  
    await consumer.producerFnc({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          partition,
          offset: message.offset,
          value: message.value.toString(),
        })
      },
    })


} catch (error) {
    console.log(error);
}
   
}

producerFnc();




