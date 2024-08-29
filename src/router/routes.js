const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'typography', component: () => import('pages/Typography.vue') },
      { path: 'colors', component: () => import('pages/Colors.vue') },
      { path: 'spacing', component: () => import('pages/Spacing.vue') },
      {
        path: 'classes-variables',
        component: () => import('pages/ClassesVariables.vue'),
      },
      {
        path: 'flex-grid-1',
        component: () => import('pages/FlexGrid1.vue'),
      },
      {
        path: 'profile',
        component: () => import('pages/profile/ProfilePage.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/profile/ProfilePosts.vue'),
          },
          {
            path: 'saved',
            component: () => import('pages/profile/ProfileSaved.vue'),
          },
          {
            path: 'tagged',
            component: () => import('pages/profile/ProfileTagged.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/sub',
    component: () => import('layouts/SubLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/sub/IndexPage.vue'),
      },
      {
        path: 'saved',
        component: () => import('pages/profile/ProfileSaved.vue'),
      },
      {
        path: 'tagged',
        component: () => import('pages/profile/ProfileTagged.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
