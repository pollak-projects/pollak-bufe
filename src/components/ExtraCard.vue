<script setup>
import VLazyImage from "v-lazy-image";
import { ref, defineModel, onMounted } from "vue";

const props = defineProps({
  text: String,
  imgName: String,
});

const model = defineModel({
  default: [],
});

const isActive = ref(false);
const imageUrl = ref("");

function changeviewModel() {
  isActive.value = !isActive.value;
  let index = model.value.findIndex((item) => item.name === props.text);
  console.log(index);

  if (index === -1 && isActive.value) {
    model.value.push(props.text);
  } else {
    model.value.splice(index, 1);
  }
}

onMounted(() => {
  imageUrl.value = new URL(
    `../assets/images/${props.imgName}`,
    import.meta.url
  ).href;
});
</script>
<template>
  <div
    class="h-72 w-56 xl:h-56 flex flex-col items-center justify-between cursor-pointer"
    @click="changeviewModel()"
  >
    <div
      class="h-56 w-56 xl:h-40 xl:w-40 bg-[#d9d9d9] drop-shadow-lg rounded-[20%] p-2"
      :class="{ '!bg-[#bee46c]': isActive }"
    >
      <VLazyImage :src="imageUrl" alt="" />
    </div>
    <p class="text-5xl xl:text-4xl text-[#554b4b] kecsufont">{{ text }}</p>
  </div>
</template>
