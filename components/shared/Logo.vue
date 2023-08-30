<script setup lang="ts">
    const { width, height } = defineProps({ width: String, height: String})
</script>

<template lang="pug">
nuxt-img(src='images/svg/logo.svg' alt='logo' :width='width' :height='height')
</template>