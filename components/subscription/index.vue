<script setup lang="ts">
    import { ref } from 'vue'
    const email = ref('')
    const handleSubmit = () => {
        console.log(email.value)
    }
</script>

<template lang="pug">
div(class="subscription")
    p(class="subscription__text") Подпишись на рассылку
    form(@submit.prevent="handleSubmit" class="subscription__form")
        input(placeholder="Email" type="email" v-model="email" class="subscription__input")
        button(type="submit" class="subscription__button") Подписаться
</template>

<style lang="scss">
    .subscription {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 100px;
        min-height: 100px;
        background-color: $black;
        width: 100%;

        @media screen and (max-width: 1440px) {
            width: 100%;
        }

        &__text {
            color: $white;
            font-size: 22px;
            font-weight: 800;
            line-height: 30px;
        }

        &__form {
            display: flex;
            flex-wrap: nowrap;
            align-items: flex-end;
            width: 100%;
            max-width: 613px;
            margin: 20px 0;
            @media screen and (max-width: 540px) {
                flex-wrap: wrap;
                justify-content: center;
            }
        }

        &__input {
            background-color: $black;
            color: $white;
            border: none;
            border-bottom: 1px solid $gray;
            margin-right: 37px;
            height: 28px;
            width: 100%;
            @media screen and (max-width: 540px) {
                width: 90%;
                margin-right: 0;
            }
        }
        
        &__button {
            background-color: $blue;
            color: $white;
            border-radius: 2px;
            border: none;
            width: 100%;
            max-width: 223px;
            height: 46px;
            @media screen and (max-width: 540px) {
                margin-top: 20px;
            }
        }
    }
</style>