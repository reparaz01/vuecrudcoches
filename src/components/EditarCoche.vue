<template>
    <div>
        <h1>Crear Coche</h1>
        <h2 style="color:blue">{{mensaje}}</h2>
        <form v-on:submit.prevent="updateCoche()"
        style="width: 500px; margin: 0 auto">
            <label>Id Coche</label>
            <input type="number" class="form-control"
                v-model="coche.idCoche"/>
                <br>
            <label>Marca</label>
            <input type="text" class="form-control"
                v-model="coche.marca"/>
                <br>
            <label>Modelo</label>
            <input type="text" class="form-control" 
                v-model="coche.modelo"/>
                <br>
            <label>Conductor</label>
            <input type="text" class="form-control" 
                v-model="coche.conductor"/>
                <br>
            <label>Imagen</label>
            <input type="text" class="form-control"
                v-model="coche.imagen"/>
                <br><br/> 
            <button class="btn btn-primary">
                Editar Coche
            </button>
        </form>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

    export default {
        name: "EditarCoche", 
        methods: {
            updateCoche() {
                service.updateCoche(this.coche).then(result => {
                    console.log(result);
                    this.$router.push("/");
                })
            }
        },
        mounted() {
            var id = this.$route.params.id;
            service.detallesCoche(id).then(result => {
                this.coche = result;
            })
        },
        data() {
        return {
            coche: {
                idCoche: 0, // Valores iniciales
                marca: "",
                modelo: "",
                conductor: "",
                imagen: ""
            }
    }
}
    }
</script>