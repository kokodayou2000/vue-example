<script setup lang="ts">
const msg = 'Hello World';
</script>

<template>
  <div>
    <div id="other">other</div>
    <div>
      <teleport to="#other">
        <div>{{ msg }}</div>
      </teleport>
    </div>
  </div>
</template>
