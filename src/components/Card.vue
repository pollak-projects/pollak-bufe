<script setup>
import { RouterLink } from "vue-router";

defineProps({
  nev: String,
  ar: Number,
  kep: String,
});
</script>

<template>
  <div
    class="bg-white rounded-md border-[#9EA8FF] border-2 drop-shadow-lg p-3 w-60 h-80"
  >
    <RouterLink to="/extrak/1">
      <img
        src="https://static.streetkitchen.hu/live/uploads/2017/04/img_8828.jpg"
        alt=""
        class="w-full h-4/5 mb-2"
      />
      <p class="font-sans h-[12%] leading-4">{{ nev }}</p>
      <p class="font-sans font-bold h-[8%]">{{ ar }} Ft</p>
    </RouterLink>
  </div>
</template>

<style scoped></style>
