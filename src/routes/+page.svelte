<script lang="ts">
	import { onMount } from "svelte";


let value1 = $state(0);
let value2 = $state(0);
let value3 = $state(0);
let value4 = $state(0);

async function updateValues() {
    const response = await fetch('api/mqtt');
    const data = await response.json();
    value1 = data.value1;
    value2 = data.value2;
    value3 = data.value3;
    value4 = data.value4;
}

onMount(() => {
    updateValues(); // Initial fetch
    setInterval(updateValues, 500);
});

</script>

<div class="grid grid-cols-2 grid-rows-2 gap-4 h-screen p-4 bg-gray-900">
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">Sensor 1</h2>
        <p class="text-4xl text-white">{value1}</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">Sensor 2</h2>
        <p class="text-4xl text-white">{value2}</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">Sensor 3</h2>
        <p class="text-4xl text-white">{value3}</p>
    </div>
    
    <div class="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
        <h2 class="text-green-500 text-xl font-bold mb-4">Sensor 4</h2>
        <p class="text-4xl text-white">{value4}</p>
    </div>
</div>