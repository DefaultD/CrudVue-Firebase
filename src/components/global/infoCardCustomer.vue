<template>
    <div class="card h-100 border-0 w-100" style="width: 18rem; color: var(--darker);">
        <div class="card-header">
            <h5 class="card-title">{{ `${data.name}` }}</h5>
        </div>
        <div class="card-body w-100">

            <div class="row">

                <div class="col-6">
                    <h6 class="card-subtitle text-muted">{{ data.lead }}</h6>
                </div>
                <div class="col-6 text-end">
                    <h6 class="card-subtitle  text-muted">{{ data.type }}</h6>
                </div>
            </div>
            <hr />
            <div class="col">
                <h6 class="card-subtitle mb-2 text-muted">{{ `Telefone - ${data.phone}` }}</h6>
            </div>
            <div class="col">
                <h6 class="card-subtitle mb-2 text-muted">{{ `Email - ${data.email}` }}</h6>
            </div>
            <div class="col">
                <h6 class="card-subtitle mb-2 text-muted">{{
                    data.complement ? `Endereço - ${data.address} • ${data.complement}` :
                        `Endereço - ${data.address}`
                }}</h6>
            </div>
            <div class="col">
                <h6 class="card-subtitle mb-2 text-muted">{{ `Descrição - ${data.description}` }}</h6>
            </div>

        </div>
        <div class="card-footer row justify-content-between">
            <div class="col pt-2" style="color: var(--darker);">
                Criado • {{ formatDate(data.createdAt.seconds) }}
            </div>
            <div class="col-2 text-end">
                <button class="btn" @click="openModal()"><i class="fa-regular fa-sun"></i></button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    methods: {
        openModal(){
            this.$emit('showModal')
        },
        // convertTimestampForDate(timestamp) {
        //     let date = new Date(timestamp)
        //     return date
        // },
        formatDate(time) {
            // let date = new Date(time)
            console.log(time)
            // let d = date.getDay()
            // let m = date.getMonth()
            // let y = date.getFullYear()

            // return `${d}/${m}/${y}`
        }
    },
    props: {
        data: Object
    }
}
</script>

<style scoped lang="scss">
.card-body {
    color: var(--darker)
}
</style>