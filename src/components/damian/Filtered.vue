<template>
    <v-layout class="filter__container">
        <Sidebar></Sidebar>
        <SearchResults></SearchResults>
    </v-layout>
</template>

<script>
    import axios from "axios";
    const Sidebar = () => import('./Sidebar')
    const SearchResults = () => import('./SearchResults')

    export default {
        name: "Filtered",
        components:{Sidebar, SearchResults},

        data() {
            return {
                bookType: [],
                term: '',
            }
        },

        methods: {
            getBook() {
                axios
                    .get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=WKiSG50rJDJWReUantYBSChCxbTVBlkv')
                    .then(response => (this.bookType = response['data']))
            },

            getTerm(){

            }
        },

        mounted() {
            // this.getBook()
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
        height: 1140px;
    }



</style>