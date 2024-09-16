<script setup>
import UseTabs from './UseTabs.vue';
</script>
<template>
  <div class="flex place-content-start mt-[300px]">
    <div class="">
      <div
        class="text-[24px] text-start bg-gradient-to-r from-[#24FFFF] to-[#C5FFFF] bg-clip-text text-transparent font-bold"
      >
        ILLA Flow
      </div>
      <div class="w-full">
        <div class="text-[56px] leading-[67px] font-bold mt-[16px] max-w-[479px]">
          Trigger anytime, anywhere
          <div class="text-[20px] leading-[24px] mt-[32px]">
            Multiple types of triggers enable you to automate your workflow anytime, anywhere.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-[80px]">
    <UseTabs />
  </div>
</template>
