<template>
  <div id="app">
    <Block/>
    
    <router-view></router-view>
  </div>
</template>

<script>
import Block from './components/Block.vue'

export default {
  name: 'app',
  components: {
    Block
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
