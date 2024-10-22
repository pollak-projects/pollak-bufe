<script setup>
import Cart from "../components/Cart.vue";
import Rightside from "../components/Rightside.vue";
import { store } from "../config/store.js";
</script>

<template>

<div class="w-full h-screen max-h-screen p-4">
<Cart title="Rendelés véglegesítése" queryType="kosar" />
</div>

</template>
