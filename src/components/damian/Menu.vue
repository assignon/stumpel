<template>
    <v-layout class="menu__container" justify-space-between row wrap>
        <v-toolbar-side-icon class="menu__icon"></v-toolbar-side-icon>

        <div class="menu__search">
            <input placeholder="Doorzoek het hele assortiment..." type="text" class="menu__search--input" v-model="searchTerm">
            <v-icon class="menu__search--icon">search</v-icon>
        </div>

        <v-btn icon class="menu__icon">
            <v-icon>shopping_basket</v-icon>
        </v-btn>
    </v-layout>
</template>

<script>
    export default {
        name: "Menu",

        data(){
            return {
                searchTerm: '',
            }
        }
    }
</script>

<style scoped>
    .menu__container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 96px;
    }

    .menu__search {
        flex: 15;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .menu__icon {
        padding: 0 20px;
        color: #173668;
        border-radius: 0;
        font-size: 55px !important;
    }

    .menu__search--input {
        border: 2px solid #173668;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
        width: 60%;
        padding: 10px 0 10px 10px;
    }

    .menu__search--icon {
        border-top-right-radius: 5px;
        border-bottom-right-radius:5px;
        background: #173668;
        color: white;
        padding: 10px 15px;
        font-size: 30px;
    }

    .menu__search--input:focus {
        outline: none;
    }

</style>