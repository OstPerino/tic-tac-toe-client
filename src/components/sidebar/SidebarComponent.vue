<template>
  <div class="sidebar">
    <LogoComponent/>
    <NavbarComponent/>
  </div>
</template>

<script setup lang="ts">
import NavbarComponent from "@/components/sidebar/NavbarComponent.vue";
import LogoComponent from "@/components/UI/LogoComponent.vue";
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.sidebar {
  background-color: #C9EEFF;
}
</style>