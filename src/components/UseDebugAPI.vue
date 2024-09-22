<script setup>
const items = [
  {
    id: 1,
    name: 'Test',
    logo: '/IconTest.svg',
    image: '/imgTest.webp',
    description: 'Send test requests with unique headers, auth and parameters.'
  },
  {
    id: 2,
    name: 'Understand',
    logo: '/iconSearch.svg',
    image: '/imgSearch.webp',
    description: 'Get details for each action and understand what’s happening.'
  },
  {
    id: 3,
    name: 'Fix',
    logo: '/IconFix.svg',
    image: '/imgFix.webp',
    description: 'Fix whatever is broken in your routes instantly in the UI.'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[135px] px-5">
    <div class="">
      <div data-aos="fade-up" data-aos-delay="100" class="text-center text-[46px] font-[900]">
        <span
          class="bg-gradient-to-t to-[#9765F5] from-[#E459DB] bg-clip-text text-transparent font-[900]"
          >Debug
        </span>
        your APIs, <br />
        cron jobs & workflows
      </div>
      <div
        class="flex lg:flex-nowrap flex-wrap place-content-center items-center gap-[31px] mt-[32px]"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          v-for="item in items"
          :key="item.id"
          class="pt-[26px] ps-[36px] bg-[#2b2b2b] rounded-2xl"
        >
          <div class="flex flex-col gap-3 items-start">
            <img :src="item.logo" alt="" class="" />
            <div class="text-[20px] font-[900]">{{ item.name }}</div>
            <div class="text-[#8b8f98] font-bold text-[16px] max-w-[250px]">
              {{ item.description }}
            </div>
            <img :src="item.image" alt="" class="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
