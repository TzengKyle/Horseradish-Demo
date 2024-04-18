<template>
    <div :class="theme">
        <Navbar />
        <slot />
    </div>
</template>

<script setup>
const { toggleTheme, theme } = useTheme()
</script>
