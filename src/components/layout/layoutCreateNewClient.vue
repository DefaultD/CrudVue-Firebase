<template>
    <form @submit.prevent="submit()">
        <div class="modal fade" :class="{ show: modal }" :style="{ display: modal ? 'block' : 'none' }"
            style="color: var(--darker);">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLiveLabel">Adicionar cliente</h5>
                        <button type="button" @click="closeModal()" class="btn"><i @click="closeModal()"
                                class="fa-regular fa-circle-xmark"></i></button>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="form-group col-6">
                                <div>
                                    <label for="">Nome:</label>
                                    <input required v-model="formCustomer.name" type="text" class="form-control">
                                </div>
                                <div>
                                    <label for="">Email:</label>
                                    <input required v-model="formCustomer.email" type="email" class="form-control">
                                </div>
                                <div>
                                    <label for="">Telefone:</label>
                                    <input @input="handlePhone" required v-model="formCustomer.phone" type="text"
                                        class="form-control">
                                </div>
                                <div>
                                    <label for="">Endereço:</label>
                                    <input required v-model="formCustomer.address" type="text" class="form-control">
                                </div>
                                <div>
                                    <label for="">Complemento:</label>
                                    <input v-model="formCustomer.complement" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group col-6">
                                <div>
                                    <label for="">Tipo:</label>
                                    <select class="form-select" v-model="formCustomer.type"
                                        aria-label="Default select example">
                                        <option value="Pessoa fisica">Pessoa fisica</option>
                                        <option value="Pessoa juridica">Pessoa juridica</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="">Lead:</label>
                                    <select class="form-select" v-model="formCustomer.lead"
                                        aria-label="Default select example">
                                        <option value="Cliente antigo">Cliente antigo</option>
                                        <option value="Campanhas">Campanhas</option>
                                        <option value="Indicação">Indicação</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="">Descrição:</label>
                                    <textarea v-model="formCustomer.description" type="text" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" @click="closeModal()" class="btn btn-secondary">Fechar</button>
                        <button class="btn btn-primary">Incluir novo cliente</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade" :class="{ show: modal }" :style="{ display: modal ? 'block' : 'none' }">
        </div>
    </form>
</template>

<script>
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
export default {
    data() {
        return {
            modal: false,
            formCustomer: {
                name: '',
                type: '',
                id: '',
                createdAt: '',
                email: '',
                lead: '',
                phone: '',
                address: '',
                complement: '',
                description: ''
            }
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        closeModal() {
            this.modal = false
            this.formCustomer = {
                name: '',
                type: '',
                id: '',
                createdAt: '',
                email: '',
                lead: '',
                phone: '',
                address: '',
                complement: '',
                description: ''
            }
        },

        load() {
            console.log(this.editCustomer)
            if (this.editCustomer) {
                this.formCustomer = this.editCustomer
            }
        },
        async submit() {
            try {
                const docRef = await addDoc(collection(this.$firebase, 'Clientes'), {
                    name: this.formCustomer.name,
                    type: this.formCustomer.type,
                    email: this.formCustomer.email,
                    lead: this.formCustomer.lead,
                    phone: this.formCustomer.phone,
                    address: this.formCustomer.address,
                    complement: this.formCustomer.complement || '',
                    description: this.formCustomer.description || '',
                    createdAt: serverTimestamp()
                })
                console.log('Document written with ID: ', docRef.id)
            } catch (e) {
                console.error('Error adding document: ', e)
            }
            console.log(this.formCustomer)
        },
        handlePhone(event) {
            let input = event.target
            input.value = this.phoneMask(input.value)
        },

        phoneMask(value) {
            if (!value) return ""
            value = value.replace(/\D/g, '')
            value = value.replace(/(\d{2})(\d)/, "($1) $2")
            value = value.replace(/(\d)(\d{4})$/, "$1-$2")
            return value
        }
    },

    watch: {
        showModal() {
            this.modal = true
        }
    },

    props: {
        showModal: Boolean,
        editCustomer: Object
    }

}
</script>

