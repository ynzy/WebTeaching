
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

## 切换到指定分支
```shell
git checkout <demo:xulei>
```
现在就是在远程的xulei分支上了，提交代码

## 绑定本地分支到要提交到的远程分支，远程分支是提交后生成的，无需在github创建
```shell
git push origin HEAD:<demo:xulei>
```
## 删除本地分支
```shell
git branch -d <demo:xulei>
```
## 删除远程分支
```shell
git push origin --delete <demo:xulei>
