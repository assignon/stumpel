<template>
    <div class="order__container">
        <div class="order__info">
            <div class="order__filler--one"></div>

            <div class="order__wrapper">
                <div class="info__tabs">
                    <span @click="changeView('UserInfo')" :class="[view['name'] === 'UserInfo' ? 'info__tabs__text--active' : 'tet']" class="info__tabs__text">Klantgegevens</span>
                    <span @click="changeView('Shipment')" :class="[view['name'] === 'Shipment' ? 'info__tabs__text--active' : 'tet']" class="info__tabs__text">Verzendopties</span>
                    <span @click="changeView('Payment')" :class="[view['name'] === 'Payment' ? 'info__tabs__text--active' : 'tet']" class="info__tabs__text">Betaling</span>
                </div>

                <transition enter-active-class="animated fadeIn"
                            leave-active-class="animated fadeOut"
                            enter mode="out-in">
                    <component  :is="view"></component>
                </transition>
            </div>
        </div>


        <div class="order__items">
            <div class="order__item--header">
                <h1>Winkelmandje</h1>
                <hr class="order__item--seperator">
            </div>

            <div class="order__item--details">

            </div>
        </div>
    </div>
</template>

<script>
    const UserInfo = () => import('./UserInfo')
    const Shipment = () => import('./Shipment')
    const Payment = () => import('./Payment')

    export default {
        name: "OrderTwo",
        components: {
            'UserInfo' : UserInfo, 'Shipment' : Shipment, 'Payment' : Payment
        },

        data() {
            return {
                view: UserInfo
            }
        },

        methods: {
            changeView(nextView){
                if(nextView){
                    if(nextView === 'UserInfo'){
                        this.view = UserInfo
                    }
                    else if(nextView === 'Shipment') {
                        this.view = Shipment
                    }
                    else if(nextView === 'Payment'){
                        this.view = Payment
                    }
                } else {
                    this.view === UserInfo ? this.view = Shipment : this.view = Shipment ? this.view = Payment : this.view = UserInfo
                }
            }
        }
    }
</script>

<style  scoped>

    .order__container {
        width: 100%;
        min-height: 80vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }

    .order__info {
        flex: 3;
        padding-right: 50px;
        min-height: 90vh;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .order__items {
        background: #F8FAFB;
        flex: 1;
        min-height: 94vh;
    }

    .order__filler--one {
        flex: 1;
    }

    .order__wrapper {
        overflow: hidden;
        flex: 2;
    }

    .info__tabs {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .info__tabs__text {
        flex: 1;
        background: none;
        border: none;
        font-size: 20px;
        padding: 25px;;
        color: #D4D9DD;
        border-bottom: 1px solid #D4D9DD;
        transition: 0.3s ease-in-out;
    }

    .info__tabs__text--active {
        cursor: pointer;
        color: #1F2529;
        border-bottom: 1px solid #1F2529;
        transition: 0.3s ease-in-out;
    }

    .order__item--header {
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        font-size: 35px;
    }

    .order__item--seperator {
        border:1px solid #D4D9DD;
    }

</style>