<template>
    <nav class="Navbar">
        <!-- Left -->
        <NuxtLink class="logo" to="/">
            DEMO
        </NuxtLink>

        <!-- Right -->
        <div class="buttons">
            <NuxtLink to="/todo-list-demo">
                <Button buttonText="todo-list-demo" buttonClass="white-button" />
            </NuxtLink>
            <NuxtLink to="/fetch-api-demo">
                <Button buttonText="fetch-api-demo" buttonClass="white-button" />
            </NuxtLink>
            <NuxtLink to="/v-model-demo">
                <Button buttonText="v-model-demo" buttonClass="white-button" />
            </NuxtLink>
            <Button buttonText="切換主題" buttonClass="black-button" @click="toggleTheme" />
            <Button buttonText="切換排版" buttonClass="black-button" @click="toggleArrange" />
        </div>
    </nav>
</template>

<script setup>
const { toggleTheme, theme } = useTheme()
const { toggleArrange, arrange } = useArrange()
</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>