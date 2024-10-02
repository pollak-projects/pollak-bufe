<script setup>
import Rightside from "../components/Rightside.vue";

const italok = [
  {nev: "Pepsi", ar: 470, kep: "pepsi.jpg"},
  {nev: "Pepsi Max", ar: 470, kep: "pepsimax.jpg"},
  {nev: "Pepsi Lime", ar: 470, kep: "pepsilime.jpg"},
  {nev: "Canada Dry", ar: 470, kep: "canadadry.jpg"},
  {nev: "Mirinda", ar: 470, kep: "mirinda.jpg"},
  {nev: "Lipton barack", ar: 470, kep: "liptonbarack.jpg"},
  {nev: "Lipton citrom", ar: 470, kep: "liptoncitrom.jpg"},
  {nev: "Topjoy (több ízben)", ar: 450, kep: "topjoy.jpg"},
  {nev: "Gatorade", ar: 700, kep: "gatorade.jpg"},
  {nev: "Márka tea (több ízben)", ar: 490, kep: "markatea.jpg"},
  {nev: "Xixo (több ízben)", ar: 340, kep: "xixo.jpg"},
  {nev: "Savas, mentes víz 0,5l", ar: 250, kep: "masfelesviz.jpg"},
  {nev: "Savas, mentes víz 1,5l", ar: 330, kep: "masfelesviz.jpg"},
  {nev: "Forró csokoládé", ar: 300, kep: "forrocsoki.jpg"},
  {nev: "Sima presszó kávé", ar: 250, kep: "presszokave.jpg"},
  {nev: "Tejszínes presszó kávé", ar: 300, kep: "presszokave.jpg"},
  {nev: "Tejszínhabos presszó kávé", ar: 300, kep: "presszokave.jpg"},
  {nev: "Cappuccino", ar: 300, kep: "cappuccino.png"},
  {nev: "Fekete tea (3dl)", ar: 250, kep: "feketetea.jpg"},
  {nev: "Gyümölcs tea (3dl)", ar: 250, kep: "gyumolcstea.png"}
]
</script>

<template>
  <Rightside title="Italok" queryType="italok" :elemek="italok"/>
</template>
