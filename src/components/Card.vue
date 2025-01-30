<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import {
  AddItalToBasket,
  DeleteExtra,
  DeleteSzendvics,
  GetFormData2,
} from "../config/lekerdezes";
import Kosar from "../pages/Kosar.vue";

const props = defineProps({
  id: Number,
  nev: String,
  ar: Number,
  extra: Number,
  kep: String,
  queryType: String,
  ketchup: Number,
  mustar: Number,
  majonez: Number,
  csipos: Number,
  index: Number,
  italiksz: Number,
});

function getImageUrl() {
  return new URL(`/${props.kep}`, import.meta.url);
}

const isActive = ref(false);
let ital = 0;
function toggleAnimation() {
  isActive.value = !isActive.value;
}
function RedirectToExtras(id) {
  if (props.extra == 1) {
    return `/extrak/${id}`;
  } else {
    ital = 1;
    return ``;
  }
}

function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.display = "none";
  }, 800);
}

function AddToBasket(ital, route) {
  if (ital == 1 && route != "/kosar") {
    AddItalToBasket(props.extra, props.id);
    openModal();
  }
}
</script>

<template>
  <div
    v-if="$route.path === '/kosar'"
    class="bg-white bg-white1 rounded-md border-[#9EA8FF] border-2 drop-shadow-lg p-3 w-60 min-h-80 h-[400px]"
    id="app"
    @click="AddToBasket(ital, $route.path)"
  >
    <img
      v-if="$route.path === '/kosar' && italiksz == 0"
      class="iksz"
      src="/public/IKSZ.png"
      alt="iksz"
      @click="DeleteSzendvics(index)"
    />
    <img
      v-if="$route.path === '/kosar' && italiksz == 1"
      class="iksz"
      src="/public/IKSZ.png"
      alt="iksz"
      @click="DeleteExtra(index)"
    />
    <RouterLink :to="RedirectToExtras(id)">
      <img
        :src="getImageUrl()"
        alt=""
        class="w-full h-3/5 mb-2 mainImg"
        :class="{ active: isActive }"
        @click="toggleAnimation"
      />
      <p class="font-sans h-[12%] leading-4">{{ nev }}</p>
      <p class="font-sans font-bold h-[8%]">{{ ar }} Ft</p>

      <div
        v-if="ketchup == 1 || mustar == 1 || majonez == 1 || csipos == 1"
        class="extra-icons"
      >
        <p v-if="ketchup == 1"><img src="/ketchup.png" alt="Ketchup" /></p>
        <p v-if="mustar == 1"><img src="/majo.png" alt="Mayonnaise" /></p>
        <p v-if="majonez == 1"><img src="/must.png" alt="Mustard" /></p>
        <p v-if="csipos == 1"><img src="/csip.png" alt="Chili" /></p>
      </div>
    </RouterLink>
  </div>
  <div
    v-if="$route.path != '/kosar'"
    class="bg-white rounded-md border-[#9EA8FF] border-2 drop-shadow-lg p-3 w-60 h-[400px]"
    id="app"
    @click="AddToBasket(ital, $route.path)"
  >
    <img
      v-if="$route.path === '/kosar' && italiksz == 0"
      class="iksz"
      src="/public/IKSZ.png"
      alt="iksz"
      @click="DeleteSzendvics(index)"
    />
    <img
      v-if="$route.path === '/kosar' && italiksz == 1"
      class="iksz"
      src="/public/IKSZ.png"
      alt="iksz"
      @click="DeleteExtra(index)"
    />
    <RouterLink :to="RedirectToExtras(id)">
      <img
        :src="getImageUrl()"
        alt=""
        class="w-full h-3/5 mb-2 mainImg"
        :class="{ active: isActive }"
        @click="toggleAnimation"
      />
      <p class="font-sans h-[12%] leading-4">{{ nev }}</p>
      <p class="font-sans font-bold h-[8%]">{{ ar }} Ft</p>

      <div
        v-if="ketchup == 1 || mustar == 1 || majonez == 1 || csipos == 1"
        class="extra-icons"
      >
        <p v-if="ketchup == 1">
          <img src="/ketchup.png" alt="Ketchup" />
        </p>
        <p v-if="mustar == 1">
          <img src="/majo.png" alt="Mayonnaise" />
        </p>
        <p v-if="majonez == 1">
          <img src="/must.png" alt="Mustard" />
        </p>
        <p v-if="csipos == 1"><img src="/csip.png" alt="Chili" /></p>
      </div>
    </RouterLink>
  </div>
  <div class="modal-background" id="modal">
    <div class="modal-content">
      <h2>Sikeresen a kosárba helyezted!</h2>
    </div>
  </div>
</template>

<style scoped>
.mainImg {
  width: 100%;
  aspect-ratio: 4/4;
  object-fit: contain;
}

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
  z-index: 9999; /* Legmagasabb prioritás */
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

.bg-white {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Elemek közötti távolság elosztása */
  height: 16rem; /* Rögzített magasság */
  width: 15rem; /* Példa szélesség */
  padding: 1rem;
  box-sizing: border-box; /* Biztosítsd, hogy a padding beleszámítson */
}

.bg-white1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Elemek közötti távolság elosztása */
  height: 24rem; /* Rögzített magasság */
  width: 15rem; /* Példa szélesség */
  padding: 1rem;
  box-sizing: border-box; /* Biztosítsd, hogy a padding beleszámítson */
}

div {
  height: fit-content;
}

.iksz {
  float: left;
  width: 20px;
  height: 20px;
}

.image {
  transition: transform 0.5s ease;
  z-index: 9000000000;
}

.image.active {
  position: absolute;
  transform: scale(3, 3.3) translateX(-175px) translateY(70px);
  left: 0;
  top: 0;
}

/* Új stílus a kiegészítők képeinek elrendezéséhez */
.extra-icons {
  display: flex;
  justify-content: space-evenly; /* A képek egyenletesen oszlanak el */
  align-items: center; /* Képek vertikális középre igazítása */
  gap: 8px; /* Kép közötti távolság */
}

.extra-icons img {
  height: 50px;
  width: 50px;
  object-fit: contain; /* Megakadályozza, hogy a képek torzuljanak */
}
</style>
