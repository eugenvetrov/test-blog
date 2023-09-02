<template lang="pug">
div {{ homeData.page_type }}
</template>

<script setup lang="ts">
    import { useHomePageStore } from "~/stores/home"
    import { storeToRefs } from 'pinia'
    const homePageStore = useHomePageStore()
    const { fetchHomeData } = homePageStore
    const { homeData } = storeToRefs(homePageStore)
    try {
        await fetchHomeData()
    } catch (error) {
        console.warn("error: ", error)
        throw Error("Не удалось получить данные")
    }
    console.log(homeData.value)
</script>