<template>
    <div class="card border-0 h-100" style="color: var(--darker);">
        <!-- <div class="card-header">
            <h5 class="card-title">{{ `${data.name}` }}</h5>
        </div> -->
        <div class="card-body w-100">
            <div class="row text-center">
                <h5><b>{{data.title}}</b></h5>
            </div>
            <hr class="mt-0"/>
            <div class="text-center p-0">
                <p class="">{{ data.label }}</p>
                <div class="mb-2 text-muted" style="font-size: 28px;"> {{ data.data }} </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            openModalCliente: false,
            modal: false,
        }
    },
    methods: {
        recarregar() {
            this.$emit('reload')
        },

        formatDate(timeStamp) {
            const time = timeStamp * 1000
            const date = new Date(time); // Crie um objeto de data com o timestamp

            // Formate a data de acordo com suas necessidades
            const dia = date.getDate().toString().padStart(2, '0'); // Obtém o dia e adiciona um zero à esquerda se necessário
            const mes = (date.getMonth() + 1).toString().padStart(2, '0'); // Obtém o mês (lembre-se de que o mês começa em 0) e adiciona um zero à esquerda se necessário
            const ano = date.getFullYear();
            const horas = date.getHours().toString().padStart(2, '0'); // Obtém as horas e adiciona um zero à esquerda se necessário
            const minutos = date.getMinutes().toString().padStart(2, '0'); // Obtém os minutos e adiciona um zero à esquerda se necessário
            const segundos = date.getSeconds().toString().padStart(2, '0'); // Obtém os segundos e adiciona um zero à esquerda se necessário

            const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`; // Cria a string formatada
            if (timeStamp)
                return dataFormatada
            else
                return
        }
    },
    components: {
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
.card {
    background-color: var(--light-medium);
}
</style>