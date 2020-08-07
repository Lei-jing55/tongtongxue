<template>
  
   
  <div style="background: #f5f6f7;">
    <header class="headerone">
      <div style="text-align:left;margin-left:10px;">
        <router-link to="/"><img src="../../public/shouye/shouye18.jpg" /></router-link>
      </div>
      <div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div style="text-align:right;margin-right:10px;" @click="dian()">
        <img src="../../public/shouye/shouye17.jpg" />
      </div>
    </header>
    <div class="xian" v-show="panduan">
      <p>新建课程</p>
      <p>导入课程</p>
    </div>
    <section>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </section>
    <footer style="position:absolute;top:40%;left:25%;text-align:left;">
      <p>您的学好信息下暂时没有课程</p>
      <p>学校：益阳职业技术学院</p>
      <p>20170300901</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value:'',
      option1: [
        { text: "全部课程", value: 0 },
        { text: "我交的课", value: 1 },
        { text: "我学的课", value: 2 }
      ],
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

<style>
.headerone img {
  width: 25%;
}
footer>P:nth-child(1){
  height:50px;
}
footer>P:nth-child(2),footer>P:nth-child(3){
  color:#bababa;
  font-size:15px;
  height:30px;
}
.xian{
  position: absolute;
  right:0;
  height:70px;
  width:100px;
  background: white;
  box-shadow: 0 2px 12px rgba(100,101,102,.08);
  border-radius: 8px;
  
}
</style>