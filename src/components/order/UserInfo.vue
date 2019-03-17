<template>
    <div>
        <div class="order__header">
            <h1>Klantgegevens</h1>
        </div>

        <div class="order__input__wrapper">
            <div class="order__input">
                <label class="label">NAAM</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Voer hier uw naam">
                </div>
            </div>

            <div class="order__input">
                <label class="label">ACHTERNAAM</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Voer hier uw achternaam">
                </div>
            </div>
        </div>

        <div class="order__input__wrapper">
            <div class="order__input order__input--large">
                <label class="label">ADRES + HUISNUMMER</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Voer hier uw adres & huisnummer">
                </div>
            </div>
        </div>

        <div class="order__input__wrapper">
            <div class="order__input">
                <label class="label">WOONPLAATS</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Voer hier uw woonplaats">
                </div>
            </div>

            <div class="order__input">
                <label class="label">POSTCODE</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Voer hier uw postcode">
                </div>
            </div>
        </div>

        <div class="order__input__wrapper">
            <div class="order__input">
                <label class="label">EMAIL</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Voer hier uw email">
                </div>
            </div>

            <div class="order__input">
                <label class="label">TELEFOONNUMMER</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Voer hier uw telefoonnummer">
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
        name: "UserInfo"
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

    .order__input--right {
    }

    .order__input--large {
        width: 90%;
    }

    .input {
        height: 60px;
    }

    .label {
        color: #E4E7E9;
    }

    .button {
        height: 60px;
        padding: 0 50px;
    }
</style>