<template>
  <div class="fs-waterfall-container" v-loading="state.loading">
    <div class="fs-waterfall-content" ref="contentRef">
      <!-- 虚拟列表的感觉     -->
      <div class="fs-waterfall-list">
        <div
          class="fs-waterfall-item"
          v-for="(item, index) in state.imageList"
          :key="item.id"
          :style="{
            width: `${state.imageWidth}px`,
            transform: `translate3d(${imagePos[index].x}px, ${imagePos[index].y}px, 0)`
          }"
        >
          <slot name="item" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import type { IImageItem, IWaterFallProps } from '../type';
import { debounce, rafThrottle } from '../tool';

// 组件参数
const props = defineProps<IWaterFallProps>();

// 插槽
defineSlots<{
  item(props: { item: IImageItem }): any;
}>();
// 元素
const contentRef = ref<HTMLDivElement>();

// 记录行高
const columnHeight = ref<number[]>([]);

// 图片位置
const imagePos = ref<
  {
    x: number;
    y: number;
  }[]
>([]);

// 视口状态
const state = reactive({
  loading: false,
  isFinish: false,
  page: 1,
  imageWidth: 0,
  imageList: [] as IImageItem[]
});

// 获取最小列位置和高度
const min = computed(() => {
  let minIndex = -1,
    minHeight = Infinity;
  for (let i = 0; i < columnHeight.value.length; i++) {
    const h = columnHeight.value[i];
    if (h < minHeight) {
      minIndex = i;
      minHeight = h;
    }
  }
  return {
    minIndex,
    minHeight
  };
});

// 获取图片列表
const getImageList = async (
  page: number,
  pageSize: number,
  isFirst: boolean
) => {
  if (state.isFinish) return;
  state.loading = true;
  const list = await props.request(page, pageSize);
  state.page++;
  if (!list.length) {
    state.isFinish = true;
    return;
  }
  computedImagePos(list, isFirst);
  state.imageList = [...state.imageList, ...list];
  state.loading = false;
};

// 计算图片位置
const computedImagePos = (list: IImageItem[], isFirst: boolean) => {
  list.forEach((item, index) => {
    const imageHeight = Math.floor(
      (item.height * state.imageWidth) / item.width
    );
    if (isFirst && index < props.column) {
      imagePos.value.push({
        x:
          index % props.column !== 0
            ? index * state.imageWidth + props.gap * index
            : index * state.imageWidth,
        y: 0
      });
      columnHeight.value.push(imageHeight + props.gap);
    } else {
      const { minIndex, minHeight } = min.value;
      imagePos.value.push({
        x:
          minIndex % props.column !== 0
            ? minIndex * state.imageWidth + props.gap * minIndex
            : minIndex * state.imageWidth,
        y: minHeight
      });
      columnHeight.value[minIndex] += imageHeight + props.gap;
    }
  });
};
// 滚动时间，使用 rafThrottle 节流
const handleScroll = rafThrottle(() => {
  const { scrollTop, clientHeight, scrollHeight } = contentRef.value!;
  const bottom = scrollHeight - clientHeight - scrollTop;
  if (bottom <= 100) {
    !state.loading && getImageList(state.page, props.pageSize, false);
  }
});

const handleResize = debounce(() => {
  if (contentRef.value) {
    state.imageWidth =
      (contentRef.value.clientWidth - (props.column - 1) * props.gap) /
      props.column;
    imagePos.value = [];
    columnHeight.value = [];
    computedImagePos(state.imageList, true);
  }
}, 300);

const init = () => {
  if (contentRef.value) {
    state.imageWidth =
      (contentRef.value.clientWidth - (props.column - 1) * props.gap) /
      props.column;
    getImageList(state.page, props.pageSize, true);
    contentRef.value.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  }
};

onMounted(() => {
  init();
});

onUnmounted(() => {
  contentRef.value &&
    contentRef.value.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped lang="scss">
.fs-waterfall {
  &-container {
    width: 100%;
    height: 100%;
  }

  &-content {
    width: 100%;
    height: 100%;
    // 为了让图片能上下滚动
    overflow-y: scroll;
  }

  &-list {
    // 相对定位,相对与容器
    position: relative;
    width: 100%;
  }

  &-item {
    // 绝对定位, 并不是使用 top left 修改位置，
    // 而是使用 transform 来做位置修正的
    position: absolute;
    top: 0;
    left: 0;
    // 避免边框影响定位，比如外部容器宽度 100 内部容器 宽度 100% + padding 10
    // 一般情况下，会外溢10px，设置border就不会外溢了
    // 使用 border-box 你的宽度就 包含了 (border + padding)
    box-sizing: border-box;
    transition: all 0.3s;
  }
}
</style>
