<template>
  <div>
    <header>
      <p style="position:absolute;left:45%;">
        消息
      </p>
      <p style="position:absolute;right:0;top:6px;"  @click="dian()">
        <img src="../../public/shouye/shouye17.jpg" />
      </p>
    </header>
    <div class="xian" v-show="panduan">
      <p>新建课程</p>
      <p>导入课程</p>
    </div>
    <section>
      <div class="flex xiaoxi">
        <p>
          <img src="../../public/shouye/xiaoxi1.jpg" />
        </p>
        <p>通讯录</p>
      </div>
      <router-link to="/shoujian">
      <div class="flex xiaoxi">
        <p>
          <img src="../../public/shouye/xiaoxi2.jpg" style="width:52%;margin-left:-5px;"/>
        </p>
        <p style="color:#2c3e50">收件箱</p>
      </div>
      </router-link>
      <div class="flex xiaoxi">
        <p>
          <img src="../../public/shouye/xiaoxi3.jpg" style="width:52%;margin-left:-3px;"/>
        </p>
        <p>验证信息</p>
      </div>
      <div class="flex xiaoxi">
        <p>
          <img src="../../public/shouye/xiaoxi4.jpg" style="width:52%;margin-left:0px;" />
        </p>
        <p>回复我的</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
return{
  
      panduan:false
}
  },
  methods: {
    dian(){
      this.panduan = !this.panduan
    }

  }
}
</script>

<style>
header{
  width:100%;
  height:60px;
  line-height: 60px;
  border-bottom: 1px solid #e5e5e5;
}.flex{
  display: flex;
}
.xiaoxi>p:nth-child(1)>img{
  width:50%;
  margin-top: 6px;
}
.xiaoxi{
  height:60px;
  line-height: 60px;
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