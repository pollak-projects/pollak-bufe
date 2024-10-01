<script setup>
import ExtraCard from "../components/ExtraCard.vue";
</script>

<template>
  <h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10">
    Sajtos Hamburger
  </h1>


  <div class="h-[75%] flex flex-wrap gap-10 p-3 mb-13 ">
    <ExtraCard text="Ketchup" imgName="ketchup.png" />
    <ExtraCard text="Mustár" imgName="must.png" />
    <ExtraCard text="Majonéz" imgName="majo.png" />
    <ExtraCard text="Csípős" imgName="csip.png" />
    <ExtraCard text="Lilahagyma" imgName="hagyma.png" />
  </div>


  <div class="absolute bottom-10 w-8/12 flex justify-between mx-6">
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"><RouterLink to="/Kosar" class="flex justify-between w-full">Kosár</RouterLink>
    </button>
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"><RouterLink to="/Kosar" class="flex justify-between w-full">Véglegesítés</RouterLink>
    </button>
  </div>
</template>
