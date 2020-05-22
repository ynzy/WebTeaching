var that
class Tab {
	constructor() {
		that = this //绑定this值
		this.main = document.querySelector('#tab')
		this.add = this.main.querySelector('.tabadd')
		// 获取li的父元素
		this.ul = this.main.querySelector('.fisrstnav ul')
		// 获取section的父元素
		this.fsection = this.main.querySelector('.tabscon')

		// tab切换
		this.init()
	}
	// 初始化方法
	init() {
		this.updateNode()
		this.add.onclick = this.addTab
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].index = i
			this.lis[i].onclick = this.toggleTab
			this.remove[i].onclick = this.removeTab
			this.spans[i].ondblclick = this.editTab
			this.sections[i].ondblclick = this.editTab
		}
	}
	// 更新dom树
	updateNode() {
		this.lis = this.main.querySelectorAll('li')
		this.sections = this.main.querySelectorAll('section')
		this.remove = this.main.querySelectorAll('.icon-guanbi')
		this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
	}
	// 1. 切换功能
	toggleTab() {
		// console.log(this)
		that.clearClass()
		this.className = 'liactive'
		that.sections[this.index].className = 'conactive'
	}
	// 清除所有li和section的类
	clearClass() {
		// 排他法
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].className = ''
			this.sections[i].className = ''
		}
	}
	// 2. 添加功能
	addTab() {
		// 添加之前清除active类
		that.clearClass()
		var random = Math.random()
		// (1)创建li元素和section元素
		var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
		var section = '<section class="conactive">测试' + random + ' </section>'
		// （2）动态添加元素到dom树
		that.ul.insertAdjacentHTML('beforeend', li)
		that.fsection.insertAdjacentHTML('beforeend', section)
		that.init()
	}
	// 3. 删除功能
	removeTab(e) {
		e.stopPropagation() // 阻止冒泡
		var index = this.parentNode.index
		// 根据索引号删除对应的li 和section   remove()方法可以直接删除指定的元素
		that.lis[index].remove()
		that.sections[index].remove()
		that.init()
		// 当我们删除的不是选中状态的li 的时候,原来的选中状态li保持不变
		if (document.querySelector('.liactive')) return
		// 当我们删除了选中状态的这个li 的时候, 让它的前一个li 处于选定状态
		index && index--
		// 手动调用我们的点击事件  不需要鼠标触发
		that.lis[index] && that.lis[index].click()
	}
	// 4. 编辑功能
	editTab() {
		var str = this.innerHTML
		console.log('修改')
		// 双击禁止选定文字
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
		this.innerHTML = '<input type="text" />'
		var input = this.children[0]
		input.value = str
		input.select() // 文本框里面的文字处于选定状态
		// 当我们离开文本框就把文本框里面的值给span
		input.onblur = function () {
			this.parentNode.innerHTML = this.value
		}
		// 按下回车也可以把文本框里面的值给span
		input.onkeyup = function (e) {
			if (e.keyCode === 13) {
				// 手动调用表单失去焦点事件  不需要鼠标离开操作
				this.blur()
			}
		}
	}
}
new Tab()
