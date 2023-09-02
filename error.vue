<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => {
    clearError({ redirect: '/' })
}
</script>

<template lang="pug">
p {{ error.message }}
button(@click="handleError") Clear errors
</template>