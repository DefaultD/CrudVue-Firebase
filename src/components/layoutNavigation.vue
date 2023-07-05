<template>
    <div class="d-flex flex-column min-vh-100">
        <div class="flex-grow-1">
            <div class="d-flex justify-content-center modalPerfil pt-2">
                <div style="border: 2px solid; cursor: pointer;" class="rounded-image" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
                    <img src="../assets/scss/perfil.webp" alt="my perfil" class="img-fluid">
                </div>
            </div>
            <div class="text-center  text-white mb-0 pt-2">
                <b class="user-name">{{ user.name }}</b>
                <p class="title">{{ user.subtitle }}</p>
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
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-center" id="staticBackdropLabel">Meu perfil</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="justify-content-center d-flex">
                            <div style="border: 2px solid;" class="rounded-image-modal">
                                <img src="../assets/scss/perfil.webp" alt="my perfil" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6 d-block">
                            <label><b>Nome</b></label>
                            <input v-model="user.name" class="rounded" />
                        </div>
                        <div class="col-6 d-block">
                            <label><b>Apelido</b></label>
                            <input v-model="user.subtitle" class="rounded" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Understood</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getAuth, signOut } from 'firebase/auth'
import { where, collection, query, getDocs } from "firebase/firestore";

export default {
    name: 'layoutNavigation',
    data() {
        return {
            user: {
                name: 'Kaue',
                subtitle: 'Developer'
            }
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        async load() {
            let collectionRef = collection(this.$firebase, 'Users');
            let q = query(collectionRef, where('id', '==', window.uid));
            let querySnapshot = await getDocs(q);
            console.log(querySnapshot)
        },
        editUser() {
            // const payload = {
            //     createdAt: new Date(),
            //     lastUpdate: new Date(),
            //     ...this.formOrder
            // }
            // const docRef = await addDoc(collection(this.$firebase, 'Pedidos'), payload);
        },

        async getUsers() {
            let q = await query(collection(this.$firebase, 'Users'))
            let querySnapshot = await getDocs(q)
            this.products = []
            querySnapshot.forEach((doc) => {
                let data = doc.data()
                data.id = doc.id
                this.products.push(data)
            });
        },
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
input {
    border-color: var(--featured);
}

.rounded-image-modal {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
}

.rounded-image-modal img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

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
