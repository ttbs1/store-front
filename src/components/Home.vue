<template>
	<div class="home container">
        <header class="d-flex justify-content-center m-3">
            <div class="row">
                <div class="header-categories col-auto d-flex justify-content-center">
                    <ul>
                        <li class="mb-1" v-for="item in result">
                            <a class="dropdown-item" :href="`${ item.replace(/[^A-Z0-9]+/ig, '') }`">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <div class="header-carousel col-md-8">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://visme.co/blog/wp-content/uploads/2021/04/flyer-backgrounds-header.png" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="https://visme.co/blog/wp-content/uploads/2020/06/Header-46.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="https://visme.co/blog/wp-content/uploads/2018/05/Header-43.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
        </header>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Home",
    data () {
        return {
            result: '',
        }
    },
    mounted () {
        this.getResult()
    },
    methods: {
        getResult() {
            axios.get('https://fakestoreapi.com/products/categories').then(response => {
                console.log(response.data)
                this.result = response.data;
            });
        }
    }
}
</script>

<style>
.header-categories > ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.header-categories > ul > li > a {
    width: 18em;
    height: 40px !important;
    border: 1px solid black;
}
</style>
