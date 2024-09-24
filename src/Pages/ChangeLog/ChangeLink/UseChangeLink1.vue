<template>
  <div class="flex place-content-center">
    <div class="">
      <div
        class="flex lg:flex-row flex-col xl:gap-28 gap-20 justify-between px-5 border-t-[1px] border-[#6B656F] pt-[44px] mt-[227px]"
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
            June 4, 2024
          </div>
        </div>
        <div class="max-w-[800px]">
          <div class="flex flex-col gap-6">
            <div data-aos="fade-up" data-aos-delay="300" class="">
              <img src="/changelog1.webp" alt="" class="rounded-[15px] w-[800px]" />
            </div>
            <div class="flex flex-col gap-3 text-[15px]">
              <div data-aos="fade-up" data-aos-delay="400" class="text-[22px] leading-[33px]">
                Major Updates: File Storage, Functions, User Management Action, and Improved
                Database Controls
              </div>
              <div data-aos="fade-up" data-aos-delay="100" class="text-[#cacdd3] leading-[24px]">
                We're thrilled to bring you the latest updates, which are packed with powerful new
                features and crucial enhancements to the platform.
              </div>
              <div data-aos="fade-up" data-aos-delay="200" class="font-bold">Storage Feature</div>
              <div data-aos="fade-up" data-aos-delay="300" class="text-[#cacdd3]">
                Easily upload, store, and manage files via the platform or from within your flows
                with our new Storage feature.
              </div>
              <div data-aos="fade-up" data-aos-delay="400" class="font-bold">Functions‍</div>
              <div data-aos="fade-up" data-aos-delay="100" class="text-[#cacdd3]">
                Encapsulate actions into reusable logic blocks that can return data to the parent
                flow, streamlining your workflows and promoting efficiency through modular design.
              </div>
              <div data-aos="fade-up" data-aos-delay="200" class="font-bold">
                Variable Action Upgrade
              </div>
              <div data-aos="fade-up" data-aos-delay="300" class="text-[#cacdd3]">
                Overwrite, append, and modify output data from other actions and other context data
                from any point in the flow with enhanced Variable Actions.
              </div>
              <div data-aos="fade-up" data-aos-delay="400" class="font-bold">User Action</div>
              <div data-aos="fade-up" data-aos-delay="100" class="text-[#cacdd3]">
                Manage users, roles, and relationships directly within a flow, simplifying user
                management and empowering building custom authentication logic.
              </div>
              <div data-aos="fade-up" data-aos-delay="200" class="font-bold">
                SystemColumns Removal in the Datahub
              </div>
              <div data-aos="fade-up" data-aos-delay="300" class="text-[#cacdd3]">
                Eliminated the need for system_xxxx columns, allowing any table format to integrate
                seamlessly with the Datahub.
              </div>
              <div data-aos="fade-up" data-aos-delay="400" class="font-bold">
                Improved Database Controls
              </div>
              <div data-aos="fade-up" data-aos-delay="100" class="text-[#cacdd3]">
                Access and manage database credentials, IP allowlists, and more from the new
                Database Settings page.
              </div>
              <div data-aos="fade-up" data-aos-delay="200" class="font-bold">
                Anthropic Integration
              </div>
              <div data-aos="fade-up" data-aos-delay="300" class="text-[#cacdd3]">
                Introducing advanced AI capabilities with Anthropic integration.
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                class="text-[22px] leading-[33px] mt-[58px]"
              >
                Fixes & Improvements
              </div>
              <ul
                class="flex flex-col gap-3 text-[15px] font-semibold list-image-[url(ulStyle.svg)]"
              >
                <li data-aos="fade-up" data-aos-delay="100">
                  Enhanced error messages for Custom Code Actions for better debugging.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  Improved Python module import in Custom Code Actions for more stability.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Added a "Retry Payment" button for streamlined payment processing and enhanced
                  self-service.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  Email-triggered workflows can now access email attachments.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  Fixed networking issues preventing some users from completing onboarding.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  Fixed an issue causing unwanted disabling of actions.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Improved Custom Code action window size for better usability in debug mode.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  Corrected number validation during CSV import to respect nullable database
                  columns.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  Paused workflows now accurately reflect their state (Draft vs. Deployed).
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  Enhanced main menu resize option visibility.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Upgraded Switch Action to support advanced conditional logic.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  Fixed medium-size action width within flows.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  Corrected positioning of variable dropdowns in scrollable lists.
                </li>
              </ul>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                class="text-[15px] text-[#cacdd3] mt-[22px]"
              >
                We're committed to continuously improving your experience and providing the tools
                you need to build efficiently. As always, your feedback is invaluable to us. Happy
                building!
              </div>
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
