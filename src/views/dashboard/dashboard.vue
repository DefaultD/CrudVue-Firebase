<template>
    <div class="row justify-content-between">
        <div class="col">
            <h3 style="color: black;"><b>Dashboard</b></h3>
        </div>
    </div>
    <hr class="m-0" />
    <div class="mt-2 row">
        <div :key="data" v-for="data of cardData" class="my-3 col-lg-4 rounded">
            <infoCardTask :data="data" />
        </div>
    </div>
    <div style="background-color: var(--light-medium);" class="rounded">
        <div class="d-flex justify-content-between p-2">
            <div><h2 style="color: var(--dark-low);" class=""><b>Tarefas</b></h2></div>
            <div><input class="rounded m-2" placeholder="Pesquise aqui" type="search"></div>    
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th :key="col" v-for="col of columns" class="text-center" scope="col">{{ col.name }}</th>
                </tr>
            </thead>
            <tbody>
                <!-- for localizando o field da coluna = data do db   -->
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// import { collection, query, getDocs } from "firebase/firestore";
import infoCardTask from '@/components/global/infoCardTask.vue'

export default {
    name: "viewCustomer",

    mounted() {
        this.load()
    },
    data() {
        return {
            openModal: false,
            openModalCliente: false,
            cardData: [],
            search: "",
            columns: [
                {
                    id: 1,
                    name: 'Nome',
                    field: 'name'
                },
                {
                    id: 2,
                    name: 'Descrição',
                    field: 'description'
                },
                {
                    id: 3,
                    name: 'Status',
                    field: 'status',
                },
                {
                    id: 4,
                    name: 'Criado dia',
                    field: 'created_at'
                }
            ]
        }
    },

    methods: {
        async load() {
            await this.getFlashCards()
        },
        async getFlashCards() {
            let amountTasks = 255
            let completedTasks = 55
            let unresolvedTasks = 200
            this.cardData = [{
                title: 'Tasks',
                label: 'Quantidade de tarefas cadastradas:',
                data: amountTasks
            },
            {
                title: 'Tasks',
                label: 'Quantidade de tarefas resolvidas:',
                data: completedTasks
            },
            {
                title: 'Tasks',
                label: 'Quantidade de tarefas não resolvidas',
                data: unresolvedTasks
            }]
        }
        // searchCustomer() {
        // if (this.search)
        // this.customersData = this.customersData.filter(obj => obj.address.toLowerCase().includes(this.search.toLowerCase()) || obj.name.toLowerCase().includes(this.search.toLowerCase()) || obj.email.toLowerCase().includes(this.search.toLowerCase()));
        // else
        //     this.getCustomers()
        // },
        // async getCustomers() {
        //     let q = await query(collection(this.$firebase, 'Clientes'))
        //     let querySnapshot = await getDocs(q)
        //     querySnapshot.forEach((doc) => {
        //         let data = doc.data()
        //         data.id = doc.id
        //         this.customersData.push(data)
        //     });
        // }
    },

    components: {
        infoCardTask
    },

}

</script>