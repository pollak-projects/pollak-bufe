<template>
  <div>
    <h1 class="text-[#554b4b] arnyek text-7xl mb-10 mt-10 text-center">
      {{ title }}
    </h1>

    <div class="flex gap-10 mb-1 pt-7 justify-center">
      <div
        class="bg-white rounded-md border-[#000000] border-2 drop-shadow-lg p-6 w-96 text-center"
      >
        <img
          src="../assets/hamburger.jpg"
          alt="Hamburger"
          class="w-96 h-96 border-2 border-black"
        />
        <p class="text-4xl mt-4">Hamburger</p>
        <p class="text-3xl mt-2">1000 Ft</p>
        <div class="flex justify-center mt-2">
          <div class="flex justify-center mt-2 w-16 h-16">
            <img src="../assets/csip.png" alt="Csípős szósz" />
            <img src="../assets/majo.png" alt="Majonéz" />
            <img src="../assets/must.png" alt="Mustár" />
            <img src="../assets/ketchup.png" alt="Ketchup" />
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-md border-[#000000] border-2 drop-shadow-lg p-6 w-96 text-center"
      >
        <img
          src="../assets/pepsi.jpg"
          alt="Pepsi"
          class="w-96 h-96 border-2 border-black"
        />
        <p class="text-4xl mt-4">Pepsi</p>
        <p class="text-3xl mt-2">400 Ft</p>
      </div>
    </div>

    <div class="mt-36 text-center mb-5">
      <h2 class="mt-16 text-6xl text-[#554b4b] arnyek mb-6">Fizetési Mód</h2>
      <div class="flex justify-center gap-12">
        <div
          @click="selectPayment('card')"
          :class="['payment-option', { selected: paymentMethod === 'card' }]"
        >
          <img
            src="../assets/card.png"
            alt="Bankkártya"
            class="w-64 h-64 mx-auto"
          />
          <p class="text-4xl text-[#554b4b] mt-2">Bankkártya</p>
        </div>

        <div
          @click="selectPayment('cash')"
          :class="['payment-option', { selected: paymentMethod === 'cash' }]"
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

    <div class="absolute bottom-10 right-10 mx-6 text-right">
      <button
        class="border rounded-full border-black bg-gradient-to-r from-[#d8dcff] to-[#737edf] p-3 px-12 text-[#554b4b] text-6xl h-28 shadow-lg drop-shadow-lg focus:outline-none"
        @click="rendelesleadas"
      >
        Rendelés leadása
      </button>
    </div>

    <div class="melyik_szunet text-[#554b4b] text-center arnyek text-6xl mt-36">
      Melyik szünetre kéred?:
    </div>

    <div class="date-slider-container text-4xl">
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
      <button @click="nextOption" class="slider-btn">►</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
});

import { ref, computed, onMounted } from "vue";
import { store } from "../config/store";
import {
  GetElementsInBasket,
  Rendeles_Cucc,
  GetExtraInBasket,
  SzunetLekerdezes,
} from "../config/lekerdezes";

const selectedIndex = ref(3);
const options = ref([
  "1.szünet",
  "2.szünet",
  "3.szünet",
  "4.szünet",
  "5.szünet",
  "6.szünet",
  "7.szünet",
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

let szendvicsNevData = ref(null);
let szendvicsArData = ref(null);

let extraNevData = ref(null);
let extraArData = ref(null);

let szunet = 4;

const paymentMethod = ref("");
const selectPayment = (method) => {
  paymentMethod.value = method;
};

const nextOption = () => {
  if (selectedIndex.value < options.value.length - 1) {
    selectedIndex.value++;
  }

  szunet = selectedIndex.value + 1;
};

const prevOption = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }

  szunet = selectedIndex.value + 1;
};

const rendelesleadas = () => {
  if (!paymentMethod.value) {
    alert("Kérjük, válasszon fizetési módot!");
    return;
  }

  store.kosar = [];
  alert(
    `Rendelés leadva! Fizetési mód: ${
      paymentMethod.value === "card" ? "Bankkártya" : "Készpénz"
    }`
  );
  Rendeles_Cucc(szunet);
};

const re = ref(null);
onMounted(async () => {
  re.value = await GetElementsInBasket();
  if (re.value[0] != null) {
    szendvicsNevData.value = re.value[0].etel_nev;
    szendvicsArData.value = re.value[0].ar;
  }
});

const re2 = ref(null);
onMounted(async () => {
  re2.value = await GetExtraInBasket();
  if (re2.value[0] != null) {
    console.log("Szia extra");
    extraNevData.value = re2.value[0].etel_nev;
    extraArData.value = re2.value[0].ar;
  }
});

const szunetek = ref(null);
onMounted(async () => {
  szunetek.value = await SzunetLekerdezes();
});
</script>

<template>
  <div>
    <h1 class="text-[#554b4b] drop-shadow-lg text-5xl mb-10">{{ title }}</h1>

    <div class="flex gap-10 mb-8 justify-center">
      <div
        class="bg-white rounded-md border-[#000000] border-2 drop-shadow-lg p-3 w-64"
      >
        <img
          src="../assets/hamburger.jpg"
          alt=""
          class="w-64 h-64 border border-black"
        />
        {{ szendvicsNevData }}<br />
        {{ szendvicsArData }} Ft
      </div>

      <div
        class="bg-white rounded-md border-[#000000] border-2 drop-shadow-lg p-3 w-64"
      >
        <img
          src="../assets/pepsi.jpg"
          alt=""
          class="w-64 h-64 border border-black"
        />
        {{ extraNevData }} <br />
        {{ extraArData }} Ft
      </div>
    </div>

    <div class="absolute bottom-10 right-10 mx-6 text-right">
      <button
        class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-4xl"
        @click="rendelesleadas"
      >
        Rendelés leadása
      </button>
    </div>

    <div class="melyik_szunet text-2xl">Melyik szünetre kéred?:</div>
    <div class="date-slider-container">
      <button @click="prevOption(index)" class="slider-btn">←</button>
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
      <button @click="nextOption(index)" class="slider-btn">→</button>
    </div>
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
