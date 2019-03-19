<template>
    
    <div class="l-prototype">
       <Nav/>
       <component :is="this.$store.state.activeTemp"></component>
    </div>

</template>

<script>
import Core from '@/components/liam/proto-core'
import Nav from '@/components/liam/nav'
import SearchFilter from '@/components/liam/search-filter'
export default {
    name: 'prototype',
    data() {
    return{
        // activeTemp: this.$store.state.activeTemp
    }
},

components: {
    Nav,
    'core':Core,
    'searchFilter':SearchFilter
}

}
</script>

