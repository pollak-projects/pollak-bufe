<script setup>
import VLazyImage from "v-lazy-image";
import { RouterLink } from "vue-router";
import { ref, onMounted, h } from "vue";
import rightArrow from "../assets/images/arrow_right.svg";

const isMobile = ref(false);
const isOpen = ref(false);

onMounted(() => {
  if (window.innerWidth < 768) {
    isMobile.value = true;
  }
});
</script>

<template>
  <button @click="isOpen = !isOpen" class="lg:hidden absolute">Open</button>
  <div
    class="md:w-96 h-full bg-[#D9D9D9]"
    :class="{ hidden: isMobile && !isOpen }"
  >
    <nav class="h-full p-6">
      <ul
        class="h-full flex flex-col justify-evenly content-center flex-wrap text-[#6750A4] text-2xl"
      >
        <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
          <RouterLink to="/szendvicsek" class="flex justify-between w-full"
            >Szendvicsek <VLazyImage width="20px" :src="rightArrow"
          /></RouterLink>
        </li>
        <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
          <RouterLink class="flex justify-between w-full" to="/hot-dogok"
            >Hot-dogok <VLazyImage width="20px" :src="rightArrow"
          /></RouterLink>
        </li>
        <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
          <RouterLink class="flex justify-between w-full" to="/hamburgerek"
            >Hamburgerek <VLazyImage width="20px" :src="rightArrow"
          /></RouterLink>
        </li>
        <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
          <RouterLink class="flex justify-between w-full" to="/italok"
            >Italok <VLazyImage width="20px" :src="rightArrow"
          /></RouterLink>
        </li>
        <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
          <RouterLink class="flex justify-between w-full" to="/nasik"
            >Nasik <VLazyImage width="20px" :src="rightArrow"
          /></RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
