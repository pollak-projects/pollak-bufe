<script setup>
import Rightside from "../components/Rightside.vue";

const hotdogok = [
  {nev: "Sima hot-dog", ar: 600, kep: "hotdog.jpg"},
  {nev: "Sajtos hot-dog", ar: 700, kep: "sajtoshotdog.jpg"},
  {nev: "Pirított hagymás hot-dog", ar: 800, kep: "piritotthagymashotdog.jpg"}
]
</script>


<template>
  <Rightside title="Hot-dogok" queryType="hotdogok" :elemek="hotdogok"/>
</template>
