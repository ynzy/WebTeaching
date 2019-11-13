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

内联式css样式:就是把css代码直接写在现有的HTML标签中；
<p style="color:red">文字</p>

嵌入式样式：写在当前得文件中；
<style type="text.css"></style>
 
 外部css样式，写在单独得一个文件中
 <link ref="stylesheet" type="test/css" href="base.css" />



## 2. css选择器有哪些,分类

* 简单选择器：
* 标签选择器:p{}、类选择器:.wrap{}、id选择器:#wrap{}
* 
*  组合选择器：
* 子选择器:ul>li{}用于选择指定标签元素的第一代子元素。
* 后代选择器:.first span{}空格在作用于所有得后代。
* 相邻兄弟选择器: div+p{}
* 普通兄弟选择器：div~p{}
* 通用选择器：*{}
* 
* 伪类选择器：
* a:hover{}他允许给html不存再得标签设置样式。
* ：first-child选择所有""元素得第一个子元素。
* ：nth-child(n)选择所有""元素得第N个子元素。
* :after在每个""元素后面插入内容。
* :before在每个""元素之前插入内容。
* 
* 分组选择器
* :h1,span{}当想为多个元素设置同一个样式时使用

伪元素选择器：
::first-letter:用于向文本得首字母设置特殊样式，只用于块级元素
::before
::after

属性选择器
[attribute]元素有attribute.
[attribute="value"]元素attribute等于value。
[attribute~="value"]元素attribute包含value单词

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
text-indent：文本首行缩进
text-align:文本对齐方式 left,right,center,justify(两端对齐)
text-decoration：向文版添加修饰underline,overline,line-through(删除线）b'lin'k
line-height：行高
```



## 6. 盒模型的常见元素
borders:
    width:边框宽度
    style:边框样式 dotted,deshed,solid groove(凹槽边框)，inherit(继承父元素)
padding
margin


## 7. css布局模型有哪几种及属性分类

*1、流动模型display(显示)
*    改变元素显示时内联元素还是块级元素，inline(显示内联元素)，block(显示块级元素)，inline-block(内联块元素)，flex(设置弹性盒子)
* 2、层模型(定位属性)
*     position(元素定位类型)relative(相对定位)，absolute(绝对定位),fixed(固定定位)，sticky(黏性定位)
      overflow(元素溢出发生的事情)
      z-index(元素堆叠顺序)
  3、浮动模型float:float，clean

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

p{color:#000000;}
可以缩写为：
p{color: #000;}
例子2：
p{color: #336699;}
可以缩写为：
p{color: #369;}

```

## 10. 垂直水平居中的方式有哪些,并举例说明

```html

```

## 11. 精灵图的优缺点

```html
优点：
1.利用CSS Sprites能很好地  减少网页的http请求，从而大大的提高页面的性能

2.CSS Sprites能减少图片的字节，曾经比较过多次3张图片合并成1张图片的字节总是小于这3张图片的字节总和。

3.解决了网页设计师在图片命名上的困扰，只需对一张集合的图片上命名就可以了，不需要对每一个小元素进行命名，从而提高了网页的制作效率。

4.更换风格方便，只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变。维护起来更加方便。

 缺点
诚然CSS Sprites是如此的强大，但是也存在一些不可忽视的缺点，如下：

1.在图片合并的时候，你要把多张图片有序的合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景；这些还好，最痛苦的是在 宽屏，高分辨率的屏幕下的自适应页面，你的图片如果不够宽，很容易出现背景断裂；

2.CSS Sprites在开发的时候比较麻烦，你要通过 photoshop或其他工具测量计算每一个背景单元的精确位置，这是针线活，没什么难度，但是很繁琐；幸好 腾讯的鬼哥用 ADOBE AIR开发了一个CSS Sprites 样式生成工具，虽然还有一些使用上的不灵活，但是已经比photoshop测量来的方便多了，而且样式直接生成，复制，拷贝就OK！

3.CSS Sprites在维护的时候比较麻烦，如果页面背景有少许改动，一般就要改这张合并的图片，无需改的地方最好不要动，这样避免改动更多的 css，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动css。




## 12. display:none和overflow:hidden有什么区别

```js
一，display:none;

隐藏元素，不占网页中的任何空间，让这个元素彻底消失（看不见也摸不着）

二，overflow:hidden;

让超出的元素隐藏，就是在设置该属性的时候他会根据你设置的宽高把多余的那部分剪掉

我们都知道每个浏览器对代码的解析都不同，所以我们在做页面的时候会遇到很多bug，在IE里面如果内容的高度超过了该层的高度他会自动地撑开，但火狐等里面的高度是多高这层就只有这么大，内容的高即使超出了也不会影响你设置的高，在这个时候我们有的问题就可以用overflow：hidden；来解决，这是第一点，还有就是我们可以利用它做出很多hove效果
```

## 13. margin:0 auto和text-align:center的区别

```js

1.text-align:center ；设置文本或img标签等一些内联对象（或与之类似的元素）的居中。

2.margin:0 auto ；设置块元素（或与之类似的元素）的居中。
1.text-align: 属性规定元素中的文本的水平对齐方式;   该属性通过指定行框与哪个点对齐，从而设置块级元素内文本水平对齐方式;


一般情况下设置文本对齐方式的时使用此属性。支持值 justify。Example: div { text-align: left; }  //文本居左对齐

注释：所有浏览器都支持 text-align 属性；任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit"。

2.margin 是设置对象四边的外延边距，被称为外补丁或外边距。

Example: div { margin: 20px 10px 30px 40px; }  // 表示对象外边距，顶20px、右10px、下30px、左40px



这两个属性IE与FF的理解也有所不同。我们设置一个段落P，在段落内存在一个图片img标签。　　

注意：

1.当设置body{text-align:center;}。 在IE中，段落P，图片img同时实现了居中对齐，也就是说text-align:center;同时作用于元素p与元素img。在FF中，段落P，没有能实现居中对齐，而图片img实现了居中对齐，也就是说text-align:center;作用于img标签，而段落p标签没有起到居中的作用。

2.当设置段落 p {margin:0 auto;}。 在IE与FF中，段落P均实现了居中对齐。图片img由于不是作用对象，所以不会居中对齐。

有三种情况需要说明：

1.margin:0 auto;的选择器是作用对象，如div，p，而不是body。如果设置：body { margin:0 auto; }将不会达到任何效果，除非你定义body的宽度，那将会让body内的元素产生位置变化。如我们设置body宽度为500px。对p段落不作任何设置， 我们最大化窗口将会看到段落并非处于窗口的最左上角。

2.设置段落 p {text-align:center;} 将要实现的并不是段落本身的对齐方式，而是段落内元素居中对齐。

3. 设置图片标签img {margin:0 auto;} ，就犯了一个小错误，img类于内联对象，不可以设置图片img标签的margin属性，如果一定要设置，那么先将它的属性转变为块元素，如下面的代 码：img {display:block; margin:0 auto;}


