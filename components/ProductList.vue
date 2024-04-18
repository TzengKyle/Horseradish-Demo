<template>
    <div class="ProductList">
        <div v-if="products">
            <div v-for="p in products" class="list-line">{{ p.title }}</div>
        </div>
        <button @click="fetchNew" class="yellow-button">Refresh Data</button>
    </div>
</template>

<script setup>
const { toggleTheme, theme } = useTheme()

const {
    data: products,
    error,
    refresh,
    pending
} = await useFetch(`https://mocki.io/v1/70938d55-c2c3-4bdf-a0e5-46d6c249db0a`, {
})

function fetchNew() {
    console.log(products)
    refresh()
}

// function toggleTheme() {
//     theme = theme === 'light' ? 'dark' : 'light';
//     console.log(theme)
// }

// theme切換
// const theme = ref('dark');
// console.log("init", theme.value)

// const toggleTheme = () => {
//     theme.value = theme.value === 'light' ? 'dark' : 'light';
//     console.log(theme.value)
// }

// const themeClass = computed(() => {
//     return { 'light': theme.value === 'light', 'dark': theme.value === 'dark' };
// });

// theme 切換 global
// const toggleTheme = () => {
//     // 提交 mutation 切换主题
//     store.commit('theme/toggleTheme');
// };
// const themeClass = computed(() => {
//     return store.state.theme === 'light' ? 'light-theme' : 'dark-theme';
// });

</script>


<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>