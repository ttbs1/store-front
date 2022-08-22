import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import Product from '../components/Product.vue';
import Category from '../components/Category.vue';
import About from '../components/About.vue';

const history = createWebHistory();
const router = createRouter({
    history, 
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/product/:id',
            component: Product
        },
        {
            path: '/:category',
            component: Category
        },
        {
            path: '/about',
            component: About
        }
    ]
});

export default router;