<template>
    <header class="header">
        <div class="header-container">
            <div class="logo">
                <router-link to="/">
                    <img src="@/assets/images/logo.svg" alt="Chloe Gran Hotel" />
                </router-link>
            </div>
            <div class="navMain">
                <MainNavbar />
            </div>
        </div>
        <div class="navHamb">
            <NavMobile />
        </div>
    </header>
</template>

<script>
import NavMobile from '@/components/commons/NavMobile.vue'
import MainNavbar from '@/components/commons/MainNavbar.vue'
export default {
    name: 'MainHeader',
    components: { MainNavbar, NavMobile },
}
</script>

<style lang="scss">
/* Header */
.header {
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding: 68px 0px;
    margin: 0 32px;
    &-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1300px;
        width: 100%;
        flex-wrap: wrap;
    }
}

/* Navbar */
.logo {
    width: 217px;
}

.navHamb {
    display: none;
}

@media only screen and (max-width: 600px) {
    .navHamb {
        display: flex;
    }
    .navMain {
        display: none;
    }
}
</style>
