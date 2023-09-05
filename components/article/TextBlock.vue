<script setup lang="ts">
    import DOMPurify from 'isomorphic-dompurify'
    
    const props = defineProps(["textData"])
    const textData = props.textData
    const clean = DOMPurify.sanitize(textData)
</script>

<template lang="pug">
div(class="text-block")
    div(v-html="clean")
    nuxt-img(src="images/svg/quotes-left.svg" class="text-block__image_quote")
</template>

<style lang="scss">
    .text-block {
        position: relative;

        & p {
            font-size: 18px;
            line-height: 26px;
            color: $eerie-black;
        }

        & blockquote {
            margin-left: 130px;
            font-size: 18px;
            line-height: 26px;
            font-weight: 300;
            color: $gray;
            :first-child {
                color: $gray;
                font-style: italic;
            }
            @media screen and (max-width: 899px) {
                    & {
                        margin-left: 0px;
                    }
                }
        }

        &__image {
            &_quote {
                position: absolute;
                bottom: 60px;
                @media screen and (max-width: 899px) {
                    & {
                        position: relative;
                        bottom: -10px;
                    }
                }
            }
        }
    }
</style>