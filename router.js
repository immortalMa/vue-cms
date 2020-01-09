import Vuerouter from 'vue-router';
import home from './components/HomeContainer.vue';
import member from './components/MemberContainer.vue';
import shopcar from './components/ShopcarContainer.vue';
import search from './components/SearchContainer.vue';
var router=new Vuerouter({
    routes:[
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
    ],
    linkActiveClass:'mui-active',
});
export default router;