<template>
  <nav class="nav flex-column ">
    <div class="justify-content-center">
      <RouterLink :key="i" exact exact-active-class="active" class="nav-link" :to="{ name: router.name }"
        v-for="(router, i) in routerLinks">
        <i class="fa" :class="`fa-${router.meta.icon}`"></i>
         {{ router.meta.title }}
         
         
      </RouterLink>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'layoutNavigation',

  mounted () {
  },

  computed: {
    routerLinks() {
      return this.$router.options.routes.filter(r => r.name !== 'login')
    }
  }
}
</script>

<style lang="scss" scoped>


.nav {
  
  margin-left: -15px;
  width: calc(100% + 27px);
  height: calc(100vh - 50px);

  .nav-link {
    color: var(--white);
    transition: .4s;

    &.active {
      color: var(--featured);
      background-color: transparent;
    }

    &:hover {
      color: var(--dark);
      background-color: var(--featured);
    }
  }
}
</style>
