<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="./../assets/images/coche.jpg"
                    style="width: 40px"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" 
                to="/">
                    Home
                </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/create">
                        Crear Coche
                    </router-link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "MenuCoches"
    }
</script>