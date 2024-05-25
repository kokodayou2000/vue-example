<script setup lang="ts">
import { ref } from 'vue';
import { lodash_throttle } from '@/views/advanced/throttle/lodash_throttle';

defineOptions({
  name: 'Throttle'
});
const divRef1 = ref({} as HTMLDivElement);
const divRef2 = ref({} as HTMLDivElement);
const divRef3 = ref({} as HTMLDivElement);

// 10w
const totalNum = 100000;
let index = 0;
function unThrottle() {
  if (divRef1.value !== null) {
    // remove all childNode
    divRef1.value.innerHTML = '';
    for (let index = 0; index < totalNum; index++) {
      const childDiv = document.createElement('div'); // 创建一个新的 div 元素
      childDiv.innerText = String(index);
      childDiv.style.color = 'red';
      divRef1.value.appendChild(childDiv);
    }
  }
}

function throttle1() {
  if (divRef2.value !== null) {
    // remove all childNode
    divRef2.value.innerHTML = '';
    index = 0;
    _run();
  }
}

/**
 * 浏览器端使用 requestIdleCallback 能减少卡顿
 */
function _run() {
  if (index >= totalNum) {
    return;
  }
  requestIdleCallback(idle => {
    while (idle.timeRemaining() > 0 && index < totalNum) {
      const childDiv = document.createElement('div'); // 创建一个新的 div 元素
      childDiv.style.color = 'blue';
      childDiv.innerText = String(index);
      divRef2.value.appendChild(childDiv);
      index++;
    }
    _run();
  });
}
const wrapperFun = lodash_throttle(_run2);
function throttle2() {
  if (divRef3.value !== null) {
    divRef3.value.innerHTML = '';
    // 如果未达到条件，就限流的执行
    while (index <= totalNum) {
      wrapperFun();
      console.log(index);
    }
  }
}
function _run2() {
  const childDiv = document.createElement('div'); // 创建一个新的 div 元素
  childDiv.style.color = 'green';
  childDiv.innerText = String(index);
  divRef3.value.appendChild(childDiv);
  index++;
}
</script>

<template>
  <div class="flex">
    <div class="flex-1 w-8">
      <button @click="unThrottle">非节流函数</button>
      <div ref="divRef1" />
    </div>
    <div class="flex-1 w-8">
      <button @click="throttle1">节流函数1</button>
      <div ref="divRef2" />
    </div>
    <div class="flex-1 w-8">
      <button @click="throttle2">节流函数2</button>
      <div ref="divRef3" />
    </div>
  </div>
</template>
