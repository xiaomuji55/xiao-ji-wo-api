<template>
    <div>
        <div>这是首页</div>
        <hr>
        <dl>
            <dt>API</dt>
            <dd>
                <p class="luyou" @click="go('/html-API')">html-API</p>
            </dd>
            <dd>
                <p class="luyou" @click="go('/css-API')">css-API</p>
            </dd>
            <dd>
                <p class="luyou" @click="go('/javaScript-API')">javaScript-API</p>
            </dd>
            <dd>
                <p class="luyou" @click="go('/json')">json</p>
            </dd>
            <dd>
                <p class="luyou" @click="go('/http')">http</p>
            </dd>
        </dl>
    </div>
</template>
<script lang="ts" setup >
import router from '@/router';

function go(url: string) {
    router.push(url);
}
</script>
<style lang="scss" scoped>
.luyou {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>