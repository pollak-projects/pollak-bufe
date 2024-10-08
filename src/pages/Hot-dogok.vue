<script setup>
import Rightside from "../components/Rightside.vue";
import Navigation from "../components/navigation.vue";

const hotdogok = [
  { nev: "Sima hot-dog", ar: 600, kep: "hotdog.jpg" },
  { nev: "Sajtos hot-dog", ar: 700, kep: "sajtoshotdog.jpg" },
  {
    nev: "Pirított hagymás hot-dog",
    ar: 800,
    kep: "piritotthagymashotdog.jpg",
  },
];
</script>

<template>
  <Navigation />
  <div class="w-full h-screen max-h-screen p-4">
    <Rightside title="Hot-dogok" queryType="hotdogok" :elemek="hotdogok" />
  </div>
</template>
