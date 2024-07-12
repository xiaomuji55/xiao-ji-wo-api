<template>
  <div class="layout">
    <div class="layout-head">
      <layout-head></layout-head>
    </div>
    <div class="layout-main">
      <router-view></router-view>
    </div>
    <div class="layout-foot">foot</div>
  </div>
</template>
<script lang="ts" setup>
import LayoutHead from '@/views/layout/layout-head.vue';
</script>
<style lang="scss">
  .layout {
    position: relative;
    height: 100%;
    width: 100%;
    .layout-head {
      box-sizing: border-box;
      height: $head-h;
      border: 1px solid #ccc;
    }
    .layout-main {
      height: $main-h;
      overflow: hidden;
    }
    .layout-foot {
      height: $foot-h;
    }
  }
</style>
