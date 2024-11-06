<script setup>
import Rightside from "../components/Rightside.vue";
import Navigation from "../components/navigation.vue";
</script>

<template>
  <Navigation />
  <div class="w-full h-screen max-h-screen p-4">
    <Rightside title="Hot-dogok" queryType="hotdogok" :elemek="hotdogok" />
  </div>
</template>
