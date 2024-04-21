<template>
    <div :class="[arrange, theme]">
        <Navbar />
        <slot />
    </div>
</template>


<script setup>
const { toggleTheme, theme } = useTheme()
const { toggleArrange, arrange } = useArrange()
</script>
