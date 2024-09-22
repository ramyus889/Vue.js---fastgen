<script setup>
import UseAutosync from '@/components/UseAutosync.vue';
import UseBackedCard from '@/components/UseBackedCard.vue';
import UseBuilding from '@/components/UseBuilding.vue';
import UseComments from '@/components/UseComments.vue';
import UseConditions from '@/components/UseConditions.vue';
import UseCreateAPI from '@/components/UseCreateAPI.vue';
import UseDebugAPI from '@/components/UseDebugAPI.vue';
import UseFooter from '@/components/UseFooter.vue';
import UseMain from '@/components/UseMain.vue';
import UseMainFooter from '@/components/UseMainFooter.vue';
</script>

<template>
  <div class="flex place-content-center">
    <div class="max-w-[1100px] mb-20">
      <UseMain />
      <UseBackedCard />
      <UseCreateAPI />
      <UseDebugAPI />
      <UseBuilding />
      <UseConditions />
      <UseAutosync />
      <UseComments />
      <UseMainFooter />
    </div>
  </div>
  <div class="">
    <UseFooter />
  </div>
</template>
