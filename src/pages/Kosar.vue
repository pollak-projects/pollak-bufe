<script setup>
import Cart from "../components/Cart.vue";
import Rightside from "../components/Rightside.vue";
import { store } from "../config/store.js";

function navBack() {
  history.back();
}

</script>

<template>
<img
    src="/arrow_left.svg"
    alt=""
    class="h-8 w-8 absolute left-16 top-20"
    @click="navBack()"
  />
<div class="w-full h-screen max-h-screen p-4">
<Cart title="Rendelés véglegesítése" queryType="kosar" />
</div>

</template>
