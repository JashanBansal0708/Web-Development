# CSS Grid cheatsheet

## Create Your First CSS Grid

> Turn any HTML element into a grid container by setting its display property to grid. This gives you the ability to use all the other properties associated with CSS Grid.


> In CSS Grid, the parent element is referred to as the container and its children are called items.

## Add Columns with grid-template-columns (also grid-template-rows for rows)

> Simply creating a grid element doesn't get you very far. You need to define the structure of the grid as well. To add some columns to the grid, use the grid-template-columns property on a grid container as demonstrated below:
```
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

## Use CSS Grid units to Change the Size of Columns and Rows

> You can use absolute and relative units like px and em in CSS Grid to define the size of rows and columns. You can use these as well:

1. fr: sets the column or row to a fraction of the available space,

2. auto: sets the column or row to the width or height of its content automatically,

3. %: adjusts the column or row to the percent width of its container.

Here's the code that generates the output in the preview:

grid-template-columns: auto 50px 10% 2fr 1fr;

Example:
```
grid-template-columns: auto 50px 10% 2fr 1fr;
```
This snippet creates five columns. The first column is as wide as its content, the second column is 50px, the third column is 10% of its container, and for the last two columns; the remaining space is divided into three sections, two are allocated for the fourth column, and one for the fifth.

## Create a Column Gap Using grid-column-gap (grid-row-gap, grid-gap)

Sometimes you want a gap in between the columns. To add a gap between the columns, use the grid-column-gap property like this:

> grid-column-gap: 10px;
This creates 10px of empty space between all of our columns.

## Use grid-column to Control Spacing (grid-row)

> Up to this point, all the properties that have been discussed are for grid containers. The grid-column property is the first one for use on the grid items themselves.

> The hypothetical horizontal and vertical lines that create the grid are referred to as lines. These lines are numbered starting with 1 at the top left corner of the grid and move right for columns and down for rows, counting upward. Example:

```
grid-column: 1 / 3;
```
This will make the item start at the first vertical line of the grid on the left and span to the 3rd line of the grid, consuming two columns.

## Align an Item Horizontally using justify-self (vertically with align-self)

> In CSS Grid, the content of each item is located in a box which is referred to as a cell. You can align the content's position within its cell horizontally using the justify-self property on a grid item. By default, this property has a value of stretch, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:
1. start: aligns the content at the left of the cell,
2. center: aligns the content in the center of the cell,
3. end: aligns the content at the right of the cell.

## Align All Items Horizontally using justify-items(align-items)

> Sometimes you want all the items in your CSS Grid to share the same alignment. You can use the previously learned properties and align them individually, or you can align them all at once horizontally by using justify-items on your grid container.

## Divide the Grid Into an Area Template(example: to make the 2nd row empty)

> You can group cells of your grid together into an area and give the area a custom name. Do this by using grid-template-areas on the container like this:

```
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

The code above merges the top three cells together into an area named header, the bottom three cells into a footer area, and it makes two areas in the middle row;advert and content.

> Every word in the code represents a cell and every pair of quotation marks represent a row. In addition to custom labels, you can use a period (.) to designate an empty cell in the grid.

## Place Items in Grid Areas Using the grid-area Property

```
.item1 { grid-area: header; }
```
This lets the grid know that you want the item1 class to go in the area named header.

## Use grid-area Without Creating an Areas Template

```
item1 { grid-area: 1/1/2/4; }
```

```
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

## Reduce Repetition Using the repeat Function

> grid-template-rows: repeat(100, 50px);

```
grid-template-columns: repeat(2, 1fr 50px) 20px;

This transaltes:

grid-template-columns: 1fr 50px 1fr 50px 20px;
```

## Limit Item Size Using the minmax Function

> There's another built-in function to use with grid-template-columns and grid-template-rows called minmax. It's used to limit the size of items when the grid container changes size. To do this you need to specify the acceptable size range for your item. Here is an example:

```
grid-template-columns: 100px minmax(50px, 200px);
```
In the code above, grid-template-columns is set to create two columns; the first is 100px wide, and the second has the minimum width of 50px and the maximum width of 200px.

> Responsive example:
```
grid-template-columns: repeat(3, minmax(90px, 1fr));
```

## Create Flexible Layouts Using auto-fill

> The repeat function comes with an option called auto-fill. This allows you to automatically insert as many rows or columns of your desired size as possible depending on the size of the container. You can create flexible layouts when combining auto-fill with minmax. Example:

```
repeat(auto-fill, minmax(60px, 1fr));
```
When the container changes size, this setup keeps inserting 60px columns and stretching them until it can insert another one.

**NOTE**:
If your container can't fit all your items on one row, it will move them down to a new one.

Example:
```
grid-template-columns: repeat(auto-fill, minmax(60px, 1fr)
```

## Create Flexible Layouts Using auto-fit 

>auto-fit works almost identically to auto-fill. The only difference is that when the container's size exceeds the size of all the items combined, auto-fill keeps inserting empty rows or columns and pushes your items to the side, while auto-fit collapses those empty rows or columns and stretches your items to fit the size of the container.

**Note:**
If your container can't fit all your items on one row, it will move them down to a new one.

## Create Grids within Grids

> Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you have a grid within a grid.

> For example, by setting the display and grid-template-columns properties of the element with the item3 class, you create a grid within your grid.
```
.item3 {
    display: grid;
    grid-template-columns: auto 1fr;
}
```
## ## Use Media Queries to Create Responsive Layouts

> CSS Grid can be an easy way to make your site more responsive by using media queries to rearrange grid areas, change dimensions of a grid, and rearrange the placement of items.

> In the preview, when the viewport width is 300px or more, the number of columns changes from 1 to 2. The advertisement area then occupies the left column completely.

Example:
```
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }
  
  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }
  
  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }
  
  .item4 {
    background: lightpink;
    grid-area: footer;
  }
  
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }
  
  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }
  
  @media (min-width: 400px){
    .container{
      /* change the code below this line */
      
      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";
    
    /* change the code above this line */
    }
  }
</style>
  
<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>
```