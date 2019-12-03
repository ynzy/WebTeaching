> https://www.jianshu.com/p/06b5d27c4884
> https://www.jianshu.com/p/3568e6b57be5
在实际工作中需要设置水平居中的场景，比如为了美观，文章的标题一般都是水平居中。
在这里，分两种情况：
# 行内元素
如果被设置元素为文本、图片等行内元素或者是行内块元素时，水平居中是通过父元素设置text-align:center来实现。
```
    <style>
        .txtCenter {
            text-align: center;
        }
        .txtCenter img {
            /* text-align: center; */
        }
    </style>
```
# 块状元素
 - 定宽块状元素
 - 不定宽块状元素