import AppBlog from '@/Pages/Blog/AppBlog.vue';
import UseBlogLink1 from '@/Pages/Blog/BlogLink/UseBlogLink1.vue';
import UseBlogLink2 from '@/Pages/Blog/BlogLink/UseBlogLink2.vue';
import UseBlogLink3 from '@/Pages/Blog/BlogLink/UseBlogLink3.vue';
import UseBlogLink4 from '@/Pages/Blog/BlogLink/UseBlogLink4.vue';
import UseBlogLink5 from '@/Pages/Blog/BlogLink/UseBlogLink5.vue';
import UseBlogLink6 from '@/Pages/Blog/BlogLink/UseBlogLink6.vue';
import UseBlogLink7 from '@/Pages/Blog/BlogLink/UseBlogLink7.vue';
import UseBlogLink8 from '@/Pages/Blog/BlogLink/UseBlogLink8.vue';
import UseBlogLink9 from '@/Pages/Blog/BlogLink/UseBlogLink9.vue';
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
  },
  {
    path: '/UseBlogLink1',
    component: UseBlogLink1
  },
  {
    path: '/UseBlogLink2',
    component: UseBlogLink2
  },
  {
    path: '/UseBlogLink3',
    component: UseBlogLink3
  },
  {
    path: '/UseBlogLink4',
    component: UseBlogLink4
  },
  {
    path: '/UseBlogLink5',
    component: UseBlogLink5
  },
  {
    path: '/UseBlogLink6',
    component: UseBlogLink6
  },
  {
    path: '/UseBlogLink7',
    component: UseBlogLink7
  },
  {
    path: '/UseBlogLink8',
    component: UseBlogLink8
  },
  {
    path: '/UseBlogLink9',
    component: UseBlogLink9
  }
];
