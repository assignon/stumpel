<template>
    <div class="proto__container">
        <Menu></Menu>
        <!--<transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutLeft" mode="out-in">-->
            <Content v-if="showContent"></Content>
            <Filtered v-else></Filtered>
        <!--</transition>-->
    </div>
</template>

<script>
    const Menu = () => import('./Menu')
    const Content = () => import('./Content')
    const Filtered = () => import('./Filtered')

    export default {
        name: "Prototype",
        components:{Menu, Content, Filtered},

        data(){
            return {
                showContent: true,
            }
        },

        methods: {
            searchBook(searchTerm){
                this.$router.push({name: 'D-prototype-search', params: { term: searchTerm}});
                this.showContent = false
            }
        },

        mounted(){
            if (this.$router.currentRoute.name === "D-prototype-search") {
                this.showContent = false
            }
        },
    }
</script>

<style scoped>
    .proto__container {
        background: white;
        width: 1024px;
        margin: 0 auto;
    }

</style>