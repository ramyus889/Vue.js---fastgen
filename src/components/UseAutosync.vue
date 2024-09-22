<script setup></script>
<template>
  <div class="flex place-content-center mt-[160px] px-5">
    <div class="">
      <div class="flex lg:flex-row flex-col items-center gap-[175px]">
        <div class="flex flex-col gap-20 max-w-[450px]">
          <div
            class="sm:text-[45px] text-[30px] lg:text-start text-center sm:leading-[56px] leading-[40px] font-[700]"
          >
            Autosync all your <br />
            builds in Config <br />
            files
          </div>
          <div class="flex flex-col gap-7 lg:text-start text-center">
            <div class="text-[20px] text-[#bdc4d3]">
              <span class="font-[700] text-white">Everything you build</span> on the platform
              automatically creates a YAML Config file.
            </div>
            <div class="text-[20px] text-[#bdc4d3]">
              Use files for
              <span class="font-[700] text-white">versioning & faster deployment</span> of repetitve
              flows.
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-20">
          <img src="/autosinc.svg" alt="" />
          <img src="/autosincCode.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
