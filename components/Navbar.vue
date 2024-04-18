<template>
    <nav class="Navbar">
        <NuxtLink to="/">
            <button class="yellow-button">
                Home
            </button>
        </NuxtLink>
        <NuxtLink to="/fetch-api-demo">
            <button class="yellow-button">
                fetch-api-demo
            </button>
        </NuxtLink>
        <NuxtLink to="/v-model-demo">
            <button class="yellow-button">
                v-model-demo
            </button>
        </NuxtLink>
        <button class="green-button" @click="toggleTheme">切換主題</button>
        <button class="green-button" @click="toggleArrange">切換排版</button>

    </nav>
</template>

<script setup>
const { toggleTheme, theme } = useTheme()
const { toggleArrange, arrange } = useArrange()
</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>