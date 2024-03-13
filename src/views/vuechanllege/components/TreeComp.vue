<script setup lang="ts">
import { h, VNode } from 'vue';

interface TreeData {
  key: string;
  title: string;
  children: TreeData[];
}
defineProps<{ data: TreeData[] }>();

const TreeCompRender = props => {
  const list = props.root as TreeData[];
  const deep = 0;
  return list.map(item => {
    return h(
      'ul',
      {
        style: {
          backgroundColor: '#33c6ff',
          marginLeft: '0px'
        }
      },
      genTree(item, deep)
    );
  });
};

const genTree = (node: TreeData, deep: number) => {
  // 假如没有children直接返回即可
  if (!node.children) {
    return h(
      'li',
      {
        style: {
          backgroundColor: '#ee6' + deep * 100,
          marginLeft: deep * 10 + 'px'
        }
      },
      node.title
    );
  }

  const tempTree = [] as VNode[];
  node.children.forEach(item => {
    tempTree.push(genTree(item, deep + 1));
  });

  return h(
    'li',
    {
      key: node.title,
      style: {
        backgroundColor: '#9bc' + deep * 100,
        marginLeft: deep * 10 + 'px'
      }
    },
    node.title,
    tempTree
  );
};
</script>

<template>
  <h2>树组件</h2>
  <TreeCompRender :root="data" />
</template>
