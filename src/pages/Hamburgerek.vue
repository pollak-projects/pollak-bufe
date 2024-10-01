<script setup>
import Rightside from "../components/Rightside.vue";

const hamburgerek = [
              {nev: "Sajtos Hamburger", ar: 1000, kep: "sajtburger.jpg"}, 
              {nev: "Sima Hamburger", ar: 900, kep: "hamburger.jpg"},
              {nev: "Pirított Hagymás Hamburger", ar: 1100, kep: "piritotthagymashamburger.jpg"},
              ]
</script>

<template>
  <Rightside title="Hamburgerek" queryType="hamburgerek" :elemek="hamburgerek"/>

</template>
