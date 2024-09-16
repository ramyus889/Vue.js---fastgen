<template>
  <div class="card mt-[62px] px-5">
    <Tabs value="0">
      <TabList>
        <Tab
          v-for="tab in tabs"
          :key="tab.title"
          :value="tab.value"
          style="padding-left: 35px; padding-right: 35px"
          >{{ tab.title }}</Tab
        >
      </TabList>
      <TabPanels>
        <TabPanel v-for="tab in tabs" :key="tab.id" :value="tab.value">
          <img :src="tab.image" alt="" class="rounded-2xl" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';

import { ref } from 'vue';

const tabs = ref([
  { id: 1, title: 'Data Analysis Dashboard', image: '/dashboard_content.webp', value: '0' },
  { id: 2, title: 'AI Image Generator', image: '/image_generate_content.webp', value: '1' },
  { id: 3, title: 'AI Voice Generator', image: '/ai_voice_content.webp', value: '3' },
  { id: 4, title: 'Content Management', image: '/cms.webp', value: '4' },
  { id: 5, title: 'Sales CRM', image: '/crm_content.webp', value: '5' },
  { id: 6, title: 'Admin Panel', image: '/admin_content.webp', value: '6' }
]);
</script>
