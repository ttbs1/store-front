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
        <a class="nav-link" aria-current="page" href="#">{{text}}</a>
    </li>
</template>

<style>
.nav-link {
    padding-right: 2em !important;
}
</style>