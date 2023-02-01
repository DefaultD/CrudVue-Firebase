<template>
  <div class="row justify-content-between">
      <div class="col">
          <h3>Produtos</h3>
      </div>
      <button type="button" @click="openModalCliente = !openModalCliente" class="btn btn-outline-primary col-2 me-3">
          Novo Produto
      </button>
  </div>
  <hr />
  <div class="row justify-content-end">
      <div class="col-3">
          <div class="input-group  flex-nowrap">
              <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username"
                  aria-describedby="addon-wrapping">
          </div>
      </div>
  </div>
  <div class="mt-2 row">
      <div :key="customer" v-for="customer of customersData" class="my-3 col-lg-4 rounded">
          <infoCard :data="customer" @reload="load()"/>
      </div>
  </div>

  <layoutCreateNewProduct :showModal="openModalCliente" @reload="load()"/>
</template>

<script>
import { collection, query, getDocs } from "firebase/firestore";
import layoutCreateNewProduct from '@/components/layout/layoutCreateNewProduct.vue'
import infoCard from '@/components/global/infoCardProducts.vue'

export default {
  name: "viewCustomer",

  mounted() {
      this.load()
  },
  data() {
      return {
          openModal: false,
          openModalCliente: false,
          customersData: []
      }
  },

  methods: {
      async load() {
          this.customersData = []
          await this.getCustomers()
      },
      async getCustomers() {
          let q = await query(collection(this.$firebase, 'Clientes'))
          let querySnapshot = await getDocs(q)
          querySnapshot.forEach((doc) => {
              let data = doc.data()
              data.id = doc.id
              this.customersData.push(data)
          });
      }
  },

  components: {
      layoutCreateNewProduct,
      infoCard
  },

}

</script>