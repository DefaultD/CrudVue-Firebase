<template>
    <notifications position="top center" />
    <baseSpinner v-if="loading" :visible="loading"></baseSpinner>
    <div v-else>
        <div class="container-fluid" v-if="isLogged">
            <notifications position="top center" />
            <div class="row">
                <div class="col-md-2 col-sm-4 col-8 navigation-sidebar">
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
        console.log('oi')
        // this.loading = false
        const auth = getAuth()
        console.log(auth)
        onAuthStateChanged(auth, (user) => {
            window.uid = user ? user.uid : null
            this.isLogged = !!user
            this.$router.push({ name: window.uid ? 'dashboard' : 'login' })
            this.loading = false
        })
    },
}


</script>


<style lang="scss">
#app {
    min-height: 100vh;
    color: var(--featured);
    background-color: var(--light);

    .navigation-sidebar {
        background-color: var(--light-medium);
        border-radius: 0 23px 23px 0;
        height: 100vh;
        .app-tittle {
            font-size: 20pt;
            margin-top: 10px;
            text-align: center;
        }
    }
}
</style>
