<script setup>
import Card from "./Card.vue";

defineProps({
  title: String,
  queryType: String,
});
</script>

<template>
  <h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10 h-12">
    {{ title }}
  </h1>
  <div
    class="flex gap-10 h-[calc(100%-7rem)] justify-center flex-wrap content-start overflow-x-hidden overflow-y-auto pb-10"
  >
    <Card nev="Sajtos Hamburger" ar="1000" kep="" />
    <Card nev="Pirított hagymás Hamburger" ar="1000" kep="" />
    <Card nev="Sima Hamburger" ar="1000" kep="" />
  </div>
</template>

<style scoped></style>
