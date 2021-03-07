---
slug: "/curriculum/html-css/working-with-html-forms"
date: "2021-02-28"
title: "Handle user input with HTML forms"
description: "90% of the web are text and forms. Learn to handle user input with HTML forms."
type: "lesson"
---

90% of frontend web development is about handling HTML forms and inputs. And this lesson will teach you exactly that. You will learn to create and style form inputs.

An important aspect of HTML forms is the form submission. There is no point in having a form if user can't submit it. But this lesson is not in the scope to explain the form submission. You will learn about it in JavaScript.

## HTML Form Element
The markup element for creating a form is **```<form>```**. Form element will wrap all other elements included within the form.

```html
<form class="login-form">
  ...
</form>
```

## Inputs and TextAreas
### **Inputs**
To gather information from user **```<input>```** element is used. You might need different sorts of information from user like a name (text), phone number (number), password (text), and e.t.c. **Type** attribute is used on the input element to define the type of input.

Input is a self closing tag.

```html
<form>
  <input type="text" placeholder="userName" />
  <input type="number" placeholder="phone-number" />
  <input type="email" placeholder="userEmail" />
  <input type="password" placeholder="password" />

  <input type="color" placeholder="Select Color" />
  <input type="url" placeholder="Enter your website domain">
  <input type="date" placeholder="Select a date" />
  <input type="time" placeholder="Select a time">

  <input type="Submit" />
</form>
```

- **Text input** accepts plain text including all sorts of character.
- **Number input** accepts only numerical characters.
- **Email input** accepts only valid email with ```@``` symbol included.
- **Password input** accepts all characters like text input. It hides those characters behind a ```*``` symbol.
- Input type **Submit** creates a form submission button.

**Placeholder attribute** hints the user about the expected value for the input. It provides a sample value or short description.

Here are live example of the above code snippet.
<form style="border: 1px solid black; padding: 10px;">
  <input type="text" placeholder="userName" style="margin: 5px;" />
  <input type="number" placeholder="phone-number" style="margin: 5px" />
  <input type="email" placeholder="userEmail" style="margin: 5px" />
  <input type="password" placeholder="password" style="margin: 5px;" />

  <input type="color" placeholder="Select Color" style="margin: 5px;" />
  <input type="url" placeholder="Enter your website domain" style="margin: 5px;" />
  <input type="date" placeholder="Select a date" style="margin: 5px;" />
  <input type="time" placeholder="Select a time" style="margin: 5px;" />

  <input type="Submit" style="margin: 5px; display: block;">
</form><br />

### **TextAreas**
TextArea also captures text based user info but it can accept larger paragraphs spanning multiple lines. For example you can use text area for user bio, posts, or comments.

```html
  <textarea cols="10" rows="30">
    Comment Here...
  </textarea>
```

It takes two sizing attributes **cols** and **rows**. Cols defines the width and Rows defines the height of textarea.

Here is an example of textarea.
<div style="border: 1px solid black; display: flex; justify-content: center; padding: 5px;">
  <textarea cols="60" rows="08">
    Comment Here...
  </textarea>
</div><br />

## Multiple Choice Inputs
Multiple choice inputs are used when you want the user to choose from predefined options. Major multiple choice input types are **radio and checkbox**. And for dropdown menu **```<select>```** and **```<option>```** elements are used.

### **Radio Button**
Radio button allows user to select only one of the multiple given options. Radio button is created with type attribute set to ```radio```. And value attribute defines the option.

```html
<form>
  <input type="radio" name="accountType" value="instructor" /> Instructor
  <input type="radio" name="accountType" value="student" /> Student
  <input type="radio" name="accountType" value="general" /> General
</form>
```

Make sure to give all related options the same value for name attribute. Else user will be able to select multiple options at once, which is not ideal.

RESULT
<div style="border: 1px solid black; padding: 5px;">
  Select your account type.

  <form>
    <input type="radio" name="accountType" value="instructor" checked /> Instructor
    <input type="radio" name="accountType" value="student" /> Student
    <input type="radio" name="accountType" value="general" /> General
  </form>
</div><br />

### **CheckBox**
Checkboxes works similar to radio buttons, they use **```checkbox```** as their type attribute. Checkboxes allows user to select multiple options at once unlike radio button.

```html
<form>
  <input type="checkbox" name="accountType" value="instructor" /> Instructor
  <input type="checkbox" name="accountType" value="student" /> Student
  <input type="checkbox" name="accountType" value="general" /> General
</form>
```

RESULT
<div style="border: 1px solid black; padding: 5px;">
  Select your account type.

  <form>
    <input type="checkbox" name="accountType" value="instructor" checked /> Instructor
    <input type="checkbox" name="accountType" value="student" /> Student
    <input type="checkbox" name="accountType" value="general" /> General
  </form>
</div>

### **DropDowns**
Dropdowns are good for selecting something from a long list of options. To create a dropdown **```<select>```** element is used with **```<option>```** element.

The **```name```** attribute is used on the **select** element and value attribute on each **option** element.

```html
<select name="accountType">
  <option value="intructor" selected>Instructor</option>
  <option value="student">Student</option>
  <option value="admin">Admin</option>
</select>
```

RESULT
<div style="border: 1px solid black; padding: 5px;">
  <select name="accountType">
    <option value="" selected>Select account type</option>
    <option value="intructor">Instructor</option>
    <option value="student">Student</option>
    <option value="admin">Admin</option>
    <option value="editor">Editor</option>
  </select>
</div>

## More Input Types and Attributes
There are few more input types and attributes to know about.

### File Input
With file input you give user the ability to upload a file. All you have to do is set the input type attribute as file.

```html
<form>
  <input type="file" />
</form>
```

RESULT
<div style="border: 1px solid black; padding: 5px;">
  <form>
    <input type="file" />
  </form>
</div><br />

Submission of form is not in the scope of this lesson.

### **Disabled Attribute**
Disabled attribute on any input will disable that input so that user can't use it.

```html
  <form>
    <input type="text" disabled />
  </form>
```

RESULT
<div style="border: 1px solid black; padding: 5px;">
  <form>
    <input type="text" placeholder="Disabled Input" disabled />
  </form>
</div><br />

### **Required Attribute**
Required attribute on an input won't let the user submit the form if that input is not filled.

```html
<form>
  <input type="text" placeholder="Disabled Input" required />
  <input type="submit" />
</form>
```
Try submiting the below form without entering your name.

RESULT
<div style="border: 1px solid black; padding: 5px;">
  <form>
    <input type="text" placeholder="Enter you name" required />
    <input type="submit" />
  </form>
</div><br />

## Structure Based Label Element
Remember symentic HTML elements, well forms also have structure based symentic element.

### **Label**
Label element defines caption and heading for its corresponding input element.

Labels have a **for attribute**. The value of the for attribute should match with the value of the id attribute on the corresponding input element.

Matching up the for and id attribute values ties the two elements together, allowing users to click on the **```<label>```** element to bring focus to the proper form control.

```html
<form>
  <label for="userName">UserName</label>
  <input type="text" id="userName" />
</form>
```

RESULT
<div style="border: 1px solid black; padding: 5px;">
  <form>
    <label for="userName">UserName</label>
    <input type="text" id="userName" />
  </form>
</div><br />

So, that's all there is to learn about forms for now. As I already mentioned form submission is not in the scope of this lesson.

<hr />

With that we came at the end of this lesson. Next you will learn about organizing tabular data with HTML tables. And next lesson is the last lesson of our HTML / CSS course.

Thank You!