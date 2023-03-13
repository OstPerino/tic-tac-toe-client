<template>
  <div class="app">
    <SidebarComponent v-if="showSidebar" />
    <div :class="setMainPos" class="main">
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

const setMainPos = computed(() => {
  if (route.meta.requiresAuth) {
    return "with-sidebar";
  }
});
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

  .with-sidebar {
    position: absolute;
    left: 250px;
    top: 0;
  }
}
</style>
