<template>
    <main>
        <HeroBanner class="img-bg" title="Registro de novo usuário"></HeroBanner>

        <h2 class="title">Bem-vindo ao melhor hotel da cidade</h2>

        <section class="section">
            <div class="container">
                <article class="register">
                    <form enctype="application/x-www-form-urlencoded" method="post">
                        <div class="itens-form">
                            <div class="cells">
                                <label for="nome_usuario">Nome Completo:</label>
                                <input type="text" name="nome_usuario" v-model="user.nome_usuario" />
                            </div>
                            <div class="cells">
                                <label for="email_usuario">Email:</label>
                                <input type="email" name="email_usuario" v-model="user.email_usuario" />
                            </div>
                            <div class="cells">
                                <label for="password">Senha:</label>
                                <input type="password" name="password" v-model="user.password" />
                            </div>
                            <input class="btn-default" type="submit" value="Enviar" @click.prevent="register()" />
                        </div>
                    </form>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
import HeroBanner from '@/components/commons/HeroBanner.vue'

export default {
    name: 'RegisterView',

    data() {
        return {
            user: {
                nome_usuario: '',
                email_usuario: '',
                password: '',
            },
        }

    methods: {


        injTreatment(str) {
            return str.replace(/[''"]/g, '')
        },
        register() {
            this.$store.dispatch('createUser', this.user)

        removeQuotesSpaces(str) {
            return str.replaceAll("'", '').replaceAll('"', '').trim()
        },

        register() {
            this.$store.dispatch('createUser', this.$store.state.user)

        },
    },
    updated() {
        this.user.nome_usuario = this.injTreatment(this.user.nome_usuario)
        this.user.email_usuario = this.injTreatment(this.user.email_usuario)
    },
    components: { HeroBanner },
}
</script>

<style src="./style.scss" lang="scss" />
