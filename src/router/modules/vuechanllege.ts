export default {
  path: '/vuechanllege',
  redirect: '/vuechanllege/builtIns/index',
  meta: {
    icon: 'informationLine',
    title: 'vue挑战赛',
    // showLink: false,
    rank: 9
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
    }
  ]
} as RouteConfigsTable;
