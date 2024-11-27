<script setup>
import Navigation from "../components/navigation.vue";
import Rightside from "../components/Rightside.vue";
import { store, store3 } from "../config/store.js";
import { ToBasket } from "../config/lekerdezes.js";

function navBack() {
  history.back();
}

function openModal() {
  const modal = document.getElementById("modalUres");
  console.log("Modal elem:", modal); // Ellenőrzéshez
  if (!modal) {
    console.error("A modális elem nem található a DOM-ban!");
    return;
  }

  modal.style.display = "flex"; // Megjelenítjük a modált

  setTimeout(() => {
    modal.style.display = "none"; // 800ms után elrejtjük
  }, 800);
}


function Teszt() {
  console.log("Kosár állapota:", store.kosar, store3.van); // Ellenőrzés
  if (!store3.van) {
    // Ha nincs van állapot és a kosár üres
    setTimeout(() => {
      openModal(); // Modál megnyitása
    }, 10);
  }
}
</script>

<template>
  <img
    src="../assets/arrow_left.svg"
    alt=""
    class="h-8 w-8 absolute left-16 top-20"
    @click="navBack()"
  />
  <RouterLink @click.prevent="Teszt()" :to="ToBasket()" class="h-14 w-14 absolute right-20 top-28 flex items-baseline">
    <img
      id="kosar"
      src="../assets/shoppingcart.svg"
      alt=""
      />
      <p>{{ store.kosar[0].darab }}</p>
  </RouterLink>
  <Navigation />
  <div class="w-full h-screen max-h-screen p-4 text-center mt-12 -ml-4">
    <Rightside
      title="Hamburgerek"
      queryType="hamburgerek"
      :elemek="hamburgerek"
    />
  </div>
  <div class="ures-modal-background" id="modalUres">
    <div class="ures-modal-content">
      <h2>Először válassz ennivalót!</h2>
    </div>
  </div>
</template>

<style>
.ures-modal-background {
  display: none; /* Kezdetben rejtve */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.445); /* Átlátszó fekete háttér */
  justify-content: center;
  align-items: center;
}

/* A modális tartalom */
.ures-modal-content {
  background-color: #bd1717;
  padding: 80px;
  border-radius: 30px;
  text-align: center;
  max-width: 1000px;
  width: 200%;
  font-size: 60px;
  font-family: "Abril Fatface";
  color: #ffffff;
}
</style>

