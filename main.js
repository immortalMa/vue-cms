//入口文件
import Vue from 'vue';
import Vuerouter from 'vue-router';
import Vueresource from 'vue-resource';
import App from './App.vue';
import { Header,Swipe,SwipeItem,Button} from 'mint-ui';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
import router from './router.js';
Vue.use(Vuerouter);
Vue.use(Vueresource);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,Swipe);
Vue.component(Button.name,Button);
Vue.filter("dataFormat",function(value){
    var date=new Date(value);
    var year=date.getFullYear();       
    var month=date.getMonth()+1;
    var day=date.getDate();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();
    return year+'-'+(month>9?month:'0'+month)+'-'+(day>9?day:'0'+day)+' '+(hours>9?hours:'0'+hours)+':'+(minutes>9?minutes:'0'+minutes)+':'+(seconds>9?seconds:'0'+seconds);    
})
var vm=new Vue({
    el:"#app",   
    render(createElements) {
        return createElements(App); 
    },
    router
})