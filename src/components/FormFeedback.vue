<template>
    <main>
        <h2 class="title title-feedback">Como foi sua Experiência conosco?</h2>
        <div class="content-subtitle">
            <h4 class="subtitle">Conta pra gente!</h4>
            <img src="@/assets/images/message-alt.svg" alt="Icon Message" />
        </div>
        <section class="section">
            <article class="container">
                <div class="itens-form">
                    <div class="nomes">
                        <div class="nome1">
                            <label for="nome">Nome:</label>
                            <input type="text" v-model="nome" name="Nome" />
                        </div>
                        <div class="nome2">
                            <label for="sobrenome">Sobrenome:</label>
                            <input type="text" v-model="sobrenome" name="sobrenome" />
                        </div>
                    </div>
                    <div class="cells">
                        <label for="message">Mensagem:</label>
                        <textarea name="message" v-model="mensagem" class="message" cols="30" rows="10"></textarea>
                    </div>
                    <div class="avaliacao-content">
                        <p>Avalie nossos serviços:</p>
                        <ul class="avaliacao-icons">
                            <li class="star-icon ativo" data-avaliacao="1" @click="avaliacao"></li>
                            <li class="star-icon" data-avaliacao="2" @click="avaliacao"></li>
                            <li class="star-icon" data-avaliacao="3" @click="avaliacao"></li>
                            <li class="star-icon" data-avaliacao="4" @click="avaliacao"></li>
                            <li class="star-icon" data-avaliacao="5" @click="avaliacao"></li>
                        </ul>
                    </div>
                    <input class="btn" type="submit" value="Enviar" @click="submit" />
                </div>
            </article>
        </section>
        <div class="container-feedback">
            <div class="feedback">
                <h3>Confira os Feedbacks</h3>
                <hr />
                <ul v-for="dados in dadosAvaliacao" :key="dados.descricao">
                    <li>Nome: {{ dados.nome }} {{ dados.sobrenome }}</li>
                    <!-- <li>Sobrenome: </li> -->
                    <li>Descrição: {{ dados.descricao }}</li>
                    <li>Avaliação: {{ dados.nota }}</li>
                    <hr />
                    <br />
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import { AvaliacaoFeedback } from '@/class/AvaliacaoFeedback'
export default {
    name: 'FormFeedback',
    data() {
        return {
            nome: '',
            sobrenome: '',
            mensagem: '',
            notaAvaliacao: '1',
            dadosAvaliacao: [],
        }
    },

    methods: {
        avaliacao(e) {
            this.notaAvaliacao = e.target.getAttribute('data-avaliacao')
            let avaliacao = new AvaliacaoFeedback()
            try {
                avaliacao.avaliacao(e)
            } catch (erro) {
                // console.error(erro);
            }
        },

        submit() {
            let avaliacao = new AvaliacaoFeedback()
            avaliacao.setlocalStorage(this.nome, this.sobrenome, this.mensagem, this.notaAvaliacao)
        },
        getFeedBack() {
            let avaliacao = new AvaliacaoFeedback()
            let dados = avaliacao.getLocalStorage()
            this.dadosAvaliacao = dados
        },
    },
    mounted() {
        this.getFeedBack()
    },
}
</script>

<style lang="scss" scoped>
/* Style de Titles and Form */
.title-feedback {
    font-size: 40px;
}
.content-subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}
.subtitle {
    text-align: center;
    font-size: 20px;
}
.container {
    background-color: #eff5f0;
    width: 700px;
    border-radius: 12px;
}
.itens-form {
    margin: 50px;
}
.btn {
    margin-top: 10px;
}

/* Style Star */

.avaliacao-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    gap: 10px;
}

.avaliacao-icons {
    margin: 10px 0 20px 0;
    text-align: right;
    display: flex;
    align-items: center;
    gap: 5px;
}

.star-icon {
    width: 30px;
    list-style: none;
    cursor: pointer;
    color: #ffe500;
    font-size: 30px;
}

.star-icon::before {
    content: '\2605';
}

.star-icon.ativo ~ .star-icon::before {
    content: '\2606';
}

.avaliacao-icons:hover .star-icon::before {
    content: '\2605';
}

.star-icon:hover ~ .star-icon::before {
    content: '\2606';
}

// Feedback

.container-feedback {
    margin-top: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
}

.feedback {
    background-color: #eff5f0;
    border-radius: 20px;
    width: 700px;
}

.feedback > h3 {
    margin: 20px;
    font-size: 30px;
}

ul > li {
    margin: 10px;
}
</style>
