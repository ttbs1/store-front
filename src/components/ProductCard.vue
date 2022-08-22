<template>
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
</template>

<script>
export default {
    props: ['product'],
    name: "ProductCard",
}
</script>

<style>
.card {
    margin: 10px;
}
</style>