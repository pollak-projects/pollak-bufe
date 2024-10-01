<script setup>
import Rightside from "../components/Rightside.vue";

const szendvicsek = [
  {nev: "Sonkás szendvics", ar: 570, kep: "sonkasszendvics.jpg"},
  {nev: "Szalámis szendvics", ar: 570, kep: "szalamisszendvics.jpg"},
  {nev: "Rántott húsos szendvics", ar: 800, kep: "rantotthusosszendvics.jpg"}
]

</script>

<template>
  <Rightside title="Szendvicsek" queryType="szendvicsek" :elemek="szendvicsek"/>
</template>
