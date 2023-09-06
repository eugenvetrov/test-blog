<template lang="pug">
div(class="page-content")
   slot    
</template>

<style lang="scss">
    .page-content {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin: 50px 0;
    }
</style>