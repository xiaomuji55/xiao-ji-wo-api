<template>
    <div>
        <MdEditor v-model="text" @onSave="onSave" />
    </div>
</template>
<script lang="ts" setup >
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('');

function onSave(v) {
    console.log(v);
}

</script>
