<script setup lang="ts">
import HeavyComp from '@/views/tips/heavyComp/HeavyComp.vue';
import { useDefer } from '@/views/tips/heavyComp/useDefer';
const defer = useDefer();
</script>

<template>
  <div>
    <div v-for="n in 100" :key="n">
      <HeavyComp v-if="defer(n)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
