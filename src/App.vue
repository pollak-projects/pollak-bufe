<script setup>

</script>

<template>
  <main class="w-screen h-screen bg-[#F5F5F5] flex">
    <div class="w-1/4 h-full bg-[#D9D9D9]">
      <nav class="h-full p-6">
        <ul class="h-full flex flex-col justify-evenly content-center flex-wrap text-[#6750A4] text-2xl">
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <router href="szendvicsek" class="flex justify-between w-full">Szendvicsek <img width="20px" src="./assets/arrow_right.svg"></router>
          </li>
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <a class="flex justify-between w-full" href="hot-dogok">Hot-dogok <img width="20px" src="./assets/arrow_right.svg"></a>
          </li>
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <a class="flex justify-between w-full" href="hamburgerek">Hamburgerek <img width="20px" src="./assets/arrow_right.svg"></a>
          </li>
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <a class="flex justify-between w-full" href="italok">Italok <img width="20px" src="./assets/arrow_right.svg"></a>
          </li>
          <li class="w-full border-b border-[#D1C0FB] pr-2 pl-2 pb-3">
            <a class="flex justify-between w-full" href="nasik">Nasik <img width="20px" src="./assets/arrow_right.svg"></a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="w-3/4 h-screen"></div>
  </main>
</template>

<style scoped>

</style>
