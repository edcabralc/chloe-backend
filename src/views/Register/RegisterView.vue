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
                            <input type="text" v-model="newUser.nome" />
                        </div>
                        <div class="cells">
                            <label for="email">E-Mail: </label>
                            <input type="email" v-model="newUser.email" />
                        </div>
                        <div class="cells">
                            <label for="Telefone">Telefone: </label>
                            <input type="number" v-model="newUser.tel" />
                        </div>
                        <div class="cells">
                            <label for="nascimento">Data de Nascimento </label>
                            <input type="date" v-bind="newUser.date" />
                        </div>
                        <div class="cells">
                            <label for="senha">Senha </label>
                            <input type="password" v-bind:name="pass" />
                        </div>
                        <input class="btn" type="submit" value="Enviar" @click="register()" />
                    </div>
                </article>
            </div>
        </section>
    </main>
    <!-- <MainFooter /> -->
</template>

<script>
export default {
    name: 'RegisterView',
    // components: { newRegister, router },
    data() {
        return {
            newUser: {
                nome: 'nome',
                email: 'email',
                date: 'dataNasc',
                pass: 'pwd',
            },
        }
    },
    methods: {},
    register() {
        // check blank
        if (this.newUser.name === '' || this.newUser.email === '' || this.newUser.pass === '') {
            return alert('Atenção! Os campos usuário e senha devem ser preenchidos.')
        }
        this.$store.dispatch('/usuario/registrar', this.newUser)
    },
}
</script>

<style src="./style.scss" lang="scss" />
