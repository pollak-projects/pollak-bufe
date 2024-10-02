<script setup>
import { ref, defineModel } from "vue";

const props = defineProps({
  text: String,
  imgName: String,
});

const model = defineModel({
  default: []
})

const isActive = ref(false);

function changeviewModel() {
  isActive.value = !isActive.value
  model.value.push({
    name: props.text,
    value: isActive.value
  })
}

function getImageUrl() {
  return new URL(`../assets/${props.imgName}`, import.meta.url);
}
</script>
<template>
  <div
    class="h-52 w-40 flex flex-col items-center justify-between cursor-pointer"
    @click="changeviewModel()"
  >
    <div
      class="h-40 w-40 bg-[#d9d9d9] drop-shadow-lg rounded-3xl p-2"
      :class="{ '!bg-[#bee46c]': isActive }"
    >
      <img :src="getImageUrl()" alt="" />
    </div>
    <p class="text-2xl text-[#554b4b]">{{ text }}</p>
  </div>
</template>
