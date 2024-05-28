<script setup lang="ts">
import { ref } from 'vue';

class TrafficLight {
  // 记录了该颜色的持续时间和下一个灯的颜色
  private _colors: {
    red: { duration: number; next: string };
    green: { duration: number; next: string };
    yellow: { duration: number; next: string };
    initial: { color: string };
  };
  private _duration: number;
  private _currentColor: string;
  private _curr_color_start_time: number;
  constructor(options) {
    const {
      red_duration = 7,
      green_duration = 7,
      yellow_duration = 3,
      initial = 'green'
    } = options || {};
    this._colors = {
      red: {
        duration: red_duration,
        next: 'yellow'
      },
      green: {
        duration: green_duration,
        next: 'yellow'
      },
      yellow: {
        duration: yellow_duration,
        next: ''
      },
      initial: {
        color: initial
      }
    };
    // 先切换到默认的
    this._switch(initial);
  }
  _switch(color: string) {
    this._currentColor = color;
    this._duration = this._colors[color].duration;
    this._curr_color_start_time = Date.now();
  }

  /**
   * 当前灯是红灯的时候，设置下一个灯为黄灯，并设定黄灯的下一个是绿灯
   */
  _next() {
    if (this._currentColor === 'red') {
      this._colors.yellow.next = 'green';
    } else if (this._currentColor === 'green') {
      this._colors.yellow.next = 'red';
    }
    // 获取当前灯的next
    this._switch(this._colors[this._currentColor].next);
    console.log(this._colors);
    console.log(this._currentColor);
  }
  getCurrentLight() {
    // this._curr_color_start_time 是当切换灯的时候记录的时间
    // 该颜色灯的剩余持续时间 (s) - (当前时间 - 上一次切换灯的时间) / 1000
    const remain = Math.ceil(
      this._duration - (Date.now() - this._curr_color_start_time) / 1000
    );
    if (remain < 0) {
      this._next();
      return this.getCurrentLight();
    }
    return {
      color: this._currentColor,
      remain: remain
    };
  }
}

const light = new TrafficLight({
  red: 3,
  yellow: 2,
  green: 5,
  initial: 'red'
});
const remainTime = ref(0);
const currentColor = ref('');
function raf() {
  requestAnimationFrame(() => {
    const current = light.getCurrentLight();
    remainTime.value = current.remain;
    currentColor.value = current.color;
    raf();
  });
}
raf();
</script>

<template>
  <div>
    <h1>Hello</h1>
    <button @click="light._next()">下一个</button>
    <div class="traffic-light">
      <div ref="container" class="light-container">
        <div class="light" :style="{ backgroundColor: currentColor }" />
      </div>
      <div class="time">{{ remainTime }}</div>
      <div class="color">{{ currentColor }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.traffic-light {
  display: flex;

  .light-container {
    border: 1px solid red;
  }
}

.light {
  width: 20px;
  height: 20px;
  background-color: gray;
}
</style>
