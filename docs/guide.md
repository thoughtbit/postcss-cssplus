## 下一代的 CSS 语法规则

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

### Nesting

Allows you to nest selectors

```css
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

### Extend

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

### Mixins properties

## 性能

### automatic vendor prefixes

Vendor prefixes are automatically added (and removed if deprecated/useless
depending on your browser scope) using
**[autoprefixer](https://github.com/postcss/autoprefixer)**).


### Reset

## 常用方法

## 遍历


## px to rem

`rem` unit (`px` fallback)

`rem` fallback to `px`
(if your browser scope cover old browsers, eg: IE8).

```css
h1 {
  font-size: 1.5rem;
}
```

[Specification](http://www.w3.org/TR/css3-values/#rem-unit)
|
[Plugin documentation](https://github.com/robwierzbowski/node-pixrem)

## `::` pseudo syntax (`:` fallback)

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

## Utils


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
