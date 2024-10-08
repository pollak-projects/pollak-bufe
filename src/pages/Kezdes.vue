<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-screen"> 
    <h1 class="w-screen h-1/3 flex justify-center items-end">Pollák Büfé</h1>
    <div class="w-screen h-2/3 flex justify-center items-start pt-28"> 
      <RouterLink to="/szendvicsek">
        <button class="px-8 py-4  border-2 border-solid rounded-xl">
          Kezdés
        </button> 
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
button {
  opacity: 80%;
  border-color: black;
  color: rgb(240 228 228);
  background-color: rgb(61 68 135);
  font-size: 50px;
  padding-left: 120px;
  padding-right: 120px;
}

h1 {
  color:rgb(57 74 135);
  opacity: 70%;
  text-align: center;
  font-size: 110px;
  font-family: "Abril Fatface";
}

p {
  text-align: center;
  font-size: 1.2em;
}
</style>
