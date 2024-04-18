<!-- FruitRadioGroup.vue -->
<template>
    <div class="radio-container">
        <div v-for="option in options" :key="option.value" class="flex-center">
            <input type="radio" :value="option.value" :id="option.value" v-model="checkedFruit" @input="updateModel">
            <label :for="option.value">{{ option.label }}</label>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    modelValue: String,
    options: {
        type: Array
    }
});

const emits = defineEmits(['update:modelValue']);

const checkedFruit = ref(props.modelValue);

const updateModel = (event) => {
    const selectedValue = event.target.value;
    checkedFruit.value = selectedValue;
    emits('update:modelValue', selectedValue);
};
</script> 

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>