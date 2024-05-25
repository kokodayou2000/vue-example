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
      path: '/algorithm/search/BinarySearch',
      name: '二分搜索',
      component: () => import('@/views/algorithm/search/BinarySearch.vue'),
      meta: {
        title: '简单算法'
      }
    },
    {
      path: '/algorithm/test/Test',
      name: '测试',
      component: () => import('@/views/algorithm/test/Test.vue'),
      meta: {
        title: '测试'
      }
    }
  ]
} as RouteConfigsTable;
