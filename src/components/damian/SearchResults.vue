<template>
    <div class="results__container">
        <div class="results__wrapper">

            <div class="results__header">
                <h1 class="results__header__title">Zoekresultaten op: {{$route.params.term}}</h1>

                <div class="results__header__details">
                    <p class="details__text">resultaten</p>

                    <div class="details__sort__wrapper">
                        <p style="padding: 10px;">Sorteren op:</p>

                        <v-flex class="details__sort" height="50" d-flex>
                            <v-select height="50"
                                    :items="items"
                                    label="Maak een keuze"
                                    solo
                            ></v-select>
                        </v-flex>
                    </div>
                </div>
            </div>

            <hr style="border: 1px solid #C7C7C7; width: 100%;">

            <div class="books__container">
                <div class="book__wrapper">
                    <div class="book__cover">

                    </div>
                    <p class="book__title">Tetetet</p>
                    <p class="book__author">Shaif Bhaggoe</p>
                    <p class="book__price">€17,90</p>

                    <span class="book__button">
                        <v-btn color="warning book__cart">In winkelwagen +</v-btn>
                    </span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchResults",

        data(){
            return {
                items: ['Meest verkocht', 'Prijs (hoog -> laag)', 'Prijs (laag -> hoog)', 'Publicatie datum'],
            }
        }
    }
</script>

<style scoped>
    .results__container {
        width: 781px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .results__wrapper {
        width: 689px;
        margin-top: 45px;
    }

    .results__header__title {
        color: #183668;
        font-size: 34px;
        font-weight: 700;
        text-align: left;
    }

    .results__header__details {
        margin-top: 25px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .details__text {
        color: #999999;
        font-size: 18px;
    }

    .details__sort__wrapper {
        font-size: 18px;
        display: flex;
        flex-direction: row;
        margin: 0 10px;
        justify-content: space-between;
        align-items: center;
    }

    .details__sort {
        width: 182px;
    }

    .books__container {
        margin-top: 30px;
        display: grid;
        grid-gap: 20px;
        /*4 kolommen met gelijke breedte(1fr), dus kan je dus zien net als percentage*/
        grid-template-columns: repeat(3, 1fr);
        /*grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));*/
    }

    .book__wrapper {
        width: 213px;
        text-align: left;
        display: flex;
        flex-direction: column;
    }

    .book__cover {
        background: red;
        width: 213px;
        height: 312px;
        border-radius: 6px;
    }

    .book__title {
        font-size: 23px;
        font-weight: 600;
        margin: 10px 0 0 0;
        padding: 0;
    }

    .book__author {
        padding: 5px 0;
        margin: 0;
        font-size: 18px;
        color: #999999;
        font-weight: 400;
    }

    .book__price {
        color:#1C51AE;
        font-size: 28px;
        font-weight: 700;
    }

    .book__cart {
        padding: 10px;
        margin: 0;
        width: 100%;
        border-radius: 5px;
        height: 50px;
    }
</style>