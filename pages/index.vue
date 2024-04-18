<template>
    <div class="home-page">

        <Head>
            <Title>Horseradish Demo - Home</Title>
            <Meta name="description" content="This is Home page" />
        </Head>
        <PageTitle>Home page</PageTitle>
        <div class="max-container">
            <span>主題: {{ theme }} </span>
            <hr>
            <span>排版: {{ arrange }}</span>
        </div>


    </div>
</template>

<script setup>
const { toggleTheme, theme } = useTheme()
const { toggleArrange, arrange } = useArrange()
</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>