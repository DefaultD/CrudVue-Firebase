<template>
    <div class="row justify-content-between">
        <div class="col">
            <h3>Produtos</h3>
        </div>
        <button type="button" @click="openModalCliente = !openModalCliente" class="btn btn-outline-primary col-2 me-3">
            Novo Produto
        </button>
    </div>
    <hr />
    <div class="row justify-content-end">
        <div class="col-3">
            <div class="input-group  flex-nowrap">
                <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username"
                    aria-describedby="addon-wrapping">
            </div>
        </div>
    </div>
    <div class="mt-2 row">
        <div :key="product" v-for="product of productsData" class="my-3 col-lg-4 rounded">
            <infoCardProducts :data="product" @reload="load()" />
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
            productsData: [
                {
                    service: 'Persiana lisa',
                    material: 'pano',
                    price: 13.99,
                    cost: 8.99,
                    type: 'Qtd',
                    description: 'Persiana do rocha'
                },
                {
                    service: 'Persiana de vidro',
                    material: 'vidro',
                    price: 11.29,
                    cost: 10,
                    type: 'Qtd',
                    description: 'Persiana do rocha'
                },
                {
                    service: 'limpesa de persiana',
                    material: 'N/T',
                    price: 45,
                    cost: 21,
                    type: 'Qtd',
                    description: 'Persiana do rocha'
                },
            ]
        }
    },

    methods: {
        async load() {
            this.ProductsData = []
            await this.getProducts()
            console.log(this.ProductsData)
        },
        async getProducts() {
            let q = await query(collection(this.$firebase, 'Produtos'))
            let querySnapshot = await getDocs(q)
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