---
slug: "/curriculum/html-css/hyperlinks"
date: "2021-02-10"
title: "Creating and Working with hyperlinks"
description: "Learn about creating links from one page to another and different types of paths." 
type: "lesson"
---

Hyperlink is one of the core concepts of the web. It is used to create links from one web page to another web page. The linked web page can be a page from the same website or it can be a page from a different website.

You specifiy the url of the linked page in href attribute. The href stand for hyperlink reference.

```html
<a href="https://twitter.com/visionmadHQ">VisionMad Twitter Account</a>
```

## Relative and Absolute paths
Link to a page on the same website uses **relative** path and link to a page on a different website uses **absolute** path.

The relative path does not include the domain name because you are linking to a page under the current domain. It just includes the directory and file names to be changed. See the example below.

```html
<a href="/curriculum/html-css">HTML CSS Curriculum page</a>
```

The absolute path include the domain name along with the directories and file name because now you are linking to a website or doamin outside the current one.

```html
<a href="https://en.wikipedia.org/wiki/HTML">Wikipedia HTML page</a>
```

## Creating an Email link.
An email link opens the default mailing app of the system so that your user can easily send you emails. To create an email link href attribute value needs to start with ```mailto:``` followed by the email address to which email should be sent.

A simple example.
```html
<a href="mailto:swastikb380@gmail.com">Send me feedback about this course.</a>
```
[Send me feedback about this course](mailto:swasikb49@gmail.com)

You can also populate the email subject and body in href separated by **```&```**. Spaces in your subject and body should be encoded with **```%20```**. And first parameter following the email address must begin with a question mark **```?```**.

```html
<a href="mailto:swastikb380@gmail.com?subject=Feeback%20about%20the%20course&body=The%20course%20is%20really%20very%20helpful.">Send me feeback about this course.</a>
```

## Open link in a new tab.
Links can be opend in a new browser window by using **```target```** attribute. This is also good when you don't want your user to leave your site.

```html
<a href="https://visionmad.com" target="_blank">Open VisionMad in a new tab.</a>
```
<a href="https://visionmad.com" target="_blank">Open VisionMad in a new tab.</a>

## Link to parts of the same page.
It is possible to link to a particular section of the current page. It is done by giving that section an id attribute and using that id in the hyperlink.

Let's build a back to top button to see this in action.

```html
<h1 id="top-heading">Creating and working with hyperlinks</h1>
...
...
<a href="#top-heading">Back to top</a>
```
[Back to top](#top-heading)

<hr />

In this lesson you learned about hyperlinks, their types, email links, target attributes, and you also built a back to top link. Take your time to revise these topics again.

Thanks for reading. Please show some support by sharing this course.