# CSS cheatsheet

> color: blue; color: #000000; color: #F00; color: rgb(254,87,0)

> background-color: blue; 

### selectors: tags, class, id, attributes
```
h1{
    font-size: 16px
    font-family: Lobster, monospace, serif, sans-serif;
}
[type='radio'] {
  margin: 20px 0px 20px 0px;
}
```

> <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

### Size Images
```
<style>
  .larger-image {
    width: 500px;
  }
</style>
```

### ADD borders around your elements
```
<style>
  .thin-red-border {
    border-color: red;
    border-width: 5px;
    border-style: solid;
    border-radius: 10px (or 50% for round images)
  }
</style>
```

> padding, margin(negative values allowed) (padding: 10px 10px 10px 10px)(also individual sides used)(shorthand also used)

> border: 1px solid red

### Inheritance

>  you can style your body element just like any other HTML element, and all your other elements will inherit your body element's styles.

### Prioritize One Style Over Another
1. Our classes will override the body element's CSS
2. However, the order of the class declarations in the <style> section are what is important. The second declaration will always take precedence over the first. Because .blue-text is declared second, it overrides the attributes of .pink-text in class="blue-text pink-text". Note: It doesn't matter which order the classes are listed in the HTML element.
3. Override Class Declarations by Styling ID Attributes
4. Override Class Declarations with Inline Styles(same used as ID)
5. In many situations, you will use CSS libraries. These may accidentally override your own CSS. So when you absolutely need to be sure that an element has specific CSS, you can use !important
> color: red !important;


### CSS variables

```
--penguin-skin: gray;
background: var(--penguin-skin);
background: var(--penguin-skin, black);         Fallbcak value if variable doesn't clarify
```

###  Improve Compatibility with Browser Fallbacks

If you use a CSS variable to assign a background color on a site, Internet Explorer will ignore the background color because it does not support CSS variables. In that case, the browser will use whatever value it has for that property.
> background: red
  then  background: var(--red-color);

### Cascading

> When you create a variable, it becomes available for you to use inside the element in which you create it. It also becomes available within any elements nested within it. This effect is known as cascading.

> You can think of the :root element as a container for your entire HTML document, in the same way that an html element is a container for the body element.

> By creating your variables in :root, they will be available throughout the whole web page.

> When you create your variables in :root they will set the value of that variable for the whole page. You can then over-write these variables by setting them again within a specific element.

###  Use a media query to change a variable

> For instance, when your screen is smaller or larger than your media query break point, you can change the value of a variable, and it will apply its style wherever it is used.
```
<style>
  
    :root {

        --penguin-size: 300px;
    
	--penguin-skin: gray;
    
	--penguin-belly: white;
   
     }
 
   
  @media (max-width: 350px) {
 
	:root {
      
     
	    --penguin-size: 200px;
      
	    --penguin-skin: black
      
	}
</style>

###  Absolute versus Relative Units

> The two main types of length units are absolute and relative. Absolute units tie to physical units of length. For example, in and mm refer to inches and millimeters, respectively. Absolute length units approximate the actual measurement on a screen, but there are some differences depending on a screen's resolution.

> Relative units, such as em or rem, are relative to another length value. For example, em is based on the size of an element's font. If you use it to set the font-size property itself, it's relative to the parent's font-size. example: padding: 1.5em
      
  