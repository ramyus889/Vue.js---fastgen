<script setup>
import UseDrawer from './UseDrawer.vue';
</script>
<template>
  <header class="px-[24px] py-[16px] backdrop-blur-[50px] z-[1000] fixed top-0 left-0 right-0">
    <div class="flex items-center justify-between">
      <a href="#" class=""><img src="/fastgen.svg" alt="" width="113px" /></a>

      <div class="md:flex hidden gap-12">
        <a href="#features" class="hover:underline">Features</a>
        <a href="#" class="hover:underline">Pricing</a>
        <a href="#" class="hover:underline">Blog</a>
        <a href="#" class="hover:underline">Changelog</a>
      </div>
      <div class="flex gap-4 items-center">
        <div class="md:flex hidden gap-4 items-center">
          <a href="#" class="hover:underline">Log in</a>
          <a
            href="#"
            class="bg-gradient-to-r to-[#673FDF] from-[#8295FF] text-center px-[16px] py-[8px] rounded-full text-[13px]"
          >
            Sign up
          </a>
        </div>
        <div class="md:hidden block">
          <UseDrawer />
        </div>
      </div>
    </div>
  </header>
</template>
