<script>
export default {
  name: 'UseMainBlog',
  mounted() {
    document.title = 'Blog dev';
  },
  setup() {
    const items = [
      {
        id: 1,
        tag: 'Events',
        image: '/blog1.png',
        title: 'Product Hunt x Fastgen',
        link: '/blog1',
        data: 'December 22, 2023'
      },
      {
        id: 2,
        tag: 'Launch Week 1',
        image: '/blog2.webp',
        title: 'Fastgen Launch Week Day 5',
        link: '/blog1',
        data: 'December 14, 2023'
      },
      {
        id: 3,
        tag: 'Launch Week 1',
        image: '/blog3.png',
        title: 'Fastgen Launch Week Day 4',
        link: '/blog1',
        data: 'November 25, 2023'
      },
      {
        id: 4,
        tag: 'Launch Week 1',
        image: '/blog4.png',
        title: 'Fastgen Launch Week Day 3',
        link: '/blog1',
        data: 'November 23, 2023'
      },
      {
        id: 5,
        tag: 'Launch Week 1',
        image: '/blog5.png',
        title: 'Fastgen Launch Week Day 2',
        link: '/blog1',
        data: 'November 22, 2023'
      },
      {
        id: 6,
        tag: 'Launch Week 1',
        image: '/blog6.webp',
        title: 'Fastgen Launch Week Day 1',
        link: '/blog1',
        data: 'November 22, 2023'
      },
      {
        id: 7,
        tag: 'Events',
        image: '/blog7.png',
        title: 'Product Hunt + Fastgen Hackathon',
        link: '/blog1',
        data: 'October 26, 2023'
      },
      {
        id: 8,
        tag: 'Events',
        image: '/blog8.png',
        title: 'Fastgen Hackathon Winner Announcement',
        link: '/blog1',
        data: 'September 29, 2023'
      },
      {
        id: 9,
        tag: 'Events',
        image: '/blog9.webp',
        title: 'Join the Fastgen Hackathon in September 2023',
        link: '/blog1',
        data: 'August 25, 2023'
      }
    ];

    return {
      items
    };
  }
};
</script>
<template>
  <div class="flex place-content-center my-[200px] px-5">
    <div class="">
      <div class=""></div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[51px]">
        <div data-aos="fade-up" data-aos-delay="100" v-for="item in items" :key="item.id" class="">
          <div class="border-[1px] border-[#6B656F] rounded-[15px] md:max-w-[320px]">
            <div class=""><img :src="item.image" alt="" class="rounded-t-[15px]" /></div>
            <div class="py-[5px] px-[8px] rounded-[5px] bg-[#7a6aff4d]">
              <div class="text-[12px] text-[#7a6aff] font-[500]">{{ item.tag }}</div>
            </div>
            <div class="py-[16px] ps-[16px] pe-[20px]">
              <div class="text-[18px] font-[500] items-end">
                {{ item.title }}
              </div>
            </div>
            <div class="flex gap-3 items-center py-[16px] ps-[16px] pe-[20px]">
              <img src="/avatarblog.png" alt="" class="rounded-full" width="32" />
              <div class="flex flex-col">
                <div class="">Mike Mahlkow</div>
                <div class="text-[#fff9]">{{ item.data }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
