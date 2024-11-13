<script setup>
import { ref, computed } from "vue";
import Rightside from "./components/Rightside.vue";
import { RouterView, RouterLink } from "vue-router";
import { store } from "./config/store.js";

const time = ref(new Date());

setInterval(() => {
  time.value = new Date();
}, 1000);

const getMinutes = computed(() =>
  time.value.getMinutes().toString().padStart(2, "0")
);
const getHours = computed(() =>
  time.value.getHours().toString().padStart(2, "0")
);

function navBack() {
  history.back();
}


</script>

<template>
  <img
    src="./assets/arrow_left.svg"
    alt=""
    class="h-8 w-8 absolute left-2 top-2"
    @click="navBack()"
  />
  <RouterLink to="/kosar" class="h-8 w-8 absolute right-36 top-8 flex items-baseline">
    <img
      id="kosar"
      src="./assets/shoppingcart.svg"
      alt=""
      />
      <p>{{ store.kosar[0].darab }}</p>
  </RouterLink>
  <div
    class="h-10 w-20 absolute right-12 top-6 bg-[#F7F2FA] drop-shadow-lg text-3xl flex justify-center items-center rounded-xl font-sans"
  >
    {{ getHours }}:{{ getMinutes }}
  </div>
  <main class="w-screen h-screen max-h-screen bg-[#F5F5F5] flex">
    <RouterView />
  </main>
</template>

<style scoped>

</style>
