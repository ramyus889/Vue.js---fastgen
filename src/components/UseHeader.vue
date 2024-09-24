<script setup>
import UseDrawer from './UseDrawer.vue';
</script>
<template>
  <header class="px-[24px] py-[16px] backdrop-blur-[50px] z-[1000] fixed top-0 left-0 right-0">
    <div class="flex items-center justify-between">
      <RouterLink to="/" class=""><img src="/fastgen.svg" alt="" width="113px" /></RouterLink>

      <div class="flex gap-4 items-center">
        <div class="md:flex hidden gap-4 items-center">
          <RouterLink to="/" class="hover:underline">Home</RouterLink>
          <RouterLink to="/Blog" class="hover:underline">Blog</RouterLink>
          <RouterLink to="/Changelog" class="hover:underline">Changelog</RouterLink>
        </div>
        <div class="md:hidden block">
          <UseDrawer />
        </div>
      </div>
    </div>
  </header>
</template>
