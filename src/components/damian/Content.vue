<template>
    <v-layout class="content__container" wrap>
        <div class="content__header">
            <v-container class="content__wrapper" fluid>
                <div class="header__text">
                    <p class="animated slideInUp">Welkom bij Stumpel :)</p>
                    <p class="animated slideInUp">Ben je ergens naar op zoek?</p>

                    <div class="header__input--wrapper animated slideInUp">
                        <input class="header__input" type="text" placeholder="Vul je zoekopdracht in..." v-model="searchTerm">
                        <v-icon class="header__search--icon">search</v-icon>
                    </div>
                    
                </div>
            </v-container>
        </div>

        <div class="spotlight__container">
            <v-content class="spotlight__wrapper" fluid>
                <h4 class="display-1 spotlight__text animated slideInUp">In de spotlight</h4>
                <br>

                <swiper ref="mySwiper" :options="swiperOption" class="swiper__container">
                    <swiper-slide v-for="i in 5" :key="i" class="spotlight__item animated fadeIn"
                                  :style="{animationDelay: '0.' + (i+2) + 's'}">
                        <p>{{i}}</p>
                    </swiper-slide>
                </swiper>
            </v-content>
        </div>

        <div class="top__container">
            <v-content class="top__wrapper" fluid>
                <h4 class="display-1 top__text font-weight-bold animated slideInUp">De top 10 boeken van nu</h4>
                <br>

                <swiper ref="mySwiper" :options="swiperOptionTop" class="swiper__container">
                    <swiper-slide v-for="(topItem, index) in topBooks" :key="index" class="top__item animated fadeIn"
                                  :style="{animationDelay: '0.' + (index+2) + 's'}">
                        <div class="book__container">
                            <div class="book__cover">
                                {{index}}
                            </div>
                            <br>
                            <h6 class="title">{{convertTitle(topItem['title'])}}</h6>
                            <p class="body-1 book__author">{{topItem['author']}}</p>
                            <p class="headline book__price">€{{topItem['price']}}</p>
                            <v-btn color="warning book__cart">In winkelwagen +</v-btn>
                        </div>
                    </swiper-slide>
                </swiper>
            </v-content>
        </div>

    </v-layout>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Content",

        data() {
            return {
                topBooks: [],
                searchTerm: '',
                swiperOption: {                    //De opties voor de swiper
                    spaceBetween: 25,
                    slidesPerView: 'auto',         //Hiermee wordt automatisch bepaald hoeveel slides er
                    speed: 900, //De snelheid
                    freeMode: true,
                    freeModeMomentum: true,
                    navigation: {
                        nextEl: '.first-slide'     //De element die deze class bevat zorgt ervoor
                    },                             //dat de volgende slide wordt opgeroepen
                },
                swiperOptionTop: {                    //De opties voor de swiper
                    spaceBetween: 25,
                    slidesPerView: 'auto',         //Hiermee wordt automatisch bepaald hoeveel slides er
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
            getTop() {
                axios
                    .get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=WKiSG50rJDJWReUantYBSChCxbTVBlkv')
                    .then(response => (this.topBooks = response['data']['results']))
            },

            convertTitle(title) {
                let lowerCase = title.toLowerCase()
                let newTitle = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)

                return newTitle
            }
        },

        mounted() {
            let vm = this
            setTimeout(function () {
                vm.getTop()
            }, 900)
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900');

    .content__header {
        width: 100%;
        height: 539px;
        background: url('https://www.stumpel.nl/media/wysiwyg/imageslider/grotenoord.png') no-repeat center;
        background-size: cover;
        font-family: 'Lato', sans-serif;
    }

    .content__wrapper {
        height: 100%;
        background-color: rgba(24, 54, 104, 0.7);
        color: white;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .header__text {
        margin-top: 70px;
        font-weight: 700;
        font-size: 45px;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .header__text p {
        font-weight: 700;
        padding: 0;
        margin:0;
    }

    .header__input--wrapper {
        display: flex;
        align-items: center;
        margin-top: 20px;
        width: 924px;
    }

    .header__input {
        border: 1px solid white;
        background: white;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        height: 100%;
        padding: 20px;
        width: 100%;
        color: #A3A3A3;
        font-size: 23px;
        font-weight: 100;
    }

    .header__input:focus {
        outline: none;
    }

    .header__search--icon {
        width: 79px;
        padding: 15px;
        color: white;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background: #F78E18;
    }

    .spotlight__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .spotlight__wrapper {
        width: 100%;
        text-align: left;
        color: white;
        margin-top: -120px;
    }

    .spotlight__text {
        margin-left: 5%;
    }

    .spotlight__item {
        border-radius: 5px;
        background: #74ebd5; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ACB6E5, #74ebd5); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ACB6E5, #74ebd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: 263px;
        width: 450px;
    }

    .spotlight__item:first-child {
        margin-left: 5%;
    }

    .top__container {
        width: 100%;
        margin-top: 90px;
        text-align: left;
        padding-bottom: 50px;
    }

    .top__text {
        color: #173668;
        margin-left: 5%;
    }

    .top__item {
        width: 20%;
    }


    .book__container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        min-height: 48vh;
    }

    .book__cover {
        border-radius: 5px;
        width: 213px;
        min-height: 312px;
        background: #56ab2f; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #a8e063, #56ab2f); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #a8e063, #56ab2f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }

    .top__item:first-child {
        margin-left: 5%;
    }

    .book__author {
        padding-top: 10px;
        color: #9D9D9D;
    }

    .book__price {
        font-size: 24px;
        color: #1C51AD;
    }

    .book__cart {
        padding: 10px;
        margin: 0;
        width: 90%;
    }

</style>