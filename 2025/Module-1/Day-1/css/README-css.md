# Module 1 - Day 3

## Introduction to CSS

-   Where to hold CSS styles
    -   in-line styles
    -   style tag
    -   css file
-   Types of selectors
    -   ID
    -   Class
    -   Element
    -   All (\*)
-   Common properties
    -   width
    -   height
    -   background-color
    -   font-size
    -   margin
    -   padding
-   Units
    -   px (most basic unit)
    -   rem (relative to the html elements font size)
    -   em (relative to the parents font size)
    -   % (relative to the parent element)
    -   vw (1% of the view width)
    -   vh (1% of the view height)
-   Selectors
    -   Apply styles to all that match (comma separated).
        -   ex: class1, class2 { ... }
    -   Apply styles to all that match and have a matching child (space separated).
        -   ex: class1 class2 { ... }
    -   Apply styles to all that match each (no space).
        -   ex: .class1.class2 { ... }
-   Pseudo Class
    -   focus
    -   hover


CSS (Cascading Style Sheets) offers a wide range of properties to control the layout, appearance, and behavior of web elements. Here are some of the most common and widely used CSS properties, categorized by their purpose:

### Layout and Box Model

- **`display`**: Specifies the display behavior (type) of an element. Common values include `block`, `inline`, `inline-block`, `flex`, `grid`, and `none`.
- **`margin`**: Controls the space outside of an element's border, with sub-properties like `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`.
- **`padding`**: Controls the space between an element's border and its content, with sub-properties for each side (`padding-top`, `padding-right`, etc.).
- **`border`**: Specifies the border around elements, with the ability to individually set `border-width`, `border-style`, and `border-color`.
- **`width`** and **`height`**: Set the width and height of an element. Can accept values in pixels (`px`), percentages (`%`), `auto`, and other units.
- **`box-sizing`**: Defines how the width and height of an element are calculated. Values include `content-box` and `border-box`.

### Typography

- **`font-family`**: Specifies the font of the text. Can be a specific font or a generic font family.
- **`font-size`**: Sets the size of the font.
- **`font-weight`**: Controls the weight (thickness) of the text, with common values like `normal`, `bold`, `bolder`, and numeric values (100 to 900).
- **`line-height`**: Sets the distance between lines of text.
- **`text-align`**: Aligns the text within an element. Common values include `left`, `right`, `center`, and `justify`.
- **`color`**: Specifies the color of the text.

### Backgrounds

- **`background-color`**: Sets the background color of an element.
- **`background-image`**: Specifies one or more background images for an element.
- **`background-position`**: Defines the initial position of the background image(s).
- **`background-size`**: Specifies the size of the background image(s).
- **`background-repeat`**: Controls how background images are repeated.

### Positioning

- **`position`**: Specifies the type of positioning method used for an element (e.g., `static`, `relative`, `absolute`, `fixed`, `sticky`).
- **`top`**, **`right`**, **`bottom`**, **`left`**: Determine the position of positioned elements.
- **`z-index`**: Controls the vertical stacking order of elements that overlap.

### Flexbox and Grid

- **`flex-direction`**: In a flex container, specifies the direction of the flex items.
- **`justify-content`**: Aligns flex items along the main axis of the container.
- **`align-items`**: Aligns flex items along the cross axis of the container.
- **`grid-template-columns`** and **`grid-template-rows`**: Define the columns and rows of a grid container.
- **`grid-column`** and **`grid-row`**: Specify the location of grid items within the grid structure.

### Visual Effects

- **`opacity`**: Specifies the transparency level of an element, where 0 is completely transparent and 1 is completely opaque.
- **`box-shadow`**: Applies shadow effects around an element's frame.
- **`border-radius`**: Defines the radius of an element's corners, allowing for rounded corners.

### Transitions and Animations

- **`transition`**: Specifies the transition effects for CSS properties when they change.
- **`animation`**: Defines animations for elements with keyframes.