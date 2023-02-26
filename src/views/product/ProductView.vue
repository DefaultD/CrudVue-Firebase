<template>
    <div class="row justify-content-between W-100">
        <div class="col">
            <h3>Produtos</h3>
        </div>
        <button type="button" @click="openModalCliente = !openModalCliente" class="btn btn-outline-primary col-md-2 me-sm-3">
            Novo Produto
        </button>
    </div>
    <hr />
    <div class="row justify-content-end">
        <div class="col-md-3">
            <div class="input-group  flex-nowrap">
                <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="search" class="form-control" placeholder="Pesquisar" aria-label="Username"
                    aria-describedby="addon-wrapping">
            </div>
        </div>
    </div>
    <div class="mt-2 row">
        <div :key="product" v-for="product of productsData" class="my-3 col-lg-4 rounded">
            <infoCardProducts :data="product"  />
        </div>
    </div>

    <layoutCreateNewProduct :showModal="openModalCliente" @reload="load()" />
</template>

<script>
import { collection, query, getDocs } from "firebase/firestore";
import layoutCreateNewProduct from '@/components/layout/layoutProduct.vue'
import infoCardProducts from '@/components/global/infoCardProducts.vue'

export default {
    name: "viewProducts",

    mounted() {
        this.load()
    },
    data() {
        return {
            openModal: false,
            openModalCliente: false,
            productsData: []
        }
    },

    methods: {
        async load() {
            this.productsData = []
            await this.getProducts()
        },
        async getProducts() {
            let q = await query(collection(this.$firebase, 'Produtos'))
            let querySnapshot = await getDocs(q)
            this.productsData = []
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                this.productsData.push(data)
            });
        },
    },

    components: {
        layoutCreateNewProduct,
        infoCardProducts
    },

}

</script>