<script setup lang="ts">
import PropValidation from '@/views/vuechanllege/components/PropValidation.vue';
import FunctionComp from '@/views/vuechanllege/components/FunctionComp.vue';
import RenderFunction from '@/views/vuechanllege/components/RenderFunction.vue';

defineOptions({
  name: 'Components'
});
</script>

<template>
  <div>
    <div>
      <PropValidation type="text" />
    </div>
    <div>
      <FunctionComp />
    </div>
    <div>
      <RenderFunction />
    </div>
  </div>
</template>
