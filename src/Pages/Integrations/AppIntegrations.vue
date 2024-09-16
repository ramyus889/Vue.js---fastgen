<script setup>
import UseBuilding from '@/components/UseBuilding.vue';
import UseFooter from '@/components/UseFooter.vue';
import UseDatabase from './components/UseDatabase.vue';
import UseDataSource from './components/UseDataSource.vue';
</script>

<template>
  <div class="">
    <div class="flex place-content-center">
      <div class="max-w-[1200px] px-5">
        <UseDataSource />
        <UseDatabase />
        <UseBuilding />
      </div>
    </div>
    <div class="">
      <UseFooter />
    </div>
  </div>
</template>
