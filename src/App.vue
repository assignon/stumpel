<template>
    <div id="app">
            <Menu/>
            <router-view/>
    </div>
</template>

<script>
    import Menu from './components/menu.vue'

    export default {
        name: 'app',
        components: {
            Menu
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    .hero-body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>
