<template>
    <!-- <div class="nav-mobile-container">
        <button class="nav-mobile-icon">
            <font-awesome-icon icon="fa-solid fa-bars" @click="showMenu()" />
        </button>
        <nav class="nav-mobile">
            <div class="nav-mobile-content" :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'">
                <ul class="nav-mobile-items">
                    <NavLink />
                    <li>
                        <router-link to="/cadastrar" class="btn-default btn_signin">Cadastrar</router-link>
                    </li>
                    <li>
                        <router-link to="/acessar" class="btn-default btn_login">Acessar</router-link>
                    </li>
                    <li>
                        <router-link to="/acessar-admin" class="btn-default btn_login">Acesso Admin</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div> -->
    <button class="btn-mobile" @click="handleClick">Menu</button>
</template>

<script>
import NavLink from '@/components/commons/NavLink'

export default {
    name: 'NavMobile',
    components: { NavLink },
    methods: {
        handleClick() {
            this.$emit('showMenuMobile')
        },
    },
}
</script>

<style lang="scss">
@use '@/assets/scss/index' as *;

// .btn-mobile {
//     display: block;
//     color: red;
// }

// .nav-mobile-container {
//     display: flex;
//     justify-content: flex-end;
// }

// .nav-mobile-icon {
//     width: 100px;
//     position: relative;
// }

// .nav-mobile {
//     text-align: center;
//     background-color: red;
// }

// .nav-mobile-content {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
// }

// .nav-mobile-items {
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// @media screen and (max-width: 768px) {
//     .nav-mobile {
//         display: flex;
//         justify-content: center;
//         padding-top: 10px;
//         // position: absolute;
//         // width: 100%;
//     }
// .open-menu {
//     opacity: 1;
//     // height: 150px;
//     transition: ease-in 0.3s;
// }
// .closed-menu {
//     opacity: 0;
//     height: 0;
//     padding: 0;
// }
//     .nav-mobile-content {
//         flex-direction: column;
//         z-index: 100;
//         width: 100%;
//         position: relative;
//         transition: all 0.2s ease-out;
//     }
//     .nav-mobile-items {
//         flex-direction: column;
//         position: relative;
//         background-color: red;
//         width: 100%;
//     }
// i {
//     display: block;
//     text-align: right;
//     padding: 0 10px 10px 0;
// }
// }

// .btn-menu {
//     width: 140px;
//     height: auto;
//     border-radius: 9px;
//     border: none;
//     font-size: 20px;
//     padding: 12px 22px;
//     text-align: center;
//     transition: ease 0.2s;
//     &_signin {
//         border: 1px solid $primary-green;
//         &:hover {
//             background-color: $primary-green;
//             color: #fff;
//             filter: opacity(50%);
//             cursor: pointer;
//         }
//     }
//     &_login {
//         background-color: $primary-green;
//         color: #fff;
//         &:hover {
//             filter: opacity(50%);
//             color: #fff;
//             cursor: pointer;
//         }
//     }
// }
</style>
