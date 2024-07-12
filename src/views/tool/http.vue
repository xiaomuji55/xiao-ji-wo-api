<template>
    <div class="home">
        <div class="title">Http</div>
        <div class="main">
            <el-form :model="form" label-width="auto">
                <el-form-item label="名称">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="地址">
                    <el-row>
                        <el-col :span="6">
                            <el-select v-model="protocol" placeholder="Select">
                                <el-option label="http" value="http" />
                                <el-option label="https" value="https" />
                            </el-select>
                        </el-col>
                        <el-col :span="6">
                            <el-select v-model="type" placeholder="Select">
                                <el-option label="POST" value="POST" />
                                <el-option label="GET" value="GET" />
                                <el-option label="DELECT" value="DELECT" />
                            </el-select>
                        </el-col>
                        <el-col :span="6">
                            <el-input v-model="baseUrl" />
                        </el-col>
                        <el-col :span="6">
                            <el-input v-model="url" />
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="请求头">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="&nbsp;">
                    <el-radio-group v-model="radio1" class="ml-4">
                        <el-radio value="1" size="large">对象</el-radio>
                        <el-radio value="2" size="large">自定义</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="参数">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="&nbsp;">
                    <el-button type="success">发送</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-row>
                <el-col :span="12">req</el-col>
                <el-col :span="12">res</el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts" setup >
import { ref } from 'vue';

const form = ref({
    name: ''
});
const protocol = ref('http');
const type = ref('GET');
const baseUrl = ref('');
const url = ref('');
const radio1 = ref('1');

</script>
