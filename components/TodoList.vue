<template>
    <form class="TodoList" @submit.prevent="submitForm">
        <div style="display: flex; gap: 34px;">
            <InputText v-model="formData.title" placeholder="輸入標題" width="200px" />
            <Button button-type="submit" button-text="新增" button-class="black-button" />
        </div>
        <InputText v-model="formData.text" placeholder="輸入內容" width="300px" />
        <div v-if="todos">
            <ListLine v-for="(todo, index) in todos" :key="todo._id" :title="todo.title" :text="todo.text" />
        </div>
    </form>
</template>

<script setup>


const title = ref('');
const text = ref('');

const formData = computed(() => {
    return {
        title: title.value,
        text: text.value
    };
});

const todos = ref([]);

const submitForm = () => {
    console.log('表單資料：', JSON.stringify(todos.value));
    todos.value.push({ ...formData.value });
};

</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>