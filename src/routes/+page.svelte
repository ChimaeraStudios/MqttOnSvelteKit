<script lang="ts">
import { onDestroy, onMount } from "svelte";

const POLL_INTERVAL = 500;//ms

let values = $state({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0
});

let intervalId: any;

async function fetchData() {
    const response = await fetch('/api/mqtt');
        
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    values = data;
}

onMount(() => {
    // Initial fetch
    fetchData();

    // Start Polling
    intervalId = setInterval(fetchData, POLL_INTERVAL);
});

// Cleanup on component destroy
onDestroy(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});

</script>
<div class="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4 bg-gray-900">
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">{values.value1}</h2>
        <p class="text-4xl text-white">0</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">{values.value2}</h2>
        <p class="text-4xl text-white">0</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">{values.value3}</h2>
        <p class="text-4xl text-white">0</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">{values.value4}</h2>
        <p class="text-4xl text-white">0</p>
    </div>
</div>