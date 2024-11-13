<script setup>
import Rightside from "../components/Rightside.vue";
import Navigation from "../components/navigation.vue";
import { store } from "../config/store.js";

function navBack() {
  history.back();
}
</script>

<template>
  <img
    src="../assets/arrow_left.svg"
    alt=""
    class="h-8 w-8 absolute left-2 top-2"
    @click="navBack()"
  />
  <RouterLink to="/kosar" class="h-8 w-8 absolute right-36 top-8 flex items-baseline">
    <img
      id="kosar"
      src="../assets/shoppingcart.svg"
      alt=""
      />
      <p>{{ store.kosar[0].darab }}</p>
  </RouterLink>
  <Navigation />
  <div class="w-full h-screen max-h-screen p-4">
    <Rightside title="Hot-dogok" queryType="hotdogok" :elemek="hotdogok" />
  </div>
</template>
