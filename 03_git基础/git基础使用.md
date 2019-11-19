
# git 基本命令

## 代码仓库
* github 外国
* gitlab 外国
* 码云  中国

## 建立远程代码仓库

## 初始化本地仓库
```shell
git init
```
## 提交代码到本地缓存区
```shell
git add .
```
## 查看提交状态
```shell
git status
```
## 添加提交代码的历史描述
```shell
git commit -m "init"
```
## 连接远程仓库
```shell
git remote add origin https://github.com/ynzy/webTeaching.git
```
## 提交到远程仓库
```shell
git push -u origin master
```

## 克隆远程仓库
```shell
git clone https://github.com/ynzy/webTeaching.git
```

## 拉取远程仓库
```shell
git pull
```

## 提交远程
```shell
git push
```

## 拉取远程分支
```shell
git pull
```
## 查看所有分支
```shell
git branch -a
```

## git查看当前分支
```shell
git branch
```
绿色的是当前分支
这里没有说清楚，这个命令是查看本地分支，绿色的是当前分支

## 切换到指定分支
```shell
git checkout <分支名>
```
现在就是在远程的xulei分支上了，提交代码

## 绑定本地分支到要提交到的远程分支
```shell
git push origin HEAD:<name-of-remote-branch>
```
刚刚新提交代码到了许蕾分支

但是这样操作，操作的是当前分支，这个许蕾分支是远程的，如何让本地仓库关联远程分支？

## 本地仓库关联远程分支
```shell
git checkout -b <本地分支><远程分支>
```
-b 创建一个新的分支并切换到这个分支

建立了本地分支xulei，并且关联了远程分支`remotes/origin/xulei`

现在本地就有了许蕾分支

基本命令就是
git branch 查看分支
git checkout 切换分支
明白了吗

## 方式1
1. 查看本地分支git branch
2. 建立本地分支git checkout -b <本地分支名>
3. 将本地分支推送到远程仓库(提交代码直接推送)
4. 到github上查看自己建立的分支

## 方式2
1. 查看本地分支git branch
2. 建立本地分支并关联远程分支git checkout -b <本地分支名><远程仓库>
3. 提交自己的代码
4. 推送到远程仓库

这两个步骤练习下，我演示一遍，
我建立自己的张勇分支
git push --set-upstream origin zhangyong

## 删除分支
git branch -d zhangyong

就这些，刚才卡在删除分支这了，弄完方式1，方式2要先切换分支，删除本地你要删除的分支，然后在弄方式2
一般不会随便删分支的
你练一下吧