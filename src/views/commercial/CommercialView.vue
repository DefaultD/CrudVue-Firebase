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

export default {
    name: "viewCustomer",

    components: {
        EasyDataTable
    },
    data() {
        return {
            columns: [
                { text: "Id", value: "id" },
                { text: "Cliente", value: "Cliente" },
                { text: "Status", value: "Status" },
                { text: "Pagamento", value: "Pagamento" },
                { text: "Parcelas", value: "Parcelas" },
                { text: "Desconto", value: "Desconto", sortable: true },
                { text: "Data", value: "Data", width: 200 },
                { text: "Total", value: "Total" },
            ],
            rows: [
            ]
        }
    },
    methods: {
        goToLayoutOrder() {
            this.$router.push('/OrderView')
        },
    }
}
</script>