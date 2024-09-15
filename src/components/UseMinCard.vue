<script setup>
const items1 = [
  {
    id: 1,
    text: ' ILLA Cloud has been a game-changer for me. It helps me generate highly efficient  content in less time. The customized AI Agent and App perfectly cater to my business  needs.',
    name: 'Christopher',
    position: 'SEO Specialist'
  },
  {
    id: 2,
    text: ' It empowers me to provide exceptional customer support with minimal effort. The pre-built AI Agent and App, along with the ability to customize them for our specific needs, have significantly enhanced our teams effectiveness.',
    name: 'Harper',
    position: 'Customer Service Manager'
  },
  {
    id: 3,
    text: ' I need to oversee various aspects of my company. ILLA Cloud provides me with a comprehensive solution. It not only saves me time and effort in development and design but also allows me to manage and monitor my business .',
    name: 'Matthew',
    position: 'Business Founder'
  },

  {
    id: 4,
    text: ' I think I become a BlogMaster now! This tool has revolutionized my content generation process, saving me valuable time. Whether its generating blog ideas or structuring articles, the AI Agents have been a tremendous asset to me and my team.',
    name: 'Lucas',
    position: 'Content Strategist'
  },
  {
    id: 5,
    text: ' AI Agent & low-code has transformed my email writing process. It streamlines the creation of impactful emails, enabling me to craft engaging and persuasive messages effortlessly. ILLA Cloud has elevated our email communication to new heights.',
    name: 'Abigail',
    position: 'Communication Specialist'
  },
  {
    id: 6,
    text: ' Using ILLA Cloud to build a management dashboard has been incredibly easy. After just one day of work, we were able to accomplish tasks such as monitoring project progress and allocating resources within this tasks dashboard.',
    name: 'Samuel',
    position: 'Website Administrator'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[170px] px-5">
    <div class="flex flex-col gap-[50px]">
      <div class="text-[40px] text-center font-bold">User Testimonials</div>
      <div class="grid xl:grid-cols-3 min-[710px]:grid-cols-2 grid-cols-1 gap-[18px]">
        <div
          v-for="item in items1"
          :key="item.id"
          class="px-[24px] py-[24px] bg-[#141414] max-w-[387px] rounded-2xl"
        >
          <div class="flex flex-col text-[12px] text-[#B3B3B3]">
            <div class="text-[36px] leading-[30px]">“</div>
            <div class="font-bold">
              {{ item.text }}
            </div>
            <div class="text-[36px] leading-[30px] pt-[20px] text-right">“</div>
            <div class="flex flex-col font-bold">
              <div class="text-white font-bold">{{ item.name }}</div>
              <div class="">{{ item.position }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
