<template>
  <div id="webpack-sub-container"></div>
  <div id="vite-sub-container"></div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { initGlobalState, start } from 'qiankun'

const state = reactive({
  count: 0
})

const action = initGlobalState(state)

onMounted(() => {
  if (!window.qiankunStarted) {
    window.qiankunStarted = true;
    start({
      singular: false
    });
  }
})
</script>