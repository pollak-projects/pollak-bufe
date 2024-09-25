<script setup>
import ExtraCard from "../components/ExtraCard.vue";
</script>

<template>
  <h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10">
    Sajtos Hamburger
  </h1>
  <div class="h-[75%] flex gap-10">
    <ExtraCard text="Ketchup" imgName="ketchup.png" />
    <ExtraCard text="Ketchup" imgName="ketchup.png" />
  </div>
  <div class="absolute bottom-10 w-8/12 flex justify-between mx-6">
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"
    >
      Kosárba
    </button>
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"
    >
      Véglegesítés
    </button>
  </div>
</template>
