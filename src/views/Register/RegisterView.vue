<template>
    <!-- <MainHeader /> -->
    <main>
        <div class="register-main cover-background">
            <h1 class="hero-title">Registro de Novo Usuário</h1>
        </div>

        <h2 class="title">Bem-vindo ao melhor hotel da cidade</h2>

        <section class="section">
            <div class="container">
                <article class="register">
                    <form enctype="application/x-www-form-urlencoded" method="post">
                        <div class="itens-form">
                            <div class="cells">
                                <label for="nome_usuario">Nome Completo:</label>
                                <input type="text" name="nome_usuario" v-model="nome_usuario" />
                            </div>
                            <div class="cells">
                                <label for="email_usuario">E-Mail:</label>
                                <input type="email" name="email_usuario" v-model="email_usuario" />
                            </div>
                            <div class="cells">
                                <label for="password">Senha</label>
                                <input type="password" name="password" v-model="password" />
                            </div>
                            <input class="btn" type="submit" value="Enviar" @click.prevent="register()" />
                        </div>
                    </form>
                </article>
            </div>
        </section>
    </main>
    <!-- <MainFooter /> -->
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'RegisterView',
    computed: {
        // ...mapState(['user']),
        nome_usuario: {
            get() {
                return this.$store.state.user.nome_usuario
            },
            userTrim: this.removeQuotesSpaces(this.user.nome_usuario),

            set(value) {
                this.$store.commit('updateUser', { userTrim: value })
            },
        },
        email_usuario: {
            get() {
                return this.$store.state.user.email_usuario
            },
            mailTrim: this.removeQuotesSpaces(this.user.email_usuario),

            set(value) {
                this.$store.commit('updateUser', { mailTrim: value })
            },
        },
        password: {
            get() {
                return this.$store.state.user.password
            },
            set(value) {
                this.$store.commit('updateUser', { password: value })
            },
        },
    },
    methods: {
        // ...mapActions(['register']),
        removeQuotesSpaces(str) {
            return str.replaceAll("'", '').replaceAll('"', '').trim()
        },

        register() {
            this.$store.dispatch('createUser', this.$store.state.user)
        },
    },
}
</script>

<style src="./style.scss" lang="scss" />
