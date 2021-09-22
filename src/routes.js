import VueRouter from 'vue-router'
import RedLight from './pages/RedLight.vue'
import YellowLight from './pages/YellowLight.vue'
import GreenLight from './pages/GreenLight.vue'

export default new VueRouter({
    routes: [
        {
            path: '/red',
            component: RedLight,
        },
        {
            path: '/yellow',
            component: YellowLight,
        },
        {
            path: '/green',
            component: GreenLight,
        },
    ],
    // mode: 'history'
})