<template>
    <div class="catalog__container">

        <transition enter-active-class="animated bounceInLeft"
                    leave-active-class="animated bounceOutRight"
                    mode="out-in">
            <p v-if="catalogName === null">Catalogus</p>
            <p v-else>{{catalogName}}</p>
        </transition>


        <swiper ref="mySwiper" :options="swiperOption" class="swiper__container">
            <swiper-slide v-for="(bookData, index) in bookList" :key="index" class="catalog__item">
                <transition enter-active-class="animated flipInY"
                            leave-active-class="animated flipOutY"
                            mode="out-in">
                    <div v-if="!bookActive" :key="index + '-false'"
                         @click="getBooks(bookData['books'], bookData['display_name'])" class="catalog"
                         :style="{background: 'linear-gradient(to right,'+ randomColors[Math.floor(Math.random() * 8) ].color +')'}">
                        <h1>{{bookData['display_name']}}</h1>
                    </div>

                    <div v-else :key="index + '-true'" class="catalog catalog__book"
                         :style="{backgroundImage: 'url('+ bookData['book_image'] +')'}">
                    </div>
                </transition>
            </swiper-slide>
        </swiper>

        <div class="animated bounceInUp">
            <p v-if="bookActive" @click="getCatalog()">Naar overzicht</p>
            <p v-else>Klik op een boek</p>
        </div>
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
                catalogName: null,
                randomColors: [
                    {color: '#7f7fd5, #86a8e7, #91eae4'},
                    {color: '#ffefba, #ffffff'},
                    {color: '#74ebd5, #acb6e5'},
                    {color: '#d9a7c7, #fffcdc'},
                    {color: '#be93c5, #7bc6cc'},
                    {color: '#4ca1af, #c4e0e5'},
                    {color: '#e53935, #e35d5b'},
                    {color: '#fbd3e9, #bb377d'},
                ],
                bookActive: false,
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
            getCatalog() {
                if (this.bookActive) {
                    this.bookActive = false
                    this.catalogName = null
                }
                axios
                    .get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=WKiSG50rJDJWReUantYBSChCxbTVBlkv')
                    .then(response => (this.bookList = response['data']['results']['lists']))
            },

            getBooks(catalog, catalogName) {
                if (this.bookActive) {
                    this.catalogName = null
                    this.getCatalog()
                    this.bookActive = false
                } else {
                    this.catalogName = catalogName
                    this.bookActive = true
                    this.bookList = []
                    this.bookList = catalog
                }
            }
        },

        mounted() {
            this.getCatalog()
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
        overflow: hidden;
    }

    .swiper__container {
        padding: 10px;
        margin: 10px;
        height: 60vh;
    }

    .catalog__item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .catalog {
        border-radius: 10px;
        min-width: 400px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        text-align: center;
        height: 50vh;
        -webkit-box-shadow: 8px 7px 30px -9px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 8px 7px 30px -9px rgba(0, 0, 0, 0.75);
        box-shadow: 8px 7px 30px -9px rgba(0, 0, 0, 0.75);
        transition: 0.3s ease-in-out;
        bottom: 0px;
    }

    .catalog__book {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .catalog:hover {
        bottom: 40px;
        transition: 0.3s ease-in-out;
    }

    .catalog__item h1 {
        padding: 20px;
    }

</style>
