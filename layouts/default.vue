<template lang="pug">
div(class="app")
    Header
    slot
    Footer
</template>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: $white-smoke;
    }
</style>