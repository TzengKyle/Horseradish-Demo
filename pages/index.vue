<template>
    <Head>
        <Title>Horseradish Demo - Home</Title>
        <Meta name="description" content="This is Home page" />
    </Head>
    <div class="home-page">
        <PageTitle>Home page</PageTitle>
        <div class="max-container">
            <span>主題: {{ theme }} </span>
            <div class="color-box" :style="{ 'background-color': computedBoxColor }"></div>
            <hr>
            <span>排版: {{ arrange }}</span>
        </div>
    </div>
</template>

<script setup>
const { toggleTheme, theme } = useTheme()
const { toggleArrange, arrange } = useArrange()

const computedBoxColor = computed(() => {
    // 在这里根据 theme 的值返回相应的背景颜色
    if (theme.value === 'light') {
        return "rgba(49, 210, 17, 0.922)"; // 返回红色背景颜色
    } else {
        return 'black'; // 返回蓝色背景颜色
    }
});

</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss'
</style>