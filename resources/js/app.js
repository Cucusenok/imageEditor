//require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import App from './components/App'
import router from './routes'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'



window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Vuetify, {
    iconfont: 'fa'
});





const app = new Vue({
    el: '#app',
    components: { App },
    router,
});



