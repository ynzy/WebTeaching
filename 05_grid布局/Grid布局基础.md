# Grid网格布局
## 什么是网格
* 网格是一组相交的水平线和垂直线,它定义了网格的列和行。
* 我们可以将网格元素放置在与这些行和列相关的位置上
## css网格布局简介
### 布局历史：
1. table表格布局
  * 我们要把table标签对内的所有元素都渲染完才能显示出页面
  * 现代来说，数据量大，这种布局方式导致性能太差
2. hack布局
  * float布局(流模型)
    * 流式布局，左浮动右浮动
    * 在一些比较个性化的网页中float布局就不太够使用了
  * position布局(层模型)
    * 对于自适应，响应式布局，定位布局会导致错误
  * inline
    * 将块级元素改为行内元素进行布局
3. FlexBox布局(弹性盒模型)
  * 只能针对一个方向,或者一个维度的页面进行布局(一维布局)
4. grid布局(网格布局)
  * 二维的布局方式
### grid布局优势
* 固定或者弹性的轨道尺寸
* 定位项目
* 创建额外的轨道来保存内容
* 对齐控制
* 控制重叠内容(z-index)
### grid和flexbox对比
1. 布局方式
  * Flexbox是一维布局,只能在一条直线上放置内容区块。
  * Grid是一个二维布局，根据设计需求将内容区块放置到任何地方。
  * Flexbox与Grid能很好的配合使用。
2. 浏览器兼容
  * 只要不是在ie11以前的浏览器，基本都兼容
### 学习目标
* 掌握Grid网格布局的功能特点，并熟练应用
* 加深对盒子模型的了解
* 有效提高开发效率，并学会对复杂的网页结构更加灵活的布局
* 为网页前端的更深入学习打好基础
## 网格布局重要术语
### Grid Container(网格容器)
* 元素应用display:grid,它是其所有网格项的父元素
### Grid Item(网格项)
* 网格容器的子元素,下面的item元素是网格项
### Grid Line(网格线)
* 组成网各项的分界线
### Grid Track(网格轨道)
* 两个相邻的网格线之间为网格轨道
* 它的水平方向或者垂直方向一定会顶到网格的边缘
### Grid Cell(网格单元)
* 两个相邻的列网格线和两个相邻的行网格线组成的网格单元 
### Grid Area(网格区域)
* 四个网格线包围的总空间
### 单位
1. fr(单位)
  * 剩余空间分配数。用于在一系列长度值中分配剩余空间，如果多个已指定了多个部分，则剩下的空间根据各自的数字按比例分配。 
2. gr(单位)
  * 网格数(目前没有被w3c采用)
## 容器中的属性
### 1. display
* `display:grid | inline-grid | subgrid;`
* 将元素定义为grid container,并为其内容建立新的网格格式化上下文(grid formatting context).
```
* gird: 生成块级网格
* inline-grid: 生成行内网格
* subgrid: 如果网格容器本身是网格项(嵌套网格容器),此属性用来继承其父网格容器的列、行大小。
```
* 注意
  * 设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。
  * display:subgrid;目前所有浏览器都不兼容
  * 设为网格布局以后,其他属性都不能改变子元素成为网格项的事实
### 2. grid-template
#### 网格列和行
* `grid-template-columns / grid-template-rows`
  * 使用以空格分隔的多个值来定义网格的列和行。  
* 属性值
  * 轨道大小(track-size): 可以使用css长度(px/em等)、百分比或用分数（用fr单位）
  * 网格线名字（line-name）：可以选择任何名字
#### 网格区域
* `grid-template-areas`
  * 通过引用grid-area属性指定的网格区域的名称来定义网格模板
* 属性值
  * `<grid-area-name>`: 使用grid-area属性设置的网格区域的名称
  * ".": 点号代表一个空网格单元
  * none: 没有定义网格区域 
#### grid-template简写
在单个声明中定义grid-template-rows、grid-template-columns、grid-template-areas的简写。
* 属性值
  * none：将三个属性都设置为其初始值
  * subgrid：把grid-template-rows和grid-template-columns设置为subgrid，并且grid-template-areas设置为初始值
  * grid-template-rows/grid-template-columns：把grid-template-columns和grid-template-rows设置为指定值，与此同时，设置grid-template-areas为none
### 3. gap
### 4. items
### 5. content
### 6. grid-auto
### 7. grid
