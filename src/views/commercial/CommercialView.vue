<template>
    <div class="row justify-content-between" style="height: 30px">
        <div class="col">
            <h3>Comercial</h3>
        </div>
        <div class="col-3 h-100">
            <div class="input-group  flex-nowrap h-100">
                <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username"
                    aria-describedby="addon-wrapping">
            </div>
        </div>
        <button type="button h-100" @click="goToLayoutOrder()" class="btn btn-outline-primary col-2 h-100 me-3 pb-2">
            Novo pedido
        </button>
    </div>
    <hr />
    <div class="mt-2 row">
        <EasyDataTable :headers="columns" :items="rows" />
    </div>
</template>
<script>
import { EasyDataTable } from "vue3-easy-data-table";
import { collection, query, getDocs } from "firebase/firestore";


export default {
    name: "viewCustomer",

    components: {
        EasyDataTable
    },
    data() {
        return {
            columns: [
                { text: "Id", value: "id" },
                { text: "Cliente", value: "name" },
                { text: "Status", value: "state" },
                { text: "Tipo", value: "type" },
                { text: "Endereço", value: "address" },
                { text: "Frete", value: "freight" },
                { text: "Desconto", value: "descount"},
                { text: "Data", value: "createdAt", width: 200 },
                { text: "Total", value: "total" },
            ],
            rows: []
        }
    },
    mounted() {
        this.getOrder()
    },
    methods: {
        goToLayoutOrder() {
            this.$router.push('/OrderView')
        },
        async getOrder() {
            let q = await query(collection(this.$firebase, 'Pedidos'))
            let querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                this.rows.push(data)
            });
            console.log( this.rows)
        }
    }
}
</script>