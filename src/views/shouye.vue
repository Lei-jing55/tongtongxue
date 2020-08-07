<template>
  <div>
    <header style="position: fixed;top:0;">
      <div>
        <img src="../../public/shouye/shouye1.png" />
      </div>
      <div>
        <van-dropdown-menu style="width:200px;border:none;box-shadow: 0 0 0px;">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div>
        <img src="../../public/shouye/shouye2.png" />
      </div>
    </header>
    <div style="height:60px;"></div>
    <section>
      <div>
        <van-search v-model="value" placeholder="搜索" />
      </div>
      <ul class="flex body_one">
        <router-link to="/wodekecheng">
          <li>
            <p>
              <img src="../../public/shouye/shouye3.jpg" />
            </p>
            <p style="color:#2c3e50;">我的课堂</p>
          </li>
        </router-link>
        <router-link to="/wodexiaozu">
        <li>
          <p>
            <img src="../../public/shouye/shouye4.jpg" />
          </p>
          <p style="color:#2c3e50;">我的小组</p>
        </li>
        </router-link>
         <router-link to="/qikan">
        <li>
          <p>
            <img src="../../public/shouye/shouye5.jpg" />
          </p>
          <p  style="color:#2c3e50;">期刊</p>
        </li>
        </router-link>
        <router-link to="/tushu">
        <li>
          <p>
            <img src="../../public/shouye/shouye6.jpg" />
          </p>
          <p style="color:#2c3e50;">图书</p>
        </li>
        </router-link>
      </ul>
      <ul class="flex body_one">
        <router-link to="/baozhi">
        <li>
          <p>
            <img src="../../public/shouye/shouye7.jpg" />
          </p>
          <p style="color:#2c3e50;">报纸</p>
        </li>
        </router-link>
        <router-link to="/jiangzuo">
        <li>
          <p>
            <img src="../../public/shouye/shouye8.jpg" />
          </p>
          <p  style="color:#2c3e50;">讲座</p>
        </li>
        </router-link>
         <router-link to="/gongcheng">
        <li>
          <p>
            <img src="../../public/shouye/shouye9.jpg" />
          </p>
          <p style="color:#2c3e50;">汽车工程</p>
        </li>
        </router-link>
         <router-link to="/jidian">
        <li>
          <p>
            <img src="../../public/shouye/shouye10.jpg" />
          </p>
          <p style="color:#2c3e50;">机电工程</p>
        </li>
        </router-link>
      </ul>
      <ul class="flex body_one">
        <li style="width:93px;">
          <p>
            <img src="../../public/shouye/shouye11.jpg" />
          </p>
          <p>书香战“疫”</p>
        </li>
      </ul>
      <div style="margin-top:10px;">
        <img src="../../public/shouye/shouye12.jpg" width="100%" />
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

<style >
header {
  display: flex;
  height: 60px;
  width: 100%;
  background: white;
  z-index: 3;
}
header img {
  width: 40%;
}
header > div {
  flex: 1;
  margin-top: 10px;
}
header > img:nth-child(1) {
  text-align: left;
}
header > img:nth-child(3) {
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
</style>