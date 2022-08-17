<template>
	<div class="home container">
        <Header :categories="categories"></Header>
        <BestSellers></BestSellers>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import BestSellers from './BestSellers.vue';

export default {
    name: "Home",
    data () {
        return {
            categories: '',
        }
    },
    mounted () {
        this.getCategories()
    },
    methods: {
        getCategories() {
            axios.get('https://fakestoreapi.com/products/categories').then(response => {
                console.log(response.data);
                this.categories = response.data;
            });
        }
    },
    components: {
        Header,
        BestSellers
    }
}
</script>

<style>
</style>
