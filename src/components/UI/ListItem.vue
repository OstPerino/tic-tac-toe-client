<template>
  <div class="list-item">
    {{ `${title} ${openGame?.creator_name}` }}
  </div>
</template>

<script setup lang="ts">
import { OpenGame } from "@/api/controlLobbyServices/types";

const props = defineProps({
  openGame: {
    type: Object as () => OpenGame,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});
</script>

<style scoped></style>
