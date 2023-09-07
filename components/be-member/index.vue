<script setup lang="ts">
    import { ref } from 'vue'
    const name = ref('')
    const tel = ref('')
    const email = ref('')
    const handleSubmit = () => {
        console.log(name.value, tel.value, email.value)
    }
</script>

<template lang="pug">
div(class="be-member")
    nuxt-img(src="images/svg/be-member.svg" alt="smiling person" class="be-member__image")
    form(@submit.prevent="handleSubmit" class="be-member__form")
        p(class="be-member__form-title") Стань участником проекта
        input(placeholder="Имя" type="text" v-model="name" class="be-member__input")
        input(placeholder="Телефон" type="tel" v-model="tel" class="be-member__input")
        input(placeholder="Email" type="email" v-model="email" class="be-member__input")
        button(type="submit" class="be-member__button") Присоединиться
</template>

<style lang="scss">
    .be-member {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        background-color: $black;
        justify-content: space-around;

        &__image {
            width: 40%;
            max-width: 595px;
            margin: 40px;
            @media screen and (max-width: 720px) {
                width: 100%;
                margin: 40px 0;
            }
        }

        &__form {
            display: flex;
            flex-direction: column;
            width: 100%;
            max-width: 353px;
            margin: 40px 0;
            @media screen and (max-width: 540px) {
                flex-wrap: wrap;
                justify-content: center;
            }

            &-title {
                color: $title-white;
                font-size: 34px;
                line-height: 34px;
                font-weight: 800;
                margin: 0 0 20px 0;
            }
        }

        &__input {
            background-color: $black;
            color: $white;
            border: none;
            border-bottom: 1px solid $gray;
            margin-bottom: 20px;
            &:nth-last-of-type(1) {
                margin-bottom: 40px;
            }
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