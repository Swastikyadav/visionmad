---
slug: "/curriculum/html-css/background-and-gradients"
date: "2021-02-26"
title: "CSS background and gradients"
description: "Learn to apply different types of backgrounds like colors, images, and gradients."
type: "lesson"
---

In this lesson you will learn to apply different types of backgrounds like colors, images, and gradients on the web page. A well applied background contributes to the overall appearance of your website.

## Background Colors
CSS Background property is used to add background (color) to an element. Background color value can be defined as Keywords, HEX color code, RGB, or HSL.

```css
div {
  background: #ff0000;
}
```

### **Transparent Backgrounds**
You can set an element's background as transparent.

```css
div {
  background: transparent;
}
```

But if you want it to be color transparent, you can use alpha value in rgba.

```css
div {
  background: rgba(255, 0, 0, 0.4);
}
```
The last value in rgba (a) is alpha which defines the opacity. Opacity 0 means completely transparent and 1 means no transparency at all.

<section style="display: flex; justify-content: space-around; flex-wrap: wrap; padding: 5px; border: 1px solid black;">
  <div style="min-width: 150px; max-width: 150px; height: 150px; background: transparent; border: 1px solid black; padding: 2px; margin: 2px;">Transparent</div>
  <div style="min-width: 150px; max-width: 150px; height: 150px; background: rgba(255, 0, 0, 0.4); padding: 2px; margin: 2px;">Color transparent (opacity - 0.4)</div>
</section>
<br />

## Background Images
You can also set an image to an element's background with background property and specifiying url in its value.

```css
section {
  background: url("image-path");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
```

### **Background Repeat**
By default background image is repeated horizontally as well as vertically to fit the element size. This is handled by setting **background-repeat** property to ```no-repeat```.

### **Background Size**
Setting **background-size** property to ```cover``` makes the image to fit element's size.

### **Background Position**
Background position specifies the position of image within the element. **background-position** property takes two values a horizontal offset and a vertical offset. It's value can be set to **top, bottom ,left, right, and center, or pixels, and percentages**.

Here is an example of adding background image to a section element with background properties as the above snippet.
<section style="border: 1px solid black; height: 250px; background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8borqsjfVye2Rm2dgmXrHHTlxG_1aCgI08Q&usqp=CAU); background-repeat: no-repeat; background-size: cover; background-position: center; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 20px; opacity: 0.8;">
  A Section with background image.
</section><br />

## Background Gradients
Color gradient is the smooth transition from one color to other. It is treated as an image in CSS background.

### **Linear Gradient Background**
Linear gradient takes two color values, first one is beginning color value and second one is the ending color value.

```css
div {
  background: linear-gradient(#eeaeca, #94bbe9);
}
```

RESULT (Gradient direction top to bottom)
<div style="height: 250px; border: 1px solid black; background: linear-gradient(#eeaeca, #94bbe9"></div><br />

By default the gradient colors move from top to bottom. You can specify the direction of gradient like the example below. To start the gradient from left and end at right use the value **to right** in the gradient. And to start gradient at top-left and end at right-bottom use the value **right bottom**.

```css
div {
  background: linear-gradient(to right, #eeaeca, #94bbe9);
}
```

RESULT (Gradient direction left to right)
<div style="height: 250px; border: 1px solid black; background: linear-gradient(to right, #eeaeca, #94bbe9)"></div><br />

### **Radial Gradient**
Radial gradient works from the inside (first color value) to the outside (second color value) of an element creating a circular color transition.

```css
div {
  background: radial-gradient(#eeaeca, #94bbe9);
}
```

RESULT (pink color starts from the center and ends with blue color at the edges)
<div style="height: 250px; border: 1px solid black; background: radial-gradient(#eeaeca, #94bbe9)"></div><br />

So, that's how you apply colors, images, and gradients to the background of an element. It can be time consuming and confusing to create the perfect gradient you need. You can also use gradient generator tools like <a href="https://cssgradient.io/" target="_blank">this</a> one.

<hr />

Next you learn about creating and styling lists. I hope you enjoyed and learned something from this lesson. Please show some support by sharing this lesson.

Thank You!