<script setup lang="ts">
import { useTheme } from '@/views/tips/cssTheme/useTheme';

const { theme, toggleTheme } = useTheme();
</script>

<template>
  <div class="container" :data-theme="theme">
    <button @click="toggleTheme">修改主题</button>/
    <div class="inner">hello</div>
  </div>
</template>

<style scoped lang="scss">
.container[data-theme='dark'] {
  --text-color: #fff;
  --bg: #000;
}

.container {
  --text-color: #000;
  --bg: #fff;
}

.inner {
  color: var(--text-color);
  background-color: var(--bg);
}
</style>
