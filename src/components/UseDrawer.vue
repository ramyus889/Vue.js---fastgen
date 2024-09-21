<template>
  <div class="card flex justify-center">
    <Drawer
      v-model:visible="visibleRight"
      header="Drawer"
      position="right"
      class="!w-full md:!w-80 lg:!w-[30rem]"
    >
      <div class="flex flex-col gap-5">
        <a href="#" class="hover:underline transition-all duration-700">Features</a>
        <a href="#" class="hover:underline transition-all duration-700">Pricing</a>
        <a href="#" class="hover:underline transition-all duration-700">Blog</a>
        <a href="#" class="hover:underline transition-all duration-700">Changelog</a>
        <a href="#" class="hover:underline transition-all duration-700">Log in</a>
        <a
          href="#"
          class="bg-gradient-to-r to-[#673FDF] from-[#8295FF] px-[16px] py-[8px] text-center rounded-full text-[13px]"
        >
          Sign up
        </a>
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
