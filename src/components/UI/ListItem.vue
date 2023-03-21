<template>
  <div class="list-item">
    <span> {{ `${title} ${openGame?.creator_name}` }} </span>
    <CustomButton :disabled="false" @click="$emit('get:openGame', openGame)">
      Присоединиться
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import { OpenGame } from "@/api/controlLobbyServices/types";
import CustomButton from "@/components/UI/CustomButton.vue";

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

<style scoped>
.list-item {
  border: 1px solid #6d9bf1;
  padding: 1rem;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
