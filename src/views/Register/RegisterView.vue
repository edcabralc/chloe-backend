<template>
    <MainHeader />
    <main>
        <div class="register-main cover-background">
            <h1 class="hero-title">Registro de Novo Usuário</h1>
        </div>

        <h2 class="title">Bem-vindo ao melhor hotel da cidade</h2>

        <section class="section">
            <div class="container">
                <article class="register">
                    <div class="itens-form">
                        <div class="cells">
                            <label for="Nome">Nome Completo: </label>
                            <input type="text" v-bind="nome" />
                        </div>
                        <div class="cells">
                            <label for="email">E-Mail: </label>
                            <input type="email" v-bind="email" />
                        </div>
                        <div class="cells">
                            <label for="Telefone">Telefone: </label>
                            <input type="number" v-bind="tel" />
                        </div>
                        <div class="cells">
                            <label for="nascimento">Data de Nascimento </label>
                            <input type="date" v-bind="date" />
                        </div>
                        <div class="cells">
                            <label for="senha">Senha </label>
                            <input type="password" v-bind="pass" />
                        </div>
                        <input class="btn" type="submit" value="Enviar" @click="register()" />
                    </div>
                </article>
            </div>
        </section>
    </main>
    <MainFooter />
</template>

<script>
import MainFooter from '../../components/MainFooter.vue'
import MainHeader from '../../components/MainHeader.vue'
import newRegister from '../../helpers/newRegister.js'

export default {
    name: 'RegisterView',
    components: { MainHeader, MainFooter, newRegister },
    data() {
        newUser = {
            nome: nome,
            email: email,
            dataNasc: date,
            pwd: pass,
        }
    },
    props: {
      newUser: {}
    }
}
</script>

<style src="./style.scss" lang="scss" />
