import './style.css';

import Aura from '@primevue/themes/aura';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';

import UseTabs from './components/UseTabs.vue';

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
  routes
});

app.component('UseTabs', UseTabs);

app.use(router);
app.use(createPinia());
app.mount('#app');
