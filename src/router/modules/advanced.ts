export default {
  path: '/advanced',
  redirect: '/advanced/index',
  meta: {
    icon: 'informationLine',
    title: '高阶',
    rank: 20
  },
  children: [
    {
      path: '/advanced/debounce/Debounce',
      name: 'Debounce',
      component: () => import('@/views/advanced/debounce/Debounce.vue'),
      meta: { title: '防抖组件' }
    },
    {
      path: '/advanced/lodash_throttle/Throttle',
      name: 'Throttle',
      component: () => import('@/views/advanced/throttle/Throttle.vue'),
      meta: { title: '分流组件' }
    },
    {
      path: '/advanced/canvas/Canvas',
      name: 'Throttle',
      component: () => import('@/views/advanced/canvas/Canvas.vue'),
      meta: { title: 'canvas' }
    },
    {
      path: '/advanced/infiniteScroll/InfiniteScroll',
      name: 'InfiniteScroll',
      component: () =>
        import('@/views/advanced/infiniteScroll/InfiniteScroll.vue'),
      meta: { title: '无限滚动' }
    }
  ]
} as RouteConfigsTable;
