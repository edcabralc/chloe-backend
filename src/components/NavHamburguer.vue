<template>
  <nav class="mobile-nav">
    <label class="menu-mobile-icon" for="menu-toggle">&#9776;</label>
    <input type="checkbox" id="menu-toggle" />
    <ul class="menu-mobile">
      <li>
        <a href="@/about.html">O Hotel</a>
      </li>
      <li>
        <a href="@/acomodacoes.html">Acomodações</a>
      </li>
      <li>
        <a href="@/reservas.html">Reservas</a>
      </li>
      <li>
        <a href="@/contato.html">Contato</a>
      </li>
      <li>
        <a href="@/login.html">Login</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  name: "NavHamburguer",
  components: { NavLink },
};
</script>

<style lang="scss">
.mobile-nav {
  display: none;
}

.menu-mobile {
  display: none;
  position: absolute;
  top: 120px;
  right: 0px;
  width: 100%;
  height: 100vh;
  padding: 24px;
  background-color: #fff;
  transition: 0.3s ease;
  overflow: hidden;
}

.menu-mobile-icon {
  font-size: 28px;
  cursor: pointer;
}

.menu-mobile-icon:hover {
  opacity: 0.5;
}

.menu-mobile ul {
  padding: 5px;
}
.menu-mobile li a {
  color: #558e60;
  padding: 15px;
}

.menu-mobile li a:hover {
  color: #b9ad81;
  padding: 15px;
  background-color: #e1e6e1;
}

#menu-toggle {
  display: none;
}

#menu-toggle:checked + .menu-mobile {
  display: none;
  flex-direction: column;
  gap: 16px;
}
</style>
