<script setup>
import ExtraCard from "../components/ExtraCard.vue";
import { routerKey, useRoute, useRouter } from "vue-router";
import { AddElementsToBasket, GetFormData } from "../config/lekerdezes.js";
import { defineModel } from "vue";
import Navigation from "../components/navigation.vue";
import { termekLekerdezes } from "../config/lekerdezes.js";
import { ref, onMounted } from "vue";
import { store, store2, store3 } from "../config/store.js";
import { ToBasket } from "../config/lekerdezes.js";

function navBack() {
  history.back();
}

function Teszt() {
  console.log("Kosár állapota:", store.kosar, store3.van); // Ellenőrzés
  if (!store3.van) {
    // Ha nincs van állapot és a kosár üres
    setTimeout(() => {
      openModal(); // Modál megnyitása
    }, 10);
  }
}

const route = useRoute();
const router = useRouter();

const extraModel = defineModel({
  default: [],
});

function getSelected() {
  console.log(route.params.id);
  console.log(extraModel.value);
}

function getImageUrl() {
  return new URL(`../assets/${kep.value ? kep.value : " "}`, import.meta.url);
}

const props = defineProps({
  id: Number,
  nev: String,
  ar: Number,
  kep: String,
  queryType: String,
});

const re = ref(null);
const kep = ref(null);

onMounted(async () => {
  re.value = await termekLekerdezes(route.params.id);
  kep.value = re.value[0].kep;
  console.log(re.value[0].kep);
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

  if (ketchupActive.value) {
    addKetchup = 1;
  } else {
    addKetchup = 0;
  }
}

function IsMustarTrue() {
  mustarActive.value = !mustarActive.value;

  if (mustarActive.value) {
    addMustar = 1;
  } else {
    addMustar = 0;
  }
}

function IsMajonezTrue() {
  majonezActive.value = !majonezActive.value;

  if (majonezActive.value) {
    addMajonez = 1;
  } else {
    addMajonez = 0;
  }
}

function IsCsiposTrue() {
  csiposActive.value = !csiposActive.value;

  if (csiposActive.value) {
    addCsipos = 1;
  } else {
    addCsipos = 0;
  }
}

function IsHagymaTrue() {
  hagymaActive.value = !hagymaActive.value;

  if (hagymaActive.value) {
    addHagyma = 1;
  } else {
    addHagyma = 0;
  }
}

function AddToBasket() {
  const id = route.params.id;
  AddElementsToBasket(
    id,
    addMustar,
    addKetchup,
    addMajonez,
    addCsipos,
    addHagyma
  );
  GetFormData();
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
  <img
    src="../assets/arrow_left.svg"
    alt=""
    class="h-8 w-8 absolute left-16 top-20"
    style="z-index: 9999"
    @click="navBack()"
  />
  <RouterLink
    @click.prevent="Teszt()"
    :to="ToBasket()"
    class="h-14 w-14 absolute right-20 top-28 flex items-baseline"
  >
    <img id="kosar" src="../assets/shoppingcart.svg" alt="" />
    <p>{{ store.kosar[0].darab }}</p>
  </RouterLink>
  <div class="bg"></div>
  <div class="w-full h-screen max-h-screen p-4">
    <h1
      class="text-[#554B4B] drop-shadow-lg text-6xl mb-20 ms-10 text-center mt-12 -ml-4"
    >
      {{ re ? re[0].etel_nev : "" }}
    </h1>
    <div class="justify-center flex">
      <img
        :src="getImageUrl()"
        alt=""
        class="w-3/5 h-3/5 mb-2"
        :class="{ active: isActive }"
        @click="toggleAnimation"
      />
    </div>
    <div
      class="text-[#616161] drop-shadow-lg text-8xl mb-20 ms-10 justify-center flex"
    >
      <h1>{{ re ? re[0].ar : "" }} Ft</h1>
    </div>
    <div class="flex gap-10">
      <div class="h-[50%] flex flex-wrap gap-10 p-5 mb-13 justify-center">
        <ExtraCard
          text="Ketchup"
          imgName="ketchup.png"
          v-model="extraModel"
          @click="IsKetchupTrue()"
        />
        <ExtraCard
          text="Mustár"
          imgName="must.png"
          v-model="extraModel"
          @click="IsMustarTrue()"
        />
        <ExtraCard
          text="Majonéz"
          imgName="majo.png"
          v-model="extraModel"
          @click="IsMajonezTrue()"
        />
        <ExtraCard
          text="Csípős"
          imgName="csip.png"
          v-model="extraModel"
          @click="IsCsiposTrue()"
        />
        <!-- <ExtraCard text="Lilahagyma" imgName="hagyma.png" v-model="extraModel" @click="IsHagymaTrue()" /> -->
      </div>
    </div>
    <div class="absolute bottom-20 w-11/12 flex justify-between mx-6">
      <button
        class="border rounded-full border-black bg-[#d8dcff] p-3 px-16 text-[#554b4b] text-5xl"
        @click="AddToBasket(), openModal()"
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
