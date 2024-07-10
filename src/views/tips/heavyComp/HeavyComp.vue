<script setup lang="ts"></script>

<template>
  <div class="item-container">
    <div class="item" v-for="n in 5000" :key="n" />
  </div>
</template>

<style scoped>
.item-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 3px solid #f40;
}

.item {
  width: 5px;
  height: 3px;
  margin: 0.1em;
  background: #ccc;
}
</style>
