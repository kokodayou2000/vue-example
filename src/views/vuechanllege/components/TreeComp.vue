<script setup lang="ts">
import { h } from 'vue';

interface TreeData {
  key: string;
  title: string;
  children: TreeData[];
}
defineProps<{ data: TreeData[] }>();

const TreeCompRender = props => {
  return helper(props.root);
};

const helper = (root: TreeData) => {
  // TODO sos 我不会递归
  console.log(root);
  // 假如没有children直接返回即可
  if (!root.children) {
    return h(
      'li',
      {
        style: {
          backgroundColor: 'green'
        }
      },
      root.title
    );
  }
  const vNodeList = [];
  root.children.forEach(item => {
    const h = helper(item);
    vNodeList.push(h);
    console.log(vNodeList.length);
  });
  console.log(vNodeList.length);
  return h('ul', vNodeList);
};
</script>

<template>
  <TreeCompRender v-for="item in data" :root="item" :key="item.key" />
</template>
