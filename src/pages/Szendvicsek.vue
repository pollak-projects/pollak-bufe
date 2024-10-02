<script setup>
import Rightside from "../components/Rightside.vue";

const szendvicsek = [
  {nev: "Sonkás szenvdics", ar: 570, kep: "sonkasszendvics.jpg"},
  {nev: "Szalámis szendics", ar: 570, kep: "szalamisszendvics.jpg"},
  {nev: "Rántott húsos szedvics", ar: 800, kep: "rantotthusosszendvics.jpg"}
]

</script>

<template>
  <Rightside title="Szendvicsek" queryType="szendvicsek" :elemek="szendvicsek"/>
</template>
