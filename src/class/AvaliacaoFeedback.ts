export class AvaliacaoFeedback {
    private nome: string = '';
    private sobrenome: string = '';
    private notaavaliacao: number;

    constructor() {}

    avaliacao(e) {
        let opcao = Number(e.target.getAttribute('data-avaliacao'));
        let ele = e.target.parentNode;
        for (let i in ele.children) {
            if (ele.children[i].classList.contains('ativo')) {
                ele.children[i].classList.remove('ativo');
            }
            if (ele.children[i].getAttribute('data-avaliacao') == opcao) {
                ele.children[i].classList.add('ativo');
            }
        }
    }

    setlocalStorage(nome: string, sobrenome: string, avaliacao: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.notaavaliacao = avaliacao
        let avaliacaofe = {
            nome: this.nome,
            sobrenome: this.sobrenome,
            nota: this.notaavaliacao,
        };
        let dados = []
        if (this.getLocalStorage()){
            console.log(this.getLocalStorage());
            // for( let i in this.getLocalStorage())
        }
        dados.push(avaliacaofe)
        let feedbackAvaliacao = JSON.stringify(dados)
        localStorage.setItem('avaliacaoFedBack', feedbackAvaliacao)
        alert('Obrigado pelo FeedBack')
        // window.location.href = '/feedback'
    }

    getLocalStorage():string{
        let dadosFeedback = localStorage.getItem('avaliacaoFedBack')
        let dados = ''
        if (dadosFeedback){
            dados = JSON.parse(dadosFeedback)
        }
        return dados
    }
}
