<script setup>
import Navigation from "../components/navigation.vue";
import Rightside from "../components/Rightside.vue";

const hamburgerek = [
<<<<<<< Updated upstream
  { id: 1, nev: "Sajtos Hamburger", ar: 1000, kep: "sajtburger.jpg" },
  { id: 2, nev: "Sima Hamburger", ar: 900, kep: "hamburger.jpg" },
  {
    id: 3,
    nev: "Pirított Hagymás Hamburger",
    ar: 1100,
    kep: "piritotthagymashamburger.jpg",
  },
];
=======
              {id:1, nev: "Sajtos Hamburger", ar: 1000, kep: "sajtburger.jpg"}, 
              {id:2, nev: "Sima Hamburger", ar: 900, kep: "hamburger.jpg"},
              {id:3, nev: "Pirított Hagymás Hamburger", ar: 1100, kep: "piritotthagymashamburger.jpg"},
              ]
>>>>>>> Stashed changes
</script>

<template>
  <Navigation />
  <div class="w-full h-screen max-h-screen p-4">
    <Rightside
      title="Hamburgerek"
      queryType="hamburgerek"
      :elemek="hamburgerek"
    />
  </div>
</template>
