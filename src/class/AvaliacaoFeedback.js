"use strict";
exports.__esModule = true;
exports.AvaliacaoFeedback = void 0;
var AvaliacaoFeedback = /** @class */ (function () {
    function AvaliacaoFeedback() {
        this.nome = '';
        this.sobrenome = '';
    }
    AvaliacaoFeedback.prototype.avaliacao = function (e) {
        var opcao = Number(e.target.getAttribute('data-avaliacao'));
        var ele = e.target.parentNode;
        for (var i in ele.children) {
            if (ele.children[i].classList.contains('ativo')) {
                ele.children[i].classList.remove('ativo');
            }
            if (ele.children[i].getAttribute('data-avaliacao') == opcao) {
                ele.children[i].classList.add('ativo');
            }
        }
    };
    AvaliacaoFeedback.prototype.setlocalStorage = function (nome, sobrenome, avaliacao) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.notaavaliacao = avaliacao;
        var avaliacaofe = {
            nome: this.nome,
            sobrenome: this.sobrenome,
            nota: this.notaavaliacao
        };
        var dados = [];
        if (this.getLocalStorage()) {
            console.log(this.getLocalStorage());
        }
        dados.push(avaliacaofe);
        var feedbackAvaliacao = JSON.stringify(dados);
        localStorage.setItem('avaliacaoFedBack', feedbackAvaliacao);
        alert('Obrigado pelo FeedBack');
        // window.location.href = '/feedback'
    };
    AvaliacaoFeedback.prototype.getLocalStorage = function () {
        var dadosFeedback = localStorage.getItem('avaliacaoFedBack');
        var dados = '';
        if (dadosFeedback) {
            dados = JSON.parse(dadosFeedback);
        }
        return dados;
    };
    return AvaliacaoFeedback;
}());
exports.AvaliacaoFeedback = AvaliacaoFeedback;
