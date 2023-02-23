<template>
    <div class="justify-content-between d-flex" style="height: 30px">
        <div>
            <h3>Comercial</h3>
        </div>
        <div class="row mx-1 h-100">
            <div class="col h-100 input-group flex-nowrap">
                <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username"
                    aria-describedby="addon-wrapping">
            </div>
            <i class="fa-regular fa-pen-to-square" @click="goToLayoutOrder()"></i>
        </div>
    </div>
    <hr />
    <div class="mt-2 row">
        <EasyDataTable :headers="columns" :items="rows">
            <template #item-operation="item">
                <div class="operation-wrapper">
                    <button class="btn" @click="goToLayoutOrder(item.id)"><i class="fa-regular fa-pen-to-square"></i></button>
                </div>
            </template>
        </EasyDataTable>
    </div>
</template>
<script>
import { EasyDataTable } from "vue3-easy-data-table";
import { collection, query, getDocs } from "firebase/firestore";

export default {
    name: "viewCustomer",

    components: {
        EasyDataTable,
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
                { text: "Desconto", value: "descount" },
                { text: "Data", value: "createdAt", width: 200 },
                { text: "Total", value: "total" },
                { text: "Total", value: "operation" },
            ],
            rows: []
        }
    },
    mounted() {
        this.getOrder()
    },
    methods: {
        goToLayoutOrder(id) {
            if (id)
                this.$router.push(`/OrderView/${id}`)
            else
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
        }
    }
}
</script>