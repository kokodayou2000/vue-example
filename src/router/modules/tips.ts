export default {
  path: '/tips',
  redirect: '/tips/index',
  meta: {
    icon: 'informationLine',
    title: '技巧和小案例',
    rank: 10
  },
  children: [
    {
      path: '/tips/signalLight/SignalLight',
      name: 'SignalLight',
      component: () => import('@/views/tips/signalLight/SignalLight.vue'),
      meta: { title: '交通信号灯' }
    },
    {
      path: '/tips/animate/CustomAnimation',
      name: 'CustomAnimation',
      component: () => import('@/views/tips/animate/CustomAnimation.vue'),
      meta: { title: '动画' }
    },
    {
      path: '/tips/cssTheme/Theme',
      name: 'Theme',
      component: () => import('@/views/tips/cssTheme/Theme.vue'),
      meta: { title: '背景颜色' }
    }
  ]
} as RouteConfigsTable;
