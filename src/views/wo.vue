<template>
  <div>
      <header style="justify-content:center;">我</header>
      <section class="wode2">
        <div class="flex wode1" @click="denglu()">
          <p style=""><img src="../../public/shouye/wode1.jpg" alt="" width="70px"></p>
          <p style="text-align:left;margin-left:10px;">{{this.$store.state.yonghuming}}</p>
          <p><img src="../../public/shouye/wode2.jpg" alt="" width="70px"></p>

        </div>
        <div class="flex wode3">
          <p style=""><img src="../../public/shouye/wode3.jpg" alt="" width="50px"></p>
          <p style="text-align:left;margin-left:10px;">代办事项</p>
          <p><img src="../../public/shouye/wodei4.jpg" alt="" width="50px"></p>
        </div>
        <div style="margin-top:10px;">
          <div class="flex wode3" style="margin-top:0px;">
            <p style=""><img src="../../public/shouye/wode5.jpg" alt="" width="50px"></p>
            <p style="text-align:left;margin-left:10px;">课程</p>
            <p><img src="../../public/shouye/wodei4.jpg" alt="" width="50px"></p>
          </div>

          <div class="flex wode3" style="margin-top:0px;">
            <p style=""><img src="../../public/shouye/wode6.jpg" alt="" width="50px"></p>
            <p style="text-align:left;margin-left:10px;">云盘</p>
            <p><img src="../../public/shouye/wodei4.jpg" alt="" width="50px"></p>
          </div>
          <div class="flex wode3" style="margin-top:0px;">
            <p style=""><img src="../../public/shouye/wode7.jpg" alt="" width="50px"></p>
            <p style="text-align:left;margin-left:10px;">小组</p>
            <p><img src="../../public/shouye/wodei4.jpg" alt="" width="50px"></p>
          </div>
          <div class="flex wode3" style="margin-top:0px;">
            <p style=""><img src="../../public/shouye/wode8.jpg" alt="" width="50px"></p>
            <p style="text-align:left;margin-left:10px;">笔记本</p>
            <p><img src="../../public/shouye/wodei4.jpg" alt="" width="50px"></p>
          </div>
        </div>
        <div class="flex wode3">
            <p style=""><img src="../../public/shouye/wode9.jpg" alt="" width="50px"></p>
            <p style="text-align:left;margin-left:10px;">设置</p>
            <p><img src="../../public/shouye/wodei4.jpg" alt="" width="50px"></p>
          </div>
          <div class="wode4">
            电脑端 i.chaoxing.com
          </div>
      </section>
  </div>
</template>

<script>
export default {
  methods: {
    data(){
      return{
        
      }
    },
    denglu(){
      this.$store.state.yonghuming = ""
      this.$router.push({
        name:"denglu"
      })
    }
  },
}
</script>

<style >
.wode1{
  margin-top: 10px;
  background: white;
}

.wode1>p:nth-child(1){
  text-align:left;
  margin-left:10px;
  width:80px;
  height:70px;
}
.wode1>p:nth-child(2){
  text-align:left;
  margin-left:10px;
  height:70px;
  line-height: 70px;
}
.wode1>p:nth-child(3){
  text-align:left;
  margin-left:10px;
  height:70px;
  line-height: 70px;
  position: absolute;
  right:10px;
}
.wode3{
  margin-top: 10px;
  background: white;
}

.wode3>p:nth-child(1){
  text-align:left;
  margin-left:10px;
  width:80px;
  height:50px;
}
.wode3>p:nth-child(2){
  text-align:left;
  margin-left:10px;
  height:50px;
  line-height: 50px;
}
.wode3>p:nth-child(3){
  text-align:left;
  margin-left:10px;
  height:50px;
  line-height: 50px;
  position: absolute;
  right:10px;
}
.wode2{
  width:100%;
  height:100%;
  background: #f5f6f7;
  padding-bottom: 150px;
  
}
.wode4{
  text-align: center;
  margin-top: 30px;
  color:#c0c0c1;
}
</style>