<script setup>
const props = defineProps({
  title: String,
});

import { ref, computed, onMounted } from "vue";
import { store, storeszunet } from "../config/store";
import { store2 } from "../config/store";
import { storeExtra } from "../config/store";
import {
  Rendeles_Cucc2,
  GetExtraInBasket,
  SzunetLekerdezes,
  DeleteFromBasket,
  DeleteExtra,
  AktualisSzunetLekerdezes,
  DeleteSzendvics,
} from "../config/lekerdezes";
import Card from "./Card.vue";

let szunet = storeszunet.elsoszunet[0].elsoszunet
let kivalasztottSzunet = storeszunet.elsoszunet[0].elsoszunet
const szunetek = ref(null);
let elsoszunet = ref(null);
onMounted(async () => {
  elsoszunet.value = await AktualisSzunetLekerdezes()
  elsoszunet.value = elsoszunet.value[0].id 
  szunetek.value = await SzunetLekerdezes();
});

const selectedIndex = ref(szunet-1);
const options = ref([
  "1.Szünet",
  "2.Szünet",
  "3.Szünet",
  "4.Szünet",
  "5.Szünet",
  "6.Szünet",
  "7.Szünet",

]);

const trackStyle = computed(() => {
  const itemWidth = 140;
  const trackOffset =
    itemWidth * selectedIndex.value + selectedIndex.value * 20;
  const containerCenter = (1090 - itemWidth) / 2;

  return {
    transform: `translateX(${containerCenter - trackOffset}px)`,
    transition: "transform 0.5s ease",
  };
});


const paymentMethod = ref("");
const selectPayment = (method) => {
  paymentMethod.value = method;
};

const nextOption = () => {
  if (selectedIndex.value < options.value.length - 1) {
    selectedIndex.value++;
    kivalasztottSzunet = kivalasztottSzunet + 1;
    console.log(kivalasztottSzunet)
  }
};

const prevOption = () => {
  if (selectedIndex.value >= storeszunet.elsoszunet[0].elsoszunet) {
    selectedIndex.value--;
    kivalasztottSzunet = kivalasztottSzunet - 1;
    console.log(kivalasztottSzunet)
  }
};

const rendelesleadas = () => {
  if (!paymentMethod.value) {
    alert("Kérjük, válasszon fizetési módot!");
    return;
  }

  store.kosar = [];
  alert(
    `Rendelés leadva! Fizetési mód: ${
      paymentMethod.value === "1" ? "Bankkártya" : "Készpénz"
    }`
  );
  Rendeles_Cucc2(kivalasztottSzunet, paymentMethod.value);
};

</script>

<template>
  <div>
    
    <h1 @click="DeleteSzendvics(0)" class="text-[#554b4b] arnyek text-7xl mb-10 mt-10 text-center">{{ title }}</h1>
    <div class="flex gap-10 mb-8 justify-center">
        <Card v-if="store2.kosar.length > 0"
           v-for="(n, index) in store2.kosar"
          :id = "n.darab[0].id"
          :nev="n.darab[0].etel_nev"
          :ar="n.darab[0].ar"
          :kep="n.darab[0].kep"
          :ketchup ="store2.szoszok[index].ketchup"
          :mustar ="store2.szoszok[index].mustar"
          :majonez ="store2.szoszok[index].majonez"
          :csipos ="store2.szoszok[index].csipos"
          :index = index     
        />
    <Card v-if="storeExtra.kosarExtra.length > 0"
      v-for="g in storeExtra.kosarExtra"
      :id = "g.darabExtra[0].id"
      :nev="g.darabExtra[0].etel_nev"
      :ar="g.darabExtra[0].ar"
      :kep="g.darabExtra[0].kep"  
    />
    </div>
    
    <div class="mt-36 text-center mb-5">
      <h2 class="mt-16 text-6xl text-[#554b4b] arnyek mb-6">Fizetési Mód</h2>
      <div class="flex justify-center gap-12">
        <div
          @click="selectPayment('1')"
          :class="['payment-option', { selected: paymentMethod === '1' }]"
        >
          <img
            src="../assets/card.png"
            alt="Bankkártya"
            class="w-64 h-64 mx-auto"
          />
          <p class="text-4xl text-[#554b4b] mt-2">Bankkártya</p>
        </div>

        <div
          @click="selectPayment('0')"
          :class="['payment-option', { selected: paymentMethod === '0' }]"
        >
          <img
            src="../assets/cash.png"
            alt="Készpénz"
            class="w-64 h-64 mx-auto"
          />
          <p class="text-4xl text-[#554b4b] mt-2">Készpénz</p>
        </div>
      </div>
    </div>

    <div class="melyik_szunet text-[#554b4b] text-center arnyek text-6xl mt-36">
      Melyik szünetre kéred?:
    </div>

    <div class="date-slider-container text-4xl" v-if="storeszunet.elsoszunet[0].elsoszunet != 0">
      <button @click="prevOption" class="slider-btn">◄</button>
      <div class="date-slider">
        <div class="slider-track" :style="trackStyle">
          <div
            v-for="(option, index) in options"
            :key="index"
            :class="['date-item', { active: index === selectedIndex }]"
          >
            {{ option }}
          </div>
        </div>
      </div>
      <button @click="nextOption(index)" class="slider-btn">►</button>
    </div>
    <div v-if="storeszunet.elsoszunet[0].elsoszunet == 0">
      <h1 class="text-center text-4xl text-[#554b4b] mt-4">Sajnos mára már nem tudsz rendelni!</h1>
    </div>
  </div>

  <div class="absolute mt-20 mr-20 right-10 mx-6 text-right" v-if="storeszunet.elsoszunet[0].elsoszunet != 0 && store.kosar[0].darab != 0">
      <button
        class="border rounded-full border-black bg-gradient-to-r from-[#d8dcff] to-[#737edf] p-3 px-12 text-[#554b4b] text-6xl h-28 shadow-lg drop-shadow-lg focus:outline-none"
        @click="rendelesleadas"
      >
        Rendelés leadása
      </button>
    </div>
</template>

<style>
.arnyek {
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.3);
}

.payment-option {
  cursor: pointer;
  border: 2px solid transparent;
  padding: 1rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.payment-option:hover {
  transform: scale(1.05);
}

.payment-option.selected {
  border-color: #6670ff;
}

.date-slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  position: relative;
}

.date-slider {
  display: flex;
  overflow: hidden;
  justify-content: center;
  width: 400px;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.date-item {
  padding: 10px 20px;
  font-size: 18px;
  transition: all 0.3s ease;
  opacity: 0.3;
  filter: blur(2px);
  margin: 0 10px;
  width: 140px;
  text-align: center;
}

.date-item.active {
  opacity: 1;
  font-size: 24px;
  font-weight: bold;
  transform: scale(1);
  filter: blur(0);
  color: rgb(115, 126, 223);
}

.slider-btn {
  color: #000000;
  background: none;
  border: 1px solid #f0f0f0;
  border-radius: 100%;
  cursor: pointer;
  padding: 5px;
  margin: 0 20px;
  transition: background 0.2s;
  z-index: 1;
}

.slider-btn:hover {
  background: #f0f0f0;
}
</style>
