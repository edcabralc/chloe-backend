<template>
    <div class="acomodacoes">
        <!-- {{ acomodacoes }} -->
        <div class="lista" v-for="acomodacao in acomodacoes.list" :key="acomodacao.id">
            <ul>
                <li>
                    <h3>{{ acomodacao.nome }}</h3>
                </li>
                <li>{{ acomodacao.descricao }}</li>
                <li>R$ {{ acomodacao.preco }}</li>
                <li>{{ acomodacao.status }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestAcomodacoes',
    data() {
        return {}
    },
    computed: {
        acomodacoes() {
            return this.$store.state.acomodacoes
        },
    },
    created() {
        this.$store.dispatch('loadRooms')
    },
}
</script>

<style lang="scss">
h1 {
    padding: 30px 0;
}

.conteudo {
    padding: 50px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
}

.acomodacoes {
    display: flex;
    width: 100%;
    gap: 24px;
    flex-wrap: wrap;
}

.lista {
    padding: 30px;
    width: 200px;
    background-color: red;
}

.lista li {
    padding: 5px 0;
}
</style>
