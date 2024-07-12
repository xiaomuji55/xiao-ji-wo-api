<template>
    <div class="home">
        <div class="title">JSON格式化</div>
        <div class="main">
            <el-row :gutter="40">
                <el-col :span="12">
                    <el-input v-model="textarea" style="width: 100%" :rows="20" type="textarea" placeholder="请输入" @input="onInput" />
                </el-col>
                <el-col :span="12">
                    <json-viewer v-model:value="jsonData" copyable boxed expanded></json-viewer>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts" setup >
import { ref } from 'vue';

import { ElRow, ElCol, ElInput } from 'element-plus';
import JsonViewer from 'vue-json-viewer';

import 'element-plus/theme-chalk/el-row.css';
import 'element-plus/theme-chalk/el-col.css';

const jsonData = ref('');
const textarea = ref('');

function onInput() {
    console.log(JSON.parse(textarea.value));

    try {
        jsonData.value = JSON.parse(textarea.value);
    } catch (error) {
        alert('格式错误')
    }
}

</script>
