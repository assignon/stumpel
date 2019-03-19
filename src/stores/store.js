import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    booksArr: [],
    writers: [],
    activeTemp: 'core',
    searchVal: '',
    filteredBooks: []
  },

  getters: {
    searchedBookData(state){
      let booksDataArr = state.filteredBooks;
      return booksDataArr;
    }
  },

  mutations: {

    updateSearchVal(state, updatedSearchVal) {
      state.searchVal = updatedSearchVal;
    },

    updateBooks(state, newBookData){

      // let booksDataLen = state.filteredBooks.length;
      state.filteredBooks = newBookData;
      
    }

  },

  actions: {
     applyUpdateSearchVal(store, updatedSearchVal) {
        store.commit('updateSearchVal', updatedSearchVal);
     },
     commitUpdateBooks(store, newBookData) {
        store.commit('updateBooks', newBookData)
     }
  }

})
