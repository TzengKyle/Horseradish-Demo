<template>
    <div class="list-line">
        <span v-if="index !== undefined">
            {{ index + 1 }}.
        </span>
        <span style="font-size: 20px; font-weight: bold;">{{ title }}</span>
        <br>
        {{ text }}
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    index: Number,
    title: {
        type: String,
        default: '',
    },
    text: {
        type: String,
        default: '',
    },

});
</script>
  
<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>
  