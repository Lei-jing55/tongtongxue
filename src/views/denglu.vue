<template>
  <div>
      <header style="border:none">
          <div style="position:absolute;right:20px;">客服</div>
          
      </header>
      <div style="text-align:left;margin-left:15px;height:50px;line-height:50px;font-weight:bold;font-size:19px;">登录</div>
      <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
                提交
            </van-button>
         </div>
    </van-form>
    
        <div class="flex denglu1" style="color:#1989fa;font-size:15px;">
            <div style="margin-left:15px;">新用户注册</div>
            <div style="position:absolute;right:10px;">手机号快捷登录</div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
    this.$store.state.yonghuming = this.username
    this.$router.push({
        name:"wo"
    })
    },
  },
};
</script>

<style>
.denglu1{
    font-size:18px;
}
</style>