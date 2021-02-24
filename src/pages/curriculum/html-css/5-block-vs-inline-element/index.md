---
slug: "/curriculum/html-css/block-vs-inline-element"
date: "2021-02-10"
title: "Block vs Inline level element"
description: "This lesson will introduce you to the concept of Block and Inline level elements and the major differences between them." 
type: "lesson"
---

This lesson will introduce you to the Block and Inline level element. Let's understand it with two non-semantic general elements in HTML - **```<div>```** and **```<span>```**. But first lets define Block and Inline elements in HTML.

## What is Block and Inline level element?
Web browsers treats every element as a box. And there are two type of boxes - Block and Inline. This is called the box model which you will study in further modules of this course.

![block vs inline element](./lesson-images/block-vs-inline.png)

The 3rd point in the above image is not discussed in this lesson. We will discuss it in the box model module.

### Block Level Element
- Block level element takes up the full width of the page.
- Block level element always starts on a new line.
- Block level element accepts height and margin on all four sides.

### Important block level elments
- ```<div>```
- ```<header>```
- ```<nav>```
- ```<main>```
- ```<p>```
- ```<h1>-<h6>```
- ```<article>```
- ```<section>```
- ```<aside>```
- ```<form>```
- ```<footer>```

### Inline Level Element
- Inline level element takes up width as per the content.
- Inline level element does not starts on a new line.
- Inline level element does not accepts height and top and bottom margin.

### Important inline level elments
- ```<span>```
- ```<a>```
- ```<button>```
- ```<input>```
- ```<strong>```
- ```<em>```
- ```<img>```

## DIVs and SPANs
Div and Span are two non-semantic general elements in HTML, used for grouping and styling purposes. Div is a **block level element** and Span is an **inline level element**.

HTML
```html
<div class="block-div">
  This is a block level div element.
</div>

<span class="inline-span">
  This is an inline level span element.
</span>
```

CSS
```css
.block-div {
  background: green;
}

.inline-span {
  background: green;
}
```

Here is the result. Notice how div took entire page width whereas span took width as per its content.

<iframe src="https://codesandbox.io/embed/block-and-inline-element-d6qsu?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="block-and-inline-element"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Inline element cannot wrap Block element.
Block elements can wrap an Inline element, but Inline element cannot wrap Block element.

This is right.
```html
<p>
  Block element like p can wrap
  <span>
    inline element like span.
  </span>
</p>
```

This is wrong.
```html
<span>
  Block element like p can wrap
  <p>
    inline element like span.
  </p>
</span>
```

There is only one exception to this rule. Anchor (```<a>```) which is an inline element is allowed to wrap block elements. Because you may want to add a hyperlink to a block element. 

Now go and identify in your portfolio project which elements are block level and which are inline level.

<hr />

One last thing is left to discuss about block and inline elements which we will cover in the box model module. For now this is all about block and inline elements in HTML.

Please support us by sharing this course and content.