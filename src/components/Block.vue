<template>
    <div>
        <div v-for="(bookData, index) in bookList" :key="index">
            <p>{{bookData['display_name']}}</p>
            <div  class="grid-container">
                <div class="grid-item"  v-for="(book, indexBook) in bookData['books']" :key="indexBook">
                    <img :src="book['book_image']">
                    <p>{{book['title']}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from "axios";

    export default {
        name: 'Block',
        data() {
            return {
                bookList: []
            }
        },

        methods: {
            getBooks() {
                axios
                    .get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=WKiSG50rJDJWReUantYBSChCxbTVBlkv')
                    .then(response => (this.bookList = response['data']['results']['lists']))
            }
        },

        mounted() {
            this.getBooks()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        padding: 20px;
    }

    .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        margin: 20px;
        font-size: 30px;
        text-align: center;
    }

</style>
