<script setup lang="ts">
    import DOMPurify from 'dompurify'
    const props = defineProps(["textData"])
    const textData = props.textData
    console.log(textData);
    
</script>

<template lang="pug">
p(v-html="textData")
</template>