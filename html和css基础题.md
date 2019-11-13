# html

## 1. 行内元素有哪些
   常见行内元素：
   a、br、em、img、input、span、label、sub、sup

  * a - 锚点
  * br - 换行
  * abbr - 缩写
  * acronym - 首字
  * b - 粗体(不推荐)
  * bdo - bidi override
  * big - 大字体
  * cite - 引用
  * code - 计算机代码(在引用源码的时候需要)
  * dfn - 定义字段
  * em - 强调
  * font - 字体设定(不推荐)
  * i - 斜体
  * img - 图片
  * input - 输入框
  * kbd - 定义键盘文本
  * label - 表格标签
  * q - 短引用
  * s - 中划线(不推荐)
  * samp - 定义范例计算机代码
  * select - 项目选择
  * small - 小字体文本
  * span - 常用内联容器，定义文本内区块
  * strike - 中划线
  * strong - 粗体强调
  * sub - 下标
  * sup - 上标
  * textarea - 多行文本输入框
  * tt - 电传文本
  * u - 下划线
  * var - 定义变量


## 2. 块级元素有哪些

  常见行内元素：
   div、h1~h6、form、ol、p、ul、table、li

  * address - 地址
  * blockquote - 块引用
  * center - 举中对齐块
  * dir - 目录列表
  * div - 常用块级容易，也是css layout的主要标签
  * dl - 定义列表
  * fieldset - form控制组
  * form - 交互表单
  * h1 - 大标题
  * h2 - 副标题
  * h3 - 3级标题
  * h4 - 4级标题
  * h5 - 5级标题
  * h6 - 6级标题
  * hr - 水平分隔线
  * isindex - input prompt
  * menu - 菜单列表
  * noframes - frames可选内容，（对于不支持frame的浏览器显示此区块内容
  * noscript - ）可选脚本内容（对于不支持script的浏览器显示此内容）
  * ol - 排序表单
  * p - 段落
  * pre - 格式化文本
  * table - 表格
  * ul - 非排序列表


## 3. 常见的单标签有哪些

   <meta />
   <link rel="stylesheet" href="" />
   <hr />
   <br />
   <img src="" alt="" title="">
   

* <meta/>
  <link rel="stylesheet" href="" />

  <hr />
  <br />

  <input type="" />

  <img src="" alt="" />

  <area shape="" coords="" href="" alt="" />

## 4. 图片标签的属性有哪些及其作用

1、src标签，放的是图片的路径，相对路径是图片在电脑中存放的位置，绝对路径是指一些网站地址。
2、alt标签，可以输入文本，当图片的路径错误时会显示该文本的内容。
3、title标签，值也是文本，当鼠标悬停时所显示的内容。

* 

## 5. a标签的属性有哪些及其作用
a:link{color:#000}/*未访问时的状态*/
a:visited{color:#333}/*已访问过的状态*/
a:hover{color:#666}/*鼠标移动到链接上时的状态*/
a:active{color:#222}/*鼠标按下去时的状态*/

download:规定被下载的超链接目标。
href:规定链接指向的页面的URL。
media：规定被链接文档是为何种媒介/设备优化的。
rel:规定当前文档与被链接文档之间的关系。
target:规定在何处打开链接文档。_blank 新窗口打开 _self当前窗口打开

* 

# css

## 1. css书写位置有几种方式

内联式css样式 就是把css代码直接写在现有的HTML

## 2. css选择器有哪些,分类

* id选择器 、标签选择器、类选择器、后代选择器、子选择器、*通用选择器*、*伪类选择符、分组选择符*

## 3. css的三大特性

* 继承: 可以继承的样式有什么?
  *  
* 层叠: 如果权重相同,后写的生效
* 优先级: 样式的权重分级,class,id,style,伪类,important的权重顺序
* ！important
* id选择器的权重值为100
* 类选择器的权重值为10
* 标签的权重值为1
* style的权重值为
* 伪类的权重值为
  *  

## 4. 字体样式(字体,字号,颜色等等,有关字体样式的css列举出来)

.wrap{

font-family:"Microsoft Hahei";

font-size:18px;

color:red;

font-weight:blod;

}

## 5. 常见样式,它们是做什么的

```html
text-indent
text-align:水平居中
text-decoration：
line-height
```



## 6. 盒模型的常见元素

*  标准盒子模型
*  怪异盒子模型

## 7. css布局模型有哪几种及属性分类

* 

## 8. 写一个实例代码,相对定位和绝对定位的综合使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        .wrap{
            width:500px;
            height:500px;
            position:relative;
            left:150px;
            top:30px;
            background: red;
        }
         .wrap1{
            width:200px;
            height:200px;
            position:absolute;
            left:50px;
            top:30px;
            background:green;
        }
    </style>
    <div class="wrap">
        <div class="wrap1">我是wrap的儿子</div>
    </div>
</body>
</html>
```

## 9. 标识颜色值的方式有哪些

```html

```

## 10. 垂直水平居中的方式有哪些,并举例说明

```html

```

## 11. 精灵图的优缺点

```html

```

## 12. display:none和overflow:hidden有什么区别

```js

```

## 13. margin:0 auto和text-align:center的区别

```js

```

