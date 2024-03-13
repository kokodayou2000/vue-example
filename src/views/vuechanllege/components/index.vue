<script setup lang="ts">
import PropValidation from '@/views/vuechanllege/components/PropValidation.vue';
import FunctionComp from '@/views/vuechanllege/components/FunctionComp.vue';
import RenderFunction from '@/views/vuechanllege/components/RenderFunction.vue';
import TreeComp from '@/views/vuechanllege/components/TreeComp.vue';

defineOptions({
  name: 'Components'
});
interface TreeData {
  key: string;
  title: string;
  children: TreeData[];
}
const data = [
  {
    key: 'a1',
    title: 'A1',
    children: [
      {
        key: 'a2',
        title: 'A2',
        children: [
          {
            key: 'a3',
            title: 'A3'
          }
        ]
      }
    ]
  },
  {
    key: 'b1',
    title: 'B1',
    children: [
      {
        key: 'b2',
        title: 'B2'
      }
    ]
  }
] as TreeData[];
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
    <div>
      <TreeComp :data="data" />
    </div>
  </div>
</template>
