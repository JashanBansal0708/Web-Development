# Responsive Design cheat sheet

# Create a Media Query

> Media Queries are a new technique introduced in CSS3 that change the presentation of content based on different viewport sizes. The viewport is a user's visible area of a web page, and is different depending on the device used to access the site.

> Media Queries consist of a media type, and if that media type matches the type of device the document is displayed on, the styles are applied. You can have as many selectors and styles inside your media query as you want.

Examples:
> @media (max-width: 100px) {  CSS Rules  }
> @media (min-height: 350px) {  CSS Rules }

```
@media( max-height:800px){
    p {
      font-size: 10px;
    }
  }
```

## Make an Image Responsive

```
img {
  max-width: 100%;
  display: block;
  height: auto;
}
```
The max-width property of 100% scales the image to fit the width of its container, but the image won't stretch wider than its original width. Setting the display property to block changes the image from an inline element (its default), to a block element on its own line. The height property of auto keeps the original aspect ratio of the image.

## Use a Retina Image for Higher Resolution Displays

> The simplest way to make your images appear "retina" (and optimize them for retina displays) is to define their width and height values as only half of what the original file is. Example:
```
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

## Make Typography Responsive

> Instead of using em or px to size text, you can use viewport units for responsive typography. Viewport units, like percentages, are relative units, but they are based off different items. Viewport units are relative to the viewport dimensions (width or height) of a device, and percentages are relative to the size of the parent container element.
> The four different viewport units are:
1. vw: 10vw would be 10% of the viewport's width.
2. vh: 3vh would be 3% of the viewport's height.
3. vmin: 70vmin would be 70% of the viewport's smaller dimension (height vs. width).
4. vmax: 100vmax would be 100% of the viewport's bigger dimension (height vs. width).

Example:
```
<style>
  h2{
      width: 80vw;
  }
  p{
      width: 75vmin;
  }

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```