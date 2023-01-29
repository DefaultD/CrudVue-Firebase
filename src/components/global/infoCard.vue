<template>
    <div class="card h-100 border-0 w-100" style="width: 18rem;">
        <div class="card-body w-100">
            <h5 class="card-title">{{ `#${data.id} - ${data.name} • ${data.type}` }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ data.phone }}</h6>
            <hr/>
            <p class="card-text text-muted">{{ `Email - ${data.email}` }}</p>
            <p class="card-text text-muted">{{ `Nascimento - ${data.birthDate}` }}</p>
            <p class="card-text text-muted">{{
                data.complement ? `Endereço - ${data.Address} • ${data.complement}` :
                    `Endereço - ${data.Address}`
            }}</p>
            <p class="card-text text-muted">{{ `Cadastro - ${data.createdAt}` }}</p>
            <p class="card-text text-muted">{{ `Descrição - ${data.description}` }}</p>

        </div>
        <div class="card-footer row justify-content-between">
            <div class="col-8 pt-2" style="color: var(--darker);">
                Criado • {{data.createdAt}}
            </div>
            <div class="col-2 ">
                <button class="btn"><i class="fa-regular fa-sun"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },

    props: {
        data: Object
    }
}
</script>

<style scoped lang="scss">
.card-body {
    color: var(--darker)
}
</style>