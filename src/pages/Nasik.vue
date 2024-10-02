<script setup>
import Rightside from "../components/Rightside.vue";

const nasik = [
  {nev: "Kinder tejszelet", ar: 350, kep: "kindertejszelet.jpg"},
  {nev: "Kinder pingui", ar: 350, kep: "kinderpingui.jpg"},
  {nev: "Chips (több féle)", ar: 650, kep: "chips.jpg"},
  {nev: "Müzli szelet", ar: 260, kep: "muzliszelet.png"},
  {nev: "Belvita", ar: 320, kep: "belvita.png"},
  {nev: "Vaniliás karika", ar: 650, kep: "vaniliaskarika.jpg"},
  {nev: "Croissant", ar: 320, kep: "croissant.jpg"},
  {nev: "Nesquik", ar: 320, kep: "nesquik.jpg"},
  {nev: "Cini minis", ar: 320, kep: "ciniminis.jpg"},
  {nev: "Chocapic", ar: 320, kep: "chocapic.png"},
  {nev: "Smile palacsinta", ar: 350, kep: "smilepalacsinta.jpg"},
  {nev: "Nápolyi", ar: 300, kep: "napolyi.jpg"}
]
</script>

<template>
  <Rightside title="Nasik" queryType="nasik" :elemek="nasik"/>
</template>
