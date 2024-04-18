<template>
    <input type="text" :placeholder="placeholder" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
</template>

<script setup>
const props = defineProps({
    placeholder: String,
    modelValue: {
        type: String,
        required: true,
    }
})
</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>