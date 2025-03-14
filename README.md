# rem-responsive

一个在网页响应式布局的js插件，利用rem单位的特性，根据页面宽度动态调整根字体大小，从而实现rem单位的动态展示，插件压缩后小于1KB
A JS plugin for responsive layout of web pages, used to dynamically respond to the rem units of Css on web pages

## 安装(Install)

```base
npm i -S rem-responsive

yarn add -S rem-responsive

```


## 使用(Usage)

**RemResponsive.config(options)**
页面随屏幕宽度变化的元素直接使用 `rem` 单位，设置`options.root`与设计图宽度一致时，1rem = 1px，例如：设计图元素宽度为100px，在CSS样式上直接写100rem，不需要另外计算。

### Import 导入(推荐)
```js
// main.js
import RemResponsive from 'rem-responsive'

RemResponsive.config({
  root: 750
})

```

### Script标签
需要放在 `<head>` 标签内，优先加载
```html
<head>
  <!-- ... -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
  <script src="rem-responsive.min.js"></script>
  <script>
    RemResponsive.config({
      root: 750
    })
  </script>
</head>
```


### CSS

``` css
h1 {
  width: 100rem;
  margin: 0 0 20rem;
  font-size: 32rem;
  line-height: 1.2;
  letter-spacing: 1rem;
}

```

## 配置项(Options)
Type: `Object`

Default:
```js
{
  root: 750, // 设计稿宽度
  max: 750, // 最大响应宽度
  watch: false // 是否监听页面宽度变化
}

```

* `root`(Number) 必传，设计图的宽度
* `max`(Number) 非必传，最大响应宽度，文档宽度超过该宽度时则不响应页面元素变化，使用场景：手机端网页在pc端访问
* `watch`(Boolean) 非必传，是否开启监控屏幕宽度变化，设置为`true`时，会文档宽度变化(屏幕旋转或者窗口宽度变化)调整元素大小。默认为`false`，用户也可以通过自定义事件多次调用`RemResponsive.config(options)`方法来实现自定义监听变化

## 注意事项(Notice)

1. 由于插件会修改根字体大小，为更好的匹配设计图效果，导致默认字体大小通常会偏小，为让默认字体正常显示，可以在`body`上设置一个默认字体大小

```css
body {
  font-size: 16rem;
}
```

2. 由于插件库会影响页面css展示，应当在页面最前面加载并调用，以免出现界面样式突然闪一下的问题