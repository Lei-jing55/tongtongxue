<template>
  <div>
    <header class="headerones">
      <div style="text-align:left;margin-left:10px;">
        <router-link to="/"><van-icon name="arrow-left" size="30px" color="#2c3e50"/></router-link>
      </div>
      <div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div style="text-align:right;margin-top:-0px;">
        <img src="../../public/shouye/shoujian2.jpg"  width="40%"/>
        <img src="../../public/shouye/shoujian3.jpg"  width="40%" @click="dian()"></div>
    </header>
    <div class="xian" v-show="panduan">
      <p>新建课程</p>
      <p>导入课程</p>
    </div>
    
    <footer>
      <div v-for="(item, index) in items" :key="index" class="flex  gongcheng">
            <p><img :src="item.img" alt=""></p>
            <div>
                <p>{{item.text}}</p>
                <p>{{item.text1}}</p>
            </div>
            <div>
                {{item.text2}}
            </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items:[],
      value1: 0,
      value:'',
      option1: [
        { text: "全部", value: 0 },
        { text: "通知", value: 1 },
        { text: "站内信函", value: 2 },
        { text: "审批", value: 3 },
        { text: "未读", value: 4 }
      ],
      panduan:false
    }
  },
  methods: {
    dian(){
      this.panduan = !this.panduan
    }
  },created() {
    this.$http.get("https://www.fastmock.site/mock/50a7d0f6b3fd6f025d438d893bb86f7d/shuye/api/shouye").then((response) => {
       console.log(response.data.data.shoujian)
       this.items = response.data.data.shoujian
    })
  }
};
</script>

<style scoped>
header{
  width:100%;
  height:60px;
  line-height: 60px;
  border-bottom: 1px solid #e5e5e5;
}
.biji img{
  width:50%;
  /* height:39px;
  line-height: 39px; */
  
}
.gongcheng{
        /* width:100%; */
        /* height:70px;
        line-height: 70px; */
        border-bottom: 1px solid #e5e5e5;
        padding:5px 0 0px 10px;
        font-size:13px;
        position: relative;
    }
    .gongcheng img{
        height:60px;
    }
    .gongcheng div:nth-child(2)>p{
        margin:10px 0 0 10px;
        text-align: left;
    }
    .gongcheng div:nth-child(3){
      position:absolute;
        right:20px;
        border-radius: 5px;
        top:30px;
    }
</style>