---
slug: "/curriculum/html-css/semantic-html-fundamentals"
date: "2021-02-10"
title: "Semantic HTML elements fundamental"
description: "In this lesson, you will learn what is semantic HTML and list of semantic elements in HTML. You will also learn text and structure based semantic elements."
type: "lesson"
---

Semantic elements are very important part of HTML5, which defines the purpose of an element and it makes your code readable for both humans and machines. Prior to HTML5 developers used **class** attribute on **div** and **span** elements to specify the purpose of an element.

For example, here is how you would add **footer** to a page prior to HTML5.
```html
<body>
  <div class="footer">
    Ⓒ visionmad.com 2021
  </div>
</body>
```

And here is how you should do it now with semantic HTML5.
```html
<body>
  <footer>
    Ⓒ visionmad.com 2021
  </footer>
</body>
```

## Why semantic elements?
There are several benefits of using tags that have semantic meaning. I have listed two major benefits below.

1. **Easier to read and understand**: It adds value to an element by clearly defining what each element is about.
2. **Accessibility**: It enables computers, screen readers, search engines, and other devices to read and understand the content on a web page.

## Text based semantic elements.
Text based semantic elements provides meaning and purpose to texts on your web page.

### Headings
Headings are used to define multi level titles of a topic. Headings are of 6 different levels from **`<h1>`** to **`<h6>`**. `<h1>` being the most important title and `<h6>` being the least important title.

```html
<body>
  <h1>Heading level 1</h1>
  <h2>Heading level 2</h2>
  <h3>Heading level 3</h3>
  <h4>Heading level 4</h4>
  <h5>Heading level 5</h5>
  <h6>Heading level 6</h6>
</body>
```
Here is how it looks on the web page.
> <h1>Heading level 1</h1>
> <h2>Heading level 2</h2>
> <h3>Heading level 3</h3>
> <h4>Heading level 4</h4>
> <h5>Heading level 5</h5>
> <h6>Heading level 6</h6>

### Paragraphs
As the name suggests, this is to add some paragraphs that mostly supports your headings. The last sentence that you read was a paragraph element.

```html
<body>
  <p>
    As the name suggests, this is to add some paragraphs that mostly supports your headings.
  </p>
</body>
```

### Strong
Strong element is used to make a text <u>**```bold```**</u>. Here is an example.

```html
<body>
  <p>
    Strong element is used to make a text <strong>bold</strong>.
  </p>
</body>
```

### Emphasis
Emphasis element is used to make a text <u>*```italic```*</u>. Here is an example.

```html
<body>
  <p>
    Emphasis element is used to make a text <em>italic</em>.
  </p>
</body>
```

## Structure based semantic elements.
These semantics denotes the structural intension of an element and adds structural value and meaning to it. Some of the most used and common structure based semantic elements are ```<header>```, ```<nav>```, ```<article>```, ```<section>```, ```<aside>```, and ```<footer>```.

## Header
The header element is used at the top of the page. 

## Nav
## Article
## Section
## Aside
## Footer