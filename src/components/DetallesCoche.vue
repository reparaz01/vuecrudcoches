<template>
  <div class="container">
    <h1 class="mt-4">Detalles del Coche</h1>
    
    <div class="row mt-4">
      <div class="col-md-6 offset-md-3">
        <ul class="list-group">
          <li class="list-group-item"><strong>Id:</strong> {{$route.params.id}}</li>
          <li class="list-group-item"><strong>Marca:</strong> {{ coche.marca }}</li>
          <li class="list-group-item"><strong>Modelo:</strong> {{ coche.modelo }}</li>
          <li class="list-group-item"><strong>Conductor:</strong> {{ coche.conductor }}</li>
          <li class="list-group-item"><strong>Imagen:</strong>
            <img :src="coche.imagen" alt="Imagen del coche" class="img-fluid" />
          </li>
        </ul>
      </div>
    </div>
  </div>
  <br>
  <router-link to="/" class="mt-2">Volver</router-link>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

export default {
  name: "DetallesCoche",
  data() {
    return {
      coche: {} // Inicializar un objeto vacío
    };
  },
  mounted() {
    const id = this.$route.params.id; // ID del coche

    // Llamo al método detallesCoche
    service.detallesCoche(id).then((result) => {
      this.coche = result;
    });
  }
};
</script>
