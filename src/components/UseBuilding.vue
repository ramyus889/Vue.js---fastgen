<script setup></script>
<template>
  <div class="flex place-content-center mt-[208px] px-5">
    <div class="">
      <div data-aos="fade-up" data-aos-delay="100" class="text-center text-[46px] font-[700]">
        Building Dreams,
        <span
          class="bg-gradient-to-r from-[#FF926F] to-[#F9F871] bg-clip-text text-transparent font-[700]"
          >One Click at a Time</span
        >
      </div>
      <div class="flex flex-col gap-4">
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          class="mt-[60px] flex md:flex-row flex-col md:gap-10 gap-5 lg:ps-[60px] ps-[20px] pt-[33px] bg-[#2b2b2b] rounded-[16px]"
        >
          <div class="flex flex-col gap-[20px] max-w-[300px]">
            <div class="flex gap-[14px] items-center">
              <div class=""><img src="/variables.svg" alt="" /></div>
              <div class="text-[20px] font-[700]">Variables</div>
            </div>
            <div class="flex flex-col gap-[15px] pb-10">
              <div class="text-[#8b8f98] font-bold">
                Access data with ease through a pre- defined data structure.
              </div>
              <div class="text-[#8b8f98] font-bold">
                Index variables to access specific elements within a given list.
              </div>
              <div class="text-[#8b8f98] font-bold">Set fallback values to manage defaults.</div>
            </div>
          </div>
          <div class="">
            <img src="/Dreams.svg" alt="" />
          </div>
        </div>

        <div class="flex lg:flex-row flex-col gap-4">
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            class="flex lg:flex-col max-[768px]:flex-col-reverse gap-[20px] lg:px-[60px] px-[20px] pt-[33px] bg-[#2b2b2b] rounded-[16px]"
          >
            <div class="">
              <img src="/codeCard.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[20px] max-w-[400px]">
              <div class="flex gap-[14px] items-center">
                <div class=""><img src="/injectCode.svg" alt="" /></div>
                <div class="text-[20px] font-[700]">Inject Code where you need it</div>
              </div>
              <div class="flex flex-col gap-[15px] pb-10">
                <div class="text-[#8b8f98] font-bold">
                  Write, test, and implement your own custom logic directly in a code editor.
                </div>
                <div class="text-[#8b8f98] font-bold">
                  We support Node.js and Python and let you integrate external libraries with a
                  built-in package manager.
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="700"
            class="flex lg:flex-col max-[768px]:flex-col justify-between gap-[20px] ps-[30px] pt-[33px] bg-[#2b2b2b] rounded-[16px]"
          >
            <div class="flex flex-col gap-[20px] max-w-[350px]">
              <div class="flex gap-[14px] items-center">
                <div class=""><img src="/keyCode.svg" alt="" /></div>
                <div class="text-[20px] font-[700]">Environment Variables</div>
              </div>
              <div class="flex flex-col gap-[15px] pb-10">
                <div class="text-[#8b8f98] font-bold">
                  Manage and store your secrets, configuration settings or any sensitive
                  information.
                </div>
                <div class="text-[#8b8f98] font-bold">
                  Directly access those variables in your APIs and workflows.
                </div>
              </div>
            </div>
            <div class="">
              <img src="/keyCodeImage.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
