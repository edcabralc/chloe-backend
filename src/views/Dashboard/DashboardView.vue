<template>
    <div class="main">
        <aside class="left-menu">
            <ul>
                <li>Usuário</li>
                <li>Acomodações</li>
                <li>
                    <router-link to="/sobre">O Hotel</router-link>
                </li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </aside>
        <main>
            <div class="container">teste</div>
            <router-view name="dashboard"> </router-view>
        </main>
    </div>
</template>

<script>
export default {
    name: 'DashboardView',
}
</script>

<style src="./style.scss" lang="scss" scoped />
