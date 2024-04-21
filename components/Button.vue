<template>
    <button :class="buttonClass" @click="handleClick" :type="buttonType">
        {{ buttonText }}
    </button>
</template>
  
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    buttonText: String,
    buttonClass: {
        type: String,
        default: ''
    },
    buttonType: String
});

const emits = defineEmits(['click']);

const handleClick = () => {
    emits('click');
};
</script>
  
<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>
  