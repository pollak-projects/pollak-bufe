<script setup>
import { ref } from 'vue';
import { RouterLink } from "vue-router";
import { AddItalToBasket, DeleteSzendvics, GetFormData2} from '../config/lekerdezes';
import Kosar from '../pages/Kosar.vue';

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
  index: Number
});

function getImageUrl() {
  return new URL(`../assets/${props.kep}`, import.meta.url);
}

const isActive = ref(false);
let ital = 0;
function toggleAnimation() {
  isActive.value = !isActive.value;
}
function RedirectToExtras(id) {
  if (props.extra == 1) {
    return `/extrak/${id}`
  }else{
    ital = 1;
    return ``
  }  

}

function AddToBasket(ital) {
  if(ital == 1){
    AddItalToBasket(props.extra, props.id)
    
  }

}
</script>

<template>
  <div
    class="bg-white rounded-md border-[#9EA8FF] border-2 drop-shadow-lg p-3 w-60 h-80"
    id="app" @click="AddToBasket(ital)"
    >
    <img v-if="$route.path === '/kosar'" class="iksz" src="/public/IKSZ.png" alt="iksz" @click="DeleteSzendvics(index)">
    <RouterLink :to="RedirectToExtras(id)">
      <img
        :src="getImageUrl()"
        alt=""
        class="w-full h-4/5 mb-2"
        :class="{ active: isActive }"
        @click="toggleAnimation"
      />
      <p class="font-sans h-[12%] leading-4">{{ nev }}</p>
      <p class="font-sans font-bold h-[8%]">{{ ar }} Ft</p>
      <p v-if="ketchup == 1">van</p>
      <p v-if="mustar == 1">van</p>
      <p v-if="majonez == 1">van</p>
      <p v-if="csipos == 1">van</p>
    </RouterLink>
  </div>
</template>

<style scoped>

.bg-white {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Elemek közötti távolság elosztása */
  height: 20rem; /* Rögzített magasság */
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

</style>
