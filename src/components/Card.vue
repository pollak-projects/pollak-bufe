<script setup>
import { ref } from 'vue';
import { RouterLink } from "vue-router";

const props = defineProps({
  id: Number,
  nev: String,
  ar: Number,
  kep: String,
  queryType: String,
});

function getImageUrl() {
  return new URL(`../assets/${props.kep}`, import.meta.url);
}

const isActive = ref(false);

function toggleAnimation() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <div
    class="bg-white rounded-md border-[#9EA8FF] border-2 drop-shadow-lg p-3 w-60 h-80"
    id="app"
  >
    <RouterLink :to="`/extrak/${id}`">
      <img
        :src="getImageUrl()"
        alt=""
        class="w-full h-4/5 mb-2"
        :class="{ active: isActive }"
        @click="toggleAnimation"
      />
      <p class="font-sans h-[12%] leading-4">{{ nev }}</p>
      <p class="font-sans font-bold h-[8%]">{{ ar }} Ft</p>
    </RouterLink>
  </div>
</template>

<style scoped>
.image {
  transition: transform 0.5s ease;
  z-index: 9000000000;
}

.image.active {
  position: absolute;
  transform: scale(3, 3.3) translateX(-175px) translateY(70px);
  left: 0;
  top: 0;   
}

</style>
