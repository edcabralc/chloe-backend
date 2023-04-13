<template>
    <div class="acomodacoes">
        <table class="table table-hover overflow-hidden">
            <thead class="table-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col" colspan="2">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios.list" :key="usuario.id">
                    <th>{{ usuario.id }}</th>
                    <td>{{ usuario.nome_usuario }}</td>
                    <td>{{ usuario.email_usuario }}</td>
                    <td>
                        <span class="badge rounded-pill text-bg-primary p-2">{{ usuario.status }} </span>
                    </td>
                    <td>
                        <button type="button" class="btn btn-outline-success btn-sm">Editar</button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-outline-danger btn-sm">Remover</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'UsuariosContent',
    props: ['usuarios'],
    data() {
        return {}
    },
    computed: {
        usuarios() {
            console.log(this.$store.state.user)
            return this.$store.state.user
        },
    },
    created() {
        this.$store.dispatch('loadUser')
    },
}
</script>

<style lang="scss">
h1 {
    padding: 30px 0;
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
