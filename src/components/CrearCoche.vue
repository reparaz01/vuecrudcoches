<template>
    <div>
        <h1>Crear Coche</h1>
        <h2 style="color:blue">{{mensaje}}</h2>
        <form v-on:submit.prevent="crearCoche()"
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
                Crear Coche
            </button>
        </form>
    </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches';
const service = new ServiceCoches();

    export default {
        name: "CrearCoche",
        methods:{
            crearCoche() {
                service.crearCoche(this.coche).then(result => {
                    console.log(result);
                    this.$router.push("/");
                    //this.mensaje = "Insertado correctamente";
                });
            }
        },
        data() {
            return {
                coche: {
                    idCoche: null, 
                    marca: "", 
                    modelo: "",
                    conductor: "", 
                    imagen: "",

                }, 
                mensaje: ""
            }
        }
    }
</script>