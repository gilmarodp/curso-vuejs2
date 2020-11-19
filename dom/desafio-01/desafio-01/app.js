new Vue({
    el: '#desafio',
    data: {
        name: 'Antonio Gilmar',
        years: 16,
        imgLogoVS: 'https://www.vemsimplificar.com.br/public/assets/img/icone100.png'
    },
    methods: {
        returnRandom: function (min, max) {
            return Math.random() * (max - min) + min
        },
        yearsTimesThree: function () {
            return this.years * 3
        },
        changeNameValue: function (event) {
            this.name = event.target.value
        },
    },
})