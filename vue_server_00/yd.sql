SET NAMES UTF8;
DROP DATABASE IF EXISTS yd;
CREATE DATABASE yd CHARSET=UTF8;
USE yd;

/**创建产品信息表**/
CREATE TABLE yd_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(128),
  psname VARCHAR(128),
  price DECIMAL(7,2),
  pbrice DECIMAL(7,2),
  purl VARCHAR(255),
  pburl VARCHAR(255)
);

/**产品信息表**/
INSERT INTO yd_product VALUES(NULL,"美国KONG 磨牙藏食 成犬红色活力磨牙球玩具 S","FBI警犬专用 宠界优选好玩具",105.00,145.00,"http://127.0.0.1:3000/img/product/pro1.jpg","http://127.0.0.1:3000/img/product/proBig1.jpg"),
(NULL,"优基 益生菌中大型成犬粮 2kg","活力益生菌 调节狗狗肠胃问题",85.00,102.00,"http://127.0.0.1:3000/img/product/pro2.jpg","http://127.0.0.1:3000/img/product/proBig2.jpg"),
(NULL,"蓝氏LegendSandy  牛肉海洋鱼全犬粮 33磅(14.96kg)","缓解泪痕 美毛亮毛 不含低敏感源 调节肠胃 提高免疫力",470.00,490.00,"http://127.0.0.1:3000/img/product/pro3.jpg","http://127.0.0.1:3000/img/product/proBig3.jpg"),
(NULL,"卡乐 牛肉犬用软罐头/鲜封包 100g","优质蛋白 低脂不发胖 富含纤维促进消化",2.65,4.18,"http://127.0.0.1:3000/img/product/pro4.jpg","http://127.0.0.1:3000/img/product/proBig4.jpg"),
(NULL,"雷米高 赛极号 三文鱼螺旋藻成犬粮 8kg","针对皮肤和肠胃敏感 强化免疫 健肤美毛",260.00,280.00,"http://127.0.0.1:3000/img/product/pro5.jpg","http://127.0.0.1:3000/img/product/proBig5.jpg"),
(NULL,"美国原装耐龙Nylabone 大号手榴弹漏食玩具10.5cm","风靡欧美 天然无毒乳胶 磨牙健齿 保护口腔 橡胶洁齿又耐咬",98.00,102.00,"http://127.0.0.1:3000/img/product/pro6.jpg","http://127.0.0.1:3000/img/product/proBig6.jpg"),
(NULL,"TouchDog 洁齿消臭小饼干狗零食 200g 牛奶味","防蛀虫 防口臭 健齿 减肥 营养",10.00,13.00,"http://127.0.0.1:3000/img/product/pro7.jpg","http://127.0.0.1:3000/img/product/proBig7.jpg"),
(NULL,"美国原装 KONG  互动发声啾啾棒 M","FBI警犬专用 宠界优选好玩具",108.00,150.00,"http://127.0.0.1:3000/img/product/pro8.jpg","http://127.0.0.1:3000/img/product/proBig8.jpg"),
(NULL,"瑞典原装进口 NINA OTTOSSON  狗用益智飞碟玩具（容易级）","瑞典进口 益智玩具 ",249.00,299.00,"http://127.0.0.1:3000/img/product/pro9.jpg","http://127.0.0.1:3000/img/product/proBig9.jpg"),
(NULL,"红脚丫 橡胶卫星漏食球    L号直径9.5cm","趣味漏食 啃咬磨牙 保持健康活力",68.00,76.00,"http://127.0.0.1:3000/img/product/pro10.jpg","http://127.0.0.1:3000/img/product/proBig10.jpg"),
(NULL,"德国原装进口克劳德医生 犬用肾脏处方罐头 200g","适用肾脏疾病和肾衰竭的爱犬 降低磷含量 维持肾脏健康",25.00,30.00,"http://127.0.0.1:3000/img/product/pro11.jpg","http://127.0.0.1:3000/img/product/proBig11.jpg"),
(NULL,"蓝氏LegendSandy  三文鱼蛋黄全犬粮 5磅（2.26kg）",NULL,95.00,30.00,"http://127.0.0.1:3000/img/product/pro12.jpg","http://127.0.0.1:3000/img/product/proBig12.jpg"),
(NULL,"Hugdarling哈格 脱脂酸奶曲奇棒狗零食 200g","香浓美味 洁齿护牙 营养补钙",8.80,12.00,"http://127.0.0.1:3000/img/product/pro13.jpg","http://127.0.0.1:3000/img/product/proBig13.jpg"),
(NULL,"比瑞吉 俱乐部全犬种全价幼犬粮 2kg",NULL,75.00,183.00,"http://127.0.0.1:3000/img/product/pro14.jpg","http://127.0.0.1:3000/img/product/proBig14.jpg");