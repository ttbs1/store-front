import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import Product from '../components/Product.vue';

const history = createWebHistory();
const router = createRouter({
    history, 
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/product/:productId',
            component: Product
        }
    ]
});

export default router;