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
      path: '/virtualList/index',
      name: 'virtualList',
      component: () => import('@/views/techexample/virtualList/index.vue'),
      meta: { title: '虚拟列表' }
    }
  ]
} as RouteConfigsTable;
