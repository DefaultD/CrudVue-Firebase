<template>
    <div class="row justify-content-between">
        <div class="col">
            <h3>Clientes</h3>
        </div>
        <button type="button" @click="openModal = !openModal" class="btn btn-outline-primary col-2 me-3">
            Novo cliente
        </button>
    </div>
    <hr />
    <div class="mt-2 row">
        <div :key="customer" v-for="customer of customersData" class="my-3 col-lg-4 rounded">
            <infoCard :data="customer" />
        </div>
    </div>
    <layoutCreateNewClient :showModal="openModal" />
</template>

<script>
import layoutCreateNewClient from '@/components/layout/layoutCreateNewClient.vue'
import infoCard from '@/components/global/infoCardCustomer.vue'

export default {
    name: "viewCustomer",

    data() {
        return {
            openModal: false,
            customersData: [
                {
                    name: 'Kaue Depresbiteris',
                    type: 'Pf',
                    id: '9384',
                    createdAt: '29/01/2023',
                    email: 'Kaue.sobral19@gmail.com',
                    lead: 'Google',
                    phone: '(11) 95486-6282',
                    Address: 'Rua solidonio leite 2718',
                    complement: '',
                    description: ''
                },
                {
                    name: 'Kaue Depresbiteris',
                    type: 'Pf',
                    id: '9384',
                    createdAt: '29/01/2023',
                    email: 'Kaue.sobral19@gmail.com',
                    lead: 'Google',
                    phone: '(11) 95486-6282',
                    Address: 'Rua solidonio leite 2718',
                    complement: 'Bloco 3 ap 151',
                    description: ''
                },
                {
                    name: 'Kaue Depresbiteris',
                    type: 'Pf',
                    id: '9384',
                    createdAt: '29/01/2023',
                    email: 'Kaue.sobral19@gmail.com',
                    lead: 'Google',
                    phone: '(11) 95486-6282',
                    Address: 'Rua solidonio leite 2718',
                    complement: 'Bloco 3 ap 151',
                    description: ''
                },
                {
                    name: 'Kaue Depresbiteris',
                    type: 'Pf',
                    id: '9384',
                    createdAt: '29/01/2023',
                    email: 'Kaue.sobral19@gmail.com',
                    lead: 'Google',
                    phone: '(11) 95486-6282',
                    Address: 'Rua solidonio leite 2718',
                    complement: 'Bloco 3 ap 151',
                    description: ''
                }
            ]
        }
    },

    components: {
        layoutCreateNewClient,
        infoCard
    },

}

</script>