<script setup lang="ts">
    const props = defineProps(['listData'])
    const title = props?.listData?.title
    const articles = props?.listData?.articles
    const routePath = useRoute().path
    const showTitle = routePath.includes('article')
</script>

<template lang="pug">
p(class="article-list-block__title" v-if="showTitle") {{ title }}
div(class="article-list-block")
    ArticlePreview(:item="item" :key="item.id" v-for="item in articles")    
</template>

<style lang="scss">
    .article-list-block {
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

        &__title {
            font-size: 34px;
            line-height: 46px;
            font-weight: 800;
            @media screen and (max-width: 560px){
                & {
                    font-weight: 400;
                }
            }
        }
    }
</style>