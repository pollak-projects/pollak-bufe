<script setup>
import ExtraCard from "../components/ExtraCard.vue";
import { routerKey, useRoute, useRouter } from "vue-router";
import { store } from "../config/store.js";
import { defineModel } from "vue";
import Navigation from "../components/navigation.vue";

const route = useRoute();
const router = useRouter();

const extraModel = defineModel({
  default: [],
});

function getSelected() {
  console.log(route.params.id);
  console.log(extraModel.value);

  store.kosar.push({
    termek_id: route.params.id,
    extrak: extraModel.value,
  });
  console.log(store.kosar);
}

function Kosarba() {
  getSelected();
  router.push("/szendvicsek");
}

function Veglegesites() {
  getSelected();
  //router.push("/kosar");
  fetch(`http://localhost/pollakbufe/nologin/ujrendeles`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    szendvics: 40,
                    mustar: 0,
                    ketchup: 1,
                    majonez: 1,
                    csipos: 1,
                    hagyma: 0,
                    bankkartya: 1,
                    szunet: 5,
                })
            }).then((res) => {
                location.reload()
            })
}

function getImageUrl() {
  return new URL(`../assets/sajtoshambi.png`, import.meta.url);
}
</script>

<template>
  <div class="bg"></div>
  <div class="w-full h-screen max-h-screen p-4">
    <h1 class="text-[#554B4B] drop-shadow-lg text-6xl mb-20 ms-10">
      Sajtos hamburger
    </h1>
    <div class="justify-center flex">
      <img :src="getImageUrl()" alt="" class="w-4/5 h-4/5 mb-2" :class="{ active: isActive }" @click="toggleAnimation"/>
    </div>
    <div class="text-[#616161] drop-shadow-lg text-8xl mb-20 ms-10 justify-center flex">
      <h1>1000 Ft</h1>
    </div>
    <div class="text-[#616161] drop-shadow-lg text-5xl mb-20 ms-10 text-center flex leirasfont">
      Ínycsiklandó sajtos hamburger, másnapos bucival, és döghússal!
    </div>
    <div class="h-[75%] flex gap-10">
      <div class="h-[50%] flex flex-wrap gap-10 p-5 mb-13 justify-center">
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
    <div class="absolute bottom-10 w-11/12 flex justify-between mx-6">
      <button
        class="border rounded-full border-black bg-[#d8dcff] p-3 px-16 text-[#554b4b] text-5xl"
        @click="Kosarba()"
      >
        Kosárba
      </button>
      <button
        class="border rounded-full border-black bg-[#d8dcff] p-3 px-16 text-[#554b4b] text-5xl"
        @click="Veglegesites()"
      >
        Véglegesítés
      </button>
    </div>
    
  </div>
</template>
