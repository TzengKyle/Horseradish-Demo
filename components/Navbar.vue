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



        <button class="green-button" @click="toggleTheme">切換主題</button>
    </nav>
</template>

<script setup>
const { toggleTheme, theme } = useTheme()

// function _toggleTheme() {
//     toggleTheme()
//     console.log(theme.value)
// }
</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>