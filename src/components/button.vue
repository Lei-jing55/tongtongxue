<template>
  <div class="flex button">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="wap-home-o" size="40"><router-link to="/" tag="span">首页</router-link></van-tabbar-item>
            <van-tabbar-item icon="chat-o" size="40"><router-link to="/xiaoxi"  tag="span">信息呀</router-link></van-tabbar-item>
            <van-tabbar-item icon="records" size="40"><router-link to="/biji"  tag="span">笔记</router-link></van-tabbar-item>
            <van-tabbar-item icon="contact" size="40"><router-link to="/wo"  tag="span">我的</router-link></van-tabbar-item>
        </van-tabbar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      shouye:[]
    };

  },
  // created() {
  //   this.$http.get("https://www.fastmock.site/mock/50a7d0f6b3fd6f025d438d893bb86f7d/shuye/api/shouye").then((response) => {
  //      console.log(response.data)
  //      this.shouye = response.data.data.button
  //   })
  // },
};
</script>

<style>
*{
    margin: 0;
    padding:0;
}
</style>