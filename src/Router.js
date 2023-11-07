import {createRouter, createWebHistory} from 'vue-router';
import HomeCoches from './components/HomeCoches.vue';
import CrearCoche from './components/CrearCoche.vue';
import EditarCoche from './components/EditarCoche.vue';
import DetallesCoche from './components/DetallesCoche.vue';
import EliminarCoche from './components/EliminarCoche.vue';



const myRoutes = [
    {
        path: "/", component: HomeCoches
    }, 
    {
        path: "/create", component: CrearCoche
    }, 
    {
        path: "/details/:id", component: DetallesCoche
    },
    {
        path: "/update/:id", component: EditarCoche
    },
    {
        path: "/delete/:id", component: EliminarCoche
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;