import Vuerouter from 'vue-router';
import home from './components/HomeContainer.vue';
import member from './components/MemberContainer.vue';
import shopcar from './components/ShopcarContainer.vue';
import search from './components/SearchContainer.vue';
import newsList from './components/news/NewsList.vue';
import newsInfo from './components/news/NewsInfo.vue';
var router=new Vuerouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shopcar',component:shopcar},
        {path:'/search',component:search},
        {path:'/home/newsList',component:newsList},
        {path:'/home/newsInfo/:id',component:newsInfo},
    ],
    linkActiveClass:'mui-active',
});
export default router;