<template>
    <div class="container-fluid d-flex justify-content-center my-5">
        <div class="d-flex col-10 row justify-content-around">
            <div class="col-auto row" v-for="product in products">
                <ProductCard :product="product"></ProductCard>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProductCard from "./ProductCard.vue";

export default {
    name: "Category",
    data () {
        return {
            category: this.$route.params.category,
            products: ''
        }
    },
    mounted () {
        this.getProducts()
    },
    methods: {
        getProducts() {
            axios.get('https://fakestoreapi.com/products/category/' + this.category).then(response => {
                console.log(response.data);
                this.products = response.data;
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
</style>