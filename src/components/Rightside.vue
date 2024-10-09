<script setup>
import Card from "./Card.vue";
<<<<<<< Updated upstream
import { Burgercucc } from "../config/lekerdezes.js";
import { onMounted, ref } from "vue";
const props = defineProps({
=======
import { store } from "../config/store.js";

defineProps({
>>>>>>> Stashed changes
  title: String,
  queryType: String,
  elemek: Array,
});
const nev = []
const re = ref(null)
console.log(props.queryType)
onMounted(async () => {
    re.value = await Burgercucc(props.queryType);

<<<<<<< Updated upstream
 })
=======




>>>>>>> Stashed changes
</script>

<template>
  <h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10 h-12 w-10">
    {{ title }}
  </h1>
  <div
    class="flex gap-10 h-[calc(100%-7rem)] justify-center flex-wrap content-start overflow-x-hidden overflow-y-auto pb-10"
  >
    <Card v-for="kajak in re" :nev="kajak.etel_nev" :ar="kajak.ar" :kep="kajak.kep"/>
  </div>
</template>

<style scoped></style>
