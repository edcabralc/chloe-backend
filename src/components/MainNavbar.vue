<template>
  <nav class="navbar">
    <ul class="menu">
      <NavLink />
      <li>
        <router-link to="/cadastrar">
          <input class="menu-btn_signin" type="submit" value="Cadastrar" />
        </router-link>
      </li>
      <li>
        <router-link to="/acessar">
          <input class="menu-btn_login" type="submit" value="Acessar" />
        </router-link>
      </li>
    </ul>
    <!-- <nav class="mobile-nav">
            <label class="menu-mobile-icon" for="menu-toggle">&#9776;</label>
            <input type="checkbox" id="menu-toggle" />
            <ul class="menu-mobile">
                <NavLink />
                <li>
                    <router-link to="/acessar">Login</router-link>
                </li>
            </ul>
        </nav> -->
  </nav>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  name: "MainNavbar",
  components: { NavLink },
};
</script>

<style lang="scss">
.navbar {
  font-size: 20px;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
}

.menu a {
  color: #242222;
  padding: 28px 0;
  position: relative;
}

.menu a:not([type="submit"]):hover::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #b9ad81;
  bottom: 0;
}

.menu-btn_signin,
.menu-btn_login {
  width: 140px;
  height: auto;
  border-radius: 9px;
  border: none;
  box-shadow: none;
  font-size: 20px;
  padding: 12px 22px;
  color: #558e60;
}

.menu-btn_login {
  background-color: #e1e6e1;
}

.menu-btn_login {
  background-color: #fff;
  border: 1px solid #558e60;
}

.menu-btn_signin:hover {
  background-color: #558e60;
  color: #fff;
  opacity: 0.5;
  transition: ease 0.2s;
  cursor: pointer;
}

.menu-btn_login:hover {
  cursor: pointer;
  background-color: #e1e6e1;
  transition: ease 0.2s;
  cursor: pointer;
}
</style>
