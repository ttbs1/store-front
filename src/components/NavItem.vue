<script>
export default {
    props: {
        text: String,
        href: String
    }
}
</script>

<template>
    <li class="nav-item">
        <router-link to="/home">{{text}}</router-link>
    </li>
</template>

<style>
.nav-link {
    padding-right: 2em !important;
}
</style>