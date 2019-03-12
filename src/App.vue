<template>
  <div id="app">
    <Menu/>
    <Block/>
    
    <router-view/>
  </div>
</template>

<script>
import Block from './components/Block.vue'
import Menu from './components/menu.vue'

export default {
  name: 'app',
  components: {
    Block,
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
