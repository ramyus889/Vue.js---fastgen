<script setup>
import UseFooter from '@/components/UseFooter.vue';

const items = [
  {
    id: 7,
    tag: 'Events',
    image: '/blog7.png',
    title: 'Product Hunt + Fastgen Hackathon',
    link: '/UseBlogLink7',
    data: 'October 26, 2023'
  },
  {
    id: 8,
    tag: 'Events',
    image: '/blog8.png',
    title: 'Fastgen Hackathon Winner Announcement',
    link: '/UseBlogLink8',
    data: 'September 29, 2023'
  },
  {
    id: 9,
    tag: 'Events',
    image: '/blog9.webp',
    title: 'Join the Fastgen Hackathon in September 2023',
    link: '/UseBlogLink9',
    data: 'August 25, 2023'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[170px] px-5">
    <div class="max-w-[1100px]">
      <div class="flex lg:flex-row flex-col items-center gap-10">
        <div class="flex flex-col items-start gap-6">
          <RouterLink to="/Blog" class="underline text-[#7a6aff]">← Back to Blog</RouterLink>
          <div data-aos="fade-up" data-aos-delay="800" class="">
            <div class="py-[5px] px-[8px] rounded-[5px] bg-[#7a6aff4d]">
              <div class="text-[12px] text-[#7a6aff] font-[500]">Events</div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="sm:text-[40px] text-[30px] sm:leading-[50px] leading-[40px] font-[600]"
          >
            Fastgen Hackathon Winner Announcement
          </div>
          <div data-aos="fade-up" data-aos-delay="300" class="">
            That's a Wrap! We hosted our first-ever Fastgen Hackathon from September 11th to
            September 20th, and it was a blast! We were surprised by the quality and depth of the
            submissions. Many cool projects were built, and we can't wait to share the winners with
            you today!
          </div>
          <div data-aos="fade-up" data-aos-delay="500" class="">February 6, 2024</div>
          <div class="">
            <div data-aos="fade-up" data-aos-delay="700" class="flex gap-3 items-center py-[16px]">
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
            src="/blogLink8.png"
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
