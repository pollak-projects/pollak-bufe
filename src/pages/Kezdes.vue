<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-screen"> 
    <h1 class="w-screen h-1/3 flex justify-center items-end">Pollák Büfé</h1>
    <div class="w-screen h-2/3 flex justify-center items-start pt-28"> 
      <RouterLink to="/szendvicsek">
        <button class="px-8 py-4 bg-pink-400 text-slate-700 dark:bg-slate-700 dark:text-white rounded-md shadow-sm ring-1 ring-slate-900/5 border-indigo-500 dark:border-sky-500 border-2 border-solid">
          Kezdés
        </button> 
      </RouterLink>
    </div>
    <div class="w-screen h-2/3 flex justify-center items-center border-solid border-indigo-600">
    </div>
  </div>
</template>

<style scoped>
button {
  font-size: 50px;
  padding-left: 120px;
  padding-right: 120px;
}

h1 {
  text-align: center;
  font-size: 110px;
  font-family: "Abril Fatface";
}

p {
  text-align: center;
  font-size: 1.2em;
}
</style>
