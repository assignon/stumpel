<template>
    <v-navigation-drawer class="nav__container" permanent>
        <v-list dense class="pt-0 nav__container__wrapper">
            <v-list-tile class="nav__title__container">
                <v-list-tile-content>
                    <v-list-tile-title class="nav__title">Filteren</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <v-list-tile class="nav__subtitle__container">
                <v-list-tile-content>
                    <v-list-tile-title class="nav__subtitle">Bindwijze</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <div class="first__filters">
                <v-radio-group v-model="filterType">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio-group v-model="filterType">
                                <v-radio class="test" value="Ebook" label="Ebook"></v-radio>
                            </v-radio-group>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio value="Luisterboek" label="Luisterboek"></v-radio>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio value="Paperback" label="Paperback"></v-radio>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio value="Hardback" label="Hardback"></v-radio>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio value="Losbandig" label="Losbandig"></v-radio>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-radio-group>
            </div>

            <v-list-tile class="nav__subtitle__container">
                <v-list-tile-content>
                    <v-list-tile-title class="nav__subtitle">Verschijningsjaar</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <div class="first__filters">
                <v-radio-group v-model="filterType">
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio-group>
                                <v-radio class="test" value="2018" label="2018"></v-radio>
                            </v-radio-group>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio value="2017" label="2017"></v-radio>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio value="2016" label="2016"></v-radio>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio value="2020" label="2020"></v-radio>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-content>
                            <v-radio value="2019" label="2019"></v-radio>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-radio-group>
            </div>

            <v-list-tile class="nav__subtitle__container">
                <v-list-tile-content>
                    <v-list-tile-title class="nav__subtitle">Prijs</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>

            <form class="price__container">
                <input class="price__input" type="number" placeholder="Van..">
                <input class="price__input" type="number" placeholder="Tot..">
            </form>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Sidebar",

        data(){
            return {
                filterType: '',
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700,900');

    .nav__container {
        background: #FCFCFC;
        width: 243px !important;
    }

    .nav__title__container {
        width: 100%;
        margin-top: 50px;
    }

    .nav__container__wrapper {
        width: 222px;
        margin: 0 auto;
    }

    .nav__title {
        color: #183668;
        font-size: 34px;
        font-weight: 700;
    }

    .nav__subtitle__container {
        margin-top: 20px;
        width: 100%;
    }

    .nav__subtitle {
        font-weight: 700;
        font-size: 23px;
        padding: 0;
        margin: 0;
    }

    .price__input {
        width: 191px;
        padding: 10px 0 10px 10px;
        border-radius: 5px;
        border: 1px solid #999999;
        font-size: 18px;
        margin: 10px;
    }

</style>