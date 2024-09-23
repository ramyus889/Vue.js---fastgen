<script setup>
import UseFooter from '@/components/UseFooter.vue';

const items = [
  {
    id: 2,
    tag: 'Launch Week 1',
    image: '/blog2.webp',
    title: 'Fastgen Launch Week Day 5',
    link: '/UseBlogLink2',
    data: 'December 14, 2023'
  },
  {
    id: 3,
    tag: 'Launch Week 1',
    image: '/blog3.png',
    title: 'Fastgen Launch Week Day 4',
    link: '/UseBlogLink3',
    data: 'November 25, 2023'
  },
  {
    id: 4,
    tag: 'Launch Week 1',
    image: '/blog4.png',
    title: 'Fastgen Launch Week Day 3',
    link: '/UseBlogLink4',
    data: 'November 23, 2023'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[170px] px-5">
    <div class="max-w-[1100px]">
      <div class="flex lg:flex-row flex-col lg:items-center items-start gap-10">
        <div class="flex flex-col items-start gap-6">
          <RouterLink to="/Blog" class="underline text-[#7a6aff]">← Back to Blog</RouterLink>
          <div data-aos="fade-up" data-aos-delay="800" class="">
            <div class="py-[5px] px-[8px] rounded-[5px] bg-[#7a6aff4d]">
              <div class="text-[12px] text-[#7a6aff] font-[500]">Launch Week 1</div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="sm:text-[40px] text-[30px] w-[300px] sm:leading-[50px] leading-[40px] font-[600]"
          >
            Fastgen Launch Week Day 2
          </div>

          <div data-aos="fade-up" data-aos-delay="300" class="">December 14, 2023</div>
          <div class="">
            <div data-aos="fade-up" data-aos-delay="500" class="flex gap-3 items-center py-[16px]">
              <img src="/avatarblog.png" alt="" class="rounded-full" width="32" />
              <div class="flex flex-col">
                <div class="">Mike Mahlkow</div>
                <div class="text-[#fff9]">CEO & Co-Founder of Fastgen</div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400" class="">
          <img
            src="/blogLink5.png"
            alt=""
            class="rounded-[15px] lg:hover:transform lg:hover:-rotate-6 transition-transform duration-500"
          />
        </div>
      </div>
      <div
        class="flex place-content-center border-t-[1px] border-[#6B656F] pt-[30px] mt-[100px] mb-[100px]"
      >
        <div class="">
          <div data-aos="fade-up" data-aos-delay="100" class="text-[24px] pb-[24px] text-center">
            Recommended Blog Posts
          </div>
          <div data-aos="fade-up" data-aos-delay="300" class="text-center">
            Want to learn more? The posts below may be helpful for you to learn more about API and
            workflow development.
          </div>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[51px] mt-[50px]">
            <RouterLink
              :to="item.link"
              data-aos="fade-up"
              data-aos-delay="100"
              v-for="item in items"
              :key="item.id"
              class=""
            >
              <div class="border-[1px] border-[#6B656F] rounded-[15px] md:max-w-[320px]">
                <div class=""><img :src="item.image" alt="" class="rounded-t-[15px] w-full" /></div>
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
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
