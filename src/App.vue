<template>
    <notifications position="top center"/>
    <baseSpinner v-if="loading" :visible="loading"></baseSpinner>
    <div v-else>
        <div class="container-fluid" v-if="isLogged">
            <notifications position="top center"/>
            <div class="row">
                <div class="col-2 navigation-sidebar">
                    <h1 class="app-tittle">Dev Tech</h1>
                    <layoutNavigation />
                </div>
                <div class="col mt-3">
                    <router-view />
                </div>
            </div>
        </div>
        <router-view v-else />
    </div>
</template>

<script>

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import layoutNavigation from '@/components/layoutNavigation.vue'
import baseSpinner from '@/components/global/baseSpinner.vue'

export default {


    data() {
        return {
            isLogged: false,
            loading: true,
        }
    },

    components: {
        layoutNavigation,
        baseSpinner,
    },
    mounted() {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            window.uid = user ? user.uid : null
            this.isLogged = !!user
            this.$router.push({ name: window.uid ? 'customer' : 'login' })
            this.loading = false
        })
    },
}


</script>


<style lang="scss">
#app {
    min-height: 100vh;
    color: var(--featured);
    background-color: var(--light-medium);

    .navigation-sidebar {
        background-color: var(--dark-medium);

        .app-tittle {
            font-size: 20pt;
            margin-top: 10px;
            text-align: center;
        }
    }
}
</style>
