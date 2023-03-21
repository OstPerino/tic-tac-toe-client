<template>
  <div class="app">
    <SidebarComponent v-if="showSidebar" />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";

const route: any = useRoute();

const showSidebar = computed(() => {
  return route.meta.requiresAuth;
});
</script>

<style lang="scss">
@import "@/styles/_base.scss";

.app {
  display: flex;
  width: 100%;
  height: 100%;

  .sidebar {
    width: 250px;
    height: 100%;
  }

}
</style>
