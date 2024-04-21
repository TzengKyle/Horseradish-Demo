<template>
    <input type="text" :placeholder="placeholder" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" :style="{ width: width }">
</template>

<script setup>
const props = defineProps({
    placeholder: String,
    modelValue: {
        type: String,
        required: true,
        default: '',
    },
    width: {
        type: String,
        default: '200px' // 預設寬度，可以根據需要調整
    }
})
</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>