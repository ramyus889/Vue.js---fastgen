<template>
  <div class="flex place-content-center">
    <div class="">
      <div
        class="flex lg:flex-row flex-col xl:gap-28 gap-20 justify-between mt-[227px] px-5 border-t-[1px] border-[#6B656F] pt-[44px]"
      >
        <div class="flex flex-col gap-10">
          <RouterLink
            data-aos="fade-up"
            data-aos-delay="100"
            to="/ChangeLog"
            class="flex items-center gap-2 text-[#888888]"
            >← Back to all posts</RouterLink
          >
          <div data-aos="fade-up" data-aos-delay="200" class="text-[14px] text-[#888888]">
            January 29, 2024
          </div>
        </div>
        <div class="max-w-[800px]">
          <div class="flex flex-col gap-6">
            <div data-aos="fade-up" data-aos-delay="300" class="">
              <img src="/changelog3.jpg" alt="" class="rounded-[15px] w-[800px]" />
            </div>
            <div class="flex flex-col gap-3 text-[15px]">
              <div data-aos="fade-up" data-aos-delay="400" class="text-[#cacdd3] leading-[24px]">
                In this update, we're excited to bring you tools for more intuitive coding,
                streamlined workflow testing, and easier management of your flows.
              </div>
              <div data-aos="fade-up" data-aos-delay="100" class="font-bold">
                Custom Code Action Copilot
              </div>
              <div data-aos="fade-up" data-aos-delay="200" class="text-[#cacdd3]">
                Now you can create JavaScript or Python code in the custom code action just by
                describing your requirements. This feature is here to make code creation more
                straightforward and less time-consuming.
              </div>
              <div data-aos="fade-up" data-aos-delay="300" class="font-bold">
                Skip Actions for Better Flow Management
              </div>
              <div data-aos="fade-up" data-aos-delay="400" class="text-[#cacdd3]">
                ‍You can now disable or skip actions within a flow. This is useful when you need to
                test or temporarily turn off parts of your workflow without having to delete them.
              </div>
              <div data-aos="fade-up" data-aos-delay="100" class="font-bold">
                Copy & Convert Flows Across Workspaces
              </div>
              <div data-aos="fade-up" data-aos-delay="200" class="text-[#cacdd3]">
                ‍We've added the ability to copy and convert flows to different workspaces, making
                it easier to manage workflows across teams and projects.
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                class="text-[22px] leading-[33px] mt-[58px]"
              >
                Fixes & Improvements
              </div>
              <ul
                class="flex flex-col gap-3 text-[15px] font-semibold list-image-[url(ulStyle.svg)]"
              >
                <li data-aos="fade-up" data-aos-delay="100">
                  <span class="font-bold">Custom Code Action:</span> Made several tweaks to improve
                  its overall functionality.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <span class="font-bold">Quick Access in Command Palette:</span> Added direct links
                  to “Environment Variables” and “Integration Tokens” for faster access.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <span class="font-bold">Fallback Modal Update:</span> The fallback modal will now
                  stay open when you click inside a variable, making it less of a hassle to use.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  <span class="font-bold">HTTP Code Alignment in Action Flow:</span> Adjusted the
                  alignment of httpCode in action flows for better readability and consistency.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  <span class="font-bold">Code Prettify Shortcut:</span> Added a shortcut to quickly
                  format code in the custom code action.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <span class="font-bold">Datahub Enhancements:</span> Updated the date & time
                  input, fixed json type formatting issues, and made some small but useful UI/UX
                  improvements.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <span class="font-bold">ChatGPT Action with New Models:</span> Updated the ChatGPT
                  Action with the latest models for improved performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-[230px]">
    <UseFooter />
  </div>
</template>

<script setup>
import UseFooter from '@/components/UseFooter.vue';
</script>
