<script setup>
import ExtraCard from "../components/ExtraCard.vue";
import { routerKey, useRoute, useRouter } from "vue-router";
import { AddElementsToBasket, Rendeles_Cucc } from "../config/lekerdezes.js";
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
onMounted(async () => {
  re.value = await termekLekerdezes(route.params.id);
});

const ketchupActive = ref(false);
let addKetchup = 0;
const mustarActive = ref(false);
let addMustar = 0;
const majonezActive = ref(false);
let addMajonez = 0;
const csiposActive = ref(false);
let addCsipos = 0;

const hagymaActive = ref(false);
let addHagyma = 0;

function IsKetchupTrue() {
  ketchupActive.value = !ketchupActive.value;

  if(ketchupActive.value){
    addKetchup = 1;
  }else{
    addKetchup = 0;
  }
}

function IsMustarTrue() {
  mustarActive.value = !mustarActive.value;

  if(mustarActive.value){
    addMustar = 1;
  }else{
    addMustar = 0;
  }
}

function IsMajonezTrue() {
  majonezActive.value = !majonezActive.value;

  if(majonezActive.value){
    addMajonez = 1;
    addMajonez = 1;
  }else{
    addMajonez = 0;
  }
}

function IsCsiposTrue() {
  csiposActive.value = !csiposActive.value;

  if(csiposActive.value){
    addCsipos = 1;
  }else{
    addCsipos = 0;
  }
}

function IsHagymaTrue() {
  hagymaActive.value = !hagymaActive.value;

  if(hagymaActive.value){
    addHagyma = 1;
  }else{
    addHagyma = 0;
  }
}

function Teszt() {
  let formData = new FormData();
  formData.append("szendvics", route.params.id)
  formData.append("mustar", addMustar)
  formData.append("ketchup", addKetchup)
  formData.append("majonez", addMajonez)
  formData.append("csipos", addCsipos)
  formData.append("hagyma", addHagyma)
  Rendeles_Cucc(formData)
}


function Teszt2() {
  const id = route.params.id;
  AddElementsToBasket(id, addMustar, addKetchup, addMajonez, addCsipos, addHagyma)
}


function openModal() {
            const modal = document.getElementById("modal");
            modal.style.display = "flex";
            
            setTimeout(() => {
                modal.style.display = "none";
                window.history.back();
            }, 800);
        }

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
      Leírás
    </div>
    <div class="h-[75%] flex gap-10">
      <div class="h-[50%] flex flex-wrap gap-10 p-5 mb-13 justify-center">
        <ExtraCard text="Ketchup" imgName="ketchup.png" v-model="extraModel"  @click="IsKetchupTrue()"/>
        <ExtraCard text="Mustár" imgName="must.png" v-model="extraModel" @click="IsMustarTrue()"/>
        <ExtraCard text="Majonéz" imgName="majo.png" v-model="extraModel" @click="IsMajonezTrue()"/>
        <ExtraCard text="Csípős" imgName="csip.png" v-model="extraModel" @click="IsCsiposTrue()"/>
        <ExtraCard text="Lilahagyma" imgName="hagyma.png" v-model="extraModel" @click="IsHagymaTrue()" />
      </div>
    </div>
    <div class="absolute bottom-10 w-11/12 flex justify-between mx-6">
      <button
        class="border rounded-full border-black bg-[#d8dcff] p-3 px-16 text-[#554b4b] text-5xl"
        @click="Teszt2(), openModal()"
      >
        Kosárba
      </button>
    </div>
    
    <div class="modal-background" id="modal">
        <div class="modal-content">
            <h2>Sikeresen a kosárba helyezted!</h2>
            
        </div>
    </div>  

  </div>
</template>

<style>

.modal-background {
            display: none; /* Kezdetben rejtve */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.445); /* Átlátszó fekete háttér */
            justify-content: center;
            align-items: center;
        }
        
        /* A modális tartalom */
        .modal-content {
            background-color: #17bd3b;
            padding: 80px;
            border-radius: 30px;
            text-align: center;
            max-width: 1000px;
            width: 200%;
            font-size: 60px;
            font-family: "Abril Fatface";
            color: #ffffff;
        }
        
</style>
