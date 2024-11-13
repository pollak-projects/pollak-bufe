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
    src="../assets/arrow_left.svg"
    alt=""
    class="h-8 w-8 absolute left-2 top-2"
    @click="navBack()"
  />
<div class="w-full h-screen max-h-screen p-4">
<Cart title="Rendelés véglegesítése" queryType="kosar" />
</div>

</template>
