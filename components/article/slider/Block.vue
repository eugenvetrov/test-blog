<script setup lang="ts">
    import { Carousel, Slide, Navigation } from 'vue3-carousel'
    const props = defineProps(["sliderData"])
    const sliderData = props.sliderData
    const getSlideNumber = (number: number, length: number) => {
        const result = number + 1
        return result
    }
</script>

<template>
    <carousel :items-to-show="1" class="carousel" :wrap-around="false" snapAlign="start" v-if="sliderData">
        <slide v-for="slide in sliderData" :key="slide">
            <nuxt-img :src="slide" class="carousel__item"/>
        </slide>
        <template #addons="{ slidesCount, currentSlide }">
            <navigation><div class="article-slider-block__arrow_background"> hello</div></navigation>
            <p class="carousel__text">{{ getSlideNumber(currentSlide, slidesCount) }}/{{ slidesCount }}</p>
        </template>
    </carousel>
</template>

<style lang="scss">
    .carousel {
        width: 100%;
        &__item {
            width: 80%;
        }
        &__prev, &__next {
          background-color: $eerie-black;
          color: $light-gray;
          &:hover{
            color: $light-gray;
          }
        }
        &__text {
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
        }
    }
</style>