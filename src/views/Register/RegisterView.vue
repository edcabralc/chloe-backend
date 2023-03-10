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
                            <input type="text" v-model="nome" />
                        </div>
                        <div class="cells">
                            <label for="email">E-Mail: </label>
                            <input type="email" v-model="email" />
                        </div>
                        <div class="cells">
                            <label for="Telefone">Telefone: </label>
                            <input type="number" v-model="tel" />
                        </div>
                        <div class="cells">
                            <label for="nascimento">Data de Nascimento </label>
                            <input type="date" v-model="date" />
                        </div>
                        <div class="cells">
                            <label for="senha">Senha </label>
                            <input type="password" v-model="pass" />
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
import newRegister from '@/helpers/newRegister.js'

export default {
    name: 'RegisterView',
    components: { newRegister },
    data() {
        return {
            nome1: nome.value,
            email1: email.value,
            date1: date.value,
            pass1: pass.value,
            newUser: {
                nome1: 'nome',
                email1: 'email',
                date1: 'dataNasc',
                pass1: 'pwd',
            },
        }
    },
    props: {
        newUser: {},
    },
}
</script>

<style src="./style.scss" lang="scss" />
