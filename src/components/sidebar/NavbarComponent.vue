<template>
  <nav class="navbar">
    <ul class="links-list">
      <li>
        <router-link to="" class="link">Список игр</router-link>
      </li>
      <li>
        <router-link to="" class="link">Лучшие результаты</router-link>
      </li>
      <li>
        <router-link to="" class="link">Выйти</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>


<style scoped lang="scss">
@import "@/styles/_base.scss";

.navbar {
  background-color: transparent;
  padding: 1rem;
  width: 100%;

  .links-list {
    list-style: none;
    margin: 0;
    padding: 0;

    .link {
      padding: 10px 10px;
      position: relative;
      display: block;
      color: #3c3c3c;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #1976d2;
      }

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 3px;
        height: 24px;
        background-color: transparent;
        transition: all 0.2s ease-in-out;
      }

      &:hover:before {
        background-color: #1976d2;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #e5e5e5;
        transition: all 0.2s ease-in-out;
      }

      &:hover:after {
        background-color: #1976d2;
        transform: scaleX(1);
      }

      &:active {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
}
</style>