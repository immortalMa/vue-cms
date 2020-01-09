//入口文件
import Vue from 'vue';
import Vuerouter from 'vue-router';
import App from './App.vue';
import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import router from './router.js';
Vue.use(Vuerouter);
Vue.component(Header.name,Header);
var vm=new Vue({
    el:"#app",   
    render(createElements) {
        return createElements(App); 
    },
    router
})