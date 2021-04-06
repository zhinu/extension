# Xpath tutorial

---

## A little bit about HTML

---

### HTML elements or node


### The HTML element or node is everything from the **start tag** to the **end tag**:


```
<tagname>Content goes here...</tagname>
```

#### Examples of some HTML elements or nodes:


```
<h1>My First Heading</h1>
```

```
<p>My first paragraph.</p>
```

```
<div>A block of code</div>
```



---

### HTML elements can contain other elements / a node may have sub-nodes

The Html element div contains two hml elements h1 and p which are placed between the start tag and the last tag.



```
<div>
    <h1>My heading here</h1>
    <p> text here : Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem</p>
</div>
```


---

### HTML attributes

- All HTML elements can have **attributes**
- Attributes provide **additional information** about elements
- Attributes are always specified in **the start tag**
- Attributes usually come in name/value pairs like: **name="value"**
- All HTML elements can have attributes

---

### Attributes examples 1

    
*     The `href` attribute of `<a>` specifies the URL of the page the link goes to

```
<a href="www.dismoi.io">Visitez Dismoi</a>
```
*     The src attribute of `<img>` specifies the path to the image to be displayed

*     The `width` and `height` attributes of `<img>` provide size information for images

*     The `alt` attribute of `<img>` provides an alternate text for an image

```
<img src="image.jpg" width="800" height="900" alt="belleimage"></img>
```

---
### Attributes examples 2
*     The `style` attribute is used to add styles to an element, such as color, font, size, and more

```
<p style="color:green">This is a paragraph.</p>
```

*     The `lang` attribute of the `<html>` tag declares the language of the Web page

```
<p lang="fr-FR">Ce paragraphe est en français</p>
```

---
### Attributes examples 3
*     The `title` attribute defines some extra information about an element
```
<p title="langue du paragraphe">Ce paragraphe est en français</p>
```
* The `class` attribute is mostly used to point to a class in a style sheet. However, it can also be used by a JavaScript (via the HTML DOM) to make changes to HTML elements with a specified class.
```
<div class="active">This block is active</div>
```

---
## Xpath - what is it?


> Xpath is a query language for XML, and in our case HTML.

> An Xpath query can either 
> - fetch information within a node
> - states whether a specific node or multiple nodes exist with certain parameters


---
| Expression |	Description
| --- | --- |
|nodename |	Selects all nodes with the name "nodename"
|/ |	Selects from the root node
|// |	Selects nodes in the document from the current node that match the selection no matter where they are
|. |	Selects the current node
|.. |	Selects the parent of the current node
|@ |	Selects attributes

---
> The following Xpaths
```
/html/body/h1/
//h1
/html//h1
```
> Fetch the h1 html element from the code below
```
<html>
  <body>
    <h1> the tag queried by Xpath</h1>
  </body>
</html>
```
---
The following Xpaths
```
//@href
//h1/@href
```
Fetch the a element
```
<html>
  <body lang="fr">
    <h1><a href="https://dismoi.io"> visit dismoi.io</a></h1>
  </body>
</html>
```
---
Let's fetch an attribute with a specific content in this case a link to __https://dismoi.io__
```
//*[href='https://dismoi.io']
```

Now let's fetch any link that contains dismoi.io
```
//@href[contains(.,'dismoi.io')]
```
or
```
//*[contains(href,'dismoi.io')]
```
---
### Logical connnectors
We can use logical connectors such as **AND** and **OR**

For instance let's look at the code below
```
<body>
  <div id="book_title">
    <p>Sapiens</p>
  </div>
  <div id="book_type">
    <div id="documentary history">
      <p>documentary</p>
    </div>
  </div>
</body>
```
---
In this case we want to target books that are of the documentary genre.

```
//*[id='book_title'] and //div[id='book_type']/div[contains(id, 'documentary')]
```
