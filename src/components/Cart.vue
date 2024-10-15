<template>
  <div>
    <h1 class="text-[#554b4b] drop-shadow-lg text-5xl mb-10">{{ title }}</h1>

    <div class="flex gap-10 mb-8 justify-center">
      <div class="bg-white rounded-md border-[#000000] border-2 drop-shadow-lg p-3 w-64">
        <img src="../assets/hamburger.jpg" alt="" class="w-64 h-64 border border-black">
        Hamburger <br>
        1000 Ft
      </div>

      <div class="bg-white rounded-md border-[#000000] border-2 drop-shadow-lg p-3 w-64">
        <img src="../assets/pepsi.jpg" alt="" class="w-64 h-64 border border-black">
        Pepsi <br>
        400 Ft
      </div>
    </div>

    <div class="absolute bottom-10 right-10 mx-6 text-right">
      <button class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-4xl " @click="rendelesleadas">
        Rendelés leadása
      </button>
    </div>

    <div class="melyik_szunet text-2xl">
    Melyik szünetre kéred?: 
  </div>
    <div class="date-slider-container">
      <button @click="prevOption" class="slider-btn">←</button>
      <div class="date-slider">
        <div class="slider-track" :style="trackStyle">
          <div
            v-for="(option, index) in options"
            :key="index"
            :class="['date-item', { active: index === selectedIndex }]"
          >
            {{ option }}
          </div>
        </div>
      </div>
      <button @click="nextOption" class="slider-btn">→</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
})

import { ref, computed } from 'vue';
import { store } from '../config/store';



// Data for the date slider
const selectedIndex = ref(3); // Default to the 4th item "4.szünet"
const options = ref([
  '1.szünet', '2.szünet', '3.szünet',
  '4.szünet', '5.szünet', '6.szünet', '7.szünet'
]);

const trackStyle = computed(() => {
  const itemWidth = 140; // Adjust this to the actual width of each item
  const trackOffset = (itemWidth * selectedIndex.value) + (selectedIndex.value * 20); // Margin compensation
  const containerCenter = (1090 - itemWidth) / 2; // Center the active item in a 400px wide slider

  return {
    transform: `translateX(${containerCenter - trackOffset}px)`,
    transition: 'transform 0.5s ease'
  };
});

// Methods for navigating the slider
const nextOption = () => {
  if (selectedIndex.value < options.value.length - 1) {
    selectedIndex.value++;
  }
};

const prevOption = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
};

const rendelesleadas = () =>
{
    store.kosar = []
}

</script>

<style>

.melyik_szunet {
  margin-top: 15%;
}

body {

  text-align: center;
  background-color: #f4f4f4;
}

.date-slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  position: relative;
}

.date-slider {
  display: flex;
  overflow: hidden;
  justify-content: center;
  width: 400px; /* Fixed width for the visible area */
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.date-item {
  padding: 10px 20px;
  font-size: 18px;
  transition: all 0.3s ease;
  opacity: 0.3; /* Initial opacity for non-focused items */
  filter: blur(2px); /* Blur effect for non-focused items */
  margin: 0 10px; /* Adjust margin to space out the items */
  width: 140px; /* Fixed width for each item */
  text-align: center;
}

.date-item.active {
  opacity: 1; /* Full opacity for the focused item */
  font-size: 24px;
  font-weight: bold;
  transform: scale(1); /* Scale up the focused item */
  filter: blur(0); /* Remove blur effect */
  color: #1976D2; /* Highlight color */
}

.slider-btn {
  background: none;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px;
  margin: 0 20px;
  transition: background 0.2s;
  z-index: 1; /* Keep the buttons on top of the slider */
}

.slider-btn:hover {
  background: #f0f0f0;
}
</style>
