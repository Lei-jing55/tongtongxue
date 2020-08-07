<template>
  <div>
    <header class="headerone">
      <div style="text-align:left;margin-left:10px;">
        <router-link to="/">
          <img src="../../public/shouye/shouye18.jpg" />
        </router-link>
      </div>
      <div style="margin-top:0px;">报纸</div>
      <div
        style="text-align:right;margin-right:10px;margin-top:-0px;color:#5aabf8;"
        @click="dian()"
      >导航栏目</div>
    </header>
    <div class="xian" v-show="panduan">
      <p>新建小组</p>
      <p>新建文件夹</p>
      <p>批量编辑</p>
    </div>
    <section>
      <div>
        <van-search v-model="value" placeholder="搜索" />
      </div>
    </section>
    <footer>
      <van-tree-select height="100%" :items="items" :main-active-index.sync="active">
        <template #content>
          <div v-if="active === 0">
            <div class="zishiyin flex" v-for="(item,index) in tuijian" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name}}</p>
              </div>
              <button>收藏</button>
            </div>
          </div>
          <div v-if="active === 1">
            <div class="zishiyin flex" v-for="(items,index) in tuijian1" :key="index">
              <div>
                <img :src="items.img" />
              </div>
              <div>
                <p>{{items.name2}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 2">
            <div class="zishiyin flex" v-for="(item,index) in tuijian" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 3">
            <div class="zishiyin flex" v-for="(item,index) in tuijian1" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name2}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 4">
            <div class="zishiyin flex" v-for="(item,index) in tuijian" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 5">
            <div class="zishiyin flex" v-for="(item,index) in tuijian1" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name2}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 6">
            <div class="zishiyin flex" v-for="(item,index) in tuijian" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 7">
            <div class="zishiyin flex" v-for="(item,index) in tuijian1" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name2}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 8">
            <div class="zishiyin flex" v-for="(item,index) in tuijian" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 9">
            <div class="zishiyin flex" v-for="(items,index) in tuijian1" :key="index">
              <div>
                <img :src="items.img" />
              </div>
              <div>
                <p>{{items.name2}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 10">
            <div class="zishiyin flex" v-for="(item,index) in tuijian" :key="index">
              <div>
                <img :src="item.img" />
              </div>
              <div>
                <p>{{item.name}}</p>
              </div>
            </div>
          </div>
        </template>
      </van-tree-select>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      items: [
        {
          text: "北京"
        },
        {
          text: "上海"
        },
        {
          text: "天津"
        },
        {
          text: "广东"
        },
        {
          text: "浙江"
        },
        {
          text: "江苏"
        },
        {
          text: "福建"
        },
        {
          text: "湖北"
        },
        {
          text: "辽宁"
        },
        {
          text: "吉林"
        },
        {
          text: "四川"
        },
        {
          text: "湖南"
        }
      ],
      activeId: 1,
      activeIndex: 0,
      panduan: false,
      value: "",
      tuijian:[
        {
          img:require('../../public/shouye/baozhi1.jpg'),
          name:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi1.jpg'),
          name:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi1.jpg'),
          name:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi1.jpg'),
          name:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi1.jpg'),
          name:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi1.jpg'),
          name:"科技日报"
        }
      ],
      tuijian1:[
        {
          img:require('../../public/shouye/baozhi2.jpg'),
          name2:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi2.jpg'),
          name2:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi2.jpg'),
          name2:"科技日报",
        },
        {
          img:require('../../public/shouye/baozhi2.jpg'),
          name2:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi2.jpg'),
          name2:"科技日报"
        },
        {
          img:require('../../public/shouye/baozhi2.jpg'),
          name2:"科技日报"
        }
      ]
    };
  },
  methods: {
    dian() {
      this.panduan = !this.panduan;
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex;
}
.zishiyin img {
  width: 50%;
}
.zishiyin{
  width:100%;
  border-bottom: 1px solid #9999;
  padding:5px 0 5px 0;
}
.zishiyin div:nth-child(2)>p{
  text-align: left;
  margin-left: -15px;
  margin-top:30px;
}
.zishiyin button{
        border-radius: 5px;
    background: white;
    color: #5aabf8;
    border: 1px solid #5aabf8;
    width: 60px;
    height: 30px;
    margin-top: 25px;
    margin-left: 10px;
}
</style>