<script setup>
const items = [
  {
    id: 1,
    name: 'Create',
    logo: '/GroupPlus.svg',
    image: '/GroupCard.webp',
    description: 'Create REST endoints, set up auth & validation rules.'
  },
  {
    id: 2,
    name: 'Build',
    logo: '/GroupMagic.svg',
    image: '/GroupBuild.webp',
    description: 'Connect APIs, third party tools, DB queries and responses.'
  },
  {
    id: 3,
    name: 'Deploy',
    logo: '/GroupStar.svg',
    image: '/GroupDeploy.webp',
    description: 'Deploy with a click of a button. No devops. We host for you.'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[135px] px-5">
    <div class="">
      <div data-aos="fade-up" data-aos-delay="100" class="text-center text-[46px] font-[900]">
        Create APIs in
        <span
          class="bg-gradient-to-t to-[#6e7dff] from-white bg-clip-text text-transparent font-[900]"
          >lightning speed</span
        >
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
