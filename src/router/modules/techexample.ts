export default {
  path: '/techexample',
  redirect: '/techexample/waterfallFlow/index',
  meta: {
    icon: 'informationLine',
    title: '一些例子',
    // showLink: false,
    rank: 10
  },
  children: [
    {
      path: '/waterfallFlow/index',
      name: 'waterfallFlow',
      component: () => import('@/views/techexample/waterfallFlow/index.vue'),
      meta: { title: '瀑布流' }
    },
    {
      path: '/drag/ClassTable',
      name: 'ClassTable',
      component: () => import('@/views/techexample/drag/ClassTable.vue'),
      meta: { title: '拖拽课程表' }
    }
  ]
} as RouteConfigsTable;
