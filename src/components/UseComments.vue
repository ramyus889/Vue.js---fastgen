<script setup>
const items = [
  {
    id: 1,
    name: 'Evan Farrel',
    link: '@evfrl',
    image: '/comment1.png',
    description:
      ' Favorite tool of the week: Fastgen. It is still in Beta but it already saved me so much time!'
  },
  {
    id: 2,
    name: 'Dan Meier',
    link: '@danmeier20',
    image: '/comment2.png',
    description:
      'I am a big fan of the Fastgen team. They are lighting fast with their replies to any question'
  },
  {
    id: 3,
    name: 'Max Elster',
    link: '@maxelster',
    image: '/comment3.jpeg',
    description:
      'Just received early access to Fastgen. Can’t wait to see what this platform is capable of'
  },
  {
    id: 4,
    name: 'Matthias Klenk',
    link: '@mathiasklenk',
    image: '/comment4.png',
    description:
      'Shoutout to Fastgen. Love how quickly I can build new backends without thinking about DevOps at all'
  },
  {
    id: 5,
    name: 'Max Greenwald',
    link: '@MaxPGreenwald',
    image: '/comment5.png',
    description:
      ' We started building with Fastgen. It’s a crazy to see how much faster we are able to ship at Unlock. Looking forward to the next round of updates, especially the direct hosting feature'
  },
  {
    id: 6,
    name: 'Andrej Safundzic',
    link: '@AndrejSafundzic',
    image: '/comment6.png',
    description:
      ' Fastgen is my new favorite way to build automations at Lumos. It is fast and we do not need to think about hosting at all. Hope they add more integrations soon'
  }
];
</script>
<template>
  <div class="flex place-content-center px-5">
    <div class="">
      <div class="text-center text-[#bdc4d3] text-[46px] font-[600] mt-[92px]">
        Loved by builders around the world
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[21px] items-start mt-[32px]">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex flex-col gap-5 bg-[#2b2b2b] rounded-[14px] px-[29px] py-[29px]"
        >
          <div class="flex gap-3 items-center">
            <img :src="item.image" alt="" class="rounded-full w-[61px] h-[61px] object-cover" />
            <div class="flex flex-col">
              <div class="text-[22px]">{{ item.name }}</div>
              <div class="text-[22px]">{{ item.link }}</div>
            </div>
          </div>
          <div class="text-[22px]">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
