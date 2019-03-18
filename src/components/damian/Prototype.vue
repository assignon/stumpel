<template>
    <div class="proto__container">
        <Menu></Menu>
        <Content></Content>
    </div>
</template>

<script>
    const Menu = () => import('./Menu')
    const Content = () => import('./Content')

    export default {
        name: "Prototype",
        components:{Menu, Content},
    }
</script>

<style scoped>
    .proto__container {
        width: 1024px;
        margin: 0 auto;
    }

</style>