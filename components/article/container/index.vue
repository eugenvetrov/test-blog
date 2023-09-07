<template lang="pug">
div(class="article-container")
    slot
</template>

<style lang="scss">
    .article-container {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>