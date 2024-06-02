<script setup lang="ts">
import { ref } from 'vue';

const price = ref('0');
function animation(
  duration: number,
  from: number,
  to: number,
  onProgress: Function
) {
  let value = from;
  const speed = (to - from) / duration;
  const start = Date.now();
  function _run() {
    const t = Date.now() - start;
    // 当前时间超过了持续时间就结束
    if (t >= duration) {
      value = to;
      onProgress(value);
      return;
    }
    value = from + t * speed;
    onProgress(value);
    //下一次改变
    requestAnimationFrame(_run);
  }
  _run();
}
function onProgress(value: number) {
  price.value = value.toFixed(2);
}

const doProcess = () => {
  console.log('doProcess');
  animation(2000, 4599, 30, onProgress);
};
</script>

<template>
  <div>
    <button @click="doProcess" class="btn">触发动画</button>
    <label>价格: {{ price }}</label>
  </div>
</template>

<style scoped lang="scss">
.btn {
  background: #13ce66;
}
</style>
