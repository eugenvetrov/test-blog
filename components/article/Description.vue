<script setup lang="ts">
    const props = defineProps(['descriptionData'])
    const descriptionData = props.descriptionData
</script>

<template lang="pug">
div(class="article-description")
    nuxt-img(:src="descriptionData?.image" class="article-description__image" v-if="descriptionData?.image")
    div(class="article-description__text-wrapper")
        h3(class="article-description__title") {{ descriptionData?.title }}
        p(class="article-description__text_gray")
            nuxt-img(src="images/svg/clock-icon.svg" alt="clock icon" width="16" height="16" class="article-description__icon")
            span {{ descriptionData?.reading_time }} мин время чтения
        p(class="article-description__text_gray")
            nuxt-img(src="images/svg/views-count-icon.svg" alt="clock icon" width="16" height="16" class="article-description__icon")
            span {{ descriptionData?.views_count }} прочитали статью
        p(class="article-description__text") {{ descriptionData?.short_description }}
</template>

<style lang="scss">
    .article-description {
        display: flex;
        flex-wrap: wrap;

        &__image {
            width: 40%;
            height: 100%;
            max-width: 541px;
            max-height: 580px;
            border-radius: 0 45% 0 0;
            aspect-ratio: .93 / 1;

            @media screen and (max-width: 1024px) {
                width: 90%;
            }
        }

        &__text-wrapper {
            display: flex;
            flex-direction: column;
            width: 60%;
            margin-left: 30px;

            @media screen and (max-width: 1024px) {
                width: 90%;
                margin-left: 0;
            }
        }

        &__title {
            font-size: 56px;
            line-height: 66px;
            font-weight: 800;
            @media screen and (max-width: 456px) {
                font-size: 26px;
                line-height: 30px;
                font-weight: 800;
            }
        }

        &__text {

            &_gray {
                display: flex;
                color: $gray;
                font-size: 14px;
                line-height: 16px;
                font-weight: 400;
            }
            
            font-size: 18px;
            line-height: 26px;
            font-weight: 400;
        }

        &__icon {
            margin-right: 10px;
        }

    }
</style>