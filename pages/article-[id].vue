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
    const introBlock = articleData.value?.body.find((item: any) => item.type == "article_intro_block")
    const textBlocks = articleData.value?.body.filter((item: any) => item.type == "text_block")
    const [firstTextBlock, secondTextBlock] = textBlocks
</script>

<template lang="pug">
PageContent
    ArticleDescription(:descriptionData="introBlock.data" :key="introBlock.id")
    ArticleTextBlock(:textData="firstTextBlock.data" :key="firstTextBlock.id")
</template>