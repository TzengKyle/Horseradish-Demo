<template>
    <InputText v-if="inputType === 'InputText'" v-model="inputValue" placeholder="Name" />
    <InputRadio v-else-if="inputType === 'InputRadio'" v-model="inputValue" :options="options" />
    <InputSelect v-else v-model="inputValue" :options="options" />
</template>
  
<script setup>
const props = defineProps({
    inputType: String,
    options: {
        type: Array,
        default: []
    },
    value: {
        type: String,
        default: ''
    }
});

const inputValue = ref(props.value);
</script>
  