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
    const getFindData = (type: string) => {
        return articleData.value?.body.find((item: IBodyData<IData>) => item.type == type)
    }
    const getFilterData = (type: string) => {
        const data = articleData.value?.body.filter((item: IBodyData<IData>) => item.type == type)
        if (data) return data
        return []
    }
    const introBlock = getFindData("article_intro_block")
    const [firstTextBlock, secondTextBlock]  = getFilterData("text_block")
    const imageBlock = articleData.value?.body.find((item: IBodyData<IData>) => item.type == "image_block")
    const sliderBlock = getFindData("slider_block")
    console.log(sliderBlock)
</script>

<template lang="pug">
PageContent
    ArticleIntroBlock(:introData="introBlock?.data" :key="introBlock?.id" v-if="introBlock")
    ArticleTextBlock(:textData="firstTextBlock?.data" :key="firstTextBlock?.id" v-if="firstTextBlock")
    ArticleImageBlock(:imageData="imageBlock?.data" :key="imageBlock?.id" v-if="imageBlock")
    ArticleTextBlock(:textData="secondTextBlock?.data" :key="firstTextBlock?.id" v-if="firstTextBlock")
    ArticleSliderBlock(:sliderData="sliderBlock?.data" :key="sliderBlock?.id" v-if="sliderBlock")
</template>