<script setup>
import UseDrawer from './UseDrawer.vue';
</script>

<template>
  <div class="fixed z-50 top-0 left-0 right-0">
    <header
      class="flex justify-between px-[40px] py-[15px] items-center backdrop-filter backdrop-blur-[15px] bg-black bg-opacity-50"
    >
      <div class="flex items-center gap-5">
        <RouterLink to="/">
          <svg
            width="43"
            height="20"
            viewBox="0 0 43 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-[51px] h-[24px]"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.5 0H13v20H7.5V0ZM0 7.5h5.5V20H0V7.5ZM20.5 0H15v20h5.5V0Z"
              fill="#fff"
            ></path>
            <path fill="#FF58BE" d="M0 0h5.5v5.5H0z"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37 10a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 8.933A9.959 9.959 0 0 1 32.5 20c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10v10H37v-1.067Z"
              fill="#fff"
            ></path>
          </svg>
        </RouterLink>
        <div class="lg:flex hidden gap-[8px] items-center">
          <RouterLink to="/illa-flow" class="px-[16px] font-bold text-[14px]">ILLA Flow</RouterLink>
          <RouterLink to="/Integrations" class="px-[16px] font-bold text-[14px]"
            >Integrations</RouterLink
          >
          <RouterLink to="/app-components" class="px-[16px] font-bold text-[14px]"
            >components</RouterLink
          >
          <RouterLink to="/pricing" class="px-[16px] font-bold text-[14px]">Prising</RouterLink>
          <RouterLink to="/blog" class="px-[16px] font-bold text-[14px]">Blog</RouterLink>
        </div>
      </div>
      <div class="block lg:hidden"><UseDrawer /></div>
      <div class="lg:flex hidden items-center gap-5">
        <a href="#" class="font-bold px-[24px]">Login</a>

        <a
          href="#"
          class="relative duration-500 group cursor-pointer text-sky-50 overflow-hidden h-12 w-52 rounded-2xl bg-sky-800 p-2 flex justify-center items-center font-extrabold"
        >
          <div
            class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"
          ></div>
          <div
            class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"
          ></div>
          <div
            class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"
          ></div>
          <div
            class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"
          ></div>
          <div
            class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"
          ></div>
          <p class="z-10 font-bold">Get Started For Free</p>
        </a>
      </div>
    </header>
  </div>
</template>
