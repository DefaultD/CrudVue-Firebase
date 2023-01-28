<template>
   <!-- Button trigger -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Tabela de clientes
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Clientes</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <!-- lista -->
        <ul id="title-color" class="list-group list-group-horizontal">
  <li class="list-group-item form-control-lg">Nome</li>
  <li class="list-group-item form-control-lg">PJ ou PF</li>
  <li class="list-group-item form-control-lg">Número Cadastral</li>
  <li class="list-group-item form-control-lg">Consulta</li>
  <li class="list-group-item form-control-lg">Email</li>
  <li class="list-group-item form-control-lg">Celular</li>
  <li class="list-group-item form-control-lg">Endereço</li>
  <li class="list-group-item form-control-lg">Profissão</li>
  <li class="list-group-item form-control-lg">Data de nascimento</li>
</ul>
<ul class="list-group list-group-horizontal-sm">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">

  
</ul>
<ul class="list-group list-group-horizontal-md">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
</ul>
<ul class="list-group list-group-horizontal-lg">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
</ul>
<ul class="list-group list-group-horizontal-xl">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
</ul>
<ul class="list-group list-group-horizontal-xxl">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
  <input v-model="name" class="form-control form-control-lg" type="text">
</ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

