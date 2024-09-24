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
            March 13, 2024
          </div>
        </div>
        <div class="max-w-[800px]">
          <div class="flex flex-col gap-6">
            <div data-aos="fade-up" data-aos-delay="300" class="">
              <img src="/changelog2.png" alt="" class="rounded-[15px] w-[800px]" />
            </div>
            <div class="flex flex-col gap-3 text-[15px]">
              <div data-aos="fade-up" data-aos-delay="400" class="text-[22px] leading-[33px]">
                Introducing Email Trigger, CSV Import and Major Flow Builder Enhancements
              </div>
              <div data-aos="fade-up" data-aos-delay="100" class="font-bold">Email Trigger</div>
              <div data-aos="fade-up" data-aos-delay="200" class="text-[#cacdd3] leading-[24px]">
                Unleash the Power of Email-Driven Workflows! You can now trigger your workflows
                using incoming emails, in addition to the existing time interval and event triggers.
                This new Email Trigger allows you to access the content of the incoming email
                directly within your flows, giving you even more flexibility and control.
              </div>
              <div data-aos="fade-up" data-aos-delay="300" class="font-bold">CSV Import</div>
              <div data-aos="fade-up" data-aos-delay="400" class="text-[#cacdd3]">
                It's finally here: CSV Import for tables. You can now easily import data from CSV
                files into existing tables or when creating new tables, making it a breeze to
                populate your tables and work with your data.
              </div>
              <div data-aos="fade-up" data-aos-delay="100" class="font-bold">
                Flow Builder Revamp
              </div>
              <div data-aos="fade-up" data-aos-delay="200" class="text-[#cacdd3]">
                We've given the flow builder a major UI/UX overhaul based on your valuable feedback.
                The most significant change is the introduction of auto-save for actions, so you no
                longer need to manually save each action. This improvement streamlines your workflow
                and ensures your progress is always saved.
              </div>
              <div data-aos="fade-up" data-aos-delay="300" class="font-bold">
                New Loop Control Actions
              </div>
              <div data-aos="fade-up" data-aos-delay="400" class="text-[#cacdd3]">
                We've added two new actions: 'Skip Iteration' and 'Exit Loop'. These actions allow
                you to dynamically control the flow of your loops based on specific conditions,
                enabling you to create more sophisticated loops.
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                class="text-[22px] leading-[33px] mt-[58px]"
              >
                Fixes & Improvements
              </div>
              <div data-aos="fade-up" data-aos-delay="200" class="text-[#cacdd3]">
                Unified the UI for HTTP and GraphQL Actions, bringing consistency between the small
                action view and the configuration view.
              </div>
              <ul
                class="flex flex-col gap-3 text-[15px] font-semibold list-image-[url(ulStyle.svg)]"
              >
                <li data-aos="fade-up" data-aos-delay="100">
                  Added an alert when attempting to close a tab before saving changes, preventing
                  accidental data loss.
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  Introduced options in the settings preferences page to disable specific shortcuts
                  (keybindings), avoiding double assignments.
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  Resolved a bug where some keyboard listeners remained active even when switching
                  away from a Fastgen tab to another tab.
                </li>
                <li data-aos="fade-up" data-aos-delay="400">
                  Email-triggered workflows can now access email attachments.
                </li>
                <li>
                  Significantly improved the speed of debug mode, allowing for faster testing and
                  troubleshooting of your workflows.
                </li>
                <li data-aos="fade-up" data-aos-delay="100">
                  Enhanced error handling by displaying the exact error message when package
                  installation fails in customCodeAction.
                </li>
              </ul>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                class="text-[15px] text-[#cacdd3] mt-[22px]"
              >
                We're constantly working to improve your experience and deliver the features you
                need. As always, we value your feedback and are here to support you every step of
                the way. Happy building!
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
