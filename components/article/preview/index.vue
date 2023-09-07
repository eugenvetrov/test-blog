<script setup lang="ts">
    const props = defineProps(['item'])
    const item = props.item
</script>

<template lang="pug">
div(class="article-preview")
    nuxt-img(:src="item.image" alt="article image" loading="lazy" class="article-preview__image" quality="60")
    p(class="article-preview__title") {{ item.title }}
    NuxtLink(:to="item.link" class="article-preview__button") Читать
</template>

<style lang="scss">
    .article-preview {
        width: 100%;
        display: flex;
        max-width: 427px;
        flex-direction: column;
        justify-content: space-between;

        &__image {
            width: 100%;
            height: auto;
            max-width: 427px;
            max-height: 320px;
            aspect-ratio: 4 / 3;
        }

        &__title {
            font-size: 22px;
            line-height: 30px;
            font-weight: 800;
            @media screen and (max-width: 560px){
                font-weight: 400;
            }
        }

        &__button {
            display: flex;
            text-decoration: none;
            color: $white;
            background-color: $black;
            width: 100%;
            max-width: 164px;
            height: 46px;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }
    }
</style>