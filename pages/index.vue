<script setup lang="ts">
    import { useBaseStore } from "~/stores/base"
    import { storeToRefs } from 'pinia'
    const homePageStore = useBaseStore()
    const { fetchHomeData } = homePageStore
    try {
        await fetchHomeData()
    } catch (error) {
        console.warn("error: ", error)
        throw Error("We didn't get the data")
    }
    const { homeData } = storeToRefs(homePageStore)
    const articleList = homeData?.value?.body.find((item: { type: string }) => item.type === 'article_list_block')
    const articles = articleList?.data.articles
    
</script>

<template lang="pug">
PageContent
    Article
        ArticleListBlock(:data="articles")
</template>~/stores/base