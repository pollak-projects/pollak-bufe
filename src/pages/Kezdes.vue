<script setup>
import VLazyImage from "v-lazy-image";
import { RouterLink } from "vue-router";
import { clearBasket, SzunetEltarolasa } from "../config/lekerdezes";
import { store, store2, store3, storeExtra } from "../config/store";
import logo from "../assets/images/logo.png";

function kezdes() {
  // store.kosar = [
  //   {
  //     darab: 0,
  //   },
  // ];
  // store2.kosar = [];
  // store2.szoszok = [];
  // store3.van = false;
  // storeExtra.kosarExtra = [];

  clearBasket();

  SzunetEltarolasa();
}
</script>

<template>
  <div class="h-screen">
    <VLazyImage
      class="md:w-32 w-16 absolute move md:left-16 left-0 md:top-16 top-3"
      :src="logo"
      alt=""
    />
    <h1
      class="w-screen h-1/3 flex justify-center items-end drop-shadow-2xl move md:text-9xl text-6xl"
    >
      Pollák Büfé
    </h1>
    <div
      id="gomb"
      class="w-screen h-2/3 flex justify-center items-sta rt pt-28 move"
    >
      <RouterLink to="/szendvicsek">
        <button
          @click="kezdes()"
          class="blink-button md:px-40 px-10 py-4 border-2 border-solid rounded-xl drop-shadow-2xl text-3xl"
        >
          Kezdés
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
#gomb {
  height: fit-content;
}

button {
  opacity: 80%;
  border-color: black;
  color: rgb(240 228 228);
  background-color: rgb(61 68 135);
}

h1 {
  color: rgb(57 74 135);
  opacity: 70%;
  text-align: center;
  font-family: "Abril Fatface";
}

p {
  text-align: center;
  font-size: 1.2em;
}

/* Villogó gomb animáció */
.blink-button {
  animation: blink 1s infinite;
}

.move {
  animation: move 600s infinite;
}

@keyframes blink {
  0%,
  100% {
    background-color: rgb(115, 126, 223);
  }
  50% {
    background-color: rgb(106, 77, 187);
  }
}

@keyframes move {
  0%,
  50%,
  100% {
    transform: translateY(0);
  }
  25%,
  75% {
    transform: translateY(-2px);
  }
}
</style>
