<template>
  <div class="main-page">
    <!--    <ListComponent items="">-->
    <!--      <template #item>-->
    <!--        -->
    <!--      </template>-->
    <!--    </ListComponent>-->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import TicTacToeComponent from "@/components/tic-tac-toe/TicTacToeComponent.vue";
import SidebarComponent from "@/components/sidebar/SidebarComponent.vue";
import ListComponent from "@/components/UI/ListComponent.vue";

onMounted(async () => {});
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";
</style>
