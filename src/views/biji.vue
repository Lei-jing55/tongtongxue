<template>
  <div>
    <header>
       <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      <p style="position:absolute;right:0;top:6px;"  @click="dian()">
        <img src="../../public/shouye/biji1.jpg" />
      </p>
    </header>
    <section>
      <van-search v-model="value" placeholder="搜索" />
      <div class="flex biji">
        <p><img src="../../public/shouye/biji2.jpg" /></p>
        <p style="margin-top:8px;">笔记本</p>
        <p style="position:absolute;right:40px;"><img src="../../public/shouye/biji5.jpg" /></p>
        <p style="position:absolute;right:0px;"><img src="../../public/shouye/bijisan.jpg" /></p>
      </div>
    </section>
    <footer>

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
        { text: "我的", value: 0 },
        { text: "笔记本", value: 1 },
        { text: "关注", value: 2 }
      ],
      panduan:false
    };
  }
};
</script>

<style>
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
</style>