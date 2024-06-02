<script setup lang="ts"></script>

<template>
  <div>
    <div class="wrapper1">
      <div class="item item1" />
      <div class="item item2" />
      <div class="item item3" />
      <div class="item item4" />
      <div class="item item5" />
      <div class="item item6" />
      <div class="item item7" />
      <div class="item item8" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div class="wrapper2">
      <div class="itemLeft item1" />
      <div class="itemLeft item2" />
      <div class="itemLeft item3" />
      <div class="itemLeft item4" />
      <div class="itemLeft item5" />
      <div class="itemLeft item6" />
      <div class="itemLeft item7" />
      <div class="itemLeft item8" />
    </div>
    <div class="wrapper2">
      <div class="itemRight item1" />
      <div class="itemRight item2" />
      <div class="itemRight item3" />
      <div class="itemRight item4" />
      <div class="itemRight item5" />
      <div class="itemRight item6" />
      <div class="itemRight item7" />
      <div class="itemRight item8" />
    </div>
  </div>
</template>

<style scoped lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

.wrapper1 {
  position: relative;
  width: 90%;
  max-width: 1536px;
  height: 100px;
  margin-inline: auto;
  margin-top: 5rem;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 100%) 20%,
    rgb(0 0 0 / 100%) 80%,
    rgb(0 0 0 / 0%)
  );

  .item {
    position: absolute;
    left: max(calc(200px * 8), 100%);
    width: 200px;
    height: 100px;
    background-color: red;
    border-radius: 6px;
    animation-name: scroll-left;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}

@keyframes scroll-left {
  to {
    left: -200px;
  }
}

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}

.wrapper2 {
  position: relative;
  width: 90%;
  max-width: 1536px;
  height: 100px;
  margin-inline: auto;
  margin-top: 2rem;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 100%) 20%,
    rgb(0 0 0 / 100%) 80%,
    rgb(0 0 0 / 0%)
  );
}

@keyframes scroll-right {
  to {
    right: -200px;
  }
}

.itemLeft,
.itemRight {
  position: absolute;
  width: 200px;
  height: 100px;
  background-color: #e11d48;
  border-radius: 6px;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.itemLeft {
  left: max(calc(200px * 8), 100%);
  animation-name: scroll-left;
}

.itemRight {
  right: max(calc(200px * 8), calc(100% + 200px));
  animation-name: scroll-right;
}
</style>
