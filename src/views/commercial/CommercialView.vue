<template>
    <div class="justify-content-between d-flex" style="height: 30px">
        <div>
            <h3>Comercial</h3>
        </div>
        <div class="row mx-1 h-100">
            <button @click="goToLayoutOrder()" class="btn-order"> Novo pedido
            </button>
        </div>
    </div>
    <hr />
    <div class="col input-group ">
        <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
        <input type="search" class="form-control" placeholder="Pesquisar" aria-label="Username"
            aria-describedby="addon-wrapping">
    </div>
    <div class="mt-2 row">
        <EasyDataTable :headers="columns" :items="rows">
            <template #item-operation="item">
                <div class="operation-wrapper">
                    <button class="btn" @click="goToLayoutOrder(item.id)"><i
                            class="fa-regular fa-pen-to-square"></i></button>
                </div>
            </template>
            <template #item-lastUpdate="item">
                <div class="operation-wrapper">
                    {{ formatDate(item.lastUpdate?.seconds) }}
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
                { text: "Ultima atualizacao", value: "lastUpdate", width: 200 },
                { text: "Total", value: "total" },
                { text: "", value: "operation" },
            ],
            rows: []
        }
    },
    mounted() {
        this.getOrder()
    },
    methods: {
        formatDate(timeStamp) {
            const time = timeStamp * 1000
            const date = new Date(time); // Crie um objeto de data com o timestamp

            // Formate a data de acordo com suas necessidades
            const dia = date.getDate().toString().padStart(2, '0'); // Obtém o dia e adiciona um zero à esquerda se necessário
            const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // Obtém o mês (lembre-se de que o mês começa em 0) e adiciona um zero à esquerda se necessário
            const ano = date.getFullYear();
            const horas = date.getHours().toString().padStart(2, '0'); // Obtém as horas e adiciona um zero à esquerda se necessário
            const minutos = date.getMinutes().toString().padStart(2, '0'); // Obtém os minutos e adiciona um zero à esquerda se necessário
            const segundos = date.getSeconds().toString().padStart(2, '0'); // Obtém os segundos e adiciona um zero à esquerda se necessário

            const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`; // Cria a string formatada
            if(timeStamp){
                return dataFormatada
            }else {
                return
            }
        },
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
<style scoped>
.btn-order {
    --color: #00A97F;
    --color2: rgb(10, 25, 30);
    background-color: transparent;
    border-radius: 6px;
    border: .3px solid var(--featured);
    transition: .5s;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    z-index: 1;
    font-weight: 300;
    font-size: 17px;
    font-family: 'Roboto', 'Segoe UI', sans-serif;
    text-transform: uppercase;
    color: var(--featured);
}

.btn-order::after,
.btn-order::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    transform: skew(90deg) translate(-50%, -50%);
    position: absolute;
    inset: 50%;
    left: 25%;
    z-index: -1;
    transition: .5s ease-out;
    background-color: var(--featured);
}

.btn-order::before {
    top: -50%;
    left: -25%;
    transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

.btn-order:hover::before {

    transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

.btn-order:hover::after {
    transform: skew(45deg) translate(-50%, -50%);
}

.btn-order:hover {
    color: var(--light);
}

.btn-order:active {
    filter: brightness(.7);
    transform: scale(.98);
}
</style>