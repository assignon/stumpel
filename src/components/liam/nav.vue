<template>
    <nav>
        <v-toolbar app class="blue darken-4 tool-bar pl-0" height="65">

           <v-toolbar-side-icon @click="drawer = !drawer" color="white" flat large class="burger-menu"></v-toolbar-side-icon>
           <v-form ref="searchForm" class="search-field grey--text" color="white">
              <input type="search" placeholder="Zoeken naar producten..." v-model="search">
              <v-icon large right class="font-weight-bold">search</v-icon>
           </v-form>

        </v-toolbar>

        <v-navigation-drawer app class="white darken-1 pa-4" v-model="drawer" floating clipped fixed>
            <v-layout column justify-start align-start>

                <h1 class="font-weight-bold display-2">Filter</h1>
                <v-flex>
                    <h3 class="font-weight-bold display-1 mb-4">Categorieen</h3>

                    <div class="category-radios-container">
                       <v-radio-group v-for="category in categories" :key="category.label" column :name="category.name" class="category-radios">
                          <v-radio :label="category.label" :value="category.value" :name="category.name" color="primary"></v-radio>
                       </v-radio-group>
                    </div>

                   <!-- <div class="price">
                       <h1 class="font-weight-bold display-2">Prijs</h1>
                       <v-range-slider
                        v-model="range"
                        :max="max"
                        :min="min"
                       ></v-range-slider>
                       <div></div>
                   </div> -->

                </v-flex>

            </v-layout>
        </v-navigation-drawer>
    </nav>
</template>

<script>

export default {
    
data(){
    return{
        drawer: true,
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
        min: 20,
        max: 500,
        range: '',
        search: ''

    }
},

methods: {
    
}

}

</script>

<style>
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

  .category-radios-container{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      height: auto;
  }
  
  .category-radios {
    margin-top:-5px;
    margin-left: -5px;
  }

  .category-radios .v-icon{
      font-size: 35px;
      color: black;
  }
  .v-input--selection-controls.v-input .v-label{
      margin-left: 15px;
      font-weight: bold;
      color: black;
      text-align: left;
  }
</style>


