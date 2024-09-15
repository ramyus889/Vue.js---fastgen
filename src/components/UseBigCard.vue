<script setup>
const items1 = [
  {
    id: 1,
    image: '/step1.webp',
    title: 'Drag and drop components to design UI',
    dotNumber: 1,
    text: 'By dragging and dropping components, you can quickly build the UI of the apps and implement any functionality you desire.',
    useLink: 'Start building UI with ILLA'
  }
];
const items2 = [
  {
    id: 2,
    image: '/step2.webp',
    title: 'Connect to your data sources',
    dotNumber: 2,
    text: 'Connect to your own data sources, including MySQL, PostgreSQL, and other databases, REST APIs, GraphQL, etc. Build CRUD apps in just one minute.',
    useLink: 'Start building Apps with your data sources'
  }
];
const items3 = [
  {
    id: 3,
    image: '/step3.webp',
    title: 'Configure and connect to AI agents',
    dotNumber: 3,
    text: 'Integrating AI agents into your app and empower it with AI capabilities such as intelligent analysis, content generation, and more, without AI development skills.',
    useLink: 'Start building AI driven apps'
  }
];
const items4 = [
  {
    id: 4,
    image: '/illaflow.webp',
    title: 'Automate your Workflow',
    dotNumber: 4,
    text: 'Use ILLA Flow to automate your workflow to ensure you always have the latest data and reduce repetitive tasks.',
    useLink: 'Learn more about ILLA Flow'
  }
];
</script>
<template>
  <div class="flex place-content-center mt-[170px]">
    <div class="">
      <div class="flex flex-col gap-4">
        <div class="text-[40px] text-center font-bold">4 steps to customize your business apps</div>
        <div class="flex place-content-center">
          <div class="max-w-[487px] text-center text-[14px]">
            Build tools through drag-and-drop components, customize your AI Agent, connect to your
            data sources, and make AI a smart tool tailored to your needs and data, making your work
            more intelligent.
          </div>
        </div>
      </div>
      <div
        v-for="item in items1"
        :key="item.id"
        class="bg-[#121212] px-[49px] py-[49px] rounded-2xl flex gap-10 mt-[32px] border border-[#2A2A2A]"
      >
        <img :src="item.image" :alt="item.title" class="w-[532px]" />
        <div class="flex flex-col gap-[30px]">
          <div class="flex flex-col">
            <div class="text-[36px] font-bold">{{ item.dotNumber }}.</div>
            <div class="text-[36px] leading-[44px] font-bold">{{ item.title }}</div>
          </div>
          <div class="text-[14px]">{{ item.text }}</div>
          <div class="">
            <a href="#" class="underline text-[#654aec] font-bold flex gap-2 items-center"
              >{{ item.useLink }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
              >
                <path
                  d="M1 6.5h13m0 0L8.5 1M14 6.5 8.5 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        v-for="item in items2"
        :key="item.id"
        class="bg-[#121212] px-[49px] py-[49px] rounded-2xl flex gap-10 mt-[32px] border border-[#2A2A2A]"
      >
        <div class="flex flex-col gap-[30px]">
          <div class="flex flex-col">
            <div class="text-[36px] font-bold">{{ item.dotNumber }}.</div>
            <div class="text-[36px] leading-[44px] font-bold">{{ item.title }}</div>
          </div>
          <div class="text-[14px]">{{ item.text }}</div>
          <div class="">
            <a href="#" class="underline text-[#654aec] font-bold flex gap-2 items-center"
              >{{ item.useLink }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
              >
                <path
                  d="M1 6.5h13m0 0L8.5 1M14 6.5 8.5 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <img :src="item.image" :alt="item.title" class="w-[532px]" />
      </div>

      <div
        v-for="item in items3"
        :key="item.id"
        class="bg-[#121212] px-[49px] py-[49px] rounded-2xl flex gap-10 mt-[32px] border border-[#2A2A2A]"
      >
        <img :src="item.image" :alt="item.title" class="w-[532px]" />
        <div class="flex flex-col gap-[30px]">
          <div class="flex flex-col">
            <div class="text-[36px] font-bold">{{ item.dotNumber }}.</div>
            <div class="text-[36px] leading-[44px] font-bold">{{ item.title }}</div>
          </div>
          <div class="text-[14px]">{{ item.text }}</div>
          <div class="">
            <a href="#" class="underline text-[#654aec] font-bold flex gap-2 items-center"
              >{{ item.useLink }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
              >
                <path
                  d="M1 6.5h13m0 0L8.5 1M14 6.5 8.5 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        v-for="item in items4"
        :key="item.id"
        class="bg-[#121212] px-[49px] py-[49px] rounded-2xl flex gap-10 mt-[32px] border border-[#2A2A2A]"
      >
        <div class="flex flex-col gap-[30px]">
          <div class="flex flex-col">
            <div class="text-[36px] font-bold">{{ item.dotNumber }}.</div>
            <div class="text-[36px] leading-[44px] font-bold">{{ item.title }}</div>
          </div>
          <div class="text-[14px]">{{ item.text }}</div>
          <div class="">
            <a href="#" class="underline text-[#654aec] font-bold flex gap-2 items-center"
              >{{ item.useLink }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
              >
                <path
                  d="M1 6.5h13m0 0L8.5 1M14 6.5 8.5 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <img :src="item.image" :alt="item.title" class="w-[532px]" />
      </div>
    </div>
  </div>
</template>
