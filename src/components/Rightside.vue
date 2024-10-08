<script setup>
import Card from "./Card.vue";

defineProps({
  title: String,
  queryType: String,
  elemek: Array,
});
</script>

<template>
  <h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10 h-12 w-10">
    {{ title }}
  </h1>
  <div
    class="flex gap-10 h-[calc(100%-7rem)] justify-center flex-wrap content-start overflow-x-hidden overflow-y-auto pb-10"
  >
    <Card
      v-for="kajak in elemek"
      :nev="kajak.nev"
      :ar="kajak.ar"
      :kep="kajak.kep"
    />
  </div>
</template>

<style scoped></style>
