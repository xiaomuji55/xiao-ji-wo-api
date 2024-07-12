<template>
    <p @click="goHome">返回首页</p>
</template>
<script setup lang="ts">
import router from '@/router';
function goHome() {
    router.push('/home');
}
</script>
<style lang="scss" scoped>
    p {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    }
</style>
