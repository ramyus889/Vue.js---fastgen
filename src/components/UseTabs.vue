<template>
  <div class="card">
    <Tabs value="0">
      <TabList class="">
        <div class="flex w-full place-content-center">
          <Tab value="0" as="div" class="flex flex-col items-center gap-2">
            <Avatar image="/create.svg" class="!w-[15px]" />
            <span class="font-bold whitespace-nowrap">Create API</span>
          </Tab>
          <Tab value="1" as="div" class="flex flex-col items-center gap-2">
            <Avatar image="debugS.svg" class="!w-[15px]" />
            <span class="font-bold whitespace-nowrap">Debug</span>
          </Tab>
          <Tab as="div" value="2" class="flex flex-col items-center gap-2">
            <Avatar image="/loggingS.svg" class="!w-[15px]" />
            <span class="font-bold whitespace-nowrap">Logging</span>
          </Tab>
          <Tab as="div" value="3" class="sm:flex flex-col hidden items-center gap-2">
            <Avatar image="/cronS.svg" class="!w-[15px]" />
            <span class="font-bold whitespace-nowrap">Cron jobs</span>
          </Tab>
          <Tab as="div" value="4" class="sm:flex flex-col hidden items-center gap-2">
            <Avatar image="/databaseS.svg" class="!w-[15px]" />
            <span class="font-bold whitespace-nowrap">Database</span>
          </Tab>
        </div>
      </TabList>
      <TabPanels>
        <TabPanel value="0" as="p" class="px-10 py-10">
          <img src="/Create API.webp" alt="" />
        </TabPanel>
        <TabPanel value="1" as="p" class="px-10 py-10">
          <img src="/debug.webp" alt="" />
        </TabPanel>
        <TabPanel value="2" as="p" class="px-10 py-10">
          <img src="/logging.webp" alt="" />
        </TabPanel>
        <TabPanel value="3" as="p" class="px-10 py-10">
          <img src="/Cronjobs.webp" alt="" />
        </TabPanel>
        <TabPanel value="4" as="p" class="px-10 py-10">
          <img src="/Databasewebp.webp" alt="" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
</script>
