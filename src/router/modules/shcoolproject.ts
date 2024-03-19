export default {
  path: '/schoolproject',
  redirect: '/schoolproject/index',
  meta: {
    icon: 'informationLine',
    title: '学校的项目',
    // showLink: false,
    rank: 11
  },
  children: [
    {
      path: '/courseList/index',
      name: 'CourseList',
      component: () => import('@/views/schoolproject/courseList/index.vue'),
      meta: { title: '课表' }
    },
    {
      path: '/question/index',
      name: 'Question',
      component: () => import('@/views/schoolproject/question/index.vue'),
      meta: { title: '题库' }
    }
  ]
} as RouteConfigsTable;
