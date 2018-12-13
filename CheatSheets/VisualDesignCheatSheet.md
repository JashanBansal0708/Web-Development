# Visual dseign cheatsheet

> text-align: justify | center| left | right;

> width: 220px; height: 25px

> font-size: 27px

> The font-weight property sets how thick or thin characters are in a section of text.(200-800)

> CSS offers the line-height property to change the height of each line in a block of text. As the name suggests, it changes the amount of vertical space that each line of text gets. exmaple: line-height: 25px

Values can be given in relative length units (such as em), absolute length units (such as px), or as a percentage of its containing parent element.

> With the strong tag, the browser applies the CSS of font-weight: bold; to the element.

> With the u tag, the browser applies the CSS of text-decoration: underline; to the element.

> To emphasize text, you can use the em tag. This displays text as italicized, as the browser applies the CSS of font-style: italic; to the element.

> To strikethrough text, which is when a horizontal line cuts across the characters, you can use the s tag. It shows that a section of text is no longer valid. With the s tag, the browser applies the CSS of text-decoration: line-through; to the element.

> You can use the hr tag to add a horizontal line across the width of its containing element. This can be used to define a change in topic or to visually separate groups of content.

### Adjust the background-color Property of Text
```
This challenge uses rgba() instead of hex codes or normal rgb().
rgba stands for:
  r = red
  g = green
  b = blue
  a = alpha/level of opacity
 example : background-color: rgba(45, 45, 45, 0.1)
 ```

## Box- shadow 

The box-shadow property takes values for offset-x (how far to push the shadow horizontally from the element), offset-y (how far to push the shadow vertically from the element), blur-radius, spread-radius and a color value, in that order. The blur-radius and spread-radius values are optional.

An example of the CSS to create multiple shadows with some blur, at mostly-transparent black colors:

> box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
> box shadow: 10px 10px rgba(0,0,0,.1)

## Opacity 

> opacity: 0.7

## text-transform
```
Value		Result
lowercase	"transform me"
uppercase	"TRANSFORM ME"
capitalize	"Transform Me"
initial		Use the default value
inherit		Use the text-transform value from the parent element
none		Default: Use the original text
```

## Psedo classes

> A pseudo-class is a keyword that can be added to selectors, in order to select a specific state of the element. For example, the styling of an anchor tag can be changed for its hover state using the :hover pseudo-class selector. 
```
a:hover {
  color: red;
}
```

## Change an Element's Relative Position

> CSS treats each HTML element as its own box, which is usually referred to as the CSS Box Model. Block-level items automatically start on a new line (think headings, paragraphs, and divs) while inline items sit within surrounding content (like images or spans). The default layout of elements in this way is called the normal flow of a document, but CSS offers the position property to override it.
> When the position of an element is set to relative, it allows you to specify how CSS should move it relative to its current position in the normal flow of the page. It pairs with the CSS offset properties of left or right, and top or bottom. These say how many pixels, percentages, or ems to move the item away from where it is normally positioned. The following example moves the paragraph 10 pixels away from the bottom:
```
p {
  position: relative;
  bottom: 10px;
}
```
> Changing an element's position to relative does not remove it from the normal flow - other elements around it still behave as if that item were in its default position.

## Move a Relatively Positioned Element with CSS Offsets

> The CSS offsets of top or bottom, and left or right tell the browser how far to offset an item relative to where it would sit in the normal flow of the document. 

## Lock an Element to its Parent with Absolute Positioning

> The next option for the CSS position property is absolute, which locks the element in place relative to its parent container. Unlike the relative position, this removes the element from the normal flow of the document, so surrounding items ignore it. The CSS offset properties (top or bottom and left or right) are used to adjust the position.
> One nuance with absolute positioning is that it will be locked relative to its closest positioned ancestor. If you forget to add a position rule to the parent item, (this is typically done using position: relative;), the browser will keep looking up the chain and ultimately default to the body tag.

## Lock an Element to the Browser Window with Fixed Positioning

> The next layout scheme that CSS offers is the fixed position, which is a type of absolute positioning that locks an element relative to the browser window. Similar to absolute positioning, it's used with the CSS offset properties and also removes the element from the normal flow of the document. Other items no longer "realize" where it is positioned, which may require some layout adjustments elsewhere.
> One key difference between the fixed and absolute positions is that an element with a fixed position won't move when the user scrolls.


## Push Elements Left or Right with the float Property

> The next positioning tool does not actually use position, but sets the float property of an element. Floating elements are removed from the normal flow of a document and pushed to either the left or right of their containing parent element. It's commonly used with the width property to specify how much horizontal space the floated element requires.

## Change the Position of Overlapping Elements with the z-index Property

> When elements are positioned to overlap, the element coming later in the HTML markup will, by default, appear on the top of the other elements. However, the z-index property can specify the order of how elements are stacked on top of one another. It must be an integer (i.e. a whole number and not a decimal), and higher values for the z-index property of an element move it higher in the stack than those with lower values. 

## Center Elements
```
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto
  }
</style>
<div></div>
```
> For Images first set display: block and then margin

## Complementary Colors

> When two colors are opposite each other on the wheel, they are called complementary colors. They have the characteristic that if they are combined, they "cancel" each other out and create a gray color. However, when placed side-by-side, these colors appear more vibrant and produce a strong visual contrast. Some examples:
```
red (#FF0000) and cyan (#00FFFF)
green (#00FF00) and magenta (#FF00FF)
blue (#0000FF) and yellow (#FFFF00)
```
> There are many color picking tools available online that have an option to find the complement of a color.

## Tertiary colors

> Computer monitors and device screens create different colors by combining amounts of red, green, and blue light. This is known as the RGB additive color model in modern color theory. Red (R), green (G), and blue (B) are called primary colors. Mixing two primary colors creates the secondary colors cyan (G + B), magenta (R + B) and yellow (R + G). You saw these colors in the Complementary Colors challenge. These secondary colors happen to be the complement to the primary color not used in their creation, and are opposite to that primary color on the color wheel. For example, magenta is made with red and blue, and is the complement to green.

> Tertiary colors are the result of combining a primary color with one of its secondary color neighbors. For example, red (primary) and yellow (secondary) make orange. This adds six more colors to a simple color wheel for a total of twelve.

> There are various methods of selecting different colors that result in a harmonious combination in design. One example that can use tertiary colors is called the split-complementary color scheme. This scheme starts with a base color, then pairs it with the two colors that are adjacent to its complement. The three colors provide strong visual contrast in a design, but are more subtle than using two complementary colors. Here are three colors created using the split-complement scheme:
```
Color	Hex Code
orange	#FF7D00
cyan	#00FFFF
raspberry	#FF007D
```
## A example of good color combination
```
<style>
  body {
    background-color: white;       
  }
  header {
    background-color: #09A7A1;       <!-- Teal color -->
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: #09A7A1;
  }  
  button {
    background-color: #FF790E;       <!-- Orange Color -->
  }
  footer {
    background-color: #09A7A1;
    color: white;
    padding: 0.5em;
  }
</style>
```

## Adjust the Hue of a Color

> Colors have several characteristics including hue, saturation, and lightness. CSS3 introduced the hsl() property as an alternative way to pick a color by directly stating these characteristics.

> Hue is what people generally think of as 'color'. If you picture a spectrum of colors starting with red on the left, moving through green in the middle, and blue on right, the hue is where a color fits along this line. In hsl(), hue uses a color wheel concept instead of the spectrum, where the angle of the color on the circle is given as a value between 0 and 360.

> Saturation is the amount of gray in a color. A fully saturated color has no gray in it, and a minimally saturated color is almost completely gray. This is given as a percentage with 100% being fully saturated.

>Lightness is the amount of white or black in a color. A percentage is given ranging from 0% (black) to 100% (white), where 50% is the normal color.

Few Examples:
```
Color		HSL
red		hsl(0, 100%, 50%)
yellow	hsl(60, 100%, 50%)
green	hsl(120, 100%, 50%)
cyan	hsl(180, 100%, 50%)
blue	hsl(240, 100%, 50%)
magenta	hsl(300, 100%, 50%)
```
Code Example:
```
header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
     80%, 25%);
  }
```

##  Create a Gradual CSS Linear Gradient

>Applying a color on HTML elements is not limited to one flat hue. CSS provides the ability to use color transitions, otherwise known as gradients, on elements. If value is 90deg then it is a vertical transition.The angle value is the direction of the gradient. Example:
```
<style>

  div{ 
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC, red, blue, green, white, yellow);
  }

</style>

<div></div>
```

##  Use a CSS Linear Gradient to Create a Striped Element