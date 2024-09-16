import AppIntegrations from '@/Pages/Integrations/AppIntegrations.vue';
import UseAppwrite from '@/Pages/Integrations/dataComponents/UseAppwrite.vue';
import UseMariaDB from '@/Pages/Integrations/dataComponents/UseMariaDB.vue';
import UseMongoDB from '@/Pages/Integrations/dataComponents/UseMongoDB.vue';
import UseMySQL from '@/Pages/Integrations/dataComponents/UseMySQL.vue';
import UseOracle from '@/Pages/Integrations/dataComponents/UseOracle.vue';
import UsePostgreSQL from '@/Pages/Integrations/dataComponents/UsePostgreSQL.vue';
import UseRedis from '@/Pages/Integrations/dataComponents/UseRedis.vue';
import UseTiDB from '@/Pages/Integrations/dataComponents/UseTiDB.vue';
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
    path: '/mysql',
    component: UseMySQL
  },
  {
    path: '/PostgreSQL',
    component: UsePostgreSQL
  },
  {
    path: '/MongoDB',
    component: UseMongoDB
  },
  {
    path: '/MariaDB',
    component: UseMariaDB
  },
  {
    path: '/TiDB',
    component: UseTiDB
  },
  {
    path: '/Redis',
    component: UseRedis
  },
  {
    path: '/Appwrite',
    component: UseAppwrite
  },
  {
    path: '/Oracle',
    component: UseOracle
  }
];
