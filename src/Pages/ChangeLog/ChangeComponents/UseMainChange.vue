<script>
export default {
  name: 'UseMainChange',
  mounted() {
    document.title = 'Changelog dev';
  }
};
</script>
<template>
  <div class="">
    <div class="max-w-[1100px]">
      <div class="flex place-content-center mt-[180px] px-5">
        <div class="">
          <div class="text-[46px] font-[600]">Changelog</div>
          <div class="text-[14px] text-[#b1b1b1] font-[500]">
            Explore our recent updates and enhancements
          </div>
          <div class="border-t-[1px] mt-[55px] pt-[44px] border-[#6B656F]">
            <UseChangeBlog1 />
            <UseChangeBlog2 />
            <UseChangeBlog3 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
