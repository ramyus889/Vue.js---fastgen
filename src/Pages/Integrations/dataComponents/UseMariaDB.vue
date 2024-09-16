<script setup>
import UseBuilding from '@/components/UseBuilding.vue';
import UseFooter from '@/components/UseFooter.vue';

const items = [
  {
    id: 1,
    title: 'ChatGPT Plugin',
    image: '/integrate/chatGPT.svg',
    text: 'With the embedded Chatgpt Plugin, you can input natural language and get SQL statements that can be run directly.'
  },
  {
    id: 2,
    title: 'Built for Developers',
    image: '/integrate/buildForDev.svg',
    text: 'We provide developers JavaScript freedom by wrapping JS statements with {{Template Syntax}} to add variety to the output.'
  },
  {
    id: 3,
    title: 'Integrate with any data source',
    image: '/integrate/anyDateSource.svg',
    text: 'ILLA Cloud connects to databases and APIs, and integrates back-end data with front-end components, simplifying data calls for massive'
  },
  {
    id: 4,
    title: 'Real-time Collaboration',
    image: '/integrate/realTime.svg',
    text: 'ILLA turns imagination into real code and designs with real-time collaboration in ILLA Builder, improving development efficiency.'
  },
  {
    id: 5,
    title: 'Responsive UI library',
    image: '/integrate/uiLibrary.svg',
    text: 'ILLA Builders dozens of components can be dragged and dropped, saving time and boosting developer productivity.'
  }
];
const items2 = [
  {
    id: 1,
    title: 'Dashboard',
    image: '/integrate/coverDashboard.svg',
    text: 'Use tables and charts to create a dashboard.'
  },
  {
    id: 2,
    title: 'Survey',
    image: '/integrate/coverSurvey.svg',
    text: 'Use form and input components to create form apps.'
  },
  {
    id: 3,
    title: 'Admin panel',
    image: '/integrate/coverAdminpanel.svg',
    text: 'Use a list component to display and manage information.'
  }
];
</script>
<template>
  <div class="flex place-content-center w-full mt-[150px]">
    <div class="max-w-[1240px]">
      <div class="">
        <RouterLink to="/integrations" class="text-[#654AEC] text-[18px] hover:underline"
          >{{ '<' }} Back to integrations</RouterLink
        >
        <div class="mt-[52px] text-[48px] font-bold leading-[56px]">
          Connect to MariaDB with ILLA Cloud and build internal tools in just a few clicks.
        </div>
        <div class="mt-[40px]">
          With ILLA Cloud's MariaDB integration, you can quickly and easily configure and connect to
          your MariaDB database to optimize your data management and streamline your workflows.The
          integration simplifies data management using SQL, allowing you to manipulate tables,
          retrieve data and perform complex queries with ease. You can safely add or write data by
          providing input, including necessary queries, and incorporating app-based validation
          checks.For example, you can fetch data for an employee from a MariaDB table and add a
          button that, when clicked, runs an SQL query to update the employee's information or
          approve a request. With ILLA Cloud's MariaDB integration, you can maximize the potential
          of your data source and enhance your productivity with minimal effort.
        </div>
        <div class="mt-[40px]">
          <button class="py-[10px] px-[32px] font-bold bg-[#654aec] rounded-[8px] text-[20px]">
            Build with MariaDB
          </button>
        </div>
      </div>
      <div class="mt-[90px]">
        <div class="text-[#654AEC] text-[18px]">feature</div>
        <div class="mt-[24px] text-[32px] font-bold leading-[56px]">
          What sets ILLA Cloud apart from others?
        </div>
        <div class="mt-[24px]">
          ILLA Cloud's SQL Generate feature and JavaScript freedom, along with its seamless
          integration with databases and APIs, make it an efficient tool for developers building
          internal tools with drag-and-drop components in real time.
        </div>

        <div class="mt-[40px] flex flex-wrap gap-8">
          <div v-for="item in items" :key="item.id" class="flex flex-col gap-3">
            <div class=""><img :src="item.image" alt="" /></div>
            <div class="font-bold">{{ item.title }}</div>
            <div class="max-w-[270px]">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div class="mt-[90px]">
        <div class="text-[#654AEC] text-[18px]">Templates</div>
        <div class="mt-[24px] text-[32px] font-bold leading-[56px]">
          What can you build with ILLA?
        </div>
        <div class="mt-[24px]">
          ILLA Cloud offers a variety of components, such as tables, charts, forms, lists, etc.
          Users can easily build dashboards, admin panels, survey forms, and more using these
          components.
        </div>

        <div class="mt-[40px] flex flex-wrap gap-12">
          <div v-for="item in items2" :key="item.id" class="flex flex-col gap-3">
            <div class=""><img :src="item.image" alt="" width="368px" height="251px" /></div>
            <div class="font-bold">{{ item.title }}</div>
            <div class="max-w-[360px]">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <UseBuilding />
      <UseFooter />
    </div>
  </div>
</template>
