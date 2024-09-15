<template>
  <div class="">
    <Menubar :model="items" class="usebg-transparent" />
  </div>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import { ref } from 'vue';

const items = ref([
  {
    label: 'Products',
    items: [
      {
        label: 'ILLA Flow'
        // command: () => {}
      },
      {
        label: 'Integrations'
        // command: () => {}
      },
      {
        label: 'Components'
        // command: () => {}
      }
    ]
  }
]);
</script>
<style scoped>
.usebg-transparent {
  background-color: transparent !important; /* Убедитесь, что фон прозрачный */
  border: 0 !important;
  font-weight: 900 !important;
  font-size: 14px !important;
}
</style>
