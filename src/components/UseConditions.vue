<script setup></script>
<template>
  <div class="flex place-content-center mt-[208px] px-5">
    <div class="">
      <div class="text-center text-[46px] font-[700]">
        Do
        <span
          class="bg-gradient-to-r from-[#7A6AFF] via-[#FF986D] to-[#F9F871] bg-clip-text text-transparent font-[700]"
          >anything & everything</span
        >
        with your data
      </div>
      <div class="flex flex-col gap-4">
        <div
          class="mt-[60px] flex md:flex-row flex-col md:gap-10 gap-5 lg:ps-[60px] ps-[20px] pt-[33px] bg-[#2b2b2b] rounded-[16px]"
        >
          <div class="flex flex-col gap-[20px] max-w-[300px]">
            <div class="flex gap-[14px] items-center">
              <div class=""><img src="/conditions.svg" alt="" /></div>
              <div class="text-[20px] font-[700]">Conditions</div>
            </div>
            <div class="flex flex-col gap-[15px] pb-10">
              <div class="text-[#8b8f98] font-bold">
                Conditional flow controls let you specify what to execute depending on what data is
                processed.
              </div>
              <div class="text-[#8b8f98] font-bold">
                Multi level logic trees, loops and other conditions come with pre-written operators.
              </div>
            </div>
          </div>
          <div class="">
            <img src="/conditionsImage.svg" alt="" />
          </div>
        </div>
        <div class="flex lg:flex-row flex-col gap-4">
          <div
            class="flex lg:flex-col max-[768px]:flex-col-reverse gap-[20px] lg:px-[60px] px-[20px] pt-[33px] bg-[#2b2b2b] rounded-[16px]"
          >
            <div class="">
              <img src="/copilotImage.svg" alt="" />
            </div>
            <div class="flex flex-col gap-[20px] max-w-[400px]">
              <div class="flex gap-[14px] items-center">
                <div class=""><img src="/copilot.svg" alt="" /></div>
                <div class="text-[20px] font-[700]">AI SQL Copilot</div>
              </div>
              <div class="flex flex-col gap-[15px] pb-10">
                <div class="text-[#8b8f98] font-bold">
                  Let our copilot speed you up in writing SQL statements.
                </div>
                <div class="text-[#8b8f98] font-bold">Add queries directly to your flows.</div>
              </div>
            </div>
          </div>
          <div
            class="flex lg:flex-col max-[768px]:flex-col justify-between gap-[20px] ps-[30px] pt-[33px] bg-[#2b2b2b] rounded-[16px]"
          >
            <div class="flex flex-col gap-[20px] max-w-[350px]">
              <div class="flex gap-[14px] items-center">
                <div class=""><img src="/functions.svg" alt="" /></div>
                <div class="text-[20px] font-[700]">Functions</div>
              </div>
              <div class="flex flex-col gap-[15px] pb-10">
                <div class="text-[#8b8f98] font-bold">
                  Select from 50+ functions to manipulate data exactly how you want it to.
                </div>
                <div class="text-[#8b8f98] font-bold">
                  Operators let you define variables directly in the UI.
                </div>
              </div>
            </div>
            <div class="">
              <img src="/functionsImage.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
