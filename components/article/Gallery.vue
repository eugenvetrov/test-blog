<script setup lang="ts">
    const props = defineProps(['data'])
    const articles = props.data
</script>

<template lang="pug">
div(class="article-gallery")
    ArticlePreview(:item="item" :key="item.id" v-for="item in articles")
</template>

<style lang="scss">
    .article-gallery {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        justify-content: center;
        width: 100%;
        max-width: 1340px;
        @media (max-width: 1390px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 930px) {
            grid-template-columns: 1fr;
        }
    }
</style>