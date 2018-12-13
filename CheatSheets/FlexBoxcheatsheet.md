# FlexBox Cheat Sheet

## Use display: flex to Position Two Boxes

> Placing the CSS property display: flex; on an element allows you to use other flex properties to build a responsive page.

> Adding display: flex to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the flex-direction property to the parent item and setting it to row or column. Creating a row will align the children horizontally, and creating a column will align the children vertically.**Other options for flex-direction are row-reverse and column-reverse.**

> By default display: flex has the direction row.

## Align Elements Using the justify-content Property

> Sometimes the flex items within a flex container do not fill all the space in the container. It is common to want to tell CSS how to align and space out the flex items a certain way. 
1. center
2. flex-start
3. flex-end
4. space-between
5. space-around

## Align Elements Using the align-items Property

> Flex containers also have a cross axis which is the opposite of the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.

> CSS offers the align-items property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.
1. flex-start
2. flex-end
3. center
4. stretch :  stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom.
5. baseline : align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.

## Use the flex-wrap Property to Wrap a Row or Column

> CSS flexbox has a feature to split a flex item into multiple rows (or columns). By default, a flex container will fit all flex items together. For example, a row will all be on one line.
>However, using the flex-wrap property, it tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.
1. nowrap: this is the default setting, and does not wrap items.
2. wrap: wraps items from left-to-right if they are in a row, or top-to-bottom if they are in a column.
3. wrap-reverse: wraps items from bottom-to-top if they are in a row, or right-to-left if they are in a column.

An example:
```
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
      
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
  #box-container{
    flex-wrap: wrap;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

## Use the flex-shrink Property to Shrink Items

> The first is the flex-shrink property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.

> The flex-shrink property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a flex-shrink value of 1 and the other has a flex-shrink value of 3, the one with the value of 3 will shrink three times as much as the other.

## Use the flex-grow Property to Expand Items

## Use the flex-basis Property to Set the Initial Size of an Item

> The flex-basis property specifies the initial size of the item before CSS makes adjustments with flex-shrink or flex-grow. The units used by the flex-basis property are the same as other size properties (px, em, %, etc.). The value auto sizes items based on the content.

## Use the flex Shorthand Property

> There is a shortcut available to set several flex properties at once. The flex-grow, flex-shrink, and flex-basis properties can all be set together by using the flex property.

> For example, flex: 1 0 10px; will set the item to flex-grow: 1;, flex-shrink: 0;, and flex-basis: 10px;.

> **The default property settings are flex: 0 1 auto;**

## Use the order Property to Rearrange Items

>The order property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.

## Use the align-self Property

> The final property for flex items is align-self. This property allows you to adjust each item's alignment individually, instead of setting them all at once.
> align-self accepts the same values as align-items and will override any value set by the align-items property.