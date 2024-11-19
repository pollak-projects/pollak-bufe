<script setup>
import { ref } from 'vue';
import { RouterLink } from "vue-router";
import { AddItalToBasket, GetFormData2} from '../config/lekerdezes';

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
    class="bg-white rounded-md border-[#9EA8FF] border-2 drop-shadow-lg p-3 w-60 min-h-80 h-[400px]"
    id="app" @click="AddToBasket(ital)"
  >
    <RouterLink :to="RedirectToExtras(id)">
      <img
        :src="getImageUrl()"
        alt=""
        class="w-full h-3/5 mb-2"
        :class="{ active: isActive }"
        @click="toggleAnimation"
      />
      <p class="font-sans h-[12%] leading-4">{{ nev }}</p>
      <p class="font-sans font-bold h-[8%]">{{ ar }} Ft</p>

      <div v-if="ketchup == 1 || mustar == 1 || majonez == 1 || csipos == 1" class="extra-icons">
        <p v-if="ketchup == 1"><img src="../assets/ketchup.png" alt="Ketchup" ></p>
        <p v-if="mustar == 1"><img src="../assets/majo.png" alt="Mayonnaise" ></p>
        <p v-if="majonez == 1"><img src="../assets/must.png" alt="Mustard" ></p>
        <p v-if="csipos == 1"><img src="../assets/csip.png" alt="Chili" ></p>
      </div>
    </RouterLink>
  </div>
</template>


<style scoped>
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
  justify-content: space-evenly;  /* A képek egyenletesen oszlanak el */
  align-items: center;  /* Képek vertikális középre igazítása */
  gap: 8px;  /* Kép közötti távolság */
}

.extra-icons img {
  height: 50px;
  width: 50px;
  object-fit: contain;  /* Megakadályozza, hogy a képek torzuljanak */
}
</style>
