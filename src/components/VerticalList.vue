<template>
  <div class="horizontal-list">
    <square v-for="(number, index) in lists" :key="index" :value-square="number" />
  </div>
</template>

<script setup>
import Square from "./Square.vue";

const props = defineProps({
  lists: Array
})
</script>

<style lang="less" scoped>
.horizontal-list {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;
}

</style>