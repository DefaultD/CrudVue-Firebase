<template>
  <baseSpinner></baseSpinner>
 <div class="container-fluid">
    <div class="row">
      <div class="col-2 navigation-sidebar">
        <h1 class="app-tittle">Dev Tech</h1>
        <layoutNavigation />
      </div>
      <div class="col mx-3">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import layoutNavigation from '@/components/layoutNavigation.vue'
import baseSpinner from '@/components/global/baseSpinner.vue'

export default {  
  components: {
    layoutNavigation,
    baseSpinner,
  },
  mounted () {
    console.log(this)
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user
      this.$router.push({ name: window.uid ? 'Clientes' : 'login' })
      this.loading = false
      this.$root.$emit('baseSpinner::hide')

    }) 
  },
}


</script>

<style lang="scss">
#app {
  min-height: 100vh;
  color: var(--light);
  background-color: var(--darker);
  .navigation-sidebar{
    background-color: var(--dark-medium);
    .app-tittle{
      font-size: 20pt;
      margin-top: 10px;
      text-align: center;
    }
  }
}
</style>
