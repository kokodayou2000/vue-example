<script setup lang="ts">
import MyButton from '@/views/vuechanllege/components/MyButton';

const onClick = () => {
  console.log('onClick');
};
</script>
<template>
  <MyButton :disabled="false" @custom-click="onClick"> my button </MyButton>
</template>
