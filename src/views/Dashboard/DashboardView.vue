<template>
    <div class="main">
        <aside class="aside">
            <header class="aside-header">
                <div class="logo">
                    <router-link to="/">
                        <img src="@/assets/images/logo.svg" alt="Chloe Gran Hotel" />
                    </router-link>
                </div>
            </header>
            <div class="aside-menu">
                <ul class="menu-dashboard">
                    <li>
                        <img src="" alt="" srcset="" />
                        <router-link to="/painel">Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/painel/usuarios">Usuários</router-link>
                    </li>
                    <li>
                        <router-link to="/painel/acomodacoes">Acomodações</router-link>
                    </li>
                    <li>
                        <router-link to="/painel/acomodacoes">Reservas</router-link>
                    </li>
                    <li>
                        <router-link to="/painel/acomodacoes">Serviços</router-link>
                    </li>
                </ul>
            </div>
            <div class="aside-footer">
                <router-link to="/">Sair</router-link>
            </div>
        </aside>
        <main class="container-dashboard">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'DashboardView',
    // params: ['teste'],
}
</script>

<style src="./style.scss" lang="scss" scoped />
