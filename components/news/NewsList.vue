<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
                <span>发表时间：{{item.add_time | dataFormat}}</span>
                <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>            
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      newsList:[],
    }
  },
  methods:{
    getNewsList:function(){
      this.$http.get('http://localhost:8888/getnewslist').then(function(result){
        if(result.body.status==0){
          this.newsList=result.body.message;
        }
      })
    }
  },
  created() {
    this.getNewsList();
  },
};
</script>
<style scoped>
.mui-media-body h1{
    font-size: 14px;
}
.mui-media-body .mui-ellipsis{
    font-size: 12px;
    display:flex;
    justify-content:space-between;
    color:#226aff;
}
</style>