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
    <div style="background-color: var(--light-medium); min-height: 699px;" class="rounded">
        <div class="d-flex justify-content-between p-2">
            <div>
                <h2 style="color: var(--dark-low);" class=""><b>Tarefas</b></h2>
            </div>
            <div class="group">
                <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
                    <g>
                        <path
                            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                        </path>
                    </g>
                </svg>
                <input placeholder="Search" type="search" class="input">
            </div>
        </div>
        <table class="table" v-if="data.length > 0">
            <thead>
                <tr>
                    <th v-for="col in columns" :key="col.id" class="text-center" scope="col">
                        {{ col.name }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <div>
                    <tr v-for="item in data" :key="item.id">
                        <td v-for="col in columns" :key="col.id">{{ item[col.field] }}</td>
                    </tr>
                </div>
            </tbody>
        </table>
        <div v-else style="text-align: center;" class="w-100 justify-content-center">
            <img style="width: 600px; height: 600px;" src="../../assets/scss/avocado-tree-rafiki.png" />
            <div class="row">
                <b>
                    Nenhuma task encontrada
                </b>
            </div>
        </div>
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
            ],
            data: [{
                id: 0,
                name: 'Nome',
            }]
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
<style>
.group {
 display: flex;
 line-height: 28px;
 align-items: center;
 position: relative;
 max-width: 190px;
}

.input {
 width: 100%;
 height: 40px;
 line-height: 28px;
 padding: 0 1rem;
 padding-left: 2.5rem;
 border: 2px solid transparent;
 border-radius: 8px;
 outline: none;
 background-color: #f3f3f4;
 color: #0d0c22;
 transition: .3s ease;
}

.input::placeholder {
 color: #9e9ea7;
}

.input:focus, input:hover {
 outline: none;
 border-color: rgba(64,123,255,0.4);
 background-color: #fff;
 box-shadow: 0 0 0 4px rgba(76, 100, 234, 0.1);
}

.icon {
 position: absolute;
 left: 1rem;
 fill: #9e9ea7;
 width: 1rem;
 height: 1rem;
}
</style>