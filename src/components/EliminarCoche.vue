<template>
  <h1> Eliminar Coche </h1>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

export default {
 name :"EliminarCoche",
 mounted() {
    var id = this.$route.params.id;
    service.deleteCoche(id).then(result => {
        console.log(result);
        this.$router.push("/");
    })
 }
}
</script>


<style>

</style>