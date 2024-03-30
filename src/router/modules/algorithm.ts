export default {
  path: '/algorithm',
  redirect: '/algorithm/index',
  meta: {
    icon: 'informationLine',
    title: '简单算法',
    rank: 13
  },
  children: [
    {
      path: '/algorithm/index',
      name: '简单算法',
      component: () => import('@/views/algorithm/index.vue'),
      meta: {
        title: '简单算法'
      }
    }
  ]
} as RouteConfigsTable;
