const redis = require('redis');
const client = redis.createClient();

client.connect();

client.on('error', (error) => {
    console.log('Error ' + error);
});
client.on('connect', () => {
    console.log("Redis conncection established");
});