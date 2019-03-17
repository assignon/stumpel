<template>
    <div>
        <div class="order__header">
            <h1>Verzendopties</h1>
        </div>

        <div class="order__input__wrapper">
            <div class="order__input">
                <label class="label">Kies 1 van de opties</label>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="answer">
                        In de winkel ophalen
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer">
                        Bezorgen
                    </label>
                </div>
            </div>
        </div>

        <div class="order__input__wrapper order__input__wrapper--right">
            <a @click="$parent.changeView()" class="button is-dark">Volgende</a>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Shipment"
    }
</script>

<style scoped>
    .order__header {
        font-size: 40px;
        color: #1F2529;
        margin-top: 60px;
        text-align: left;
    }

    .order__input__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-align: left;
        margin-top: 40px;
    }

    .order__input__wrapper--right {
        justify-content: flex-end;
        width: 84%;
    }

    .order__input {
        padding-right: 50px;
        width: 45%;
    }

    .button {
        height: 60px;
        padding: 0 50px;
    }
</style>