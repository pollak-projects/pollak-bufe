<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-screen">
    <img class="logo w-screen absolute" src="/public/logo.png" alt="">
    <h1 class="w-screen h-1/3 flex justify-center items-end drop-shadow-2xl move">Pollák Büfé</h1>
    <div class="w-screen h-2/3 flex justify-center items-sta rt pt-28 move"> 
      <RouterLink to="/szendvicsek">
        <button class="blink-button px-8 py-4 border-2 border-solid rounded-xl drop-shadow-2xl">  
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

/* Villogó gomb animáció */
.blink-button {
  animation: blink 1s infinite;
}

.move {
  animation: move 600s infinite;
}

.logo {
  width: 120px;
  height: 100px;
}

@keyframes blink {
  0%, 100%{
    background-color: rgb(115, 126, 223);
  }
  50% {
    background-color: rgb(106, 77, 187);
  }
}

@keyframes move {
  0%, 50%, 100% {
    transform: translateY(0);
  }
  25%, 75% {
    transform: translateY(2px);
  }
}

</style>
