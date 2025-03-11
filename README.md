# rem-responsive

一个能在网页上使用的响应式布局的js插件，根据页面宽度动态调整页面根目录字体大小，从而实现rem单位的动态展示
A JS plugin for responsive layout of web pages, used to dynamically respond to the rem units of Css on web pages

## 安装(Install)

```base
npm i -S rem-responsive

yarn add -S rem-responsive

```


## 使用(Usage)
页面需要响应的元素使用 `rem` 单位，设置`option.root`与设计图宽度一致时，1rem = 1px，例如：设计图元素宽度为100px，在CSS样式上直接写100rem。

### Import 方式导入(推荐)
```js
import remResponsive from 'rem-responsive'

remResponsive({
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
    remResponsive({
      root: 750
    })
  </script>
</head>
```


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
  max: 750, // 最大响应宽度
  root: 750, // 设计稿宽度
  watch: true // 是否监听页面宽度变化
}

```

* `root`(Number) 必传，设计图的宽度
* `max`(Number) 非必传，最大响应宽度，超过该宽度则不响应跟字体大小变化
* `watch`(Boolean) 非必传，是否开启监控屏幕变化，默认为true

## 注意事项(Notice)

1. 由于根目录的字体是按宽度计算出来的，为更换的匹配设计效果，根目录的字体偏小，因此默认的字体会偏小，为让默认字体正常显示，可以在`body`上设置一个默认字体大小

```css
body {
  font-size: 16rem;
}
```

2. 由于js插件库会影响页面css展示，应当在页面最前面加载，以免出现界面样式突然闪现问题