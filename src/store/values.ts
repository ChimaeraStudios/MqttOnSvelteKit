import type { SensorValues } from '$lib/types';
import { writable } from 'svelte/store';

export const initialValues: SensorValues = {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0
};

export const connectionStatus = writable<boolean>(false);
export const sensorStore = writable<SensorValues>(initialValues);

let eventSource: EventSource;

export function startConnection() {
    try {
        eventSource = new EventSource('/api/mqtt');
        
        eventSource.onmessage = (event) => {
            sensorStore.set(JSON.parse(event.data));
        };

        eventSource.onopen = () => {
            connectionStatus.set(true);
        };

        eventSource.onerror = () => {
            connectionStatus.set(false);
            eventSource.close();
        };
    } catch (error) {
        console.error('Failed to establish SSE connection:', error);
        connectionStatus.set(false);
    }
}

export function closeConnection() {
    if (eventSource) {
        eventSource.close();
    }
    connectionStatus.set(false);
    sensorStore.set(initialValues);
}

export default sensorStore;