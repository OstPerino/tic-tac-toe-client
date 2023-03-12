<template>
  <div class="app">
    <SidebarComponent />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
</script>

<style lang="scss">
@import "@/styles/_base.scss";

.app {
  position: relative;
  width: 100%;
  height: 100%;

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    height: 100%;
  }
}
</style>
