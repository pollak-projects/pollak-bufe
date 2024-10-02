<script setup>
import Rightside from "../components/Rightside.vue";

const hamburgerek = [
              {id: 1, nev: "Sajtos Hamburger", ar: 1000, kep: "sajtburger.jpg"}, 
              {id: 2, nev: "Sima Hamburger", ar: 900, kep: "hamburger.jpg"},
              {id: 3, nev: "Pirított Hagymás Hamburger", ar: 1100, kep: "piritotthagymashamburger.jpg"},
              ]
</script>

<template>
  <Rightside title="Hamburgerek" queryType="hamburgerek" :elemek="hamburgerek"/>

</template>
