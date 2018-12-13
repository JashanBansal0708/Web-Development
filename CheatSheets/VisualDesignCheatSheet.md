# Visual design cheatsheet

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

>  repeating-linear-gradient() accepts a variety of values,but in this an angle value and color stop values.
```
<style>

  div{ 
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      30deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }

</style>

<div></div>
```
The gradient starts with the color yellow at 0 pixels which blends into the second color blue at 40 pixels away from the start. Since the next color stop is also at 40 pixels, the gradient immediately changes to the third color green, which itself blends into the fourth color value red as that is 80 pixels away from the beginning of the gradient.

## Create Texture by Adding a Subtle Pattern as a Background Image

> One way to add texture and interest to a background and have it stand out more is to add a subtle pattern. The key is balance, as you don't want the background to stand out too much, and take away from the foreground. The background property supports the url() function in order to link to an image of the chosen texture or pattern.

```
<style>
  body {
     background : url("https://i.imgur.com/MJAkxbh.png");
  }
</style>
```

## Use the CSS Transform scale Property to Change the Size of an Element
```
p {
  transform:scale(2);
}
```

## Use the CSS Transform scale Property to Scale an Element on Hover

> The transform property has a variety of functions that lets you scale, move, rotate, skew, etc., your elements. When used with pseudo-classes such as :hover that specify a certain state of an element, the transform property can easily add interactivity to your elements.
```
p:hover {
  transform: scale(2.1);
}
```

## Use the CSS Transform Property skewX to Skew an Element Along the X-Axis((rotate() works the same way that skewX() and skewY() do)
```
transform: skewY(-10deg);
transform: skewX(32deg);
```

## Create a Graphic Using CSS(Moon Graphic)
```
<style>
.center
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 25px 10px 0px 0px blue; 
}

</style>
<div class="center"></div>
```

## Create a More Complex Shape Using CSS and HTML(Heart example, not there)

>::before and ::after pseudo-elements. These pseudo-elements are used to add something before or after a selected element.
> For the ::before and ::after pseudo-elements to function properly, they must have a defined content property. This property is usually used to add things like a photo or text to the selected element. When the ::before and ::after pseudo-elements are used to make shapes, the content property is still required, but it's set to an empty string.

# CSS @keyframes and animation Properties Work

> The animation properties control how the animation should behave and the @keyframes rule controls what happens during that animation. There are eight animation properties in total.

> animation-name sets the name of the animation, which is later used by @keyframes to tell CSS which rules go with which animations. 

> animation-duration sets the length of time for the animation.

> @keyframes is how to specify exactly what happens within the animation over the duration. This is done by giving CSS properties for specific "frames" during the animation, with percentages ranging from 0% to 100%. If you compare this to a movie, the CSS properties for 0% is how the element displays in the opening scene. The CSS properties for 100% is how the element appears at the end, right before the credits roll. Then CSS applies the magic to transition the element over the given duration to act out the scene. 
```
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}
@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```
For the element with the anim id, the code snippet above sets the animation-name to colorful and sets the animation-duration to 3 seconds. Then the @keyframes rule links to the animation properties with the name colorful. It sets the color to blue at the beginning of the animation (0%) which will transition to yellow by the end of the animation (100%). You aren't limited to only beginning-end transitions, you can set properties for the element for any percentage between 0% and 100%.
The CSS applies the magic to transition the element over the given duration to act out the scene.

## Use CSS Animation to Change the Hover State of a Button
```
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }
  
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
  }
  @keyframes background-color{
    100% {
      background-color: #4791d0; 
    }
  }
</style>
```

## Modify Fill Mode of an Animation

> How the animation resets after 500ms has passed, causing the button to revert back to the original color. You want the button to stay highlighted.

> The animation-fill-mode specifies the style applied to an element when the animation has finished. You can set it like so: animation-fill-mode: forwards;
```
button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
	}
```

## Create Movement Using CSS Animation

> When elements have a specified position, such as fixed or relative, the CSS offset properties right, left, top, and bottom can be used in animation rules to create movement.
```
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }
#rect {
  animation-name: rainbow;
  animation-duration: 4s;
}

@keyframes rainbow {
  0%{
    background-color: blue;
    top: 0px;
    left: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
    left: 25px;
  }
  100% {
    background-color: yellow;
    top: 0px;
    left: -25px;
    
  }
}
</style>

<div id="rect"></div>
```

## Create Visual Direction by Fading an Element from Left to Right
```
#ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
      
    }
  }
 ```

## Animate Elements Continually Using an Infinite Animation Count(bouncy ball example)

> animation-iteration-count: 3;

```
 #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }

```
## Animate Elements at Variable Rates
```
@keyframes twinkle-1 {
    50% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }
```
> You can achieve the same goal by manipulating the animation-duration of multiple elements.

## Change Animation Timing with Keywords

> The animation-timing-function property controls how quickly an animated element changes over the duration of the animation. If the animation is a car moving from point A to point B in a given time (your animation-duration), the animation-timing-function says how the car accelerates and decelerates over the course of the drive. Various keywords: ease, ease-out, ease-in, linear.

## Bezier Curves Work

> Bezier curves are used with the cubic-bezier function. The shape of the curve represents how the animation plays out. The curve lives on a 1 by 1 coordinate system. The X-axis of this coordinate system is the duration of the animation (think of it as a time scale), and the Y-axis is the change in the animation.
> Create using [ Cubic Bezier ](http://cubic-bezier.com)

> The 1-1 curve of the time and change

Linear example:

```
 #ball1 { 
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
```
Ease-out example:

```
 #red {
    background: red;
    left: 27%;
    animation-timing-function:cubic-bezier(0, 0, 0.58, 1) ;
  }
```

Ball Juggling example
```
 #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }
```

