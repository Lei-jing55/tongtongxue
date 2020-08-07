<template>
  <ul>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      <li class="flex">
          <div><img src="../../public/shouye/13.jpg"></div>
          <div>
              <p>绝句创作的方法</p>
              <p style="color:#999999;">古田</p>
          </div>
          <div><button>收藏</button></div>
      </li>
      
  </ul>
</template>

<script>
export default {
    data(){
    return{
        // shou:[
        //     {
        //         img:"../../public/shouye/13.jpg",
        //         text:"绝句创作的方法",
        //         text1:"古田"
        //     }
        // ]
    }
    }
}
</script>

<style>
。flex{
    display: flex;
}
ul li{
    list-style: none;
    margin-top: 10px;
    position: relative;
}
ul li img{
    width:55%;
    
}
ul li>div:nth-child(2){
    text-align: left;
}
ul li>div:nth-child(2)>P{
    margin-top: 5px;;
}
ul li>div:nth-child(3){
    position: absolute;
    right:10px;
    top:10px;
}
ul li>div:nth-child(3)>button{
    border-radius: 5px;
    background: white;
    color:#5aabf8;
    border:1px solid #5aabf8;
    width:80px;
    height:30px;
}
</style>