<template>
    <div class="row justify-content-between">
        <div class="col">
            <h3>Clientes</h3>
        </div>

        <button type="button" @click="openModalCliente = !openModalCliente"
            class="btn btn-outline-primary col-md-2 me-sm-3">
            Novo cliente
        </button>
    </div>
    <hr />
    <div class="row justify-content-end">
        <div class="col-md-3">
            <div class="input-group flex-nowrap">
                <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="search" @keyup.prevent.enter="searchCustomer()" v-model="search" class="form-control"
                    placeholder="Pesquisar" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
        </div>
    </div>
    <div class="mt-2 row">
        <div :key="customer" v-for="customer of customersData" class="my-3 col-lg-4 rounded">
            <infoCard :data="customer" @reload="load()" />
        </div>
    </div>

    <layoutCreateNewClient :showModal="openModalCliente" @reload="load()" />
</template>

<script>
import { collection, query, getDocs } from "firebase/firestore";
import layoutCreateNewClient from '@/components/layout/layoutCreateNewClient.vue'
import infoCard from '@/components/global/infoCardCustomer.vue'

export default {
    name: "viewCustomer",

    mounted() {
        this.load()
    },
    data() {
        return {
            openModal: false,
            openModalCliente: false,
            customersData: [],
            search: ""
        }
    },

    methods: {
        async load() {
            this.customersData = []
            await this.getCustomers()
        },
        searchCustomer() {
            if (this.search)
                this.customersData = this.customersData.filter(obj => obj.address.toLowerCase().includes(this.search.toLowerCase()) || obj.name.toLowerCase().includes(this.search.toLowerCase()) || obj.email.toLowerCase().includes(this.search.toLowerCase()));
            else
                this.getCustomers()
        },
        async getCustomers() {
            let q = await query(collection(this.$firebase, 'Clientes'))
            let querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                this.customersData.push(data)
            });
        }
    },

    components: {
        layoutCreateNewClient,
        infoCard
    },

}

</script>