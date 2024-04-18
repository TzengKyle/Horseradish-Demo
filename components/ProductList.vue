<template>
    <div class="ProductList">
        <div v-if="products">
            <div v-for="(p, index) in products" class="list-line">{{ index + 1 }}.{{ p.title }}<br></div>
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
</script>


<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>