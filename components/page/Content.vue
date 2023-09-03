<script setup lang="ts">
    const props = defineProps(['data'])
    const data = props.data
    console.log(data.body);
    
</script>

<template lang="pug">
div(v-if="data?.page_type === 'home'" class="page-content")
    p it's home page
    div(v-for="item in data?.body" :key="item.id")
        ArticleGallery(:data="item.data.articles" v-if="item.type === 'article_list_block'")
</template>

<style lang="scss">
    .page-content {
        display: flex;
        width: 90%;
        flex-direction: column;
        margin: 30px 0;
        align-items: center;
    }
</style>