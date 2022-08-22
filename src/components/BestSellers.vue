<template>
    <div class="container-fluid mt-5">
        <h1>Best Sellers:</h1>
    </div>
    <div class="container-fluid d-flex justify-content-center mb-5">
        <div class="d-flex row justify-content-around">
            <div class="col-auto row" v-for="product in bestSellers">
                <ProductCard :product="product"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProductCard from "./ProductCard.vue";

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
    },
    components: {
        ProductCard
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

h1{
    font-size: 26px;
}
</style>