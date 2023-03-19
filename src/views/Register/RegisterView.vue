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
                    <div class="itens-form">
                        <div class="cells">
                            <label for="Nome">Nome Completo: </label>
                            <input type="text" v-model="form.nome" />
                        </div>
                        <div class="cells">
                            <label for="email">E-Mail: </label>
                            <input type="email" v-model="form.email" />
                        </div>
                        <!-- <div class="cells">
                            <label for="Telefone">Telefone: </label>
                            <input type="number" v-model="newUser.tel" />
                        </div>
                        <div class="cells">
                            <label for="nascimento">Data de Nascimento </label>
                            <input type="date" v-model="newUser.date" />
                        </div> -->
                        <div class="cells">
                            <label for="senha">Senha </label>
                            <input type="password" v-model="form.pass" />
                        </div>
                        <input class="btn" type="submit" value="Enviar" @click.prevent7="register" />
                    </div>
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
    // data() {
    //     return {
    //         dadosFormulario: {
    //             nome: '',
    //             email: '',
    //             pass: '',
    //         },
    //     }
    // },
    computed: {
        ...mapState(['user']),
        form: {
            get() {
                return this.user
            },
            set(user) {
                this.$store.commit('createUser', user)
            },
        },
    },
    methods: {
        ...mapActions(['register']),
        register() {
            this.register().then(() => {
                this.form = {}
            })
        },
    },
}
</script>

<style src="./style.scss" lang="scss" />
