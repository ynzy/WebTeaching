# Grid网格布局
## 1.什么是网格
* 网格是一组相交的水平线和垂直线,它定义了网格的列和行。
* 我们可以将网格元素放置在与这些行和列相关的位置上
## 2. css网格布局简介
### 2.1 布局历史：
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
### 2.2 grid布局优势
* 固定或者弹性的轨道尺寸
* 定位项目
* 创建额外的轨道来保存内容
* 对齐控制
* 控制重叠内容(z-index)
### 2.3 grid和flexbox对比
1. 布局方式
  * Flexbox是一维布局,只能在一条直线上放置内容区块。
  * Grid是一个二维布局，根据设计需求将内容区块放置到任何地方。
  * Flexbox与Grid能很好的配合使用。
2. 浏览器兼容
  * 只要不是在ie11以前的浏览器，基本都兼容
### 2.4 学习目标
* 掌握Grid网格布局的功能特点，并熟练应用
* 加深对盒子模型的了解
* 有效提高开发效率，并学会对复杂的网页结构更加灵活的布局
* 为网页前端的更深入学习打好基础
## 3. 网格布局重要术语
### 3.1 Grid Container(网格容器)
* 元素应用display:grid,它是其所有网格项的父元素
### 3.2 Grid Item(网格项)
* 网格容器的子元素,下面的item元素是网格项
### 3.3 Grid Line(网格线)
* 组成网各项的分界线
### 3.4 Grid Track(网格轨道)
* 两个相邻的网格线之间为网格轨道
* 它的水平方向或者垂直方向一定会顶到网格的边缘
### 3.5 Grid Cell(网格单元)
* 两个相邻的列网格线和两个相邻的行网格线组成的网格单元 
### 3.6 Grid Area(网格区域)
* 四个网格线包围的总空间
### 3.7 单位
1. fr(单位)
  * 剩余空间分配数。用于在一系列长度值中分配剩余空间，如果多个已指定了多个部分，则剩下的空间根据各自的数字按比例分配。 
2. gr(单位)
  * 网格数(目前没有被w3c采用)
## 4. 容器中的属性
### 4.1. display
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
### 4.2. grid-template
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
### 4.3. gap
#### 网格轨道间距
* `grid-column-gap/grid-row-gap`
  * 指定网格线的大小，可以想象为设置列/行之间的间距的宽度
* 属性值
  * line-size: 一个长度值
#### gap简写
* grid-gap
  * grid-row-gap和grid-column-gap的缩写。
说明： 
  起初使用grid-gap属性来定义的，目前逐渐被gap替代。

  如果没有指定grid-row-gap，则会被设置为grid-column-gap相同的值。
### 4.4. items
#### justify-items
* 沿着行轴对齐网格的内容
* 属性值
  * start: 内容与网格区域的左端对齐
  * end: 内容与网格区域的右端对齐
  * center: 内容位于网格区域的中间位置
  * stretch: 内容宽度占据整个网格区域空间(这是默认值)
#### align-items
* 沿着列轴对齐网格内的内容
* 属性值
  * start: 内容与网格区域的左端对齐
  * end: 内容与网格区域的右端对齐
  * center: 内容位于网格区域的中间位置
  * stretch: 内容宽度占据整个网格区域空间(这是默认值)
#### place-items
* place-items属性是align-items属性和justify-items属性的合并简写形式。
* `place-items: <align-items> <justify-items>;`
* 如果省略第二个值，则浏览器认为与第一个值相等。
### 4.5. content
#### justify-content
* 设置网格容器内的网格沿着行轴对齐网格的对齐方式。
* 属性值
  * start：网格与网格容器的左边对齐
  * end：网格与网格容器的右边对齐
  * center：网格与网格容器的中间对齐
  * stretch: 调整grid item的大小,让宽度填充整个网格容器
  * space-around: 在grid item之间设置均等宽度的空白间隙,其外边缘间隙大小为中间空白间隙宽度的一半。
  * space-between：在grid item之间设置均等宽度空白间隙，其外边缘无间隙。
  * space-evenly：在每个grid item之间设置均等宽度的空白间隙，包括外边缘。
#### align-content
* 设置网格容器内的网格沿着列轴对齐网格的对齐方式。
* 属性值
  * start：网格与网格容器的左边对齐
  * end：网格与网格容器的右边对齐
  * center：网格与网格容器的中间对齐
  * stretch: 调整grid item的大小,让宽度填充整个网格容器
  * space-around: 在grid item之间设置均等宽度的空白间隙,其外边缘间隙大小为中间空白间隙宽度的一半。
  * space-between：在grid item之间设置均等宽度空白间隙，其外边缘无间隙。
  * space-evenly：在每个grid item之间设置均等宽度的空白间隙，包括外边缘。
#### place-content
* place-content属性是align-content属性和justify-content属性的合并简写形式。
* `place-content: <align-content> <justify-content>`
* 如果省略第二个值，浏览器就会假定第二个值等于第一个值。
### 4.6. grid-auto
* grid-auto-columns/grid-auto-rows
  * 指定自动生成的网格轨道(又名隐式网格轨道)的大小
* 隐式网格轨道
  * 隐式网格轨道在显式的定位超出指定网格范围的行或列时被创建。
* 属性值
  * `<track-size>`: 可以是一个长度值,一个百分比值,或者一个自由空间的一部分(使用fr单位)
#### grid-auto-flow
* 控制自动布局算法的工作方式
* 属性值
  * row: 告诉自动布局算法依次填充每行,根据需要添加新行
  * column: 告诉自动布局算法依次填充每列,根据需要添加新列
  * dense: 告诉自动布局算法,如果后面出现较小的grid item,则尝试在网格中填充空洞。
### 4.7. grid
* 在单个属性中设置所有以下属性的简写：grid-template-rows,grid-template-columns,grid-template-areas,grid-auto-rows,grid-auto-columns和grid-auto-flow。
* 同时将sets grid-column-gap和grid-row-gap设置为它们的初始值,即使它们不被此属性显示设置。
* 属性值
  * none: 将所有子属性设置为其初始值.
  * `<grid-template-rows>/<grid-template-columns>`: 将`grid-template-rows`和`grid-template-columns`分别设置为指定值,将所有其他子属性设置为其初始值.
  * `<grid-auto-flow>[<grid-auto-rows>[/<grid-auto-columns>]]`: 接受所有与`grid-auto-flow`,`grid-auto-rows`和`grid-auto-columns`相同的值。如果省略`grid-auto-columns`,则将其设置为`grid-auto-rows`指定的值.如果两个都被省略,则它们被设置为它们的初始值.
## 5. css函数
### 5.1 repeat()
* 重复:
  * 跟踪列表的重复片段,允许大量显示重复模式的列或行以更紧凑的形式编写。
* 可用范围：
  * 这个函数可以用在CSS Grid属性geid-template-columns和grid0template-rows。
* 重复次数
  * `<number>`: 整数,确定确切的重复次数.
  * `<auto-fill>`: 以网格项为准自动填充.
  * `auto-fill`: 以网格容器为准自动填充.
* 值:
  * `<length>`: 非负长度.
  * `<percentage>`: 相对于轨道中网格容器的内联大小的非负百分比,以及轨道中网格容器的块长宽.
  * `<flex>`: 单位为fr的非负维度,指定轨道弹性布局的系数值.
  * `max-content`: 表示网格的轨道长度自适应内容最大的那个单元格.
  * `min-content`: 表示网格的轨道长度自适应内容最小的那个单元格.
  * `auto`: 作为最大值时,等价于max-content.作为最小值时,它表示轨道中单元格最小长宽(由min-width/min-height)的最大值.
### 5.2 fit-comtent()
* 内容适配
  * 根据公式min(最大大小,最大值(最小大小,参数))将给定大小夹紧为可用大小.
* 值
  * `<length>`: 一个绝对的长度
  * `<percentage>`: 相对于给定轴上可用空间的百分比。
### 5.3 minmax()
* 长度范围
  * 定义了一个长度范围的闭区间
## 6.网格项上的属性
### 6.1 start/end
* `grid-column-start/grid-column-end/grid-row-start/grid-row-end`
  * 使用特定的网格线确定grid item在网格中的位置
* 属性值
  * `<line>`: 可以是一个数字来指代相应编号的网格线,也可以使用名称指代相应命名的网格线.
  * `span<number>`: 网格项将跨越指定数量的网格轨道
  * `span<name>`: 网格项将跨越一些轨道,直到碰到指定命名的网格线
  * `auto`: 自动布局,或者自动跨越,或者跨越一个默认的轨道
* 说明
  * 如果没有声明grid-column-end/grid-row-end,默认情况下,该网格项将跨越一个轨道.
  * 网格项可以相互重叠,可以使用z-index来控制它们的堆叠顺序.
### 6.2 start/end简写
* `grid-column/grid-row`
  *  `grid-column-start/grid-column-end/grid-row-start/grid-row-end`的简写形式
* 属性值
  * `<start-line> / <end-line>`: 每个值的用法都和属性分开写时的用法一样.

### 6.3 grid-area
* 网格区域
  * 给grid item进行命名以便于使用grid-template-areas属性创建模板时来进行引用.
* 属性值
  * `<name>`: grid-template-areas中定义的命名
  * `<row-start>/<column-start>/<row-end>/<column-end>`: 可以是数字,也可以是网格线的名字
### 6.4 self
#### justify-self
* 沿着行轴对齐grid item里的内容
* 属性值:
  * start: 将内容对齐到网格区域的左端
  * end: 将内容对齐到网格区域的右端
  * center: 将内容对齐到网格区域的中间
  * stretch: 填充网格区域的宽度(这是默认值)