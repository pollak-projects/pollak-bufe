<script setup>
import VLazyImage from "v-lazy-image";
import Cart from "../components/Cart.vue";
import Rightside from "../components/Rightside.vue";
import { store } from "../config/store.js";
import { useRouter } from "vue-router";

import leftArrow from "../assets/images/arrow_left.svg";

const router = useRouter();

function navBack() {
  router.push("/szendvicsek");
}
</script>

<template>
  <VLazyImage
    :src="leftArrow"
    alt=""
    class="h-8 w-8 absolute left-16 top-20"
    @click="navBack()"
  />
  <div class="w-full h-screen max-h-screen p-4">
    <Cart title="Rendelés véglegesítése" queryType="kosar" />
  </div>
</template>
