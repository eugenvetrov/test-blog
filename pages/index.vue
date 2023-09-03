<template lang="pug">
PageContent(:data="homeData")
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
        throw Error("We didn't get the data")
    }
    console.log(homeData.value)
</script>