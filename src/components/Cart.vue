<script setup>
import VLazyImage from "v-lazy-image";
import { ref, computed, onMounted } from "vue";
import { store, storeszunet } from "../config/store";
import { store2 } from "../config/store";
import { storeExtra } from "../config/store";
import {
  Rendeles_Leadasa,
  SzunetLekerdezes,
  AktualisSzunetLekerdezes,
  SendImage,
} from "../config/lekerdezes";
import Card from "./Card.vue";
import { useRouter } from "vue-router";

const props = defineProps({
  title: String,
});

let szunet = storeszunet.elsoszunet[0].elsoszunet;
let kivalasztottSzunet = storeszunet.elsoszunet[0].elsoszunet;
let elsoszunet = ref(null);
let image_data_url = "";
const video = ref(null);
const canvas = ref(null);

const isLoading = ref(false);

const selectedIndex = ref(szunet - 1);
const options = ref([
  "1.Szünet",
  "2.Szünet",
  "3.Szünet",
  "4.Szünet",
  "5.Szünet",
  "6.Szünet",
  "7.Szünet",
]);

const router = useRouter();

function openModal(msg) {
  const modal = document.getElementById("modalUres");
  const content = document.getElementById("modalUresContent");

  content.innerHTML = msg;
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

onMounted(async () => {
  console.log("On Mounted");

  elsoszunet.value = await AktualisSzunetLekerdezes();
  elsoszunet.value = elsoszunet.value[0].id;

  navigator.mediaDevices
    .getUserMedia({ video: { width: 1920, height: 1080 }, audio: false })
    .then((stream) => {
      video.value.srcObject = stream;
      video.value.play();

      // Set video width and height to canvas
      video.value.addEventListener("loadedmetadata", () => {
        canvas.value.width = video.value.videoWidth;
        canvas.value.height = video.value.videoHeight;
        console.log(video.value.videoWidth, video.value.videoHeight);
      });
    })
    .catch((err) => {
      console.error("Error accessing media devices.", err);
    });

  // Ensure video is ready before taking a picture
  video.value.addEventListener("playing", () => {
    // If you want to auto-take picture after some time, you can do so here.
  });
});

const trackStyle = computed(() => {
  const itemWidth = 140;
  const trackOffset =
    itemWidth * selectedIndex.value + selectedIndex.value * 20;
  const containerCenter = (1090 - itemWidth) / 2;

  return {
    transform: `translateX(${containerCenter - trackOffset}px)`,
    transition: "transform 0.5s ease",
  };
});

const paymentMethod = ref("");
const selectPayment = (method) => {
  paymentMethod.value = method;
};

const nextOption = () => {
  if (selectedIndex.value < options.value.length - 1) {
    selectedIndex.value++;
    kivalasztottSzunet = kivalasztottSzunet + 1;
    console.log(kivalasztottSzunet);
  }
};

const prevOption = () => {
  if (selectedIndex.value >= storeszunet.elsoszunet[0].elsoszunet) {
    selectedIndex.value--;
    kivalasztottSzunet = kivalasztottSzunet - 1;
    console.log(kivalasztottSzunet);
  }
};

const rendelesleadas = () => {
  if (!paymentMethod.value) {
    openModal("Először válassz fizetési módot!");
    return;
  }

  if (store2.kosar.length < 1) {
    openModal("Nem adhatsz le üres rendelést!");
    return;
  }

  isLoading.value = true;

  Rendeles_Leadasa(kivalasztottSzunet, paymentMethod.value)
    .then((res) => {
      // Clear the cart
      store.kosar = [
        {
          darab: 0,
        },
      ];
      takePicture();
      SendImage(image_data_url);
      // Forward to the next page

      console.log(res);

      isLoading.value = false;
      router.push(`/sorszam/${res}`);
    })
    .catch((err) => {
      openModal("Valami hiba történt!");
      router.push("/");
    });
};

function takePicture() {
  if (video.value && video.value.readyState === 4) {
    // Check if video is ready
    canvas.value
      .getContext("2d")
      .drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

    image_data_url = canvas.value.toDataURL();
    console.log(canvas.value.width, canvas.value.height);
  } else {
    console.warn("Video is not ready yet.");
  }
}
</script>

<template>
  <div class="overflow-y-auto max-h-screen">
    <div>
      <h1 class="text-[#554b4b] arnyek text-7xl mb-10 mt-10 text-center">
        {{ title }}
      </h1>

      <div class="flex-container">
        <Card
          v-for="(n, index) in store2.kosar"
          v-if="store2.kosar.length > 0"
          :key="n.darab[0].id"
          :id="n.darab[0].id"
          :nev="n.darab[0].etel_nev"
          :ar="n.darab[0].ar"
          :kep="n.darab[0].kep"
          :ketchup="store2.szoszok[index].ketchup"
          :mustar="store2.szoszok[index].mustar"
          :majonez="store2.szoszok[index].majonez"
          :csipos="store2.szoszok[index].csipos"
          :index="index"
          :italiksz="0"
        />
        <Card
          v-if="storeExtra.kosarExtra.length > 0"
          v-for="g in storeExtra.kosarExtra"
          :key="g.darabExtra[0].id"
          :id="g.darabExtra[0].id"
          :nev="g.darabExtra[0].etel_nev"
          :ar="g.darabExtra[0].ar"
          :kep="g.darabExtra[0].kep"
          :italiksz="1"
        />
      </div>

      <div class="mt-36 text-center mb-5">
        <h2 class="mt-16 text-6xl text-[#554b4b] arnyek mb-6">Fizetési Mód</h2>
        <div class="flex justify-center gap-12">
          <div
            @click="selectPayment('1')"
            :class="['payment-option', { selected: paymentMethod === '1' }]"
          >
            <VLazyImage
              src="/card.png"
              alt="Bankkártya"
              class="w-64 h-64 mx-auto"
            />
            <p class="text-4xl text-[#554b4b] mt-2">Bankkártya</p>
          </div>

          <div
            @click="selectPayment('0')"
            :class="['payment-option', { selected: paymentMethod === '0' }]"
          >
            <VLazyImage
              src="/cash.png"
              alt="Készpénz"
              class="w-64 h-64 mx-auto"
            />
            <p class="text-4xl text-[#554b4b] mt-2">Készpénz</p>
          </div>
        </div>
      </div>

      <div
        class="melyik_szunet text-[#554b4b] text-center arnyek text-6xl mt-36"
      >
        Melyik szünetre kéred?:
      </div>

      <div
        class="date-slider-container text-4xl"
        v-if="storeszunet.elsoszunet[0].elsoszunet != 0"
      >
        <button @click="prevOption" class="slider-btn">◄</button>
        <div class="date-slider">
          <div class="slider-track" :style="trackStyle">
            <div
              v-for="(option, index) in options"
              :key="index"
              :class="['date-item', { active: index === selectedIndex }]"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <button @click="nextOption(index)" class="slider-btn">►</button>
      </div>
      <div v-if="storeszunet.elsoszunet[0].elsoszunet == 0">
        <h1 class="text-center text-4xl text-[#554b4b] mt-4 pb-40">
          Sajnos mára már nem tudsz rendelni!
        </h1>
      </div>
    </div>

    <div
      class="mt-20 mb-20 text-center"
      v-if="storeszunet.elsoszunet[0].elsoszunet != 0"
    >
      <button
        class="border rounded-full border-black bg-gradient-to-r from-[#d8dcff] to-[#737edf] p-3 px-12 text-[#554b4b] text-6xl h-28 shadow-lg drop-shadow-lg focus:outline-none"
        @click="rendelesleadas"
        :disabled="isLoading"
        :class="{ 'cursor-not-allowed': isLoading }"
      >
        Rendelés leadása
      </button>
    </div>
  </div>
  <video
    autoplay="true"
    ref="video"
    class="rounded-md w-[960px] hidden"
  ></video>
  <canvas ref="canvas" class="rounded-md absolute hidden"></canvas>
  <div class="ures-modal-background" id="modalUres">
    <div class="ures-modal-content">
      <h2 id="modalUresContent">Először válassz fizetési módot!</h2>
    </div>
  </div>
</template>

<style scoped>
.arnyek {
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.3);
}

.payment-option {
  cursor: pointer;
  border: 2px solid transparent;
  padding: 1rem;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.payment-option:hover {
  transform: scale(1.05);
}

.payment-option.selected {
  border-color: #6670ff;
}

.date-slider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  position: relative;
}

.date-slider {
  display: flex;
  overflow: hidden;
  justify-content: center;
  width: 100%;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.date-item {
  padding: 10px 20px;
  font-size: 18px;
  transition: all 0.3s ease;
  opacity: 0.3;
  filter: blur(2px);
  margin: 0 10px;
  width: 140px;
  text-align: center;
}

.date-item.active {
  opacity: 1;
  font-size: 24px;
  font-weight: bold;
  transform: scale(1);
  filter: blur(0);
  color: rgb(115, 126, 223);
}

.slider-btn {
  color: #000000;
  background: none;
  border: 1px solid #f0f0f0;
  border-radius: 100%;
  cursor: pointer;
  padding: 5px;
  margin: 0 20px;
  transition: background 0.2s;
  z-index: 1;
}

.slider-btn:hover {
  background: #f0f0f0;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.card {
  min-width: 250px;
  max-width: 320px;
  flex: 1 1 auto;
  box-sizing: border-box;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  .card {
    min-width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .card {
    min-width: 100%;
    max-width: 100%;
  }
}

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
