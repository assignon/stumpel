<template>
    <v-layout class="filter__container">
        <Sidebar class="animated slideInLeft"></Sidebar>
        <SearchResults :results="bookResult" class="animated slideInUp"></SearchResults>
    </v-layout>
</template>

<script>
    import axios from "axios";

    const Sidebar = () => import('./components/Sidebar')
    const SearchResults = () => import('./components/SearchResults')

    export default {
        name: "Filtered",
        components: {Sidebar, SearchResults},

        data() {
            return {
                bookType: [],
                bookResult: [],
                term: this.$route.params.term,
            }
        },

        methods: {
            getBook() {
                axios
                    .get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=WKiSG50rJDJWReUantYBSChCxbTVBlkv')
                    .then(response => {
                        this.bookType = response['data']['results']['lists'];
                        this.bookType.forEach(category => {
                            if(this.term === category['display_name']){
                                console.log('tetetet')
                                this.bookResult.push(category)
                            }
                        })

                        console.log(this.bookResult)
                    })
            },
        },

        mounted() {
            this.getBook()
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900');

    .filter__container {
        background: #FCFCFC;
        font-family: 'Lato', sans-serif;
        display: flex;
        flex-direction: row;
        height: auto;
        width: 100%;
    }


</style>