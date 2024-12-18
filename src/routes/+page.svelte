<script lang="ts">
	import { onMount, onDestroy } from "svelte";
import sensorValues, { startConnection, closeConnection } from "../store/values";


onMount(() => {
    startConnection();
});

onDestroy(() => {
    closeConnection();
});

</script>

<div class="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4 bg-gray-900">
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">Sensor 1</h2>
        <p class="text-4xl text-white">{$sensorValues.value1}</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">Sensor 2</h2>
        <p class="text-4xl text-white">{$sensorValues.value2}</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">Sensor 3</h2>
        <p class="text-4xl text-white">{$sensorValues.value3}</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">Sensor 4</h2>
        <p class="text-4xl text-white">{$sensorValues.value4}</p>
    </div>
</div>