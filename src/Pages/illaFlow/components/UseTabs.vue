<template>
  <div class="card">
    <Tabs value="0">
      <TabList>
        <Tab value="0" class=""> Schedule </Tab>
        <Tab value="1"> Webhook </Tab>
        <Tab value="2"> Poll </Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <img src="/flow/Screen22.png" alt="" />
        </TabPanel>
        <TabPanel value="1">
          <img src="/flow/Screen33.png" alt="" />
        </TabPanel>
        <TabPanel value="2">
          <img src="/flow/Screen44.png" alt="" />
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
</script>
