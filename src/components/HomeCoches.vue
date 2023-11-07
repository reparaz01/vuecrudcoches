<template>
  <div>
    <h1>Crud Coches</h1>
    <img
      src="./../assets/images/loading.gif"
      v-if="status == false"
      class="mx-auto d-block"
    />
    <table v-else class="table table-bordered">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Conductor</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coche in coches" :key="coche.idDepartamento">
          <td class="text-center align-middle">{{ coche.marca }}</td>
          <td class="text-center align-middle">{{ coche.modelo }}</td>
          <td class="text-center align-middle">{{ coche.conductor }}</td>
          <td class="text-center align-middle">
            <router-link
              class="btn btn-secondary"
              :to="'/details/' + coche.idCoche"
            >
              Detalles
            </router-link>
          </td>
          <td class="text-center align-middle">
            <router-link
              class="btn btn-warning"
              :to="'/update/' + coche.idCoche"
            >
              Editar
            </router-link>
          </td>
          <td class="text-center align-middle">
            <router-link
              class="btn btn-danger"
              :to="'/delete/' + coche.idCoche"
            >
              Eliminar
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

export default {
  name: "HomeCoches",
  mounted() {
    service.getCoches().then((result) => {
      this.coches = result;
      this.status = true;
    });
  },
  data() {
    return {
      coches: [],
      status: false
    };
  }
};
</script>


<style>
.img-fixed {
  width: 200px; /* Tamaño fijo para las imágenes */
  height: 100px; /* Tamaño fijo para las imágenes */
}
</style>
