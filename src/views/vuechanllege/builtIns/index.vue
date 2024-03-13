<script setup lang="ts">
import DomPortal from '@/views/vuechanllege/builtIns/dom/DomPortal.vue';
import Practical1 from '@/views/vuechanllege/builtIns/dom/Practical1.vue';
import Practical2 from '@/views/vuechanllege/builtIns/dom/Practical2.vue';
import OptimizePerfDirective from '@/views/vuechanllege/builtIns/OptimizePerfDirective.vue';

defineOptions({
  name: 'BuiltIns'
});
</script>
<template>
  <div>
    <div>
      <h3>dom传送门</h3>
      <div>
        <DomPortal />
      </div>
      <div>
        <Practical1 />
      </div>
      <div>
        <Practical2 />
      </div>
      <div>
        <OptimizePerfDirective />
      </div>
    </div>
  </div>
</template>
