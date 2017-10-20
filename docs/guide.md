## 下一代的 CSS 语法规则
> 提供了 <a href="https://drafts.csswg.org/selectors-4/">下一代的 CSS 语法规则</a>

### Variables(变量)
custom properties &amp; `var()`

The current transformation for custom properties aims to provide a
future-proof way of using a **limited to `:root` selector**
of the features provided by native CSS custom properties.

```css
:root {
  --text-color: #30333a;
}
body {
  background: var(--text-color);
}
```

⚠️ [_The definitions are **limited to `:root` selector.**_](https://github.com/postcss/postcss-custom-properties#readme)

[Specification](http://www.w3.org/TR/css-variables/)
|
[Plugin documentation](https://github.com/postcss/postcss-custom-properties)

### 动态计算

reduced `calc()`

Allows you to use safely calc with custom properties by optimizing previously
parsed `var()` references.

需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)；
任何长度值都可以使用calc()函数进行计算；
calc()函数支持 "+", "-", "*", "/" 运算；
calc()函数使用标准的数学运算优先级规则；

```css
:root {
  --fontSize: 1rem;
}

h1 {
  font-size: calc(var(--fontSize) * 2);
}
```

[Specification](https://github.com/MoOx/reduce-css-calc#readme)
|
[Plugin documentation](https://github.com/postcss/postcss-calc)

### 图像适配

`image-set()` function

Allows you to set different images for each kind of resolution of user device. 
image-set() 可以根据用户设备的分辨率匹配合适的图像。

```css
.foo {
  background-image: image-set(url(img/test.png) 1x,
                              url(img/test-2x.png) 2x,
                              url(my-img-print.png) 600dpi);
}
```

[Specification](https://drafts.csswg.org/css-images-3/#image-set-notation)
|
[Plugin documentation](https://github.com/SuperOl3g/postcss-image-set-polyfill)


### Colors(颜色)
```css
a {
  /* Adjustments */
  color: color(red alpha(-10%));
  color: color(red tint(-10%));    /* lighten */
  color: color(red shade(-10%));   /* darken */

  /* Absolute */
  color: color(red alpha(50%));
  color: color(red hue(225));
  color: color(red saturation(100%));
  color: color(red lightness(50%));

  color: gray(33);       /* rgb(33, 33, 33) */
  color: gray(33%);      /* rgb(84, 84, 84) */
  color: gray(33%, 50%); /* rgba(84, 84, 84, 0.5) */
  color: #0000ff80;      /* rgba(0, 0, 255, 0.5) */

  color: hwb(90, 0%, 0%, 0.5);     /* like hsl() but easier for humans */
  color: hsl(90deg 90% 70%);       /* hsl(180, 90%, 70%) -- supports deg */
  color: hsl(90deg 90% 70% / 30%); /* hsla(180, 90%, 70%, 0.3) */
  color: rgb(30 60 90 / 30%);      /* rgba(30, 60, 90, 0.3) */
}
```
#### `color()` function

A color function to modify colors (transpiled to: `rgba()`)

```css
a {
  color: color(red alpha(-10%));
}

  a:hover {
    color: color(red blackness(80%));
  }
```

There is a
[lot of color modifiers available](https://github.com/postcss/postcss-color-function#list-of-color-adjuster),
so be sure to check them !

[Specification](http://dev.w3.org/csswg/css-color/#modifying-colors)
|
[Plugin documentation](https://github.com/postcss/postcss-color-function)

####  `hwb()` function

Similar to `hsl()` but easier for humans to work with (transpiled to: `rgba()`).

```css
body {
  color: hwb(90, 0%, 0%, 0.5);
}
```

[Specification](http://dev.w3.org/csswg/css-color/#the-hwb-notation)
|
[Plugin documentation](https://github.com/postcss/postcss-color-hwb)

####  `gray()` function

Allows you to use more than 50 shades of gray (transpiled to: `rgba()`).
For the first argument, you can use a number between 0 and 255 or a percentage.

```css
.foo {
  color: gray(85);
}

.bar {
  color: gray(10%, 50%);
}
```

[Specification](http://dev.w3.org/csswg/css-color/#grays)
|
[Plugin documentation](https://github.com/postcss/postcss-color-gray)

####  `#rrggbbaa` colors

Allows use to use 4 or 8 digits hexadecimal notation (transpiled to: `rgba()`).

```css
body {
  background: #9d9c;
}
```

[Specification](http://dev.w3.org/csswg/css-color/#hex-notation)
|
[Plugin documentation](https://github.com/postcss/postcss-color-hex-alpha)

####  `rgba` function (`rgb` fallback)

Add solid colors fallback for rgba colors
(if your browser scope cover old browsers, eg: IE8).

```css
body {
  background: rgba(153, 221, 153, 0.8);
  /* you will have the same value without alpha as a fallback */
}
```

[Specification](http://www.w3.org/TR/css3-color/)
|
[Plugin documentation](https://github.com/postcss/postcss-color-rgba-fallback)

####  `rebeccapurple` color

Allows you to use the new color keyword as a homage to
[Eric Meyer’s daughter](https://github.com/postcss/postcss-color-rebeccapurple#why-this-plugin-)

```css
body {
  color: rebeccapurple;
}
```

[Specification](http://dev.w3.org/csswg/css-color/#valdef-color-rebeccapurple)
|
[Plugin documentation](https://github.com/postcss/postcss-color-rebeccapurple)

#### `rgb()` function (functional-notation)

Allows you to use its new syntax consisting of space-separated arguments and
an optional slash-separated opacity. 

You can also use number for color channels.

The alpha value accepts percentage as well as number and has been added to
`rgb()` as optional argument. As a result, `rgb()` and `rgba()` are now
aliases of each other.

```css
div {
  background-color: rgb(100 222.2 100.9 / 30%);
}
```

[Specification](https://drafts.csswg.org/css-color/#rgb-functions)
|
[Plugin documentation](https://github.com/dmarchena/postcss-color-rgb)

#### `hsl()` function (functional-notation)

Allows you to use its new syntax consisting of space-separated arguments and
an optional slash-separated opacity. 

`hsl()` now accepts angles (`deg`, `grad`, `rad`, `turn`) as well as numbers for
hues and an optional percentage or number for alpha value. So, `hsl()` and
`hsla()` are now aliases of each other too.

```css
div {
  color: hsl(90deg 90% 70%);
  background-color: hsl(300grad 25% 15% / 70%);
}
```

[Specification](https://drafts.csswg.org/css-color/#the-hsl-notation)
|
[Plugin documentation](https://github.com/dmarchena/postcss-color-hsl)


### Custom selectors

Allows you to create your own selectors

```css
/* input */
@custom-selector :--button input[type='submit'], input[type='button'];
@custom-selector :--enter :hover, :focus;

/* output */
:--button { ··· }
:--button:--enter { ··· }
```

[Specification](http://dev.w3.org/csswg/css-extensions/#custom-selectors)
|
[Plugin documentation](https://github.com/postcss/postcss-custom-selector)

### Custom media queries

A nice way to have semantic media queries

```css
/* input */
@custom-media --viewport-medium (max-width: 30em);

/* output */
@media (--viewport-medium) { ··· }
```

[Specification](https://drafts.csswg.org/mediaqueries-5/#custom-mq)
|
[Plugin documentation](https://github.com/postcss/postcss-custom-media)

### Media query ranges

Allows to replace min-/max- with `<=` & `>=` (syntax easier to read)

```css
@media (width >= 500px) and (width <= 1200px) { ··· }

/* or coupled with custom media queries */
@custom-media --only-medium-screen (width >= 500px) and (width <= 1200px);

@media (--only-medium-screen) { ··· }
```

[Specification](http://dev.w3.org/csswg/mediaqueries/#mq-ranges)
|
[Plugin documentation](https://github.com/postcss/postcss-media-minmax)


### 选择器匹配
#### `:matches` pseudo-class

Allows you to use `:matches()`.

```css
p:matches(:first-child, .special) {
  color: red;
}
```

[Specification](http://dev.w3.org/csswg/selectors-4/#matches)
|
[Plugin documentation](https://github.com/postcss/postcss-selector-matches)


#### `:not` pseudo-class

Allows you to use `:not()` level 4 (which allows multiples selector).
Transformed to `:not()` level 3 (which allow only one selector)`.

```css
p:not(:first-child, .special) {
  color: red;
}
```

[Specification](http://dev.w3.org/csswg/selectors-4/#negation)
|
[Plugin documentation](https://github.com/postcss/postcss-selector-NOT)

### `::` pseudo syntax (`:` fallback)

Adjust `::` to `:`
(if your browser scope cover old browsers, eg: IE8).

```css
a::before {
  /* ... */
}
```

[Specification](http://www.w3.org/TR/css3-selectors/#pseudo-elements)
|
[Plugin documentation](https://github.com/axa-ch/postcss-pseudoelements)

### `overflow-wrap` property (`word-wrap` fallback)

Converts `overflow-wrap` to `word-wrap` (many browser support only the old [word-wrap](http://caniuse.com/#feat=wordwrap) property).

```css
body {
  overflow-wrap: break-word;
}
```

[Specification](https://drafts.csswg.org/css-text-3/#propdef-word-wrap)
|
[Plugin documentation](https://github.com/MattDiMu/postcss-replace-overflow-wrap)

### `system-ui` font-family

Allows you to use `system-ui` generic font-family. The current transformation provides a practical font-family list as fallback.

```css
body {
  font-family: system-ui;
}
```

[Specification](https://drafts.csswg.org/css-fonts-4/#valdef-font-family-system-ui)
|
[Plugin documentation](https://github.com/JLHwung/postcss-font-family-system-ui)

### Mixins
custom properties set &amp; `@apply`

Allows you to store a set of properties in a named custom property,
then reference them in other style rules.

```css
:root {
  --centered: {
    display: flex;
    align-items: center;
    justify-content: center;
  };
}

.centered {
  @apply --centered;
}
```

⚠️ [_The definitions are **limited to `:root` selector.**_](https://github.com/postcss/postcss-custom-properties#readme)

[Specification](https://tabatkins.github.io/specs/css-apply-rule)
|
[Plugin documentation](https://github.com/pascalduez/postcss-apply)


### Nesting (嵌套)

Allows you to nest selectors

```css
.a, .b {
  color: red;

  & .c, & .d {
    color: white;
  }
}

.class-name {
  /* direct nesting (& MUST be the first part of selector)*/
  & .nesting { ··· } 

  /* @nest rule (for complex nesting) */
  @nest span & { ··· } 

  /* media query automatic nesting */
  @media (min-width: 30em) { ··· }
}
```

[Specification](http://tabatkins.github.io/specs/css-nesting/)
|
[Plugin documentation](https://github.com/jonathantneal/postcss-nesting)

## Rem-to-Pixel
> 基于 [browser data](http://caniuse.com/rem) 来为不支持 rem 的浏览器或者场景下，提供 rem 的转化成 px 的功能。

`rem` unit (`px` fallback)

`rem` fallback to `px`
(if your browser scope cover old browsers, eg: IE8).

```css
/* before */
.sky {
  margin: 2.5rem 2px 3em 100%;
  color: blue;
}
@media screen and (min-width: 20rem) {
  .leaf {
    margin-bottom: 1.333rem;
    font-size: 1.5rem;
  }
}

/* after */
.sky {
  margin: 80px 2px 3em 100%;
  margin: 2.5rem 2px 3em 100%;
  color: blue;
}

@media screen and (min-width: 20rem) {
  .leaf {
    margin-bottom: 1.333rem;
    font-size: 1.5rem;
  }
}
```

[Specification](http://www.w3.org/TR/css3-values/#rem-unit)
|
[Plugin documentation](https://github.com/robwierzbowski/node-pixrem)


## Autoprefixer

Vendor prefixes are automatically added (and removed if deprecated/useless
depending on your browser scope) using
**[autoprefixer](https://github.com/postcss/autoprefixer)**).


## Utils

> 提供了 CSS 中常用代码片断的快捷方法声明，如清除浮动，文本超长溢出省略号、清除浮动、垂直居中、图片代替文字、文本换行、三角形等等<a class="link-ul" href="https://github.com/thoughtbit/postcss-simple-utils">Plugin documentation</a>

### ellipsis

`@util ellipsis([rows]);`

```css
/* before */
.ellipsis {
  @utils-ellipsis;
}
.ellipsis2 {
  @utils-ellipsis(3);
}

/* after */
.ellipsis {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
.ellipsis2 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
```

### clearfix

`@util clearfix;`

```css
/* before */
.clearfix {
  @util clearfix;
}

/* after */
.clearfix {
}
.clearfix:before, 
.clearfix:after {
  display: table;
  content: ""
}
.clearfix:after {
  clear: both;
  visibility: hidden;
  font-size: 0;
  height: 0
}

```
### clear

`@util clear;`

```css
/* before */
.clear {
  @util clear;
}

/* after */
.clear {
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  width: 0;
}

```

### image replace text

`@util irt;`

```css
/* before */
.irt {
  @utils-irt;
}

/* after */
.irt {
  font: 0/0 none;
  text-shadow: none;
  color: transparent;
}
```

### user select

`@util user-select([none|text]);`

```css
/* before */
.usn {
  @util user-select(none);
}

/* after */
.usn {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
```

### disabled

`@util disabled([background-color], [border-color], [color]);`

```css
/* before */
.disabled {
  @util disabled(#ccc, #f00, #333);
}

/* after */
.disabled {
  background-color: #ccc;
  border-color: #f00;
  color: #333;
  cursor: default;
  pointer-events: none;
}
```

### center

- `type` 类型  transform[默认值，css3变换] flexbox[flex布局] ie[IE9-]
- `width` 宽度
- `height` 高度

`@util center([type=transform|flexbox|ie], [width], [height]);`

```css
/* before */

/* position + transform */
.center {
  @util center;
}

/* position + margin */
.center-ie {
  @util center('ie8', 200, 280);
}

/* flex */
.center-flex {
  @util center('flexbox');
}

/* after */

/* position + transform */
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* position + margin */
.center-ie {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* flex */
.center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### vertical center

`@util vertical-center;`

```css
/* before */
.vam-box {
  @util vertical-center;
}

/* after */
.vam-box {
}
.vam-box:after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle
}
```

### center-block

`@util center-block;`

```css
/* before */
.center-block {
  @util center-block;
}

/* after */
.center-block {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

### hr

`@util hr;`

```css
/* before */
.hr {
  @util hr;
}

/* after */
.hr {
  clear: both;
  display: block;
  overflow: hidden;
  height: 0;
  font-size: 0;
  border-bottom: 1px solid #cdcdcd;
}
```

### text-hide

`@util text-hide;`

```css
/* before */
.text-hide {
  @util text-hide;
}

/* after */
.text-hide {
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
```
### select-no-appearance

`@util select-no-appearance;`

```css
/* before */
.sna {
  @util select-no-appearance;
}

/* after */
.sna {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-overflow: "";
  text-indent: .01px;
}

```

### wrap

`@util wrap;`

```css
/* before */
.wrap { 
  @util wrap;
}

/* after */
.wrap {
  white-space: normal;
  word-wrap: break-word;
  word-break: break-all;
}

```

### nowrap

`@util nowrap;`

```css
/* before */
.nowrap {
  @util nowrap;
}

/* after */
.nowrap {
  white-space: nowrap;
  word-wrap: normal;
}
```

### triangle

- `type` 类型  equ[全等三角形] iso[等边三角形] sca[不等边三角形]
- `direction`  方向
- `color` 颜色
- `width` 宽度
- `height` 高度

`@util triangle([type=equ|iso|sca], [direction], [color], [width], [height]);`

```css
/* before */
.arrow {
  @util triangle();
}
.arrow-top {
  @util triangle('iso', 'top', '#f00', 20, 10);
}
.arrow-bottom {
  @util triangle('iso', 'bottom', '#f00', 20, 10);
}
.arrow-left {
  @util triangle('iso', 'left', '#f00', 20, 10);
}
.arrow-right {
  @util triangle('iso', 'right', '#f00', 20, 10);
}
.arrow-top-left {
  @util triangle('iso', 'topLeft', '#f00', 20, 10);
}
.arrow-top-right {
  @util triangle('iso', 'topRight', '#f00', 20, 10);
}
.arrow-bottom-left {
  @util triangle('iso', 'bottomLeft', '#f00', 20, 10);
}
.arrow-bottom-right {
  @util triangle('iso', 'bottomRight', '#f00', 20, 10);
}

/* after */
.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #000 transparent transparent transparent;
}
.arrow-top {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #f00 transparent;
}
.arrow-bottom {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #f00 transparent transparent transparent;
}
.arrow-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 20px 5px 0;
  border-color: transparent #f00 transparent transparent;
}
.arrow-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 20px;
  border-color: transparent transparent transparent #f00;
}
.arrow-top-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 20px 0 0;
  border-color: #f00 transparent transparent transparent;
}
.arrow-top-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 20px 10px 0;
  border-color: transparent #f00 transparent transparent;
}
.arrow-bottom-left {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 0 20px;
  border-color: transparent transparent transparent #f00;
}
.arrow-bottom-right {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 10px 20px;
  border-color: transparent transparent #f00 transparent;
}
```

 ### rect
 
 `@util rect([width],[height],[background-color]);`

```css
/* before */
.rect-a {
  @util rect(30,50,'#ff0');
}
.rect-b {
  @util rect(30,*,'#ff0');
}
.rect-c {
  @util rect(*,50,'#ff0');
}
.rect-d {
  @util rect(*,*,'#ff0');
}
.rect-e {
  @util rect(30,50,*);
}

/* after */
.rect-a {
  width: 30px;
  height: 50px;
  background-color: #ff0;
}
.rect-b {
  width: 30px;
  background-color: #ff0;
}
.rect-c {
  height: 50px;
  background-color: #ff0;
}
.rect-d {
  background-color: #ff0;
}
.rect-e {
  width: 30px;
  height: 50px;
}

```

### circle

`@util circle([diameter],[radius],[background-color]);`

```css
/* before */
.circle-a {
  @util circle(50, '#ff0');
}
.circle-b {
  @util circle(50, *);
}

/* after */
.circle-a {
  width: 50px;
  height: 50px;
  background-color: #ff0;
  border-radius: 50%;
}
.circle-b {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

```
