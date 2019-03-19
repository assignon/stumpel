<template>
    <!-- <div class="l-prototype"> -->
        <div class="mt-10 l-prototype-container">
            <v-layout column justify-center align-center>
                <v-flex xs12 md6 lg4 class="title-flex">
                   <h1 class="display-3 font-weight-bold text-md-center text-sm-center text-lg-center animated zoomIn">Boeken</h1>
                   <h3 class="font-weight-bold display-1 text-md-center text-sm-center text-lg-center animated zoomIn">Nieuw in onze collectie</h3>
                </v-flex>
            </v-layout>

            <v-layout row justify-center align-center class="mt-5 animated slideInUp" style="">

                <v-btn depressed fab class="grey lighten-2 slider-btn ml-5" id="slider-prev"><v-icon size="60px" center>keyboard_arrow_left</v-icon></v-btn>

                <div class="cards-container">
                    <v-card class="slider-cards grey lighten-3 pa-4">

                        <div class="card-desc">
                            <div class="cards-title">
                                <h1 class="headline font-weight-bold">Durf te Leiden</h1>
                                <h2 class="orange--text font-weight-bold">Brene Brown</h2>
                            </div>
        
                            <p class="font-weight-bold text-xs-left text-md-left text-lg-left text-xl-left  mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam neque ab est culpa nostrum! Ipsam doloremque aliquam sapiente eaque ut autem fugiat minima laudantium, exercitationem perspiciatis repudiandae dolorum, cum in?</p>
       
                            <v-btn flat class="orange white--text shopbtn mt-5">
                                <span>Bestel nu</span>
                                <v-icon size="60px" >keyboard_arrow_right</v-icon>
                            </v-btn>
                        </div>                 

                        <div class="card-img">
                            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="370px" width="270px" class=""></v-img>
                        </div>

                    </v-card>
                </div>

                <v-btn fab depressed class="grey lighten-2 slider-btn mr-5" id="slider-next"><v-icon size="60px" center>keyboard_arrow_right</v-icon></v-btn>

            </v-layout>
            
            <v-layout justify-center align-center class="slider-pagination mt-5">
              <v-btn flat depressed fab class="slider-btn animated zoomIn"  style="animation-delay: 0.5s" small></v-btn>          
              <v-btn flat depressed fab class="slider-btn animated zoomIn"  style="animation-delay: 0.6s" small></v-btn>          
              <v-btn flat depressed fab class="slider-btn animated zoomIn"  style="animation-delay: 0.7s" small></v-btn>          
              <v-btn flat depressed fab class="slider-btn animated zoomIn primary"  style="animation-delay: 0.8s" small></v-btn>          
              <v-btn flat depressed fab class="slider-btn animated zoomIn"  style="animation-delay: 0.9s" small></v-btn>          
              <v-btn flat depressed fab class="slider-btn animated zoomIn"  style="animation-delay: 1s" small></v-btn>          
              <v-btn flat depressed fab class="slider-btn animated zoomIn"  style="animation-delay: 1.1s" small></v-btn>          
            </v-layout>

            <!-- <div class="best-books-cards-container"> -->
                <v-layout column justify-start align-start class="best-books-cards-container pa-5">
                    <h1 class="font-weight-bold display-2 mb-4">Beste boeken</h1>
                    <v-layout row justify-start align-start class="bestbook-container">
                        <v-flex xs6 md6 lg4 xl4 v-for="bestBooks in bestBooksArr" class="best-books-cards-flex">

                            <v-card class="grey lighten-3 best-books-cards ma-3 pa-4">

                                <a :href="bestBooks.amazon_product_url">
                                    <v-img :src="bestBooks.book_image" aspect-ratio="1"></v-img>
                                </a>

                            </v-card>

                        </v-flex>
                    </v-layout>
                    
                </v-layout>
            <!-- </div> -->
                
        </div>
    <!-- </div> -->
</template>

<script>

import Nav from '@/components/liam/nav'
export default {
    name: 'proto-core',
    data() {
        return{
          bestBooksArr: []
        }
    },

    created(){

        let self = this;
       this.bestBooks(function(){
         self.bestBooksArr.forEach(bestbooks => {
            // console.log(bestbooks);
         })
       });

    },

    components:{
        Nav
    },

    methods:{
        bestBooks(callback) {
           this.$axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=WKiSG50rJDJWReUantYBSChCxbTVBlkv')
            .then(response => {
                let book = response['data']['results']['lists'];
                
                book.forEach(book => {
                  let books = book.books;
                  this.bestBooksArr.push(books[0]);
                  
                })
               callback();
            })
        }
    }


}

</script>

<style>
    .l-prototype{
      width: 100%;
      height: auto;
    }

    .l-prototype-container{
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .cards-container{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
    }

  .slider-cards{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: flex-start;
      align-items: flex-start;
      width: 60%;
      height: auto;
  }

  .cards-title{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start
  }

  .card-desc{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      width: 60%;
      height: 370px;
  }

  .card-desc p{
      width: 90%;
      height: auto;
      text-align: center;
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

  .slider-btn{
      width: 50px;
      height: 50px;
  }

  .slider-pagination{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
  }

   .slider-pagination .slider-btn{
       background-color: white;
       border: 2px solid black;
   }

   .best-books-cards-container{
       width: 100%;
       height: auto;
   }

   .bestbook-container{
       width: 100%;
       height: auto;
       overflow-x: scroll;
       overflow-y: hidden;
       margin-left: -15px;
   }

   .best-books-cards-flex{
       width: 100%;
       height: auto;
   }


   .best-books-cards{
      width: 400px;
      height: 400px;
   }

   .best-books-cards:hover{
       transform: scale(1.1,1.1);
       z-index: 3;
   }

   .bestbook-container::-webkit-scrollbar {
      width: 0px;
   }

</style>
