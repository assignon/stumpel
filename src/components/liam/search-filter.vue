<template>
    <div class="search-filter">
        <v-layout justify-start align-start column class="ma-4">
            <h1 class="font-weight-bold animated zoomIn display-2">1 zoekresultaten gevonden op:</h1>
           <div class="searchDetails animated fadeInUp" style="animation-delay: 0.5s">
               <v-icon size="35px">close</v-icon>
               <h3 class="font-weight-bold">Trefwoorden:</h3>
               <span>Zoekwoord</span>
           </div>

           <div class="searchDetails animated fadeInUp" style="animation-delay: 0.6s">
               <v-icon size="35px">close</v-icon>
               <h3 class="font-weight-bold">Categorie:</h3>
               <span>Boeken</span>
           </div>

           <div class="searchDetails animated fadeInUp" style="animation-delay: 0.7s">
               <v-icon size="35px">close</v-icon>
               <h3 class="font-weight-bold">Prijs:</h3>
               <span>4,00-25,00</span>
           </div>

           <div class="searchDetails animated fadeInUp" style="animation-delay: 0.8s">
               <v-icon size="35px">close</v-icon>
               <h3 class="font-weight-bold">Scrijver:</h3>
               <span>Niel Degresse Tyson</span>
           </div>

           <div class="searchDetails animated fadeInUp" style="animation-delay: 0.9s">
               <v-icon size="35px">close</v-icon>
               <h3 class="font-weight-bold">Soort Boek:</h3>
               <span>eBook</span>
           </div>

           <div class="searchDetails animated fadeInUp" style="animation-delay: 1s">
               <v-icon size="35px">close</v-icon>
               <h3 class="font-weight-bold">Verschijningsjaar:</h3>
               <span>2019</span>
           </div>

        </v-layout>

        <div class="searched-books-cards-container">
            <v-card class="white lighten-3 ma-4 pa-3 searched-books-cards animated zoomIn">
               <v-img :src="searchBooks.book_img" class="mb-2" width="350px" height="400px"></v-img>
               <h1 class="font-weight-bold mt-2">{{searchBooks.book_name}}</h1>
               <h3 class="font-weight-bold orange--text">{{searchBooks.author}}</h3>
               <h2 class="font-weight-bold deep-purple--text darken-4">€15,50</h2>
               <v-btn flat class="orange white--text shopbtn mt-3">
                    <span>Bestel nu</span>
                    <v-icon size="60px" >keyboard_arrow_right</v-icon>
                </v-btn>
            </v-card>
        </div>
    </div>
</template>

<script>

import Nav from '@/components/liam/nav'
export default {
    name: 'search-filter',
    data (){
        return{
        //    searchVal: this.$store.state.filteredBooks
           searchBooks: this.$store.state.filteredBooks
        //    searchBooks: this.$parent.$children[0].filterBooks
        }
    },

    created(){

        console.log('filter',this.searchBooks);
        
    },

    components: {
        Nav
    }
}
</script>

<style scoped>

.searchDetails{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
}

.searchDetails .v-icon{
    color: blue;
}

.searchDetails h3{
    font-size: 20px;
    margin-left: 10px;
}

.searchDetails span{
    font-size: 18px;
    text-align: right;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 2px;
}

.searched-books-cards-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    width: 100%;
    height: auto;
}

.searched-books-cards{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto;
    height: auto;
}

.searched-books-cards h1{
    font-size: 30px;
    text-transform: capitalize;
}

.searched-books-cards h3{
    font-size: 25px;
}

.searched-books-cards h2{
    font-size: 40px;
}
  .shopbtn{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      width: 220px;
      height: 60px;
      text-align: center;
      margin-left: -5px;
      padding-right: 1px;
  }

  .shopbtn span{
      font-size: 25px;
      text-align: center;
      text-transform: capitalize;
  }
</style>


