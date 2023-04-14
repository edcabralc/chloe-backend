<template>
    <!-- <MainHeader /> -->
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
import HeroBanner from '@/components/commons/HeroBanner.vue'
import { mapState, mapActions } from 'vuex'

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
    },
    // computed: {
    //     // ...mapState(['user']),
    //     nome_usuario: {
    //         get() {
    //             return this.$store.state.user.nome_usuario
    //         },

    //         set(userTrim) {
    //             this.$store.commit('updateUser', { nome_usuario: userTrim })
    //         },
    //     },
    //     email_usuario: {
    //         get() {
    //             return this.$store.state.user.email_usuario
    //         },

    //         set(mailTrim) {
    //             this.$store.commit('updateUser', { email_usuario: mailTrim })
    //         },
    //     },
    //     password: {
    //         get() {
    //             return this.$store.state.user.password
    //         },
    //         set(value) {
    //             this.$store.commit('updateUser', { password: value })
    //         },
    //     },
    // },
    methods: {
        //usando método regex de prevenção de sql injection direto ao digitar
        injTreatment(str) {
            return str.replace(/[''"]/g, '')
        },
        register() {
            this.$store.dispatch('createUser', this.user)
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
