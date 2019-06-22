import VueRouter from 'vue-router';


export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'Home',
            meta: {
                title: 'Home'
            },
            component: () => import('./components/Home')
        },
    ]
});
