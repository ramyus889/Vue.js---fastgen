import AppComponent from '@/Pages/AppComponents/AppComponent.vue';
import AppBlog from '@/Pages/Blog/AppBlog.vue';
import AppIntegrations from '@/Pages/Integrations/AppIntegrations.vue';
import AppPricing from '@/Pages/Pricing/AppPricing.vue';
import UseHome from '@/RouteComponents/UseHome.vue';
import AppFlow from '../Pages/illaFlow/AppFlow.vue';

export const routes = [
  {
    path: '/',
    component: UseHome
  },
  {
    path: '/illa-flow',
    component: AppFlow
  },
  {
    path: '/integrations',
    component: AppIntegrations
  },
  {
    path: '/app-components',
    component: AppComponent
  },
  {
    path: '/pricing',
    component: AppPricing
  },
  {
    path: '/blog',
    component: AppBlog
  }
];
