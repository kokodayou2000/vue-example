<script setup lang="ts">
import { ref } from 'vue';

function delay(ms: number) {
  const star = Date.now();
  while (Date.now() - star < ms) {
    /* empty */
  }
}
const result = ref([]);
// FPS
// 用户卡顿包含很多种情况，事件延迟，FID首次输入延迟
// 布局偏移

// 使用浏览器自带的api
const observer = new PerformanceObserver(list => {
  for (const entry of list.getEntries()) {
    result.value.push(entry);
  }
});

// 指定监控类型
observer.observe({
  // 长任务，就是某个任务(事件)执行时间过长
  entryTypes: ['longtask']
});
</script>

<template>
  <div>
    <h1>监控用户卡顿</h1>
    <el-link href="https://developer.mozilla.org/zh-CN/docs/Web/API/Performance"
      >mdn api</el-link
    >
    {{ result }}
    <el-button @click="delay(500)">耗时任务</el-button>
  </div>
</template>
