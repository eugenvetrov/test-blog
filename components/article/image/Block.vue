<script setup lang="ts">
    const props = defineProps(["imageData"])
    const imageData = props.imageData
</script>

<template lang="pug">
figure(class="article-image-block")
    nuxt-img(:src="imageData?.src" quality="60" class="article-image-block__image" alt="article image"  loading="lazy")
    figcaption(class="article-image-block__caption") {{ imageData?.caption }}
</template>

<style lang="scss">
    .article-image-block{
        margin-top: 40px;
        &__image {
            width: 100%;
            border-radius: 0 250px 0 0;
            @media screen and (max-width: 800px) {
                border-radius: 0 150px 0 0;
            }
        }
        &__caption {
            text-align: right;
            color: $gray;
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
        }
    }
</style>