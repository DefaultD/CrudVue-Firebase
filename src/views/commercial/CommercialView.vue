<template>
    <div class="row justify-content-between" style="height: 30px">
        <div class="col">
            <h3>Comercial</h3>
        </div>
        <div class="col-3 h-100">
            <div class="input-group  flex-nowrap h-100">
                <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control" placeholder="Pesquisar" aria-label="Username"
                    aria-describedby="addon-wrapping">
            </div>
        </div>
        <button type="button h-100" @click="openModalCliente = !openModalCliente"
            class="btn btn-outline-primary col-2 h-100 me-3 pb-2">
            Novo cliente
        </button>
    </div>
    <hr />
    <div class="mt-2 row">
    </div>
</template>
<script>
</script>