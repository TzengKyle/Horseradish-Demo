<template>
    <div class="ProductList">
        <div v-if="products">
            <ListLine v-for="(p, index) in products" :key="p.id" :index="index" :title="p.title" />
        </div>
        <Button buttonText="Refresh Data" buttonClass="white-button" @click="fetchNew" />
    </div>
</template>

<script setup>

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