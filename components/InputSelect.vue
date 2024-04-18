<template>
    <select v-model="selectedGame" @input="updateModel">
        <option value="">Select One</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
</template>
  
<script setup>
const props = defineProps({
    modelValue: String,
    options: {
        type: Array,

    },
});

const emits = defineEmits(['update:modelValue']);

const selectedGame = ref(props.modelValue);

const updateModel = (event) => {
    const selectedValue = event.target.value;
    selectedGame.value = selectedValue;
    emits('update:modelValue', selectedValue);
};
</script>
  