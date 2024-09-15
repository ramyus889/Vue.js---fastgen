<script setup>
const items = [
  {
    id: 1,
    text: 'Components',
    link1: 'Table',
    link2: 'Chart',
    link3: 'Upload',
    link4: 'Switch',
    link5: 'Select',
    link6: 'Radio Group'
  },
  {
    id: 2,
    text: 'Integrations',
    link1: 'MySQL',
    link2: 'PostgreSQL',
    link3: 'MongoDB',
    link4: 'Firebase',
    link5: 'Elastic Search',
    link6: 'Microsoft SQL Server'
  },
  {
    id: 3,
    text: 'Solutions',
    link1: 'AI Image Generator',
    link2: 'AI Voice Generator',
    link3: 'Data Analysis Dashboard',
    link4: 'Content Management',
    link5: 'Sales CRM',
    link6: 'Admin Panel'
  },
  {
    id: 4,
    text: 'Company',
    link1: 'Status',
    link2: 'Roadmap',
    link3: 'Changelog',
    link4: 'Media Kit'
  },
  {
    id: 5,
    text: 'Community',
    link1: 'GitHub',
    link2: 'Twitter',
    link3: 'Discord',
    link4: 'ProductHunt',
    link5: 'LinkedIn'
  }
];
</script>
<template>
  <footer class="flex place-content-center mt-[170px] px-5">
    <div class="">
      <div class="flex flex-wrap gap-10 border-b border-slate-800 pb-10">
        <div v-for="item in items" :key="item.id" class="flex flex-col gap-5 lg:w-[208px]">
          <div class="text-[18px] font-bold">{{ item.text }}</div>
          <div class="flex flex-col gap-2">
            <a href="#" class="text-[14px]">{{ item.link1 }}</a>
            <a href="#" class="text-[14px]">{{ item.link2 }}</a>
            <a href="#" class="text-[14px]">{{ item.link3 }}</a>
            <a href="#" class="text-[14px]">{{ item.link4 }}</a>
            <a href="#" class="text-[14px]">{{ item.link5 }}</a>
            <a href="#" class="text-[14px]">{{ item.link6 }}</a>
          </div>
        </div>
      </div>
      <div class="flex sm:flex-row flex-col gap-5 justify-between my-[40px]">
        <div class="flex items-center gap-4">
          <div class="">
            <svg
              width="43"
              height="20"
              viewBox="0 0 43 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[51px] h-[24px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 0H13v20H7.5V0ZM0 7.5h5.5V20H0V7.5ZM20.5 0H15v20h5.5V0Z"
                fill="#fff"
              ></path>
              <path fill="#FF58BE" d="M0 0h5.5v5.5H0z"></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M37 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 8.933A9.959 9.959 0 0 1 32.5 20c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10v10H37v-1.067Z"
                fill="#fff"
              ></path>
            </svg>
          </div>
          <div class="text-[14px]">Create business apps like assembling blocks</div>
        </div>
        <div class="flex gap-8">
          <a href="#">Privacy Policy</a> <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
