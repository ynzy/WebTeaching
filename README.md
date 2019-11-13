## 克隆项目(不用执行了)
```js
git clone https://github.com/ynzy/webTeaching
```
## 打开项目
进入你的项目文件夹
···js
D:\qianduan\webTeaching
···
拖进你的vscode
这个就是你的项目
## 编写文件之后提交文件
打开终端
···js
git add .
```
## 提交描述
就是说，你提交乐文件，给这个提交一个备注，以后好查看
···js
git commit -m '我提交乐一条记录'
···
## 将提交记录推送到远程仓库
前面都是本地操作，最后这个才是提交到GitHub上
···js
git push
```
下面的话自己翻译一下
```js
nothing to commit, working tree clean

```
```js
1 file changed, 68 insertions(+), 1 deletion(-)
```

## 你的vscode没有设置自动保存
所以，这个我写的文件还是个空的
有那个小点点就是没有保存
ctrl+s

vscode管理代码仓库以后再教你，你先敲命令，不能偷懒，多提交，
写一行提交一次也没问题

重新执行刚才的命令

## 初始化git仓库
```
git init
```
从github克隆(git clone ...)下来的代码不用git init

提交陈工可以再githuab上看到
你在我的项目里 所以要看我的仓库

git管理的文件夹，会有`.git`文件，这个文件是隐藏的
开发者一般都把隐藏项目显示出来

没有git管理的仓库是没有`.git`文件的，需要git init
看到了吗，多出来一个`.git`文件

这些你不用管先


## 编写文件之后提交文件
打开终端
···js
git add .
```
## 提交描述
就是说，你提交乐文件，给这个提交一个备注，以后好查看
···js
git commit -m '我提交乐一条记录'
···
## 将提交记录推送到远程仓库
前面都是本地操作，最后这个才是提交到GitHub上
···js
git push
```

这是提交过程
明白了吗？


没法截图，这个是git的命令行工具，也是终端，都是一个意思
你提交的时候要再你的git仓库目录下提奥
```js
D:\qianduan\webTeaching>
```
再下面这个里面提没有用的
```js
/d/qianduan/workspace (master)
```

他们都叫命令行工具
* 黑框框叫git-bush == vscode里叫终端

就讲这么多吧，现在这个文件又能提交乐
保存提交你来，我看看




## 打开工作空间，我从头开始演示
这样就打开了
就先用这种方式把
我在说一个
code .
也可以