<script setup>
import { RouterLink } from "vue-router";

defineProps({
  title: String,
  nev: String,
  ar: Number,
  kep: String,
  queryType: String,
});



import { ref } from 'vue';

const breakOptions = ref(['1. szünet', '2. szünet', '3. szünet', '4. szünet', '5. szünet']);
const isOpen = ref(false);
const selectedBreak = ref('');

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectBreak(breakOption) {
  selectedBreak.value = breakOption;
  isOpen.value = false; // Bezárja a legördülő menüt a választás után
}
</script>

 

  <template>

<h1 class="text-[#554B4B] drop-shadow-lg text-5xl mb-20 ms-10 h-12 text-center">
    {{ title }}
  </h1>
  <div class="h-[75%] flex gap-10 w-full"> <div class="">
    <div class="absolute bottom-20 text-center justify-between mx-6">
      
        <button @click="toggleDropdown" class="bg-[#f8d1eb] text-[#554B4B] text-4xl rounded px-4 py-2 border border-black rounded-full">
          {{ selectedBreak || 'Válasszon szünetet' }}
        </button>
      
      


      <div v-if="isOpen" class="absolute -top-[450%] z-10 mt-2 w-56 rounded-md shadow-lg bg-[#f8d1eb]">
        <ul class="py-1" role="menu">
          <li 
            v-for="breakOption in breakOptions" 
            :key="breakOption" 
            @click="selectBreak(breakOption)" 
            class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            {{ breakOption }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-white rounded-md border-[#000000] border-2 drop-shadow-lg p-3 w-68 h-80 ml-20">
    
    <img src="../assets/hamburger.jpg" alt="" srcset="" class="w-64 h-64 border border-black">
    Hamburger <br>
    1000 Ft
  </div>
</div>
<div class="absolute bottom-10 right-10  mx-6 text-right" >
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-4xl">
    Rendelés leadása
    </button>
  </div>

  
  
 
</template>




<style scoped></style>
