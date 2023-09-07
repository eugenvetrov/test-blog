<script setup lang="ts">
    const props = defineProps(['introData'])
    const introData = props.introData
</script>

<template lang="pug">
div(class="article-intro-block")
    nuxt-img(:src="introData?.image" class="article-intro-block__image" v-if="introData?.image" alt="intro block image")
    div(class="article-intro-block__text-wrapper")
        h3(class="article-intro-block__title") {{ introData?.title }}
        p(class="article-intro-block__text_gray")
            nuxt-img(src="images/svg/clock-icon.svg" alt="clock icon" width="16" height="16" class="article-intro-block__icon")
            span {{ introData?.reading_time }} мин время чтения
        p(class="article-intro-block__text_gray")
            nuxt-img(src="images/svg/views-count-icon.svg" alt="clock icon" width="16" height="16" class="article-intro-block__icon")
            span {{ introData?.views_count }} прочитали статью
        p(class="article-intro-block__text") {{ introData?.short_description }}
</template>

<style lang="scss">
    .article-intro-block {
        display: flex;
        flex-wrap: wrap;

        &__image {
            width: 30%;
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
            width: 50%;
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
                font-weight: 400;
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