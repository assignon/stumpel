
<template>
    <nav>
        <v-toolbar app class="blue darken-4 tool-bar pl-0" height="65">

           <v-toolbar-side-icon @click="drawer = !drawer" color="white" flat large class="burger-menu"></v-toolbar-side-icon>
           <v-form ref="searchForm" class="search-field grey--text" color="white">
              <input 
              type="search" 
              placeholder="Zoeken naar producten..." 
              v-model="search" 
              @focus="drawer = true" 
              @blur="drawer = false"
              @keyup="type()">
              <v-icon large right class="font-weight-bold">search</v-icon>
           </v-form>

        </v-toolbar>

        <v-navigation-drawer app class="white darken-1 pa-4 menu-drawer" v-model="drawer" floating clipped fixed>
            <v-layout column justify-start align-star>

                <h1 class="font-weight-bold display-1">Filter</h1>
                <v-flex>
                    <h3 class="font-weight-bold mb-2" style="font-size:20px">Categorieen</h3>

                    <div class="category-radios-container">
                       <v-radio-group  column class="category-radios">
                          <v-radio v-for="category in categories" :key="category.label" :label="category.label" :value="category.value" :name="category.name" color="primary"></v-radio>
                       </v-radio-group>
                    </div>

                   <div class="price">
                       <h1 class="font-weight-bold mt-0" style="font-size:20px">Prijs</h1>
                       <v-range-slider
                       class="mt-0 mb-0"
                        v-model="range"
                        :max="max"
                        :min="min"
                       ></v-range-slider>
                       <div class="range-value mt-0">
                           <span>{{min}}</span>
                           <span>{{max}}</span>
                        </div>
                   </div>

                   <div class="writters mt-3">
                       <h1 class=" font-weight-bold mb-2" style="font-size:20px">Schrijvers</h1>
                       <v-select
                            items="items"
                            box
                            label="Schrijvers"
                        ></v-select>
                    </div> 

                    <div class="font-weight-bold books-sorts">
                        <h1 class="font-weight-bold  mb-2" style="font-size:20px">Soort Boek</h1>
                       <v-radio-group  column class="books-sort-radios">
                          <v-radio v-for="bookSort in bookSorts" :key="bookSort.label" :label="bookSort.label" :value="bookSort.value" :name="bookSort.name" color="primary"></v-radio>
                       </v-radio-group>
                    </div>  

                    <div class="year">
                      <h1 class="font-weight-bold mb-2" style="font-size:20px">Verschijningsjaar</h1>
                      <v-select
                            :items="yearItems"
                            box
                            label="Jaar"
                            color: primary
                      ></v-select>
                    </div> 

                </v-flex>

            </v-layout>
        </v-navigation-drawer>
    </nav>
</template>

<script>

import SearchFilter from '@/components/liam/search-filter'
import Core from '@/components/liam/proto-core'
import lodash from 'vue-lodash'
export default {
name: 'navbar',
data(){
    return{
        drawer: false,
        categories: [
            {label: 'Boeken', value: 'boeken', name:'bookcategory'},
            {label: 'School', value: 'school', name:'bookcategory'},
            {label: 'Kantoor', value: 'kantoor', name:'bookcategory'},
            {label: 'Hobby en Vrije tijd', value: 'hobby en vrije tijd', name:'bookcategory'},
            {label: 'Facilitair', value: 'facilitair', name:'bookcategory'},
            {label: 'Papierwaren', value: 'papierware', name:'bookcategory'},
            {label: 'Toners & Cartridges', value: 'toners & cartridges', name:'bookcategory'},
            {label: 'Machines', value: 'machines', name:'bookcategory'},
            {label: 'Archieveren', value: 'archieveren', name:'bookcategory'},
            {label: 'Presentatie', value: 'presentatie', name:'bookcategory'}
        ],
        bookSorts: [
            {label: 'Paperback', value: 'paperback', name:'booksort'},
            {label: 'eBook', value: 'ebook', name:'booksort'},
            {label: 'Hardcover', value: 'hardcover', name:'booksort'},
            {label: 'Luisterboek', value: 'luisterboek', name:'booksort'},
            {label: 'Losbladig', value: 'losbladig', name:'booksort'}
        ],
        min: 20,
        max: 500,
        range: '',
        search: '',
        booksCategoryArr: [],
        booksArr: [],
        filterBooks:[],
        filterBooksArr: [],
        yearItems: ['2000', '2001', '2002', '2010', '2012', '2014', '2019']

    }
},

created() {
    
    let self = this;
    this.getBooksArr(
        //function(){
    //     self.booksCategoryArr.forEach(books => {
    //         books.forEach(booksDetails => {
    //             self.booksArr.push(booksDetails);
                       
    //          })                 
    //     })
               
    // }
    );

},

methods: {

    type(){
        let self = this;
        if(this.search ==''){
           this.$store.state.activeTemp = 'core'
        }else{
           this.$store.state.activeTemp = 'searchFilter';
           this.searchBooks( function(booksDataObj){

               if(self.$store.state.filteredBooks.length > 0){

                    self.$store.state.filteredBooks = [];
                    self.$store.dispatch('commitUpdateBooks', booksDataObj);console.log('filter>0',booksDataObj);

                }else if(self.keyCode == 8 && self.search == ''){

                   self.$store.state.filteredBooks = [];

                }else{

                   self.$store.dispatch('commitUpdateBooks', booksDataObj);console.log('filter<0',booksDataObj);

                }
console.log('storeedata',self.$store.state.filteredBooks);

           });

        }
        
    },

    getBooksArr() {   
      let self = this;    
      this.$axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=WKiSG50rJDJWReUantYBSChCxbTVBlkv')
      .then(response => {
         let book = response['data']['results']['lists'];
                
            book.forEach(book => {
                let books = book.books; 
                this.booksArr.push(books[1]);
                  
            })
           
        })
    },


    searchBooks(callback){

        let self = this;console.log(this.search);
console.log('bookarr',this.booksArr);

        this.lodash.filter(this.booksArr, function(booksTitle) {

             let filters = booksTitle.title.toLowerCase().startsWith(self.search);
             if(filters)
             {
                  let booksDataObj = {
                   book_img: booksTitle.book_image,
                   author: booksTitle.author,
                   book_url: booksTitle.amazon_product_url,
                   book_name: booksTitle.title,
                   book_desc: booksTitle.description
                 };
                //  self.filterBooks.length = 0;
                //  self.filterBooks.push(booksDataObj), console.log('bookdata', self.filterBooks);
                // console.log(self.search.length);
                //     if(event.keyCode == 8 || self.search.length == 0){
                //         self.filterBooks.length = 0;console.log('back','back');
                //     }else{
                //         self.filterBooks.push(booksDataObj);
                //     }
                //     console.log('bookdata', self.filterBooks);
                    callback(booksDataObj);
             }
            
        })

        // if(self.filterBooksArr.length > 0){
        //     self.filterBooksArr = [];
        //     self.filterBooksArr.push(self.filterBooks);
        // }else{
        //     self.filterBooksArr.push(self.filterBooks);
        // }
        // console.log('filter bookarr', self.filterBooksArr);
          
    }
},

components: {
    'searchFilter': SearchFilter,
    'core': Core
}

}

</script>

<style>
   .menu-drawer::-webkit-scrollbar{
        width: 0px;
    }
    
  .v-icon{
      font-size: 40px;
  }
  .search-field {
      border: 1px solid white;
      border-radius: 50px;
      background-color: white;
      width: 80%;
      height: 45px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-left: 10px;
  }
  
  .search-field input{
      width: 93%;
      border: 0px solid white;
      border-radius: 40px;
      background-color: white;
      font-size: 20px;
      height: 100%;
      padding-left: 20px;
      font-weight: bold;
  }

  .search-field input:focus{
      border-color: white;
  }

  .nav-drawer{
      width: 400px;
      height: 95vh;
      background-color: white;
      margin-top: -65px;
  }

  .category-radios-container, .books-sorts{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      height: auto;
  }
  
  .category-radios, .books-sort-radios {
    margin-top:-5px;
    margin-left: -5px;
  }

  .category-radios .v-icon, .books-sort-radios .v-icon{
      font-size: 30px;
      color: black;
  }
  .v-input--selection-controls.v-input .v-label{
      margin-left: 15px;
      font-weight: bold;
      color: black;
      text-align: left;
  }
</style>


