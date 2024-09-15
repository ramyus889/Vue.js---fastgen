<script setup>
import UseBigCard from './components/UseBigCard.vue';
import UseBuilding from './components/UseBuilding.vue';
import UseFooter from './components/UseFooter.vue';
import UseHeader from './components/UseHeader.vue';
import UseMain from './components/UseMain.vue';
import UseMinCard from './components/UseMinCard.vue';
import UseTeams from './components/UseTeams.vue';
import UseTree from './components/UseTree.vue';
</script>

<template>
  <div class="">
    <UseHeader />
    <div class="flex place-content-center">
      <div class="max-w-[1200px]">
        <UseMain />
        <UseTeams />
        <UseBigCard />
        <UseMinCard />
        <UseTree />
        <UseBuilding />
      </div>
    </div>
    <div class="">
      <UseFooter />
    </div>
  </div>
</template>
