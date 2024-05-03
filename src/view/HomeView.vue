<template>
  <div ref="containerElement" class="container" @scrollend="onScroll">
    <vertical-list v-for="(listItems, index) in dataStore.verticalList"
                   :key="index"
                   :lists="listItems"
                   :id="'horizontal-list-' + index"/>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {useDataStore} from "../stores/useDataStore.js";
import VerticalList from "../components/VerticalList.vue";

const dataStore = useDataStore();

const containerElement = ref(null);
function onScroll() {
  const containerElementValue = containerElement.value

  if (!containerElement.value) {
    console.error("Container element is not defined");
    return;
  }

  const top = containerElementValue.scrollTop;
  const bottom = containerElementValue.scrollTop + containerElementValue.clientHeight;
  const left = containerElementValue.scrollLeft;
  const right = containerElementValue.scrollLeft + containerElementValue.clientWidth;

  const visibleElements = dataStore.determineVisibleElements({ top, bottom, left, right });

  dataStore.updateVisibleElements(visibleElements);
}

onMounted(() => {
  dataStore.generateVerticalList();

  setInterval(onScroll, 1000);
});
</script>

<style lang="less" scoped>
  .container {
    max-width: 100vw;
    height: 100vh;
    overflow: scroll;
  }
</style>