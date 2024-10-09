<script setup>
import ExtraCard from "../components/ExtraCard.vue";
<<<<<<< Updated upstream
import { routerKey, useRoute, useRouter } from "vue-router";
import { store } from "../config/store.js";
import { defineModel } from "vue";
import Navigation from "../components/navigation.vue";


const route = useRoute();
const router = useRouter()

const extraModel = defineModel({
  default: [],
});

function getSelected() {
  console.log(route.params.id);
  console.log(extraModel.value);

  store.kosar.push({
    termek_id: route.params.id,
    extrak: extraModel.value
  });
  console.log(store.kosar);
}

function Kosarba() {
  getSelected()
  router.push("/szendvicsek")
}

function Veglegesites() {
  getSelected()
  router.push("/kosar")
}
=======
import { store } from "../config/store.js";
import { useRoute } from "vue-router";

const route = useRoute()

const ketchup = def

function getSelected(id){
  console.log(route.params.id)
  console.log(id)
  console.log(store.kosar[0])

  store.kosar.push({
    termek_id: id,
    extrak: []
  })
  console.log(store.kosar)
}


>>>>>>> Stashed changes
</script>

<template>
  <div class="bg">

  </div>
<<<<<<< Updated upstream
  <div class="w-full h-screen max-h-screen p-4">
    <h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10">
      Sajtos hamburger  
    </h1>
    <div class="h-[75%] flex gap-10">
      <div class="h-[75%] flex flex-wrap gap-10 p-3 mb-13">
        <ExtraCard text="Ketchup" imgName="ketchup.png" v-model="extraModel" />
        <ExtraCard text="Mustár" imgName="must.png" v-model="extraModel" />
        <ExtraCard text="Majonéz" imgName="majo.png" v-model="extraModel" />
        <ExtraCard text="Csípős" imgName="csip.png" v-model="extraModel" />
        <ExtraCard
          text="Lilahagyma"
          imgName="hagyma.png"
          v-model="extraModel"
        />
      </div>
    </div>
    <div class="absolute bottom-10 w-8/12 flex justify-between mx-6">
      <button
        class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"
        @click="Kosarba()"
      >
        Kosárba
      </button>
      <button
        class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"
        @click="Veglegesites()" 
      >
        Véglegesítés
      </button>
    </div>
=======
  <div class="absolute bottom-10 w-8/12 flex justify-between mx-6" >
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl "
    >
      Kosárba
    </button>
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl"
    >
      Véglegesítés
    </button>
>>>>>>> Stashed changes
  </div>
</template>
