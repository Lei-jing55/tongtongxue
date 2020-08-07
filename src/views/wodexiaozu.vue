<template>
  <div>
    <header class="headerone">
      <div style="text-align:left;margin-left:10px;">
        <router-link to="/">
          <img src="../../public/shouye/shouye18.jpg" />
        </router-link>
      </div>
      <div>
        小组
      </div>
      <div style="text-align:right;margin-right:10px;" @click="dian()">
        <img src="../../public/shouye/shouye17.jpg" />
      </div>
    </header>
     <div class="xian" v-show="panduan">
      <p>新建小组</p>
      <p>新建文件夹</p>
      <p>批量编辑</p>
    </div>
    <section>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">《大学生创业基础》小组</p>
          <p><img src="../../public/shouye/xiaozu8.jpg"  width="50px"></p>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu2.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">益阳职业技术学院交流群</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">共分享给3790人</span>
          </p>
          <p><img src="../../public/shouye/xiaozu8.jpg"  width="50px"></p>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu3.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">益阳职业技术学院尔雅课程小组</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">共分享给3790人</span>
          </p>
          <p><img src="../../public/shouye/xiaozu8.jpg"  width="50px"></p>
      </div>
      <div class="xiaozu2" style="">推荐</div>
     <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu1.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">公告栏</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">付建立，4066话题</span>
          </p>
          <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu2.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">摄影爱好者</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">王维，30431话题</span>
          </p>
          <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu4.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">没错就是爱自拍</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">王维，30431话题</span>
          </p>
         <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu5.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">你说歌名我唱给你听</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">撒虐，74258人 15395话题</span>
          </p>
          <button>
             加入
         </button>
      </div>
     <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu1.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">公告栏</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">付建立，4066话题</span>
          </p>
         <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu7.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">摄影爱好者</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">王维，30431话题</span>
          </p>
         <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu4.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">没错就是爱自拍</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">王维，30431话题</span>
          </p>
         <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu5.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:7px;">
              <span style="margin-top: -8px;">你说歌名我唱给你听</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">撒虐，74258人 15395话题</span>
          </p>
         <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu2.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">摄影爱好者</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">王维，30431话题</span>
          </p>
         <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu4.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">没错就是爱自拍</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">王维，30431话题</span>
          </p>
         <button>
             加入
         </button>
      </div>
      <div class="flex xiaozu1">
          <p><img src="../../public/shouye/xiaozu7.jpg" width="50px"></p>
          <p  style="text-align:left;margin-left:10px;">
              <span style="margin-top: -8px;">你说歌名我唱给你听</span>
              <span style="color:#999999;font-size:13px;margin-top:5px;">撒虐，74258人 15395话题</span>
          </p>
         <button>
             加入
         </button>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:'',
      panduan:false
    };
  },
  methods: {
    dian(){
      this.panduan = !this.panduan
    }
  }
};
</script>

<style scoped>
.headerone img {
  width: 25%;
}
.xiaozu img{
    width:50%;
}
.xiaozu1{
  margin-top: 10px;
  background: white;
  position: relative;
}

.xiaozu1>p:nth-child(1){
  text-align:left;
  margin-left:10px;
  /* width:80px;
  height:50px; */
}
.xiaozu1>p:nth-child(2){
  text-align:left;
  margin-left:10px;
  height:50px;
  line-height: 50px;
}
.xiaozu1>p:nth-child(3){
  text-align:left;
  margin-left:10px;
  height:50px;
  line-height: 50px;
  position: absolute;
  right:10px;
}
.xiaozu1>p:nth-child(2)>span{
    display: block;
    height:20px;
}
.xiaozu2{
    width:100%;
    height:40px;
    line-height: 40px;
   /* text-align: center !important; */
    background: #f5f6f7;
    
    color:#9a9a9a;

}
.xiaozu1>button{
        border-radius: 5px;
    background: white;
    color: #5aabf8;
    border: 1px solid #5aabf8;
    width: 60px;
    height: 30px;
    position: absolute;
    top:15px;
    right: 10px;
}
</style>