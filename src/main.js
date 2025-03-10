import './style.css';

import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';

import UseTabs from './components/UseTabs.vue';
import UseChangeBlog1 from './Pages/ChangeLog/ChangeComponents/UseChangeBlog1.vue';
import UseChangeBlog2 from './Pages/ChangeLog/ChangeComponents/UseChangeBlog2.vue';
import UseChangeBlog3 from './Pages/ChangeLog/ChangeComponents/UseChangeBlog3.vue';

import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './router/routes.js';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

app.component('UseTabs', UseTabs);
app.component('UseChangeBlog1', UseChangeBlog1);
app.component('UseChangeBlog2', UseChangeBlog2);
app.component('UseChangeBlog3', UseChangeBlog3);
// app.component('UseChangeBlog4', UseChangeBlog4);
// app.component('UseChangeBlog5', UseChangeBlog5);
// app.component('UseChangeBlog6', UseChangeBlog6);
// app.component('UseChangeBlog7', UseChangeBlog7);
// app.component('UseChangeBlog8', UseChangeBlog8);
// app.component('UseChangeBlog9', UseChangeBlog9);
// app.component('UseChangeBlog10', UseChangeBlog10);

app.use(router);
app.use(createPinia());
app.mount('#app');
