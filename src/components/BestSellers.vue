<template>
    <div class="container-fluid d-flex justify-content-center my-5">
        <div class="row">
            <div class="product-preview col-lg-3 row" v-for="product in bestSellers">
                <div class="card my-2" style="width: 12rem;">
                    <div class="d-flex justify-content-center">
                        <img :src="product.image" class="card-img-top p-4" :alt="product.title" style="height: 150px; width: max-content;">
                    </div>
                    <div class="card-body">
                        <p class="card-title"> {{ product.title }} </p>
                        <p class="card-price"> U$ {{ product.price }} </p>
                        <p class="card-rating"> rating: {{ product.rating.rate }} </p>
                        <a :href="`product/${product.id}`" class="btn btn-outline-secondary btn-sm">See details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "BestSellers",
    data () {
        return {
            bestSellers: ''
        }
    },
    mounted () {
        this.getProducts()
    },
    methods: {
        getProducts() {
            axios.get('https://fakestoreapi.com/products').then(response => {
                console.log(response.data);
                this.products = response.data;
                
                let ratings = response.data.map((x) => {
                    return x.rating.rate;
                });
                let topRating = ([...ratings].sort((a, b) => b - a).slice(0, 5))[4];
                this.bestSellers = response.data.filter((x) => {
                    return x.rating.rate >= topRating;
                });
                console.log(this.bestSellers)
            });
        }
    }
}
</script>

<style>
.card-title {
    font-size: 12px !important;
}

.card-price {
    font-size: 12px;
    font-weight: 800;
    color: red;
}

.card-rating {
    font-size: 10px;
}
</style>