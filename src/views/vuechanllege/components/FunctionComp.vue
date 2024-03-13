<script setup lang="ts">
import { h, ref } from 'vue';

/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
 */
const ListComponent = (props: IProp, { emit }) => {
  console.log(props);
  const { list, activeIndex } = props;
  console.log(activeIndex);
  console.log(list);
  const listVNodes = list.map((item, index) => {
    return h(
      'li',
      {
        key: index,
        style: {
          backgroundColor: activeIndex == index ? 'red' : ''
        },
        onClick: () => emit('toggle', index)
      },
      item.name
    );
  });
  return h('ul', listVNodes);
};
// 通过这种方式设定的参数能避免将参数识别出 active-index 的情况
ListComponent.props = ['list', 'activeIndex'];
interface IListType {
  name: string;
}
interface IProp {
  list: IListType[];
  activeIndex: number;
}

const list = [
  {
    name: 'John'
  },
  {
    name: 'Doe'
  },
  {
    name: 'Smith'
  }
];

const activeIndex = ref(0);

function toggle(index: number) {
  activeIndex.value = index;
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>
