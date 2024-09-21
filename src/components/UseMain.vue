<script setup>
import UseTabs from './UseTabs.vue';
</script>
<template>
  <div class="flex place-content-center mt-[160px] px-5">
    <div class="">
      <div
        class="md:text-[68px] sm:text-[40px] text-[30px] md:leading-[86px] sm:leading-[50px] leading-[50px] font-bold text-center"
      >
        Build scalable
        <span
          class="bg-gradient-to-t from-[#7A6AFF] to-[#8295FF] bg-clip-text text-transparent font-bold"
          >backends</span
        >
        astonishingly fast
      </div>
      <div class="text-center text-[20px] text-[#bdc4d3] mt-[5px]">
        Low code API and workflow builder for rapid development.
      </div>
      <div class="flex sm:flex-row flex-col place-content-center my-[35px] gap-[25px]">
        <button
          class="bg-gradient-to-r to-[#673FDF] from-[#8295FF] px-[17px] py-[16px] rounded-[9px] font-[700]"
        >
          Get Started free {{ '>' }}
        </button>
        <button class="px-[17px] py-[16px] rounded-[9px] border border-[#673FDF] font-[700]">
          Get Demo {{ '>' }}
        </button>
      </div>
      <div class="mt-[12px] px-5">
        <UseTabs />
      </div>
    </div>
  </div>
</template>
