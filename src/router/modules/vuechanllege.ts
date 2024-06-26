export default {
  path: '/vuechanllege',
  redirect: '/vuechanllege/builtIns/index',
  meta: {
    icon: 'informationLine',
    title: 'vue挑战赛',
    // showLink: false,
    rank: 12
  },
  children: [
    {
      path: '/builtIns/index',
      name: 'BuiltIns',
      component: () => import('@/views/vuechanllege/builtIns/index.vue'),
      meta: { title: '内置插件' }
    },
    {
      path: '/cssFeatures/index',
      name: 'CssFeatures',
      component: () => import('@/views/vuechanllege/cssFeatures/index.vue'),
      meta: { title: 'css特性' }
    },
    {
      path: '/components/index',
      name: 'Components',
      component: () => import('@/views/vuechanllege/components/index.vue'),
      meta: { title: '组件' }
    }
  ]
} as RouteConfigsTable;
