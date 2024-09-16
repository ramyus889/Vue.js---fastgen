<script setup>
import UseBuilding from '../../components/UseBuilding.vue';
import UseFooter from '../../components/UseFooter.vue';
import UseMinCard from '../../components/UseMinCard.vue';
import UseTree from '../../components/UseTree.vue';
</script>

<template>
  <div class="">
    <div class="flex place-content-center">
      <div class="max-w-[1200px]">
        <UseBuilding />
        <UseMinCard />
        <UseTree />
      </div>
    </div>
    <div class="">
      <UseFooter />
    </div>
  </div>
</template>
