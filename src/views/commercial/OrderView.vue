<template>
    <div class="container-fluid p-0 h-100 d-flex flex-column">
        <div class="row pb-sm-2">
            <div class="fs-3">Pedidos</div>
        </div>
        <hr class="m-0 p-0" />
        <div class="row flex-grow-1 my-md-2">
            <div class="col-12 col-sm-6">
                <div class="form-group">
                    <div>
                        <label for="">Nome do cliente:</label>
                        <input disabled required v-model="formOrder.name" type="text" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-12">
                            <label for="">Endereço:</label>
                            <input required v-model="formOrder.address" type="text" class="form-control">
                        </div>
                        <div class="col-sm-6 col-12">
                            <label for="">Complemento:</label>
                            <input required v-model="formOrder.complement" type="text" class="form-control">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6 col-12">
                            <label for="">Frete</label>
                            <input required v-model="formOrder.freight" type="email" class="form-control">
                        </div>
                        <div class="col-sm-6 col-12">
                            <label for="">Desconto</label>
                            <input required v-model="formOrder.discount" type="email" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">Pagamento</label>
                            <select v-model="formOrder.payment" class="form-select form-select-lg mb-3"
                                aria-label=".form-select-lg example">
                                <option value="A vista">A vista</option>
                                <option value="Parcelado">Parcelado</option>
                                <option value="Antecipado">Antecipado</option>
                            </select>
                        </div>
                        <div class="col">
                            <label for="">Status</label>
                            <select v-model="formOrder.state" class="form-select form-select-lg mb-3"
                                aria-label=".form-select-lg example">
                                <option value="Novo lead">Novo lead</option>
                                <option value="Em contato">Em contato</option>
                                <option value="Orçamento enviado">Orçamento enviado</option>
                                <option value="Aguardando retorno">Aguardando retorno</option>
                                <option value="Perdido">Perdido</option>
                                <option value="Fechado">Fechado</option>
                                <option value="Pendente">Pendente</option>
                                <option value="Em produção">Em produção</option>
                                <option value="Entrega finalizada">Entrega finalizada</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="">Tipo</label>
                        <select v-model="formOrder.type" class="form-select form-select-lg mb-3"
                            aria-label=".form-select-lg example">
                            <option value="Orçamento">Orçamento</option>
                            <option value="Ordem de serviço">Ordem de serviço</option>
                            <option value="Venda">Venda</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Anotações</label>
                        <textarea required v-model="formOrder.notes" type="email" class="form-control"></textarea>
                    </div>
                    <div class="my-2">
                        <button class="btn btn-outline-primary w-100" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Produtos selecionados
                        </button>
                    </div>
                    <div class="collapse" id="collapseExample">
                        <div class="card card-body" style="max-height: 200px;">
                            <div v-if="formOrder.products.length > 0" class="overflow-auto" style="height: 100%;">
                                <div :key="item" v-for="item of formOrder.products">
                                    <div class="d-flex justify-content-between">
                                        <div class="pt-2">
                                            {{ item.service }}
                                        </div>
                                        <button type="button" class="btn justify-content-end" data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop" @click="editProduct(item)">
                                            <i class="fa-regular fa-pen-to-square mx-2"></i>
                                        </button>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                            <div v-else>
                                Nenhum produto selecionado
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6" style=" border-left: 1px solid; ">
                <div class="row">
                    <div class="col-6 my-sm-2"
                        :class="!viewCustommer ? 'border border-bottom-0 rounded-top color border-primary' : 'border-bottom'">
                        <button class="btn bg-transparent btn-light w-100" :class="!viewCustommer ? 'text-primary' : ''"
                            @click="viewCustommer = false">Produtos</button>
                    </div>
                    <div class="col-6 border-bottom my-sm-2"
                        :class="viewCustommer ? 'border border-bottom-0 rounded-top color border-primary' : 'border-bottom'">
                        <button class="btn bg-transparent btn-light w-100" :class="viewCustommer ? 'text-primary' : ''"
                            @click="viewCustommer = true">Clientes</button>
                    </div>
                </div>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="product-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                        tabindex="0">
                        <div v-if="!viewCustommer">
                            <div class="row">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i
                                            class="fa-solid fa-magnifying-glass"></i></span>
                                    <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username"
                                        aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div>
                                <div v-for="item in products" :key="item">
                                    <div class="my-2 h-100" style="cursor: pointer;" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop" @click="configProduct(item)">
                                        <div class="row">
                                            <div class="col" :title="item.service"
                                                style=" white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                                {{ item.service }}
                                            </div>
                                            <div>
                                                {{ `preço ${item.type} ${item.price}R$ ` }}
                                            </div>
                                        </div>
                                        <hr class="p-0 m-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="row">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i
                                            class="fa-solid fa-magnifying-glass"></i></span>
                                    <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username"
                                        aria-describedby="basic-addon1">
                                </div>
                            </div>
                            <div v-for="custommer in custommers" :key="custommer">
                                <div class="my-md-2" style="cursor: pointer;" @click="addCustommer(custommer)">
                                    <div class="row">
                                        <div class="col-sm-12" :title="custommer.name"
                                            style=" white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                            {{ custommer.name }}
                                        </div>
                                        <div class="col-sm-12" :title="custommer.email"
                                            style=" white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                            {{ custommer.email }}
                                        </div>
                                    </div>
                                    <div class="row d-none d-sm-block">
                                        <div :title="custommer.address" class="col"
                                            style=" white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                            Endereço: {{ custommer.address }}
                                        </div>
                                        <div class="col">
                                            Telefone: {{ custommer.phone }}
                                        </div>
                                    </div>
                                </div>
                                <hr class="p-0 m-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="p-0 m-0" />
        <div class="row" style="border-left: 1px solid">
            <div class="d-flex justify-content-end my-sm-2">
                <div class="mt-auto p-2 d-flex">
                    <!-- <label class="px-3 d-none d-sm-block">Lucro liquido {{ formOrder.profit }} R$</label> -->
                    <label for="">Total {{ formOrder.total }} R$</label>
                </div>
                <router-link :to="{ name: 'commercial' }">
                    <button class="btn btn-outline-primary h-100">Voltar</button>
                </router-link>
                <button class="btn btn-primary mx-2 h-100" @click="submit">Salvar</button>
            </div>
        </div>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel"> {{ productModal.service }}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div v-if="this.productModal.type == 'Kg'">
                            <div class="row">
                                <div class="col">
                                    <label for="Altura">Altura</label>
                                    <input @input="calcKg()" required v-model="productModal.height" type="text"
                                        class="form-control">
                                </div>
                                <div class="col">
                                    <label for="Largura">Largura</label>
                                    <input @input="calcKg()" required v-model="productModal.width" type="text"
                                        class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <label for="Quantidade">Quantidade</label>
                                    <input @input="calcKg()" required v-model="productModal.quantity" type="email"
                                        class="form-control">
                                </div>
                                <div class="col">
                                    <label for="Total">Total:</label>
                                    <input v-model="productModal.total" disabled type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div>
                                <label for="Total">{{ productModal.type }}</label>
                                <input @input="calcValue()" v-model="productModal.value" type="number" class="form-control">
                            </div>
                            <div class="col">
                                <label for="Total">Total:</label>
                                <input v-model="productModal.total" disabled type="text" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" :class="{ 'justify-content-between': productModal.delete }">
                        <button type="button" v-if="productModal.delete" class="btn btn-outline-secondary"
                            @click="deleteProduct()" data-bs-dismiss="modal"><i class="fa-solid fa-trash"></i></button>
                        <div>
                            <button type="button" class="btn btn-outline-secondary" @click="productModal = {}"
                                data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class=" ms-2 btn btn-outline-primary" data-bs-dismiss="modal"
                                @click="saveProduct()">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { collection, query, getDocs, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
export default {
    name: "layoutOrder",

    components: {
    },
    data() {
        return {
            modalEditProduct: {
                productId: null,
                name: '',
                kg: 0,
                m2: 0,
                m: 0,
                unit: 0,
            },
            custommers: [],
            productModal: {
                name: '',
                type: '',
                quantity: 0,
                value: 0,
                width: 0,
                height: 0,
                total: 0,
            },
            originalProductModal: {
                name: '',
                type: '',
                quantity: 0,
                value: 0,
                width: 0,
                height: 0,
                total: 0,
            },
            products: [],
            viewCustommer: false,
            modal: false,
            editOrder: false,
            formOrder: {
                name: "",
                custommerId: "",
                products: [],
                type: 'Orçamento',
                total: 0,
                freight: 0,
                state: '',
                payment: '',
                address: '',
                complement: '',
                discount: 0,
                // profit: 0,
                notes: ''
            }
        }
    },
    mounted() {
        this.load()
    },
    watch: {
        "formOrder.freight"() {
            this.getTotal()
        },
        "formOrder.discount"() {
            this.getTotal()
        },
        "formOrder.products": {
            handler() {
                this.getTotal()
            },
            deep: true,
        },
    },
    methods: {
        getTotal() {
            let total = 0
            let array = this.formOrder.products.map((p) => p.total)
            for (let item of array) {
                total += item
            }
            total = Number(total) + Number(this.formOrder.freight)
            if (this.formOrder.products.length > 0 && this.formOrder.discount) {
                let discount = (total * this.formOrder.discount) / 100
                this.formOrder.total = total - discount
            } else {
                this.formOrder.total = total
            }
        },
        async load() {
            this.getCustomers()
            this.getProducts()
            if (this.$route.params.id) {
                this.getOrderById(this.$route.params)
            }
        },
        async getOrderById() {
            const docRef = doc(this.$firebase, "Pedidos", this.$route.params.id)
            try {
                const docSnap = await getDoc(docRef)
                this.formOrder = docSnap.data()
            } catch (error) {
                console.log(error)
            }
        },
        calcKg() {
            this.productModal.total = ((this.productModal.width * this.productModal.height) * this.productModal.quantity) * this.productModal.price
        },
        calcValue() {
            this.productModal.total = this.productModal.value * this.productModal.price
        },
        deleteProduct() {
            let index = this.formOrder.products.findIndex((_) => JSON.stringify(_) == JSON.stringify(this.originalProductModal))
            this.formOrder.products.splice(index, 1)
        },
        validate() {
            if (!this.formOrder.custommerId) {
                this.$notify({ text: "Por favor adicione um cliente!", type: 'error' });
                throw Error('Por favor adicione um cliente!')
            }
            if (!this.formOrder.address) {
                this.$notify({ text: "Por favor adicione um endereço!", type: 'error' });
                throw Error('Por favor adicione um endereço!')
            }
            if (!this.formOrder.state) {
                this.$notify({ text: "Por favor adicione um status!", type: 'error' });
                throw Error('Por favor adicione um status!')
            }
            if (!this.formOrder.type) {
                this.$notify({ text: "Por favor adicione um tipo!", type: 'error' });
                throw Error('Por favor adicione um tipo!')
            }
        },
        async submit() {
            try {
                this.validate()
                if (this.$route.params.id) {
                    const docRef = doc(this.$firebase, "Pedidos", this.$route.params.id)
                    const payload = {
                        lastUpdate: new Date(),
                        ...this.formOrder
                    }
                    await setDoc(docRef, payload)
                } else {
                    const payload = {
                        createdAt: new Date(),
                        lastUpdate: new Date(),
                        ...this.formOrder
                    }
                    const docRef = await addDoc(collection(this.$firebase, 'Pedidos'), payload);
                    this.$router.push(`/OrderView/${docRef.id}`)
                }
                this.$notify({ text: "Pedido salvo com sucesso", type: 'success' });
                this.load()
            } catch (e) {
                this.$notify({ text: e, type: 'error' });
                console.error('Error adding document: ', e)
            }
        },
        async getProducts() {
            let q = await query(collection(this.$firebase, 'Produtos'))
            let querySnapshot = await getDocs(q)
            this.products = []
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                this.products.push(data)
            });
        },
        addCustommer(custommer) {
            this.formOrder.name = custommer.name
            this.formOrder.custommerId = custommer.id
        },
        editProduct(item) {
            this.originalProductModal = JSON.parse(JSON.stringify(item))
            this.productModal = JSON.parse(JSON.stringify(item))
            this.productModal.delete = true
            if (this.productModal.type == 'Kg') this.calcKg()
            else this.calcValue()
        },
        configProduct(item) {
            if (item.editProduct) {
                item.editProduct = false
            }
            this.productModal = JSON.parse(JSON.stringify(item))
            if (this.productModal.type == 'Kg') this.calcKg()
            else this.calcValue()
        },
        saveProduct() {
            if (!this.productModal.editProduct) {
                this.productModal.editProduct = true
                this.formOrder.products.push(JSON.parse(JSON.stringify(this.productModal)))
            } else {
                let index = this.formOrder.products.findIndex((_) => JSON.stringify(_) == JSON.stringify(this.originalProductModal))
                this.formOrder.products[index] = this.productModal
            }
        },
        async getCustomers() {
            let q = await query(collection(this.$firebase, 'Clientes'))
            let querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                this.custommers.push(data)
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.nav-link {
    border: none;

    &:hover {
        color: var(--featured);
    }
}

.active {
    color: var(--featured);
}

.btn-light {
    background-color: transparent;
    border: none;
    border-radius: 0px !important;

    &:hover {
        color: var(--featured);
        // border: 1px solid ;
    }

    &:active {
        color: var(--featured);
    }
}

* {
    color: var(--dark)
}
</style>