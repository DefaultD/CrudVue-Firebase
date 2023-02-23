<template>
    <div class="card h-100 border-0 w-100" style="width: 18rem; color: var(--darker);">
        <div class="card-header">
            <h5 class="card-title">{{ `${data.service}` }}</h5>
        </div>
        <div class="card-body w-100" style=" max-height: 230px; overflow: hidden;">
            <div class="row">
                <div class="col-6 d-flex">
                    <h6 class="card-subtitle text-muted">Preço - {{ data.price }}R$</h6>

                </div>
                <div class="col text-end">
                    <h6 class="card-subtitle  text-muted">Custo - {{ data.cost }}R$</h6>
                </div>
            </div>
            <hr />
            <div class="col">
                <h6 class="card-subtitle text-muted mb-2">Tipo - {{ data.type }}</h6>
                <h6 class="card-subtitle mb-2 text-muted">{{ `Descrição - ${data.description}` }}</h6>
            </div>

        </div>
        <div class="card-footer d-flex justify-content-end">
            <button class="btn pe-0" @click="openModalCliente = !openModalCliente"><i class="fa-regular fa-sun"></i>
            </button>
        </div>
        <layoutCreateNewProduct :showModal="openModalCliente" @reload="recarregar()" :editProduct="data" />
    </div>
</template>
<script>
import layoutCreateNewProduct from '@/components/layout/layoutProduct.vue'
export default {
    name: "infoCardProducts",
    data() {
        return {
            openModalCliente: false,
            modal: false,
        }
    },
    methods: {
        recarregar() {
            this.$emit('reload')
        },
        formatDate(time) {
            // let date = new Date(time)
            console.log(time)
            // let d = date.getDay()
            // let m = date.getMonth()
            // let y = date.getFullYear()

            // return `${d}/${m}/${y}`
        }
    },
    components: {
        layoutCreateNewProduct
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