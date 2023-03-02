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
              <input
                class="btn"
                type="submit"
                value="Enviar"
                @click="register()"
              />
            </div>
          </article>
        </div>
      </section>
    </main>
    <MainFooter />
  </template>
  
  <script>
  import MainFooter from "../../components/MainFooter.vue";
  import MainHeader from "../../components/MainHeader.vue";
  
  export default {
    name: "RegisterView",
    components: { MainHeader, MainFooter },
    data() {
      (getRegister = {
        nome: nome.value,
        email: email.value,
        tel: tel.value,
        nascimento: date.value,
        senha: pass.value.hide(),
      }),
        (registerJSON = JSON.stringify(getRegister));
    },
    methods: {
      register() {
        return localStorage.setItem("Novo Cadastro", registerJSON);
      },
    },
  };
  </script>
  
  <style src="./style.scss" lang="scss" />
  