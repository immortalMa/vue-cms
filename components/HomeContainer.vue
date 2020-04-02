<template>
  <div>
    <mt-swipe class="lunboBox" :auto="4000">
      <mt-swipe-item>
        <img src="/../images/lunbo1.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/../images/lunbo2.jpg" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="/../images/lunbo3.jpg" />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newsList">
          <img src="/../images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/../images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/../images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/../images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/../images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/../images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.lunboBox {
  height: 200px;
}
.lunboBox img {
  width: 100%;
  height: 200px;
}

.mui-grid-view.mui-grid-9{
    border: none;
    background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    background-color: #fff;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell img{
    width:60px;
    height: 60px;
}
</style>