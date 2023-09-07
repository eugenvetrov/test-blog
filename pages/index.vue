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
    const listBlock = getFindData(homeData.value, "article_list_block")
    
</script>

<template lang="pug">
PageContent
    ArticleContainer
        ArticleListBlock(:listData="listBlock?.data" :key="listBlock?.id" v-if="listBlock")
</template>~/stores/base