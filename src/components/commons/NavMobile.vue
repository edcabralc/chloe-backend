<template>
    <nav class="navbar mobile-nav">
        <!-- <label class="menu-mobile-icon" for="menu-toggle">&#9776;</label> -->
        <!-- <input type="checkbox" id="menu-toggle" /> -->

        <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary"> -->
        <div class="container-fluid">
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <!-- <a class="navbar-brand" href="#"> Cloe </a> -->
                <router-link to="/">
                    <img src="@/assets/images/logo.svg" alt="Chloe Gran Hotel" />
                </router-link>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <NavLink />
                    <li>
                        <router-link to="/cadastrar" class="btn-default btn_signin"> Cadastrar </router-link>
                    </li>
                    <li>
                        <router-link to="/acessar" class="btn-default btn_login"> Acessar </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- <ul class="menu-mobile">
            <NavLink />
            <li>
                <router-link to="/cadastrar" class="menu-btn menu-btn_signin"> Cadastrar </router-link>
            </li>
            <li>
                <router-link to="/acessar" class="menu-btn menu-btn_login"> Acessar </router-link>
            </li>
        </ul> -->
    <!-- </nav> -->
</template>

<script>
import NavLink from '@/components/commons/NavLink'

export default {
    name: 'NavMobile',
    components: { NavLink },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/index' as *;

.mobile-nav {
    display: flex;
}

.menu-mobile {
    // display: none;
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

#menu-toggle {
    // display: none;
}

#menu-toggle:checked + .menu-mobile {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.btn-menu {
    width: 140px;
    height: auto;
    border-radius: 9px;
    border: none;
    font-size: 20px;
    padding: 12px 22px;
    text-align: center;
    transition: ease 0.2s;
    &_signin {
        border: 1px solid $primary-green;
        &:hover {
            background-color: $primary-green;
            color: #fff;
            filter: opacity(50%);
            cursor: pointer;
        }
    }
    &_login {
        background-color: $primary-green;
        color: #fff;
        &:hover {
            filter: opacity(50%);
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>
