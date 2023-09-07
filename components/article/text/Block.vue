<script setup lang="ts">
    import DOMPurify from 'isomorphic-dompurify'
    
    const props = defineProps(["textData"])
    const textData = props.textData
    const clean = DOMPurify.sanitize(textData)
    const isBlockquote = clean.indexOf("blockquote") > -1
</script>

<template lang="pug">
div(class="article-text-block")
    div(v-html="clean")
    nuxt-img(src="images/svg/quotes-left.svg" class="article-text-block__image_quote" v-if="isBlockquote")
</template>

<style lang="scss">
    .article-text-block {
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

        & ul {
            list-style: url(../../../public/images/svg/rectangle-li.svg);
            margin-left: 40px;
            font-size: 18px;
            line-height: 26px;
            color: $eerie-black;
            @media screen and (max-width: 320px){
                & {
                    margin-left: 0;
                    list-style: none;
                    padding-inline-start: 0;
                }
            }
        }

        & li {
            margin-bottom: 10px;
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