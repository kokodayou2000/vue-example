<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'CssFeatures'
});

const width = ref(10);
</script>

<template>
  <div>
    CssFeatures
    <div class="w">
      {{ width }}
      <el-button @click="width++">左移</el-button>
    </div>
  </div>
</template>

<style scoped>
.w {
  margin-left: v-bind(width + 'px');
}
</style>
