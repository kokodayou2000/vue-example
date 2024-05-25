<script setup lang="ts">
import { onMounted, ref } from 'vue';

let canvas = {} as HTMLCanvasElement;
let ctx = {} as CanvasRenderingContext2D;
const inputColorValue = ref('');

onMounted(() => {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d', {
    willReadFrequently: true
  });
});

onMounted(() => {
  init();
  addListener();
});

function addListener() {
  canvas.addEventListener('click', e => {
    const clickX = e.offsetX;
    const clickY = e.offsetY;
    const colorInfoData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const colors = colorInfoData.data;

    // 用户点击的颜色
    const clickIndex = point2Index(clickX, clickY);
    const clickColors = colors.slice(clickIndex, clickIndex + 3);

    changeColor(clickX, clickY, colors, clickColors);
    // 重绘
    ctx.putImageData(colorInfoData, 0, 0);
  });
}
// 修改的[x,y] 修改的颜色，原有的颜色
function changeColor(
  x: number,
  y: number,
  colors: Uint8ClampedArray,
  clickColors: Uint8ClampedArray
) {
  if (!(x >= 0 && y >= 0 && x <= canvas.width && y <= canvas.height)) {
    return;
  }
  const index = point2Index(x, y);
  const curColor = colors.slice(index, index + 3);
  // 如果颜色不一致的话，就不改变颜色了
  if (diff(curColor, clickColors) > 50) {
    return;
  }
  const targetColor = hex2rgba(inputColorValue.value);
  // 如果已经和目标颜色一致的话，就不改变颜色了
  if (diff(curColor, targetColor) === 0) {
    return;
  }
  colors[index] = targetColor[0];
  colors[index + 1] = targetColor[1];
  colors[index + 2] = targetColor[2];
  colors[index + 3] = targetColor[3];
  // or
  // colors.set(targetColor, index);
  // FIXME 栈溢出
  changeColor(x - 1, y, colors, clickColors);
  changeColor(x + 1, y, colors, clickColors);
  changeColor(x, y - 1, colors, clickColors);
  changeColor(x, y + 1, colors, clickColors);
}
function diff(color1, color2) {
  return (
    Math.abs(color1[0] - color2[0]) +
    Math.abs(color1[1] - color2[1]) +
    Math.abs(color1[2] - color2[2])
  );
}
/**
 * imageData中存放像素的数组是一个一维数组
 * 需要通过算法来获取到(x,y) -> x
 * index = (y * width + x) * 4
 * [r,g,b,a].length == 4
 *
 */
function point2Index(x: number, y: number) {
  return (y * canvas.width + x) * 4;
}

function hex2rgba(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b, 255];
}
// 将图片渲染到 canvas上
function init() {
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
  img.src = 'canvas.png';
}
</script>

<template>
  <div>
    <h1>hello</h1>
    {{ inputColorValue }}
    <input type="color" v-model="inputColorValue" />
    <canvas id="canvas" />
  </div>
</template>
