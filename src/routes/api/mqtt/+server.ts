import type { RequestHandler } from '@sveltejs/kit';
import { json } from "@sveltejs/kit";
import mqtt from "mqtt";

const client = mqtt.connect('mqtt://localhost:1883');
const topics = {
    topic1: 'sensors/value1',
    topic2: 'sensors/value2',
    topic3: 'sensors/value3',
    topic4: 'sensors/value4'
};

let values = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0
};

client.on('connect', () => {
    Object.values(topics).forEach(topic => {
        client.subscribe(topic);
    });
});

client.on('message', (topic, message) => {
    switch(topic) {
        case topics.topic1: values.value1 = parseFloat(message.toString()); break;
        case topics.topic2: values.value2 = parseFloat(message.toString()); break;
        case topics.topic3: values.value3 = parseFloat(message.toString()); break;
        case topics.topic4: values.value4 = parseFloat(message.toString()); break;
    }
});

export const GET: RequestHandler = async () => {
    return json(values);
};