<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <p class="navbar-item">Stumpel</p>
            </router-link>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link class="navbar-item" to="/">
                    Home
                </router-link>

                <router-link class="navbar-item" to="/order">
                    Bestelling
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    data(){
       return {
           
       }
    },

    created (){

    },

    conponents:{

    }

}

</script>

