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
                            <div class="col-12">
                                <label class="my-2"><b>Produto</b></label><br>
                                <div>
                                    <label for="">Serviço:</label>
                                    <input required v-model="formProduct.service" type="text" class="form-control">
                                </div>
                                <div class="my-3">
                                    <label for="">Material:</label>
                                    <input required v-model="formProduct.material" type="" class="form-control">
                                </div>
                                <div class="my-3 row">
                                    <div class="col-8 d-flex">
                                        <label for="">R$ Preço</label>
                                        <input required type="" class="form-control">
                                    </div>
                                    <div class="col">
                                        <select  class="form-select form-select-lg mb-3"
                                        aria-label=".form-select-lg example">
                                        <option value="A vista">Qtd</option>
                                        <option value="Parcelado">Kg</option>
                                        <option value="Parcelado">ML(Metro linear)</option>
                                        <option value="Parcelado">M²</option>
                                        <!-- <option value="Antecipado">Antecipado</option> -->
                                    </select>
                                </div>
                                <div class=" d-flex">
                                    <label for="">R$ Custo</label>
                                    <input required type="" class="form-control">
                                </div>
                            </div>
                                <div class="my-3">
                                    <label for="">Descrição:</label>
                                    <textarea type="text" class="form-control" />
                                </div>
                                <!-- <div class="my-3">
                                    <label for="">M²</label>
                                    <input required v-model="formProduct.priceQtd" type="" class="form-control">
                                </div>
                                <div class="my-3">
                                    <label for="">ML(Metro linear)</label>
                                    <input required v-model="formProduct.priceQtd" type="" class="form-control">
                                </div> -->

                            </div>
                            <!-- <div class="col-6">
                                <label class="my-2"><b>Precificação</b></label><br>
                                <div>
                                    <label for="">R$(KG)</label>
                                    <input required v-model="formProduct.priceKg" type="" class="form-control">
                                </div> -->
                        
                                <!-- <div class="my-3">
                                    <label for="">Preço: R$</label>
                                    <input required v-model="formProduct.cost" type="" class="form-control">
                                </div> -->
                       
                            <!-- </div> -->
                        </div>
                    </div>
                    <div class="modal-footer justify-content-end">
                        <div>
                            <button type="button" class="btn btn-secondary mx-2">Fechar</button>
                            <button class="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade" :class="{ show: modal }" :style="{ display: modal ? 'block' : 'none' }">
        </div>
    </form>
</template>
<script>
import { collection, addDoc, setDoc, doc, deleteDoc } from "firebase/firestore";
export default {
    data() {
        return {
            modal: false,
            formProduct: {
                service: '',
                material: '',
                priceKg: '',
                priceQtd: '',
                cost: '',
                description: ''
            }
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        validate() {
            if (!this.formProduct.service) {
                throw Error('Por favor preencha o tipo de serviço')
            }
            if (!this.formProduct.material) {
                throw Error('Por favor preencha o tipo do material')
            }
            if (!this.formProduct.priceQtd) {
                throw Error('Por favor preencha o campo "preço"')
            }

            if (!this.formProduct.priceKg) {
                throw Error('Por favor preencha o campo "preço"')
            }
            if (!this.formProduct.cost) {
                throw Error('Por favor preencha o campo "custo"')
            }


        },
        closeModal() {
            this.modal = false
            this.formProduct = {
                service: '',
                material: '',
                priceKg: '',
                priceQtd: '',
                cost: '',
                description: ''
            }
        },

        load() {
            if (this.editCustomer) {
                this.formCustomer = this.editCustomer
            }
        },
        async deleteCustomer() {
            try {
                await deleteDoc(doc(this.$firebase, "Clientes", this.editCustomer.id))
            } catch (error) {
                console.log(error)
            }
            this.$emit('reload')
            this.modal = false
        },
        async submit() {
            if (this.editCustomer) {
                const docRef = doc(this.$firebase, "Clientes", this.editCustomer.id)
                console.log(`iuiui`)
                try {
                    this.validate()
                    await setDoc(docRef, this.editCustomer)
                } catch (e) {
                    console.error('Error adding document: ', e)
                }
            } else {
                try {
                    console.log(`iuiui`)
                    this.validate()
                    await addDoc(collection(this.$firebase, 'Clientes'), this.formCustomer)
                } catch (e) {
                    console.error('Error adding document: ', e)
                }
            }
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
            this.$emit('reload')
            this.modal = false
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
            this.load()
            this.modal = true
        }
    },

    props: {
        showModal: Boolean,
        editCustomer: Object
    }

}
</script>

