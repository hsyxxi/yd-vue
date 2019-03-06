//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//6.1:下载 express-session 并且配置
const session = require("express-session");
app.use(session({
  secret:"128位随机字符", //安全字符串
  resave:false,          //每次请求是否都更新数据
  saveUninitialized:true, //初始化时保存数据
  cookie:{
    maxAge:1000 * 60 * 60 * 8
  }
}));


//7:加载第三方模块 body-parser
//body-parser 针对post请求处理请求参数
//如果配置成功 req.body..
const bodyParser = require("body-parser");
//8:配置对特殊 json是否是自动转换 不转换
app.use(bodyParser.urlencoded({extended:false}))


//功能一:组件轮播图片  
app.get("/imageList",(req,res)=>{
    var list = [
      {id:1,img_url:"http://127.0.0.1:3000/img/banner1/banner1.jpg"},
      {id:2,img_url:"http://127.0.0.1:3000/img/banner1/banner2.jpg"},
      {id:3,img_url:"http://127.0.0.1:3000/img/banner1/banner3.png"},
      {id:4,img_url:"http://127.0.0.1:3000/img/banner1/banner4.png"},
      {id:5,img_url:"http://127.0.0.1:3000/img/banner1/banner5.png"}
    ];
    res.send(list); 
});

//功能二:5宫格图片
app.get("/iconList",(req,res)=>{
  var list = [
    {id:1,icons_url:"http://127.0.0.1:3000/img/icons/icon1.png"},
    {id:2,icons_url:"http://127.0.0.1:3000/img/icons/icon2.png"},
    {id:3,icons_url:"http://127.0.0.1:3000/img/icons/icon3.png"},
    {id:4,icons_url:"http://127.0.0.1:3000/img/icons/icon4.png"},
    {id:5,icons_url:"http://127.0.0.1:3000/img/icons/icon5.png"}
  ];
  res.send(list); 
});

//功能三:新人专享
app.get("/newLink",(req,res)=>{
  var list = [
    {id:1,link_url:"http://127.0.0.1:3000/img/link1/link1.png"},
    {id:2,link_url:"http://127.0.0.1:3000/img/link1/link2.png"},
    {id:3,link_url:"http://127.0.0.1:3000/img/link1/link3.png"}
    
  ];
  res.send(list); 
});

//功能四:每日疯抢
app.get("/crazyBuy",(req,res)=>{
  var list = [
    {id:1,cb_url:"http://127.0.0.1:3000/img/crazyBuy/product1.jpg",sale:19.8,price:198},
    {id:2,cb_url:"http://127.0.0.1:3000/img/crazyBuy/product2.jpg",sale:18,price:180},
    {id:3,cb_url:"http://127.0.0.1:3000/img/crazyBuy/product3.jpg",sale:49,price:80},
    {id:4,cb_url:"http://127.0.0.1:3000/img/crazyBuy/product4.jpg",sale:65,price:136}
  ];
  res.send(list); 
});

//功能五:E宠国际；轮播图
app.get("/eLoveList",(req,res)=>{
  var list = [
    {id:1,img_url:"http://127.0.0.1:3000/img/banner2/banner1.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/banner2/banner2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/banner2/banner3.png"}
  ];
  res.send(list); 
});

//功能六:新品馆
app.get("/newPro",(req,res)=>{
  var list = [
    {id:1,np_url:"http://127.0.0.1:3000/img/product/pro15.jpg",ptitle:"吉辛 raw肉天然风干狗零食..",psTitle1:"天然风干",psTitle2:"无添加",psTitle3:"原始野性的美味",newPrice:"39.2",price:"49"}
  ];
  res.send(list); 
});

//功能七:猜你喜欢 产品展示
app.get("/proList",(req,res)=>{
  var sql=" SELECT * FROM yd_product";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
  })
});

//功能八:点击跳转至详情页
app.get("/details",(req,res)=>{
  var pid=req.query.pid;
  var sql=" SELECT * FROM yd_product WHERE pid=?";
  console.log(pid);
  pool.query(sql,[pid],(err,result)=>{
    if(err)throw err;
    res.send({code:1,data:result});
  })
});
