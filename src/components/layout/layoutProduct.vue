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
                                <div class="my-3">
                                    <div class="row">
                                        <div class="col-10">
                                            <label class="align-self-center pe-2">Preço</label>
                                            <input type="text" v-model="formProduct.price" class="form-control">
                                        </div>
                                        <div class="col-2">
                                            <label class="align-self-center pe-2">Tipo</label>
                                            <select v-model="formProduct.type" class="form-select form-select-md"
                                                aria-label=".form-select-lg example">
                                                <option value="A vista" selected>Qtd</option>
                                                <option value="Parcelado">Kg</option>
                                                <option value="Parcelado">ML(Metro linear)</option>
                                                <option value="Parcelado">M²</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="my-3">
                                    <label class="align-self-center pe-2">Custo</label>
                                    <input required v-model="formProduct.cost" class="form-control">
                                </div>
                                <div class="my-3">
                                    <label for="">Descrição:</label>
                                    <textarea v-model="formProduct.description" type="text" class="form-control" />
                                </div>
                            </div>
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
                price: 0,
                cost: '',
                type: 'Qtd',
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
            if (!this.formProduct.priceQtd && !this.formProduct.type) {
                throw Error('Por favor preencha o campo "preço" e "tipo"')
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
                price: 0,
                cost: '',
                type: 'Qtd',
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
                await deleteDoc(doc(this.$firebase, "Produtos", this.editCustomer.id))
            } catch (error) {
                console.log(error)
            }
            this.$emit('reload')
            this.modal = false
        },
        async submit() {
            if (this.editCustomer) {
                const docRef = doc(this.$firebase, "Produtos", this.editCustomer.id)
                try {
                    this.validate()
                    await setDoc(docRef, this.editCustomer)
                } catch (e) {
                    console.error('Error adding document: ', e)
                }
            } else {
                try {
                    this.validate()
                    await addDoc(collection(this.$firebase, 'Produtos'), this.formProduct)
                } catch (e) {
                    console.error('Error adding document: ', e)
                }
            }
            this.$emit('reload')
            this.closeModal()
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

