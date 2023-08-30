<script setup lang="ts">
    import { ref } from 'vue'

    const email = ref('')
    const handleSubmit = (event) => {
        console.log(email.value)
    }
</script>

<template lang="pug">
div(class="footer-app__subscription")
    p(class="footer-app__subscription-text") Подпишись на рассылку
    form(@submit.prevent="handleSubmit" class="footer-app__subscription-form")
        input(placeholder="Email" type="email" v-model="email" class="footer-app__subscription-input")
        button(type="submit" class="footer-app__subscription-button") Подписаться
</template>