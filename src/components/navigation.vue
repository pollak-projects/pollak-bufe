<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="w-96 h-full bg-[#D9D9D9]">
      <nav class="h-full p-6">
        <ul
          class="h-full flex flex-col justify-evenly content-center flex-wrap text-[#6750A4] text-2xl"
        >
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <RouterLink to="/szendvicsek" class="flex justify-between w-full"
              >Szendvicsek <img width="20px" src="/arrow_right.svg"
            /></RouterLink>
          </li>
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <RouterLink class="flex justify-between w-full" to="/hot-dogok"
              >Hot-dogok <img width="20px" src="/arrow_right.svg"
            /></RouterLink>
          </li>
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <RouterLink class="flex justify-between w-full" to="/hamburgerek"
              >Hamburgerek <img width="20px" src="/arrow_right.svg"
            /></RouterLink>
          </li>
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <RouterLink class="flex justify-between w-full" to="/italok"
              >Italok <img width="20px" src="/arrow_right.svg"
            /></RouterLink>
          </li>
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <RouterLink class="flex justify-between w-full" to="/nasik"
              >Nasik <img width="20px" src="/arrow_right.svg"
            /></RouterLink>
          </li>
        </ul>
      </nav>
    </div>
</template>