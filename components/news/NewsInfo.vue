<template>
    <div class="newsInfo-box">
      <h1 class="title">{{newsinfo.title}}</h1>
      <div class="subTitle">
          <span>发表时间:{{newsinfo.add_time | dataFormat}}</span>
          <span>点击{{newsinfo.click}}次</span>
      </div>
      <hr>
      <div class="content" v-html="newsinfo.content"></div>
      <comments-box></comments-box>
    </div>
</template>
<script>
import comments from '../subcomponents/comments.vue';
export default {   
    data(){
        return {
            id:this.$route.params.id,
            newsinfo:''
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo:function(){
            this.$http.get('http://localhost:8888/getnewsinfo/'+this.id).then(function(result){
                this.newsinfo=result.body;
            })
        }
    },
    components:{
        "comments-box":comments,
    }
}
</script>
<style scoped>
  .newsInfo-box{
    padding: 0 5px;
  }
  .newsInfo-box .title{
      font-size: 16px;
      text-align: center;
      color: red;
      margin: 15px 0;
  }
  .newsInfo-box .subTitle{
      font-size: 13px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
  }
  .newsInfo-box .content{
      font-size: 14px;
      color: #333;
  }
</style>