<template>
    <Head>
        <Title>Horseradish Demo - Home</Title>
        <Meta name="description" content="This is Home page" />
    </Head>
    <div class="home-page">
        <div class="page-title-container">
            <PageTitle>Home page</PageTitle>
        </div>

        <div class="page-content-container">
            <span>主題: {{ theme }} </span>
            <div class="color-box" :style="{ 'background-color': computedBoxColor, 'border-color': computedBorderColor }">

            </div>
            <hr>
            <span>排版: {{ arrange }}</span>
        </div>

    </div>
</template>

<script setup>
const { toggleTheme, theme } = useTheme()
const { toggleArrange, arrange } = useArrange()

const computedBoxColor = computed(() => {
    if (theme.value === 'light') {
        return "white";
    } else {
        return 'black';
    }
});

const computedBorderColor = computed(() => {
    if (theme.value === 'light') {
        return "black";
    } else {
        return 'white';
    }
});

</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>