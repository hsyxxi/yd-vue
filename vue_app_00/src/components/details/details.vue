<template>
    <div class="app-details">
        <!--顶部title-->
        <div class="headTitle">
            <div>
                <img src="http://127.0.0.1:3000/img/bannerLine/jt.png" alt="">
            </div>
            <div class="hdtit">
                <span>商品</span>
                <span>详情</span>
                <span>评价</span>
            </div>
            <div>
                <img src="" alt="">
            </div>
            <div>
                <img src="" alt="">
            </div>
        </div>
        <!--主图-->
        <div class="proPicBig">
            <img :src="delList.pburl" alt="">
            <span class="numIcon">1/5</span>
        </div>
        <!--商品标题-->
        <div class="proTit">
            <p>{{delList.pname}}</p>
            <p>{{delList.psname}}</p>
        </div>
        <!--价格-->
        <div class="proPri">
            <p>￥</p>
            <p>{{delList.price}}</p>
            <p>￥{{delList.pbrice}}</p>
            <img src="http://127.0.0.1:3000/img/bannerLine/zp.png" alt="">
        </div>
        <!--数量-->
        <div class="proNum">
            <p>购买数量</p>
            <div class="probut">
                <span>-</span>
                <input type="text">
                <span>+</span>
            </div>
        </div>
        <!--配送-->
        <div>
            <div>
                <span></span>
                <img src="" alt="">
                <span></span>
                <span></span>
            </div>
            <div>
                <span>
                    <img src="" alt="">
                    <span></span>
                </span>
                <span>
                    <img src="" alt="">
                    <span></span>
                </span>
                <span>
                    <img src="" alt="">
                    <span></span>
                </span>
            </div>
        </div>
        <!--评价-->
        <div>
            <div>
                <p></p>
                <span></span>
                <span></span>
            </div>
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div>
                <button></button>
                <button></button>
            </div>
        </div>
        <!--品牌-->
        <div>
            <div>
                <img src="" alt="">
                <p></p>
                <p></p>
                <span>
                    <img src="" alt="">
                    <span></span>
                </span>
            </div>
            <div>
                <span>
                    <p></p>
                    <p></p>
                </span>
                <span>
                    <p></p>
                    <p></p>
                </span>
                <span>
                    <p></p>
                    <p></p>
                </span>
            </div>
        </div>
        <div>
            <button></button>
            <button></button>
        </div>
        <!--查看详情-->
        <div>
            <span></span>
        </div>
        <!--底部导航-->
        <div>
            <div></div>
            <div></div>
            <button></button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            delList:[]
        }
    },
    methods:{
        del(){
            var pid=this.$route.query.pid;
            var url = "http://127.0.0.1:3000/details?pid="+pid;
            this.axios.get(url).then(result => {
                this.delList = result.data.data[0];
                console.log(this.delList);
            });
        },
    },
    created() {
        this.del();
    }
}
</script>
<style>
.app-details{
    background-color: #fff;
}
/*头部*/
.headTitle{
    width: 100%;
    height:50px;
}
.headTitle>div:first-child{
    display: inline-block;
}
.headTitle>div:first-child>img{
    width: 35px;
    height: 35px;
    text-align: center;
    vertical-align: middle;
}
.hdtit{
    font-size: 18px;
    color:#333;
    vertical-align: middle;
    line-height: 50px;
    display: inline-block;
}
/*主图*/
.proPicBig{
    width: 100%;
    height: auto;
    position: relative;
}
.proPicBig>img{
    width: 100%;
    height: auto;
}
.numIcon{
    position: absolute;
    bottom: 10px;
    right:10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    margin: 0 auto;
    color: #fff;
    font-size: 1px;
}
/*商品标题*/
.proTit{
    width: 100%;
}
.proTit>p{
    margin: 0;
    padding: 0 10px;
}
.proTit>p:first-child{
    font-size: 13px;
    color: #333;
}
.proTit>p:last-child{
    color: #e75656;
    font-size: 12px;
    padding-bottom:5px;
    border-bottom: 1px solid #e5e5e5;
}
/*价格*/
.proPri{
    width: 100%;
    padding: 10px 10px;
}
.proPri>p{
    display: inline-block;
    margin: 0;
}
.proPri>p:first-child{
    font-size: 12px;
    color: #ea5858;
}
.proPri>p:nth-child(2){
    color: #ea5858;
    font-size: 20px;
    font-weight: 700;
}
.proPri>p:nth-child(3){
    font-size: 13px;
    color: #333;
    text-decoration:line-through;
    margin-left:7px; 
}
.proPri>img{
    width: auto;
    height: 25px;
    float: right;
}
/*购买数量*/
.proNum{
    width: 100%;
    height: 32px;
    margin: 10 0px;
    font-size: 0;
}
.proNum>p{
    display: inline-block;
    margin-left: 10px;
    color: #333;
    font-size: 13px;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    line-height: 30px;
}
.probut{
    display: inline-block;
    width: 108px;
    height: 30px;
    margin: 0 10px;
}
.probut>span{
    width: 28px;
    height: 30px;
    line-height: 28px;
    vertical-align: middle;
    color: #333;
}
.probut>input{
    width: 48px;
    height: 30px;
}
.probut>input,.probut>span{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    float: left;
    border: 1px solid #999;
    display: inline-block;
}
.probut>span:last-child{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}
.probut>span:first-child{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
</style>

