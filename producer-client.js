var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    KeyedMessage = kafka.KeyedMessage,
    client = new kafka.Client(),
    producer = new Producer(client),
    km = new KeyedMessage('key', 'message'),
    payloads = [
        { topic: 'sync-service', messages: 'Hi', partition: 0 }
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        console.log("success :", data);
        console.log("Error :", err);
    });
});

producer.on('error', function (err) { })