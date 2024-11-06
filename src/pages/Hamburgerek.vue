<script setup>
import Navigation from "../components/navigation.vue";
import Rightside from "../components/Rightside.vue";
</script>

<template>
  <Navigation />
  <div class="w-full h-screen max-h-screen p-4">
    <Rightside
      title="Hamburgerek"
      queryType="hamburgerek"
      :elemek="hamburgerek"
    />
  </div>
</template>
