<template>
    <form class="order__container">
        <div class="order__left">
            <div class="order__left--header">
                <h1>Klantgegevens</h1>
            </div>

            <div class="order__left--row">
                <div class="order__input__wrapper">
                    <label class="label">Naam</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Voer hier uw naam">
                    </div>
                </div>

                <div class="order__input__wrapper">
                    <label class="label">Achternaam</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Voer hier uw achternaam">
                    </div>
                </div>
            </div>

            <div class="order__left--row order__left--two">
                <div class="order__input__wrapper order__input__wrapper--large">
                    <label class="label">Adres</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Voer hier uw adres">
                    </div>
                </div>

                <div class="order__input__wrapper order__input__wrapper--small">
                    <label class="label">Postcode</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Voer hier uw postcode">
                    </div>
                </div>

                <div class="order__input__wrapper order__input__wrapper--small">
                    <label class="label">Toevoeging*</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Toevoeging">
                    </div>
                </div>
            </div>

            <div class="order__left--row order__left--three">
                <div class="order__input__wrapper">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Voer hier uw email">
                    </div>
                </div>

                <div class="order__input__wrapper">
                    <label class="label">Telefoon</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Voer hier uw Telefoon">
                    </div>
                </div>
            </div>

            <div class="order__left--row order__left--three">
                <div class="order__input__wrapper">
                    <label class="label">Cadeaukaart</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Voer hier uw cadeaukaart">
                    </div>
                </div>

                <div class="order__input__wrapper">
                    <label class="label">Betaalmethoden</label>

                    <div class="select">
                        <select>
                            <option aria-role="listitem">ING</option>
                            <option aria-role="listitem">ABN AMRO</option>
                            <option aria-role="listitem">RABO Bank</option>
                            <option aria-role="listitem">REAAL</option>
                            <option aria-role="listitem">SNS Bank</option>
                            <option aria-role="listitem">Nationale Nederlanden</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="order__right">
            <div class="order__left--row">
                <div class="order__input__wrapper order__input--full">
                    <b-table :data="data" :columns="columns"></b-table>
                </div>
            </div>

            <div class="order__right--header">
                <h1>Totaal: € 62,95</h1>

            </div>

            <div class="order__left--row" style="justify-content: flex-end">
                <button class="button is-dark">
                    <span>Afrekenen</span>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "Order",
        data() {
            return {
                data: [
                    { 'ISBN': 9789022587157, 'book': 'Eragon', 'price': '€ 22,50', 'amount': '1x' },
                    { 'ISBN': 9789024573349, 'book': 'Het spel der tronen', 'price': '€ 12,50', 'amount': '1x'},
                    { 'ISBN': 9783423423339, 'book': 'Het bloed van de elfen', 'price': '€ 2,50', 'amount': '1x'},
                    { 'ISBN': 9032493204843, 'book': 'De naam van de wind', 'price': '€ 8,90', 'amount': '2x'},
                    { 'ISBN': 1084714147878, 'book': 'De angst van de wijze', 'price': '€ 16,55', 'amount': '1x'}
                ],
                columns: [

                    {
                        field: 'book',
                        label: 'Boek',
                    },
                    {
                        field: 'price',
                        label: 'Prijs',
                    },
                    {
                        field: 'amount',
                        label: 'Aantal',
                        centered: true
                    },
                    {
                        field: 'ISBN',
                        label: 'ISBN',
                        width: '40',
                        numeric: true,
                        centered: true
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .order__container {
        min-height: 50vh;
        display: flex;
        flex-direction: row;
    }

    .order__left {
        border: 1px solid #545556;
        flex:1;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding: 40px;
    }

    .order__right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        padding: 40px;
        flex: 1;
    }

    .order__left--header {
        margin: 10px;
        color: #545556;
        font-size: 43px;
    }

    .order__right--header {
        text-align: right;
        margin: 10px;
        color: #545556;
        font-size: 43px;
    }

    .order__left--row {
        display: flex;
        flex-direction: row;
    }

    .order__left--two {
        margin-top: 20px;
    }

    .order__left--three {
        margin-top: 20px;
    }

    .order__input__wrapper {
        margin: 10px;
        width: 45%;
    }

    .order__input__wrapper--large {
        width: 50%;
    }

    .order__input__wrapper--small {
        width: 18.5%;
    }

    .order__input--full {
        width: 100%;
    }

    .label {
        color: #545556;
    }
</style>