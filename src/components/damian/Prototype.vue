<template>
    <div class="proto__container">
        <Menu></Menu>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <Content v-if="showContent"></Content>
            <Filtered v-else></Filtered>
        </transition>
    </div>
</template>

<script>
    const Menu = () => import('./layout/Menu')
    const Content = () => import('./start/Content')
    const Filtered = () => import('./search/Filtered')

    export default {
        name: "Prototype",
        components: {Menu, Content, Filtered},

        data() {
            return {
                showContent: true,
            }
        },

        methods: {
            searchBook(searchTerm) {
                if(searchTerm === ''){
                    this.showContent = true
                    this.$router.push({name: 'D-prototype'});
                } else {
                    this.$router.push({name: 'D-prototype-search', params: {term: searchTerm}});
                    this.showContent = false
                }
            },

            convertTitle(title) {
                let lowerCase = title.toLowerCase()
                let newTitle = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)
                return newTitle
            }
        },

        mounted() {
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
        overflow: hidden;
    }
</style>