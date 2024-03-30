<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { binarySearchVisible } from '@/views/algorithm/utils/search';

defineOptions({
  name: 'BinarySearch'
});

const state = reactive({
  list: [2, 3, 4, 5, 6, 7] as number[],
  left: 0,
  right: 0,
  mid: 0,
  target: 0
});
const step = ref(0);
const flag = ref(false);
const binarySearchFun = () => {
  if (state.list[state.mid] === state.target) {
    flag.value = true;
    return;
  }
  step.value += 1;
  const res = binarySearchVisible(
    state.list,
    state.left,
    state.right,
    state.target
  );
  state.left = res.left;
  state.right = res.right;
  state.mid = res.mid;
};
const init = () => {
  if (state.right === 0) {
    state.right = state.list.length - 1;
    state.target = 3;
  }
  state.mid = 0;
  step.value = 0;
  flag.value = false;
};
const selectTarget = (item: number) => {
  state.target = item;
  init();
};
const reset = () => {
  init();
};
onMounted(() => {
  init();
});
</script>

<template>
  <div>
    <div>二分排序</div>
    <div>{{ 'step: ' + step }}</div>
    <div v-for="(item, index) in state.list" :key="item">
      <div @click="selectTarget(item)">
        <div class="flex gap-4">
          <div style="color: #1b5700" v-if="item === state.target">
            {{ '-->' }}
          </div>
          <div v-else>{{ '---' }}</div>
          {{ item }}
          <div style="color: #1b5700" v-if="index === state.mid">
            {{ '<--' }}
          </div>
        </div>
      </div>
    </div>
    <el-button @click="binarySearchFun">下一步</el-button>
    <el-button @click="reset">重置</el-button>
  </div>
</template>
