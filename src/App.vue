<template>
  <div id="app" class="animated slideInUp">
    <Menu/>
    <!--<transition enter-active-class="animated flipInX"-->
                <!--leave-active-class="animated flipOutY"-->
                <!--mode="out-in">-->
      <router-view/>
    <!--</transition>-->
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
