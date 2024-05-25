<script setup lang="ts">
import Debounce from '@/views/advanced/debounce/Debounce.vue';

defineOptions({
  name: 'Advanced'
});
</script>

<template>
  <div>
    <div>节流，防抖。。。</div>
    <Debounce />
  </div>
</template>
