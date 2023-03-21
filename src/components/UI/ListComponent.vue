<template>
  <ul class="list-component">
    <li class="list__item" v-for="(item, index) in items" :key="item.id">
      <slot name="item" :item="item"></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array,
    required: true,
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.list-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .list__item {
    width: 100%;
  }
}
</style>