import type { SensorValues } from '$lib/types';
import { EventEmitter } from 'events';
import type { RequestHandler } from '@sveltejs/kit';
import mqtt from "mqtt";

// MQTT Configuration
const MQTT_SERVER = 'mqtt://localhost:1883';
const SENSOR_TOPICS = {
    value1: 'sensors/value1',
    value2: 'sensors/value2',
    value3: 'sensors/value3',
    value4: 'sensors/value4'
} as const;

// Store for sensor values
const sensorValues: SensorValues = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0
};

// Event emitter for sensor updates
const sensorEmitter = new EventEmitter();

// Initialize MQTT client
const client = mqtt.connect(MQTT_SERVER);

// Subscribe to all sensor topics
client.on('connect', () => {
    Object.values(SENSOR_TOPICS).forEach(topic => client.subscribe(topic));
});

// Handle incoming messages
client.on('message', (topic, message) => {
    // Extract sensor name from topic (e.g., 'sensors/value1' -> 'value1')
    const sensorName = topic.split('/')[1] as keyof typeof sensorValues;
    if (sensorName in sensorValues) {
        sensorValues[sensorName] = parseFloat(message.toString());
        // Notify all listeners about the update
        sensorEmitter.emit('update', sensorValues);
    }
});

// SSE endpoint
export const GET: RequestHandler = async ({ request }) => {
    const stream = new ReadableStream({
        start(controller) {
            const encoder = new TextEncoder();
            const sendUpdate = (data: SensorValues) => {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
            };

            // Initial data
            sendUpdate(sensorValues);

            // Listen for updates in real-time
            const updateHandler = (data: SensorValues) => sendUpdate(data);
            sensorEmitter.on('update', updateHandler);

            // Cleanup
            request.signal.addEventListener('abort', () => {
                sensorEmitter.off('update', updateHandler);
            });
        }
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        }
    });
};