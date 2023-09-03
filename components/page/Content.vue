<template lang="pug">
div(class="page-content")
   slot    
</template>

<style lang="scss">
    .page-content {
        display: flex;
        width: 90%;
        flex-direction: column;
        margin: 30px 0;
        align-items: center;
    }
</style>