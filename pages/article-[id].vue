<script setup lang="ts">
    import { useBaseStore } from "~/stores/base"
    import { storeToRefs } from 'pinia'
    const route = useRoute()
    const [articleId] = route.params.id
    const articlePageStore = useBaseStore()
    const { fetchArticleData } = articlePageStore
    try {
        await fetchArticleData(articleId)
    } catch (error) {
        console.warn("error: ", error)
        throw Error("We didn't get the data")
    }
    const { articleData } = storeToRefs(articlePageStore)
    const introBlock = getFindData(articleData.value, "article_intro_block")
    const [firstTextBlock, secondTextBlock]  = getFilterData(articleData.value, "text_block")
    const imageBlock = getFindData(articleData.value, "image_block")
    const sliderBlock = getFindData(articleData.value, "slider_block")
    const listBlock = getFindData(articleData.value, "article_list_block")
</script>

<template lang="pug">
PageContent
    ArticleContainer
        ArticleIntroBlock(:introData="introBlock?.data" :key="introBlock?.id" v-if="introBlock")
        ArticleTextBlock(:textData="firstTextBlock?.data" :key="firstTextBlock?.id" v-if="firstTextBlock")
        ArticleImageBlock(:imageData="imageBlock?.data" :key="imageBlock?.id" v-if="imageBlock")
        ArticleTextBlock(:textData="secondTextBlock?.data" :key="firstTextBlock?.id" v-if="firstTextBlock")
        Slider(:sliderData="sliderBlock?.data" :key="sliderBlock?.id" v-if="sliderBlock")
    Subscription
    ArticleContainer
        ArticleListBlock(:listData="listBlock?.data" :key="listBlock?.id" v-if="listBlock")
    BeMember
</template>