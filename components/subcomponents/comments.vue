<template>
    <div class="comments-box">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>       
        <ul class="comments-list">
            <li>
                <div class="title">第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2020-01-20 17:50:50</div>
                <div class="content">锄禾日当午，汗滴禾下锄，谁知盘中餐，粒粒皆辛苦</div>
            </li>
        </ul>       
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
  .comments-box h3{
      font-size: 18px;
  }
  .comments-box textarea{
      font-size: 14px;
      height: 85px;
      margin: 0;
  }
  .comments-box .comments-list{
      margin: 5px 0;
      list-style-type: none;
      padding:0;
      font-size: 13px;
  }
  .comments-box .comments-list .title{
      background-color: #ccc;
      line-height: 30px;
  }
  .comments-box .comments-list .content{
      line-height: 35px;
      text-indent: 2em;
  }
</style>