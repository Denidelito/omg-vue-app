<template>
  <div class="square">
    {{ valueSquare }}
  </div>
</template>

<script setup>
const props = defineProps({
  valueSquare: Number
})
</script>

<style lang="less" scoped>
  .square {
    font-size: 2rem;
    min-width: 150px;
    height: 150px;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
</style>