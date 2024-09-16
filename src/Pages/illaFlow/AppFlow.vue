<script setup>
import UseBuilding from '@/components/UseBuilding.vue';
import UseFooter from '../../components/UseFooter.vue';
import MainFlow from './components/MainFlow.vue';
import UseAnywhere from './components/UseAnywhere.vue';
import UseAutomate from './components/UseAutomate.vue';
import UseProduct from './components/UseProduct.vue';
import UseTrigger from './components/UseTrigger.vue';
</script>

<template>
  <div class="">
    <div class="flex place-content-center mb-20">
      <div class="max-w-[1200px] px-5">
        <MainFlow />
        <UseTrigger />
        <UseAutomate />
        <UseAnywhere />
        <UseProduct />
        <UseBuilding />
      </div>
    </div>
    <div class="">
      <UseFooter />
    </div>
  </div>
</template>
