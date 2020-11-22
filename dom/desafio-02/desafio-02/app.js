new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta: function (event) {
            alert('Você está sendo alertado!')
        },
        atualizaValor: function (event) {
            this.valor = event.target.value
        },
        atualizaValorEnter: function (event) {
            this.valor = event.target.value
        }
    },
})