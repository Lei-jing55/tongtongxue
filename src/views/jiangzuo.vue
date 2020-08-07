<template>
  <div>
    <header class="headerone">
      <div style="text-align:left;margin-left:10px;">
        <router-link to="/">
          <img src="../../public/shouye/shouye18.jpg" />
        </router-link>
      </div>
      <div style="margin-top:0px;">期刊</div>
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
                <p>{{item.name1}}</p>
              </div>
            </div>
          </div>
          <div v-if="active === 1">
            <div class="zishiyin flex" v-for="(items,index) in tuijian1" :key="index">
              <div>
                <img :src="items.img" />
              </div>
              <div>
                <p>{{items.name2}}</p>
                <p>{{items.name3}}</p>
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
                <p>{{item.name1}}</p>
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
                <p>{{item.name3}}</p>
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
                <p>{{item.name1}}</p>
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
                <p>{{item.name3}}</p>
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
                <p>{{item.name1}}</p>
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
                <p>{{item.name3}}</p>
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
                <p>{{item.name1}}</p>
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
                <p>{{items.name3}}</p>
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
                <p>{{item.name1}}</p>
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
          text: "推荐"
        },
        {
          text: "EPUB"
        },
        {
          text: "文学"
        },
        {
          text: "历史"
        },
        {
          text: "哲学"
        },
        {
          text: "艺术"
        },
        {
          text: "经管"
        },
        {
          text: "政法"
        },
        {
          text: "社科"
        },
        {
          text: "军事"
        },
        {
          text: "理学"
        },
        {
          text: "工学"
        }
      ],
      activeId: 1,
      activeIndex: 0,
      panduan: false,
      value: "",
      tuijian:[
        {
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        },
        {
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        },
        {
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        },
        {
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        },
        {
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        },
        {
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        },
        {
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        },{
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        },
        {
          img:require('../../public/shouye/jiangzuo.jpg'),
          name:"超星名师讲坛·沈毅裴",
          name1:"沈毅裴,复旦大学"
        }
      ],
      tuijian1:[
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        },
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        },
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        },
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        },
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        },
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        },
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        },
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        },
        {
          img:require('../../public/shouye/jiangzuo2.jpg'),
          name2:"中国机械工程...",
          name3:"北京大学"
        }
      ]
    };
  },
  methods: {
    dian() {
      this.panduan = !this.panduan;
    }
  },
};
</script>

<style scoped>
.flex {
  display: flex;
}
.zishiyin img {
  width: 50%;
  margin-left:-20px;
}
.zishiyin{
  width:100%;
  border-bottom: 1px solid #9999;
  padding:0px 0 5px 0;
}
.zishiyin div:nth-child(2){
  text-align: left;
  margin-left: -10px;
  margin-top:20x;

}
.zishiyin p:nth-child(2){
  color:#9999;
  font-size:13px !important;
}
</style>