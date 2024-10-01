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
    
<div class="absolute bottom-10 w-8/12 flex justify-between mx-6" >
    <button
      class="border rounded-full border-black bg-[#d8dcff] p-3 px-12 text-[#554b4b] text-2xl">
    Kosárba
    </button>
  </div>

  
  <div class="flex items-end justify-center h-screen">
    <div class="relative inline-block text-left mb-20">
      <div>
        <button @click="toggleDropdown" class="bg-[#D8DCFF] text-[#554B4B] text-2xl rounded px-4 py-2 border border-black rounded-full">
          {{ selectedBreak || 'Válasszon szünetet' }}
        </button>
      </div>

      <div v-if="isOpen" class="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white">
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
</template>




<style scoped></style>
