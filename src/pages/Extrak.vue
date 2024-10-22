<script setup>
import ExtraCard from "../components/ExtraCard.vue";
import { routerKey, useRoute, useRouter } from "vue-router";
import { store } from "../config/store.js";
import { defineModel } from "vue";
import Navigation from "../components/navigation.vue";
import { termekLekerdezes } from '../config/lekerdezes.js';
import { ref, onMounted } from 'vue';


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
}

async function Rendeles_Cucc() {
  const Formdata = new FormData();
  Formdata.append("szendvics", 22)
  Formdata.append("mustar", 1)
  Formdata.append("ketchup", 1)
  Formdata.append("majonez", 1)
  Formdata.append("csipos", 0)
  Formdata.append("hagyma", 1)
  Formdata.append("bankkartya", 0)
  Formdata.append("szunet", 6)
    var requestOptions = {  
    method: 'POST',
    body: Formdata
  };
  return new Promise((resolve, reject) => {
    fetch(`http://localhost/pollakbufe/nologin/ujrendeles`, requestOptions)
      .then(async (result) => {
        console.log("szia")
    }).catch(error => console.log('error', error));
  })
}

function getImageUrl() {
  return new URL(`../assets/sajtoshambi.png`, import.meta.url);
}

const props = defineProps({
  id: Number,
  nev: String,
  ar: Number,
  kep: String,
  queryType: String,
});

const re = ref(null);
console.log(props.queryType);
onMounted(async () => {
  re.value = await termekLekerdezes(route.params.id);
  console.log(re.value)
});

</script>

<template>
  <div class="bg"></div>
  <div class="w-full h-screen max-h-screen p-4">
    <h1 class="text-[#554B4B] drop-shadow-lg text-6xl mb-20 ms-10">
      {{ re?re[0].etel_nev:"" }} 
    </h1>
    <div class="justify-center flex">
      <img :src="getImageUrl()" alt="" class="w-4/5 h-4/5 mb-2" :class="{ active: isActive }" @click="toggleAnimation"/>
    </div>
    <div class="text-[#616161] drop-shadow-lg text-8xl mb-20 ms-10 justify-center flex">
      <h1>{{ re?re[0].ar:"" }} Ft</h1>
    </div>
    <div class="text-[#616161] drop-shadow-lg text-5xl mb-20 ms-10 text-center flex leirasfont">
      sad
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
        @click="Rendeles_Cucc()"
      >
        Véglegesítés
      </button>
    </div>
    
  </div>
</template>
