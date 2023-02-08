<template>
    <div class="row col-12 full-height" style="height:100%">
        <div class="col-6">
            <div class="form-group">
                <div>
                    <label for="">Nome do cliente:</label>
                    <input disabled required v-model="formOrder.name" type="text" class="form-control">
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Frete</label>
                        <input required v-model="formOrder.freight" type="email" class="form-control">
                    </div>
                    <div class="col">
                        <label for="">Status</label>
                        <input required v-model="formOrder.state" type="email" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="">Pagamento</label>
                        <input required v-model="formOrder.payment" type="email" class="form-control">
                    </div>
                    <div class="col">
                        <label for="">Desconto</label>
                        <input required v-model="formOrder.descount" type="email" class="form-control">
                    </div>
                </div>
                <div>
                    <label for="">Tipo</label>
                    <input required v-model="formOrder.notes" type="email" class="form-control">
                </div>
                <div>
                    <label for="">Anotações</label>
                    <textarea required v-model="formOrder.notes" type="email" class="form-control"></textarea>
                </div>
            </div>
            <div>
                <div class="d-flex flex-row-reverse">
                    <!-- <label for="">Produto:</label> -->
                    <button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
                        aria-expanded="false" aria-controls="collapseExample">
                        Produtos selecionados
                    </button>


                </div>
                <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                        <div v-if="formOrder.products.length > 0">
                            <div :key="product" v-for="product of formOrder.products">
                                <div class="d-flex justify-content-between">
                                    <div class="pt-2">
                                        {{ product.name }}
                                    </div>
                                    <button type="button" class="btn justify-content-end" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop" @click="loadProduct(product)">
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
        <div class="col-6 h-100" style="border-left: 1px solid">
            <div class="row">
                <div class="col border-bottom">
                    <button class="btn btn-light w-100" @click="viewCustommer = false">Produtos</button>
                </div>
                <div class="col border-bottom ">
                    <button class="btn btn-light w-100" @click="viewCustommer = true">Clientes</button>
                </div>
            </div>
            <hr class="margin-0" />
            <div v-if="!viewCustommer">
                <div class="row">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i
                                class="fa-solid fa-magnifying-glass"></i></span>
                        <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username"
                            aria-describedby="basic-addon1">
                    </div>
                </div>
                <div v-for="item in products" :key="item">
                    <div class="my-2" style="background-color: beige; cursor: pointer;" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop" @click="configProduct(item)">
                        <div class="row">
                            <div class="col text-center" :title="item.name"
                                style=" white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="row mx-2">
                            <div class="col">
                                qtd: {{ item.amount }}
                            </div>
                            <div class="col">
                                kg: {{ item.kg }}
                            </div>
                            <div class="col">
                                m2: {{ item.m2 }}
                            </div>
                            <div class="col">
                                m: {{ item.m }}
                            </div>
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
                    <div class="my-2" style="background-color: beige; cursor: pointer;"
                        @click="addCustommer(custommer)">
                        <div class="row">
                            <div class="col" :title="custommer.name"
                                style=" white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                Nome: {{ custommer.name }}
                            </div>
                            <div class="col" :title="custommer.email"
                                style=" white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                Email: {{ custommer.email }}
                            </div>
                        </div>
                        <div class="row">
                            <div :title="custommer.address" class="col"
                                style=" white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis;">
                                Endereço: {{ custommer.address }}
                            </div>
                            <div class="col">
                                Telefone: {{ custommer.phone }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="text-center">
                        {{ modalEditProduct.name }}
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col">
                            <label for="">m²</label>
                            <input @input="handlePhone" required v-model="modalEditProduct.m2" type="text"
                                class="form-control">
                        </div>
                        <div class="col">
                            <label for="">m</label>
                            <input required v-model="modalEditProduct.m" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="">Kg</label>
                            <input required v-model="modalEditProduct.kg" type="email" class="form-control">
                        </div>
                        <div class="col">
                            <label for="">Unidade:</label>
                            <input v-model="modalEditProduct.unit" type="text" class="form-control">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        @click="addProduct(product)">Adicionar</button>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import { collection, query, getDocs } from "firebase/firestore";
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
            productsSelecteds: [],
            product: {
                name: '',
                kg: 0,
                m2: 0,
                m: 0,
                unit: 0,
            },
            products: [
                {
                    id: 12,
                    name: "persiana lisa",
                    kg: 2,
                    m2: 3,
                    m: 2,
                    amount: 2,
                    coust: 3,
                    description: 2,
                },
                {
                    id: '',
                    name: "limpeza",
                    kg: 2,
                    m2: 3,
                    amount: 2,
                    coust: 3,
                    description: '',
                },
            ],
            viewCustommer: false,
            modal: false,
            editOrder: false,
            formOrder: {
                name: "",
                productName: "",
                custommerId: "",
                products: [],
                kg: 0,
                m2: 0,
                m: 0,
                unit: 0,
                total: 0,
                freight: 0,
                state: '',
                payment: '',
                discount: 0,
                Subtotal: 0,
                notes: ''
            }
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        async load() {
            this.getCustomers()
        },
        // loadProduct(product) {
        //     console.log(product)
        //     this.modalEditProduct = product
        // },
        addCustommer(custommer) {
            this.formOrder.name = custommer.name
            this.formOrder.custommerId = custommer.id
        },
        configProduct(item) {
            this.modalEditProduct.name = item.name
            this.modalEditProduct.productId = item.id
        },
        addProduct(product) {
            this.productsSelecteds = product
            this.formOrder.products.push(this.modalEditProduct)
            console.log(this.modalEditProduct)
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