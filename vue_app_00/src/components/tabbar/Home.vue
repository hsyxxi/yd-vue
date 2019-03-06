<template>
  <div class="app-home">
    <!--顶部导航条 -->
    <div class="search">
      <div class="searchBox">
        <input type="text" placeholder="请输入搜索内容">
        <span class="mui-icon mui-icon-search searchIcon"></span>
      </div>
      <div class="textSearch">
        <ul>
          <li class="changeC">精选</li>
          <li class="fDogFoot changeC">进口狗粮</li>
          <li class="changeC">特殊狗粮</li>
          <li class="changeC">强化免疫</li>
          <li class="changeC">驱虫助手</li>
          <li class="changeC">黑科技</li>
        </ul>
      </div>
    </div>
    <!--轮播图-->
    <mt-swipe>
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url">
      </mt-swipe-item>
    </mt-swipe>
    <!--5宫格-->
    <ul class="iconList">
      <li v-for="item in iconList" :key="item.id">
        <router-link to=""> 
          <img :src="item.icons_url" />
        </router-link>
      </li>
    </ul> 
    <!--新人专享-->
    <ul class="newList">
      <li v-for="item in newList" :key="item.id">
        <router-link to=""> 
          <img :src="item.link_url" />
        </router-link>
      </li>
    </ul>
    <div class="bannerLineOne">
      <img src="http://127.0.0.1:3000/img/bannerLine/bannerLine1.gif" alt="">
    </div>
    <!--每日疯抢-->
    <div class="crazyBuy">
      <div class="crazyBuyTitle">
        <div class="cbTitle">
          <img src="http://127.0.0.1:3000/img/bannerLine/iconSmall1.png" alt="">
          <span class="clock11">11点场</span>
          <span class="cbNow">正在疯抢</span>
        </div>
        <div class="cbTitle">
          <img src="http://127.0.0.1:3000/img/bannerLine/iconSmall2.png" alt="">
        </div>
      </div>
      <div class="cbPro">
        <ul class="">
          <li v-for="item in cbList" :key="item.id">
            <router-link to=""> 
              <img :src="item.cb_url" class="cbProImg" />
              <p class="proSaleP">￥{{item.sale}}</p>
              <p class="proPrice">￥{{item.price}}</p>
            </router-link>
          </li>
        </ul>  
      </div>
    </div>
    <!--品牌特卖-->
    <div class="spSales">
      <div class="specialSaleTitle">
        <img src="http://127.0.0.1:3000/img/bannerLine/specialSale.png" alt="" class="pinpai">
        <img src="http://127.0.0.1:3000/img/bannerLine/into.png" alt="" class="into">
      </div>
      <div class="spSalePic">
        <img class="pic1" src="http://127.0.0.1:3000/img/spSale/spSale1.1.jpg" alt="">
        <img class="pic2" src="http://127.0.0.1:3000/img/spSale/spSale1.2.jpg" alt="">
        <img class="pic2" src="http://127.0.0.1:3000/img/spSale/spSale1.3.jpg" alt="">
      </div>
    </div>
    <!--E宠国际-->
    <div class="elove">
      <img src="http://127.0.0.1:3000/img/bannerLine/elove.png" alt="" class="pinpai">
      <img src="http://127.0.0.1:3000/img/bannerLine/into.png" alt="" class="into">
    </div>
    <!--E宠轮播图-->
    <div class="elovePic">
      <mt-swipe>
        <mt-swipe-item v-for="item in eloveList" :key="item.id">
          <img :src="item.img_url">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--新品馆-->
    <div class="eloveTitle">
      <img src="http://127.0.0.1:3000/img/bannerLine/newProduct.png" alt="" class="pinpai">
      <img src="http://127.0.0.1:3000/img/bannerLine/into.png" alt="" class="into">
    </div>
    <div class="newProduct">
      <img src="http://127.0.0.1:3000/img/bannerLine/new.png" alt="">
      <div class="npText">
        <div class="npImg">
          <img :src="npList[0].np_url" alt="">
          <div class="npPri">
            <p class="p1">{{npList[0].ptitle}}</p>
            <span class="sp1">{{npList[0].psTitle1}}</span>
            <span class="sp2">{{npList[0].psTitle2}}</span>
            <p class="p4">{{npList[0].psTitle3}}</p>
            <span class="sp3">￥{{npList[0].newPrice}}</span>
            <span class="sp4">上新价</span>
            <p class="p7">E宠价：￥{{npList[0].price}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--新品+周刊-->
    <div class="newAndBook">
      <img src="http://127.0.0.1:3000/img/bannerLine/newSale.jpg" alt="">
      <img src="http://127.0.0.1:3000/img/bannerLine/newBook.jpg" alt="">
    </div>
    <!--猜你喜欢-->
    <div class="mayBeTitle">
      <img src="http://127.0.0.1:3000/img/bannerLine/mayBe.png" alt="">
    </div>
    <ul class="mayBeList">
      <li v-for="item in productList" :key="item.id">
        <router-link :to='"/details?pid="+item.pid'> 
          <img class="proImgB" :src="item.purl" />
          <p class="proTitle">{{item.pname}}</p>
          <p class="proPri">￥{{item.price}}</p>
          <img class="carImg" src="http://127.0.0.1:3000/img/bannerLine/car.png" alt="">
        </router-link>
      </li>
    </ul> 
    <!--页尾-->
    <div class="foot">
      <ul>
        <li class="cp">触屏版</li>
        <li>手机客户端</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
    </div>
    <div class="copy">
      <p>© wap.epet.com 版权：重庆易宠科技有限公司</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      iconList:[],
      newList:[],
      eloveList:[],
      cbList:[],
      npList:[{np_url:""}],
      productList:[]
    };
  },
  methods: {
    handleImage() {
      var url = "http://127.0.0.1:3000/imageList";
      this.axios.get(url).then(result => {
        this.list = result.data;
      });
    },
    iconImage() {
      var url = "http://127.0.0.1:3000/iconList";
      this.axios.get(url).then(result => {
        this.iconList = result.data;
      });
    },
    newImage() {
      var url = "http://127.0.0.1:3000/newLink";
      this.axios.get(url).then(result => {
        this.newList = result.data;
      });
    },
    cbBuy() {
      var url = "http://127.0.0.1:3000/crazyBuy";
      this.axios.get(url).then(result => {
        this.cbList = result.data;
      });
    },
    eloveImage() {
      var url = "http://127.0.0.1:3000/eLoveList";
      this.axios.get(url).then(result => {
        this.eloveList = result.data;
      });
    },
    newPro() {
      var url = "http://127.0.0.1:3000/newPro";
      this.axios.get(url).then(result => {
        this.npList = result.data;
      });
    },
    proList(){
      var url = "http://127.0.0.1:3000/proList";
      this.axios.get(url).then(result => {
        this.productList = result.data;
      });
    },
    headScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if(scrollTop>1){
        document.querySelector('.search').setAttribute('style','background-color:#fff');
        document.querySelector('.textSearch>ul').setAttribute('style','color:rgb(51, 51, 51)')
      }
      if(scrollTop<1){
        document.querySelector('.search').setAttribute('style','background-color:transparent');
        document.querySelector('.textSearch>ul').setAttribute('style','color:#fff')
      }
    },
  },
  created() {
    this.handleImage();
    this.iconImage();
    this.newImage();
    this.cbBuy();
    this.eloveImage();
    this.newPro();
    this.proList();
  },
  mounted() {
    window.addEventListener('scroll', this.headScroll)
  },
  destroyed(){
    window.removeEventListener('scroll', this.headScroll);//监听页面滚动事件
  },
};
</script>
<style>
.app-home{
  background-color: #fff;
}
/*搜索栏*/
.search{
  width: 100%;
  height: 105px;
  position: fixed;
  top:0px;
  z-index: 999;
}
.searchBox{
  width: 100%;
  height: 55px;
  padding:25px 15px 0 15px; 
}
.searchBox input{
  border-radius: 30px;
  background-color:rgba(255,255,255,0.8);
  color: #333;
  height: 30px;
  width: 85%;
  font-size: 12px;
  margin: 0;
  margin-right:10px; 
}
.searchIcon{
  vertical-align: middle;
}
.textSearch{
  width: 135%;
}
.textSearch ul{
  width: 135%;
  height: 44px;
  margin: 0;
  padding: 0;
  color: #fff;
}
.textSearch ul li{
  float: left;
  list-style: none;
  font-size: 14px;
  display: inline-block;
  width: 12%;
  line-height: 44px;
  vertical-align: middle;
  text-align: center;
}
.fDogFoot{
  font-size: 20px !important;
  font-weight: 700;
}
/*轮播图*/
.app-home .mint-swipe {
  height: 276px;
}
.app-home .mint-swipe img {
  width: 100%;
}
/*五宫格*/
.iconList{
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  position: absolute;
  top:250px;
}
.iconList>li{
  width:20%;
}
.iconList>li img{
  width: 100%;
}
/*新人专享*/
.newList{
  list-style: none;
  padding-left: 0;
  margin: 0;
  margin-top:90px ;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
}
.newList>li{
  width: 33.333%;
}
.newList>li img{
  width: 100%;
}
/*团圆banner*/
.bannerLineOne img{
  width: 100%;
  height: 80px;
}
/*每日疯抢*/
.crazyBuy{
  width: 96%;
  height: 150px;
  margin: 10px auto;
  border-radius: 10px;
  box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
}
.crazyBuyTitle{
  width: 100%;
  height: 25px;
}
.cbTitle{
  width: 50%;
  box-sizing: border-box;
  display: inline-block;
  float: left;
  padding:12px 5px 0px 10px;
}
.cbTitle img{
  width: auto;
  height: 16px;
  float: left;
  vertical-align: middle;
}
.clock11,.cbNow{
  width: 40px;
  height: 20px;
  vertical-align: middle;
  font-size: 7px;
}
.clock11{
  color: #fff;
  background-color: #fb4752;
}
.cbNow{
  color: #333;
  border:1px solid #fb4752;
}
.cbPro{
  width: 100%;
  height: 120px;
}
.cbPro>ul{
  width: 96%;
  height: 120px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  padding: 0;
  margin: 0 auto;
}
.cbPro>ul>li{
  width: 25%;
  height: 95px;
  text-align: center;

}
.cbProImg{
  width: 59px;
  height: 59px;
}
.proSaleP{
  color: rgb(240, 62, 62);
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  line-height: 20px;
}
.proPrice{
  color: #999;
  font-size: 12px;
  line-height: 18px;
  text-decoration:line-through
}
/*品牌特卖*/
.spSales{
  height: 395px;
  width: 100%;
}
.specialSaleTitle{
  width: 100%;
  height: 26px;
}
.pinpai{
  width: auto;
  height: 19px;
  display: inline-block;
  float: left;
  margin-left: 10px;
}
.into{
  width: auto;
  height: 22px;
  display: inline-block;
  float: right;
  margin-right: 10px;
}
.spSalePic{
  width: 100%;
  height: 351.5px;
}
.pic1{
  width: 96%;
  height: auto;
}
.pic2{
  width: 46%;
  height: auto;
}
/*E宠国际轮播图*/
.elovePic .mint-swipe {
  height: 215px;
  width: 95%;
  margin: 0 auto;
  padding-top:15px;
}
.elovePic .mint-swipe img {
  width: 100%;
  border-radius: 15px;
}
.eloveTitle{
  width: 100%;
}
/*新品馆*/
.eloveStore{
  width: 100%;
  height: 200px;
}
.newProduct{
  width: 94%;
  height: 150px;
  margin: 35px auto;
  border-radius: 10px;
  box-shadow: 0 1px 20px 0 rgba(0,0,0,0.2);
  position: relative;
}
.newProduct>img{
  width: auto;
  height: 28px;
  float: left;
}
.npText{
  width: 80%;
  height: 115px;
  position: absolute;
  top:0px;
  right:0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
}
.npImg{
  width: 100%;
  height: 110px;
}
.npImg>img{
  width: 35%;
  height: 100%;
  float: left;
  box-sizing: border-box;
}
.npPri{
  width: 65%;
  height: 100%;
  float: left;
  box-sizing: border-box;
}
.npPri>p{
  display: inline;
  text-align: left;
  margin: 0;
}
.npPri>.p1{
  color: #333;
  font-size: 14px;
  overflow: hidden;
  width: 100%;
}
.npPri>.sp1,.npPri>.sp2{
  width: 60px;
  height: 16px;
  font-size: 12px;
  background-color: #f03e3e;
  border-radius: 20px;
  color: #fff;
  float: left;
  vertical-align: middle;
  line-height: 16px;
}
.npPri>.p4,.npPri>.p7{
  color: #333;
  font-size: 14px;
  width: 100%;
  display: inline-block;
}  
.npPri>.p4{
  margin-top: 8px;
}
.npPri>.sp3,.npPri>.sp4{
  float: left;
}
.npPri>.sp3{
  color: #f03e3e;
  font-weight: 700;
  font-size: 14px;
  margin-right:10px; 
}
.npPri>.sp4{
  font-size: 12px;
  border: 1px solid #333;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  line-height: 16px;
}
.npPri>.p5{
  font-size: 14px;
  color: #f03e3e;
  font-weight: 700;
  width: 100%;
  display: inline-block;
}
/*新品+周刊*/
.newAndBook{
  width: 100%;
  height: 150px;
}
.newAndBook img{
  width: 49.9%;
  height: auto;
  float: left;
}
/*猜你喜欢*/
.mayBeTitle{
  width: 100%;
  height: 16px;
  margin:15px 0px;
  background-color: #fff;
}
.mayBeTitle>img{
  width: auto;
  height: 16px;
  float: left;
  margin-left:5px; 
}
/*猜你喜欢*/
.mayBeList{
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  background-color: #fff;
  padding: 0px 15px;

}
.mayBeList>li{
  width:47%;
  text-align: center;
  height: 205.5px;
  position: relative;
  margin: 15px 0px;
  border: 1px solid rgba(33,33,33,0.1);
}
.mayBeList>li .proImgB{
  width: 70%;
}
.mayBeList>li .proTitle{
  color: #333;
  font-size: 12px;
  height: 42px;
}
.mayBeList>li .proPri{
  color: #f03e3e;
  font-size: 14px;
  font-weight: 700;
}
.mayBeList>li .proPri,.proTitle{
  text-align: left;
  padding-left: 10px;
  margin: 0;
}
.carImg{
  width: 26px;
  height: 26px;
  position: absolute;
  right: 0px;
  bottom: 10px;
}
/*页尾*/
.foot{
  width: 100%;
  height: 22px;
  margin-top:15px; 
}
.foot>ul{
  padding: 0px;
  margin: 0px;
  text-align: center;
}
.foot>ul>li{
  list-style: none;
  display: inline;
  z-index: 999;
  font-size: 14px;
}
.cp{
  color: #f03e3e;
}
.copy>p{
  font-size: 12px;
  text-align: center;
  color: #000;
  padding-bottom: 25px;
}
</style>

