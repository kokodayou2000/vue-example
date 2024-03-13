<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: value => {
      if (typeof value === 'string') {
        return [
          'primary',
          'ghost',
          'dashed',
          'link',
          'text',
          'default'
        ].includes(value);
      }
      return false;
    }
  }
});
</script>

<template>
  <div>
    {{ props.type }}
    <button>Button</button>
  </div>
</template>
