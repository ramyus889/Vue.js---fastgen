<template>
  <div class="">
    <Menubar :model="items" class="usebg-transparent" />
  </div>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
  {
    label: 'Products',
    items: [
      {
        label: 'ILLA Flow',
        command: () => router.push({ name: 'illa-flow' })
      },
      {
        label: 'Integrations',
        command: () => router.push({ name: 'integrations' })
      },
      {
        label: 'Components',
        command: () => router.push({ name: 'components' })
      }
    ]
  }
]);
</script>

<style scoped>
.usebg-transparent {
  background-color: transparent !important;
  border: 0 !important;
  font-weight: 900 !important;
  font-size: 14px !important;
}
</style>
