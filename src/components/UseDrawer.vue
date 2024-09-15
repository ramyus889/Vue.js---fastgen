<script setup>
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
import { ref } from 'vue';
import UseMenuBar from './UseMenuBar.vue';
const visibleRight = ref(false);
</script>
<template>
  <div class="card flex justify-center">
    <Drawer v-model:visible="visibleRight" header="Illa Cloud Pricing" position="right">
      <div class="flex flex-col gap-4">
        <UseMenuBar />
        <a href="#" class="">Pricing</a>
        <a href="#" class="">Blog</a>
        <a href="#" class="">Contact Us</a>
        <a href="#" class="">Login</a>
      </div>
    </Drawer>
    <Button icon="pi pi-arrow-left" severity="secondary" @click="visibleRight = true" />
  </div>
</template>
