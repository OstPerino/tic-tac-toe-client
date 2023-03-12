<template>
  <form class="submit-form" @click.prevent>
    <slot name="header"></slot>
    <slot name="inputs"></slot>
    <slot name="error"></slot>
    <slot name="links"></slot>
    <slot name="button"></slot>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/styles/_base.scss";

.submit-form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;
  margin: auto;
  padding: 25px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
}
</style>
