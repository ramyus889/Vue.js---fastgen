import AppBlog from '@/Pages/Blog/AppBlog.vue';
import AppChange from '@/Pages/ChangeLog/AppChange.vue';
import AppLogin from '@/Pages/Login/AppLogin.vue';
import UseHome from '@/RouteComponents/UseHome.vue';

export const routes = [
  {
    path: '/',
    component: UseHome
  },
  {
    path: '/Blog',
    component: AppBlog
  },
  {
    path: '/ChangeLog',
    component: AppChange
  },
  {
    path: '/Login',
    component: AppLogin
  }
];
