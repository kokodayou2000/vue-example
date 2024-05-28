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
      path: '/tips/curring/Curring',
      name: 'Curring',
      component: () => import('@/views/tips/curring/Curring.vue'),
      meta: { title: 'curring' }
    }
  ]
} as RouteConfigsTable;
