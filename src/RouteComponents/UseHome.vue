<script setup>
import UseBackedCard from '@/components/UseBackedCard.vue';
import UseCreateAPI from '@/components/UseCreateAPI.vue';
import UseDebugAPI from '@/components/UseDebugAPI.vue';
import UseMain from '@/components/UseMain.vue';
</script>

<template>
  <div class="flex place-content-center">
    <div class="max-w-[1100px] mb-20">
      <UseMain />
      <UseBackedCard />
      <UseCreateAPI />
      <UseDebugAPI />
    </div>
  </div>
</template>
