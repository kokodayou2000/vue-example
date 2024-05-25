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
      path: '/advanced/throttle/Throttle',
      name: 'Throttle',
      component: () => import('@/views/advanced/throttle/Throttle.vue'),
      meta: { title: '分流组件' }
    }
  ]
} as RouteConfigsTable;
