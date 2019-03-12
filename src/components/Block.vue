<template>
    <div class="catalog__container">
        <swiper ref="mySwiper" :options="swiperOption" style="padding: 10px; margin: 0; overflow: hidden; height: auto">
                <swiper-slide v-for="(bookData, index) in bookList" :key="index"  class="catalog__item">
                    <h1>{{bookData['display_name']}}</h1>
                </swiper-slide >
                <!--<div  class="grid-container">-->
                <!--<div class="grid-item"  v-for="(book, indexBook) in bookData['books']" :key="indexBook">-->
                <!--<img :src="book['book_image']">-->
                <!--<p>{{book['title']}}</p>-->
                <!--</div>-->
                <!--</div>-->
        </swiper>
    </div>
</template>

<script>
    import axios from "axios";
    import 'swiper/dist/css/swiper.css'

    export default {
        name: 'Block',
        data() {
            return {
                bookList: [],
                swiperOption: {                    //De opties voor de swiper
                    spaceBetween: 35,
                    slidesPerView: 4,         //Hiermee wordt automatisch bepaald hoeveel slides er
                    loop: true,
                    speed: 900, //De snelheid
                    freeMode: true,
                    freeModeMomentum: true,
                    navigation: {
                        nextEl: '.first-slide'     //De element die deze class bevat zorgt ervoor
                    },                             //dat de volgende slide wordt opgeroepen
                },
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

    .catalog__container {
        min-height: 100vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .catalog__item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        min-height: 60vh;
    }

</style>
