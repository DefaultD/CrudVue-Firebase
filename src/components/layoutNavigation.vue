<template>
    <div class="d-flex flex-column min-vh-100">
        <div class="flex-grow-1">
            <div class="d-flex justify-content-center pt-2">
                <div style="border: 2px solid;" class="rounded-image">
                    <img src="../assets/scss/perfil.webp" alt="my perfil" class="img-fluid">
                </div>
            </div>
            <div class="text-center  text-white mb-0 pt-2">
                <b class="user-name">Nome do Usuário</b>
                <p class="title">Título</p>
            </div>
            <hr style="margin-bottom: 0px;" />
            <div class="pt-2 page"><b>Pages</b></div>
            <nav class="nav flex-column ">
                <div class="justify-content-center">
                    <RouterLink :key="i" exact exact-active-class="active" class="nav-link px-2 ps-0"
                        :to="{ name: router.name }" v-for="(router, i) in routerLinks">
                        <i class="fa" :class="`fa-${router.meta.icon}`"></i>
                        {{ router.meta.title }}
                    </RouterLink>
                </div>
            </nav>
        </div>
        <div class="mt-auto mb-3">
            <hr>
            <div class="logout" @click="logout()"><i class="fa-solid fa-power-off pe-2"></i>Logout </div>
        </div>
    </div>
</template>
<script>
import { getAuth, signOut } from 'firebase/auth'

export default {
    name: 'layoutNavigation',

    methods: {
        logout() {
            const auth = getAuth()
            signOut(auth)
            this.$router.push({ name: 'login' })
        }
    },
    computed: {
        routerLinks() {
            return this.$router.options.routes.filter(r => r.name !== 'login' && r.name !== 'order')
        }
    }
}
</script>

<style lang="scss" scoped>
.rounded-image {
    width: 93px;
    height: 93px;
    border-radius: 50%;
    overflow: hidden;
}

.rounded-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user-name {
    color: #000000;
}

.title {
    color: var(--featured);
}

.logout {
    &.active {
        color: var(--featured);
    }

    &:hover {
        cursor: pointer;
        color: var(--dark);
    }
}

.page {
    &.active {
        color: var(--featured);
    }

    &:hover {
        color: var(--dark);
    }
}

.nav {
    margin-left: 0px;
    padding: 0px;

    .nav-link {
        color: var(--white);
        transition: .4s;

        &.active {
            color: var(--featured);
        }

        &:hover {
            color: var(--dark);
        }
    }
}
</style>
