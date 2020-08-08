<template>
  <div>
    <div class="shuxiang">
      <div style="margin-left:10px;">
        <router-link to="/">
          <van-icon name="arrow-left" size="30px" color="#2c3e50"/>
        </router-link>
      </div>
      <div style="margin-top:0px;margin-left:100px;">书香战“疫”</div>
    </div>
    <section>
      <div class="shuxiang1" >
        <van-search v-model="value" placeholder="搜索" />
      </div>
      <ul class="flex body_one">
        <router-link to="/wodekecheng">
          <li>
            <p>
              <img src="../../public/shouye/shuxiang1.jpg" />
            </p>
            <p style="color:#2c3e50;">问卷调查</p>
          </li>
        </router-link>
        <router-link to="/wodexiaozu">
        <li>
          <p>
            <img src="../../public/shouye/shuxiang2.jpg" />
          </p>
          <p style="color:#2c3e50;">成果荟萃</p>
        </li>
        </router-link>
         <router-link to="/qikan">
        <li>
          <p>
            <img src="../../public/shouye/shuxiang3.jpg" />
          </p>
          <p  style="color:#2c3e50;">馆员获奖名单</p>
        </li>
        </router-link>
        <router-link to="/tushu">
        <li>
          <p>
            <img src="../../public/shouye/shuxiang4.jpg" />
          </p>
          <p style="color:#2c3e50;">师生获奖名单</p>
        </li>
        </router-link>
      </ul>
      <ul class="flex body_one">
        <router-link to="/baozhi">
        <li>
          <p>
            <img src="../../public/shouye/shuxiang5.jpg" />
          </p>
          <p style="color:#2c3e50;">答题战“疫”</p>
        </li>
        </router-link>
        <router-link to="/jiangzuo">
        <li>
          <p>
            <img src="../../public/shouye/shuxiang6.jpg" />
          </p>
          <p  style="color:#2c3e50;">活动手册</p>
        </li>
        </router-link>
         <router-link to="/jiangtan">
            <li>
              <p>
                <img src="../../public/shouye/shuxiang7.jpg" />
              </p>
              <p style="color:#2c3e50;">名师讲坛</p>
            </li>
        </router-link>
         <router-link to="/jidian">
        <li>
          <p>
            <img src="../../public/shouye/shuxiang8.jpg" />
          </p>
          <p style="color:#2c3e50;">移动的图书馆</p>
        </li>
        </router-link>
      </ul>
      <div style="margin-top:20px;">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>            
            <img src="../../public/shouye/shuxiang9.jpg" width="100%"/>
          </van-swipe-item>
          <van-swipe-item>            
            <img src="../../public/shouye/shuxiang10.jpg" width="100%"/>
          </van-swipe-item>
          <van-swipe-item>            
            <img src="../../public/shouye/shuxiang11.jpg" width="100%"/>
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>
    <footer>
      <van-tabs v-model="active">
        <van-tab title="专题">
          <shouye1></shouye1>
        </van-tab>
        <van-tab title="图书">
          <shouye2></shouye2>
        </van-tab>
        <van-tab title="期刊">
          <shouye3></shouye3>
        </van-tab>
        <van-tab title="讲座">
          <shouye4></shouye4>
        </van-tab>
      </van-tabs>
    </footer>
  </div>
</template>

<script>
import shouye1 from "@/components/shouye1.vue";
import shouye2 from "@/components/shouye2.vue";
import shouye3 from "@/components/shouye3.vue";
import shouye4 from "@/components/shouye4.vue";

export default {
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      option1: [
        { text: "益阳职业技术学院", value: 0 },
        { text: "首页", value: 1 },
        { text: "益阳职业技术学院", value: 2 }
      ],
      suju: [],
      active: 0
    };
  },
  mounted() {
    // this.axios
    //   .get(
    //     "https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html"
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //   });

    this.$http.get("https://elm.cangdu.org/v1/cities/1").then(response => {
      console.log(response.data);
      this.suju = response.data;
    });
  },
  components: {
    shouye1,
    shouye2,
    shouye3,
    shouye4
  }
};
</script>

<style scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    /* line-height: 100px; */
    text-align: center;
    background-color: #39a9ed;
  }
.shuxiang {
  display: flex;
  height: 60px;
  width: 100%;
  background: white;
  z-index: 3;
  line-height: 60px;
}
.shuxiang img {
  width: 40%;
}
.shuxiang > div {
  /* flex: 1; */
  margin-top: 10px;
}
.shuxiang > img:nth-child(1) {
  text-align: left;
}
.shuxiang > img:nth-child(3) {
  right: 0;
}
.van-dropdown-menu__bar {
  box-shadow: 0 0px 0px !important;
}
.flex {
  display: flex;
}
.body_one img {
  width: 50%;
}
.body_one {
  font-size: 13px;
}
.body_one li {
  text-align: center;
}
.shuxiang1{
  background: #90b6e7;
  padding:10px 10px 10px 10px;
}
</style>