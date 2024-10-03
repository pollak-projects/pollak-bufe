<script setup>
import Rightside from "../components/Rightside.vue";
import Navigation from "../components/navigation.vue";
const szendvicsek = [
  { nev: "Sonkás szendvics", ar: 570, kep: "sonkasszendvics.jpg" },
  { nev: "Szalámis szendvics", ar: 570, kep: "szalamisszendvics.jpg" },
  { nev: "Rántott húsos szendvics", ar: 800, kep: "rantotthusosszendvics.jpg" },
];
</script>

<template>
  <Navigation />
  <div class="w-full h-screen max-h-screen p-4">
    <Rightside
      title="Szendvicsek"
      queryType="szendvicsek"
      :elemek="szendvicsek"
    />
  </div>
</template>
