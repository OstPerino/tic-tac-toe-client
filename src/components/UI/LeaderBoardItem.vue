<template>
  <div class="leaderboard-item">
    {{ props.leaderBoard?.username }}
    {{ props.leaderBoard['games-won'] }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  leaderBoard: {
    type: Object,
    required: true,
  }
})
</script>

<style scoped lang="scss">
.leaderboard-item {
  border: 1px solid #6d9bf1;
  padding: 1rem;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>