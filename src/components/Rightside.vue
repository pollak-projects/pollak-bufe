<script setup>
  import Card from './Card.vue';

  defineProps({
    title: String,
    type: String
  })
</script>

<template>
    <h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10">{{ title }}</h1>
    <div class="flex gap-10 h-full justify-center">
        <Card nev="Sajtos Hamburger" ar="1000" kep="" />
        <Card nev="Pirított hagymás Hamburger" ar="1000" kep="" />
        <Card nev="Pirított hagymás Hamburger" ar="1000" kep="" />
    </div>
</template>

<style scoped>

</style>
