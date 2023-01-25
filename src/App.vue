<template>

<layoutNavigation></layoutNavigation>

<!-- usar referencia abaixo para router  -->
  <!-- <nav>
    <router-link to="/"></router-link> |
    <router-link to="/about"></router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import layoutNavigation from '@/components/layoutNavigation.vue'
export default { 
  components: {
    layoutNavigation
  },
  mounted () {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      window.uid = user ? user.uid : null
      this.isLogged = !!user
      this.$router.push({ name: window.uid ? 'home' : 'login' })
      this.loading = false
    })
  },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
