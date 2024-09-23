<template>
  <div class="card flex justify-center">
    <Drawer
      v-model:visible="visibleRight"
      header="Drawer"
      position="right"
      class="md:!w-80 lg:!w-[30rem]"
    >
      <div class="flex flex-col gap-5">
        <RouterLink
          to="/"
          @click="visibleRight = false"
          class="hover:underline transition-all duration-700"
          >Home</RouterLink
        >
        <RouterLink
          to="/Blog"
          @click="visibleRight = false"
          class="hover:underline transition-all duration-700"
          >Blog</RouterLink
        >
        <RouterLink
          to="/Changelog"
          @click="visibleRight = false"
          class="hover:underline transition-all duration-700"
          >Changelog</RouterLink
        >
        <RouterLink
          to="/Login"
          @click="visibleRight = false"
          class="hover:underline transition-all duration-700"
          >Log in</RouterLink
        >
        <RouterLink
          to="/Login"
          @click="visibleRight = false"
          class="bg-gradient-to-r to-[#673FDF] from-[#8295FF] px-[16px] py-[8px] text-center rounded-full text-[13px]"
        >
          Sign up
        </RouterLink>
      </div>
    </Drawer>
    <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Drawer from 'primevue/drawer';

import Button from 'primevue/button';

const visibleRight = ref(false);
</script>
