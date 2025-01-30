<script setup>
import { ref, defineModel } from "vue";

const props = defineProps({
  text: String,
  imgName: String,
});

const model = defineModel({
  default: [],
});

const isActive = ref(false);

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

function getImageUrl() {
  return new URL(`/${props.imgName}`, import.meta.url);
}
</script>
<template>
  <div
    class="h-72 w-56 flex flex-col items-center justify-between cursor-pointer"
    @click="changeviewModel()"
  >
    <div
      class="h-56 w-56 bg-[#d9d9d9] drop-shadow-lg rounded-[20%] p-2"
      :class="{ '!bg-[#bee46c]': isActive }"
    >
      <img :src="getImageUrl()" alt="" />
    </div>
    <p class="text-5xl text-[#554b4b] kecsufont">{{ text }}</p>
  </div>
</template>
