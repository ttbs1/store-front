<template>
	<div class="home container">
        <div class="p-5">
            <h2 class="pb-3" v-text="result.title"></h2>
            <div class="row">
                <div class="col-lg-4 p-3">
                    <img :src="result.image" class="img-fluid">
                </div>
                <div class="col-lg-8 pt-3 d-flex justify-content-center">
                    <div class="col-lg-10">
                        <h5>Price: U${{ result.price }} </h5>
                        <span v-text="result.description"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'product',
    data () {
        return {
            id: this.$route.params.id,
            result: ''
        }
    },
    mounted () {
        this.getResult(this.id)
    },
    methods: {
        getResult(id) {
            axios.get('https://fakestoreapi.com/products/' + id).then(response => {
                console.log(response.data.title)
                this.result = response.data;
            });
        }
    }
}
</script>

<style>
.home {
    min-height: 50vh;
}
</style>
