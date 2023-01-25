<template>
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

import layoutNavigation from '@/components/layoutNavigation.vue'
export default { 
  components: {
    layoutNavigation
  }
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
