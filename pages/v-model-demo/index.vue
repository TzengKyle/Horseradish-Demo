<template>
    <div class="v-model-demo-page">

        <Head>
            <Title>Horseradish Demo - v-model demo page</Title>
            <Meta name="description" content="This is v-model demo page" />
        </Head>
        <PageTitle>v-model demo page</PageTitle>

        <form>
            <h3>InputText</h3>
            <InputText v-model="name" placeholder="Name" />
            <div style="padding-top: 10px; padding-left: 5px">Name: {{ name }}</div>
            <hr>

            <h3>InputRadio</h3>
            <InputRadio v-model="fruit" :options="fruitOptions" />
            <div style="padding-top: 10px; padding-left: 5px">Selected Fruit: {{ fruit }}</div>
            <hr>

            <h3>InputSelect</h3>
            <InputSelect v-model="game" :options="gameOptions" />
            <div style="padding-top: 10px; padding-left: 5px">Selected Game: {{ game }}</div>
            <hr>

            <h3>CustomInput</h3>
            <span>Choose a input type:</span>
            <br>
            <CustomInput inputType="InputSelect" v-model="type" :options="typeOptions" />
            <hr>
            <CustomInput :inputType="type" v-model="customRef" :options="customRefOptions" />
            <div style="padding-top: 10px; padding-left: 5px">CustomRef: {{ customRef }}</div>
            <hr>
        </form>
    </div>
</template>

<script setup>
const fruitOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'Banana' }
];

const gameOptions = [
    { value: 'apex', label: 'Apex' },
    { value: 'lol', label: 'LoL' },
    { value: 'cod', label: 'Cod' },
    { value: 'vscode', label: 'VsCode' }
];

const customRefOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
];

const typeOptions = [
    { label: 'InputText', value: 'InputText' },
    { label: 'InputRadio', value: 'InputRadio' },
    { label: 'InputSelect', value: 'InputSelect' }
]

const name = ref('Kyle')
const fruit = ref('')
const game = ref('')
const type = ref('')
const customRef = ref('');
</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>

