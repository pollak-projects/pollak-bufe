<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="h-screen">
        <h1 class="w-screen h-1/3 flex justify-center items-end drop-shadow-2xl move">A sorszámod:</h1>
        <div class="flex justify-center items-center h-2/3">
            <div class="kulsonegy flex justify-center items-center">
                <!-- Belső négyzet szöveggel -->
                <div class="belsonegy flex justify-center items-center">
                    123
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.kulsonegy {
    background-color: rgb(90, 90, 192); /* Kék háttér */
    width: 530px; 
    height: 350px; /* Négyzet alak */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.belsonegy {
    border-style: solid; 
    border-color: wheat; /* Búzaszín szegély */
    border-width: 4px; /* Szegély szélessége */
    color: white;
    font-size: 120px;
    font-family: "Abril Fatface";
    padding: 20px; /* Néhány belső térköz a szöveg körül */
    text-align: center;
}

h1 {  
  color: rgb(57, 74, 135);
  text-align: center;
  font-size: 100px;
  font-family: "Abril Fatface";
}

.move {
  animation: move 600s infinite;
}

@keyframes move {
  0%, 50%, 100% {
    transform: translateY(0);
  }
  25%, 75% {
    transform: translateY(-2px);
  }
}
</style>
