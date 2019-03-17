<template>
   <div class="filters">
      <div class="menu">
          <div class="menu-search">
              <i></i>
              <form action="">
                  <input type="search" v-model='search' placeholder="Zoeken...">
              </form>
          </div>
          <i></i>
      </div>

      <div class="filter-core">
          <div class="filter-opts">
             <h1 class='filter-title'>Filter</h1>
             <p class='filter-title'>Voor boeken</p>

             <div class='writer filters-parts'>
                <div class="filter-opts-header">
                     <h3>Schrijver</h3>
                    <i></i>
                </div>
                <div class="filter-opts-content">
                  <div class="filter-opts-content-items" id="writers-container">
                    <div class="opts-container" v-for="writer in writers">
                       <input type="checkbox" name="" value="">
                      <p>{{writer}}</p>
                    </div>
                  </div>
                </div>
             </div>

             <div class='format filters-parts'>
                <div class="filter-opts-header">
                   <h3>Bindwijze</h3>
                   <i></i>
                </div>
                <div class="filter-opts-content">
                  <div class="filter-opts-content-items">
                    <div class="opts-container">
                      <input type="checkbox" name="" value="">
                      <p>hallo there</p>
                    </div>
                  </div>
                </div>
             </div>

             <div class='years filters-parts'>
                <div class="filter-opts-header">
                  <div class="opts-container">
                    <h3>Verschijningsjaar</h3>
                    <i></i>
                  </div>
                </div>
                <div class="filter-opts-content">
                  <div class="filter-opts-content-items">
                    <div class="opts-container">
                      <input type="checkbox" name="" value="">
                      <p>Neil Degress Tyson</p>
                    </div>
                  </div>
                </div>
             </div>

             <div class="price filters-parts">
               <div class="filter-opts-header">
                  <h3>Prijs</h3>
                  <i></i>
               </div>
               <div class="filter-opts-content">

               </div>
             </div>
          </div>

          <div class="filter-content">

          </div>
      </div>
   </div>
</template>

<script>
import lodash from 'vue-lodash'
export default {

    name: 'filter',

    data(){
        return {
          search: '',
          writers: [],
        }
    },

    created(){

      let self = this;
      this.displayBooks();
      this.displayWriters();

      console.log(this.$store.state.writers);

    },

    mounted() {

    },

    methods: {

        displayBooks (){
          let self = this;
          this.$axios.get('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=WKiSG50rJDJWReUantYBSChCxbTVBlkv')
            .then(response => {
                let book = response['data']['results']['lists'];

                book.forEach(book => {
                  let books = book.books;
                  self.$store.state.booksArr.push(books);
                })

            })

         },

         displayWriters (){
           this.$store.state.booksArr.forEach(booksDetails => {
              self.$store.state.writers.push(booksDetails);
              // console.log('booksdetails',booksDetails);
           })
         }

    }

}
</script>

<style>

.filters{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.menu{
  width: 100%;
  height: 50px;
  /* padding-top: 5px;
  padding-bottom: 5px; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 3;
  background-color: #030303;
  position: fixed;
  top: 0px;
}

.menu-search{
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.filter-core{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.filter-opts{
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* margin-top: -50px;*/
  padding-top: 70px;
  position: fixed;
  top: 0px;
  background-color: gray;
}

.filter-title{
  text-align: left;
}

.filters-parts{
  width: 100%;
  height: auto;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  border-top: 1px solid red;
}

.filter-opts-header{
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.filter-opts-header h3{
  text-align: left;
}

.filter-opts-content{
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}

.filter-opts-content-items{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.opts-container{
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.filter-opts-content-items input{
  width: 17px;
  height: 20px;
}

.filter-opts-content-items p{
  text-align: left;
  font-size: 15px;
}

.filter-content{
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 250px;
  border: 2px solid orange;
}

i{
  width: 30px;
  height: 30px;
  border: 1px solid black;
}
</style>
