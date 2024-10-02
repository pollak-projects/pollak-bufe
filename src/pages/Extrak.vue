<script setup>
import ExtraCard from "../components/ExtraCard.vue";
import { useRoute } from "vue-router";
import { store } from "../config/store.js"
import { defineModel } from "vue";

const route = useRoute()

const extraModel = defineModel({
  default: []
})


function getSelected() {
  console.log(route.params.id)
  console.log(extraModel.value)

  store.kosar.push({
    termek_id: route.params.id,
    extrak: []
  })
  console.log(store.kosar)
}
</script>

<template>
  <h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10">
    Sajtos Hamburger
  </h1>
  <div class="h-[75%] flex gap-10">
    <div class="h-[75%] flex flex-wrap gap-10 p-3 mb-13 ">
      <ExtraCard text="Ketchup" imgName="ketchup.png" v-model="extraModel" />
      <ExtraCard text="Mustár" imgName="must.png" v-model="extraModel" />
      <ExtraCard text="Majonéz" imgName="majo.png" v-model="extraModel" />
      <ExtraCard text="Csípős" imgName="csip.png" v-model="extraModel" />
      <ExtraCard text="Lilahagyma" imgName="hagyma.png" v-model="extraModel" />
    </div>
  </div>
  <div class="absolute bottom-10 w-8/12 flex justify-between mx-6">
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"
      @click="getSelected()"
    >
      Kosárba
    </button>
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"
      @click="getSelected()"
    >
      Véglegesítés
    </button>
  </div>
</template>
