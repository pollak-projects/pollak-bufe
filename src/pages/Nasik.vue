<script setup>
import Rightside from "../components/Rightside.vue";

const nasik = [
  {nev: "Kinder tejszelet", ar: 350},
  {nev: "Kinder pingui", ar: 350},
  {nev: "Chips (több féle)", ar: 650},
  {nev: "Müzli szelet", ar: 260},
  {nev: "Belvita", ar: 320},
  {nev: "Vaniliás karika", ar: 650},
  {nev: "Croissant", ar: 320},
  {nev: "Nesquik", ar: 320},
  {nev: "Cini minis", ar: 320},
  {nev: "Chocapic", ar: 320},
  {nev: "Sima hot-dog", ar: 600},
  {nev: "Smile palacsinta", ar: 350},
  {nev: "Nápolyi", ar: 300}
]
</script>

<template>
  <Rightside title="Nasik" queryType="nasik" :elemek="nasik"/>
</template>
