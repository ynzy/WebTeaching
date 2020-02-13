
## 1、什么是MVVM模式？
* Model–view–viewmodel(MVVM)或者称为模型-视图-视图模型， 是一个软件架构设计模式。
* Model: 指任何一个领域模型，表示内容的数据模型层
* View: 指用户界面（UI层）
* Viewmodel： 指一个抽象的数据view层，在viewmodel中，驱动了数据传达视图和数据绑定的通信，也可以说是model中的数据状态，它是连接view和model的桥梁
  1. 将模型数据转化为视图，即后端传递的数据转化为所能看到的页面，实现方式：数据绑定
  2. 将视图转化为模型，将所看到的页面转化为数据模型，实现方式：dom事件监听
  3. 这两种方式都有实现的我们称为双向绑定
* 总结：
  * 在mvvm框架下，视图和模型是不能直接通信的，它们是通过viewmodel来通信的，viewmodel中实现了一个boserver观察者模式，model数据绑定在view视图中；（1）当数据发生变化时，Viewmodel能监听到这种变化，然后通知对应的view视图进行对应的视图更新；（2）当用户操作view视图时，Viewmodel也能监听到视图的变化，然后通知数据进行对应的数据更新;实际上也就实现了双向绑定。数据的双向绑定同理
## 2. 什么是双向绑定？
1. 单向绑定：
   * 单项绑定就是把model绑定到view上，通过js更新model数据时，view视图跟着更新
2. 双向绑定：
   * 如果用户更新了view视图，model数据也会跟着更新，这就是双向绑定
3. 举例：
  * 当用户填写表单时，view视图就更新了，input输入的值自动更新model中对应的数据，这就相当于我们把view和model做了双向绑定
参考链接：[廖雪峰-双向绑定](https://www.liaoxuefeng.com/wiki/1022910821149312/1109527162256416)
## 3. 什么是双向数据绑定？
其实说的也是双向绑定，更主要的说的是具体实现
1. angular：ng-model
  * 语法糖示例：
```html
<input type="text" [(ngModel)]="keywords" />
<p>{{keywords}}</p>
```
  * 将语法糖拆解
`[ngModel]`进行单向数据绑定，`(ngModelChange)`监听数据变化，更新input对应的值，就完成了数据双向绑定
```html
<input type="text" [ngModel]="model" (ngModelChange)="getModelChange($event)">
```
```js
 constructor() {
   this.model = 'model init';
 }
 
 getModelChange(event: string) {
   this.model = event; // view value 与 model value 同步
 }
```
2. vue：v-model
  * 语法糖示例：
```html
<input type="text" v-model="name" />
<p>{{name}}</p>
```
  * 语法糖拆解：
`v-bind`绑定响应式数据，输入值之后，触发input事件并传递数据给name值，vue的实现方法其实也是参考的angular的实现
```html
<input type="text" v-bind:value="name" @input="name = $event.target.value" />
```
3. react:
  * react是单项数据流，本身是没有双向数据绑定的
  * 实现示例
绑定state的数据，当view视图input的值发生改变时，监听`onChange`事件，通过`setState`方法更新数据，实现双向数据绑定
```js
<input type="text" value={this.state.mydata} onChange={ (e)=>this.txtChange(e) } />

textChange = (e) => {
  const newVal = e.target.value
  this.setState({
      mydata: newVal
  })
}
```
4. 原生js实现双向数据绑定
```html
<div>
    <input type="text" id="txt">
    <p id="show-txt"></p>
  </div>
  <script>
    let obj = {}
    let inputDom = document.getElementById('txt')
    let showDom = document.getElementById('show-txt')
    Object.defineProperty(obj, 'txt', {
      get: function () {
        return obj
      },
      set: function (newValue) {
        console.log(newValue);
        showDom.innerHTML = newValue
      }
    })
    inputDom.addEventListener('input', function (e) {
      obj.txt = e.target.value
    })
  </script>
```
5. 总结：
* 不管三大框架还是原生js如何实现双向数据绑定，原理都是一样的
* view视图绑定model中的数据，监听数据的变化，当数据发生变化时，更新model中的数据，同时同步view视图数据