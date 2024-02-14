# Module 1 - Day 5

## Box Model


### Introduction to the Box Model (10 minutes)
- **Definition and Importance**: Explain what the box model is and its role in web design. It's the foundation of layout on the web, determining how elements are sized and spaced.
- **Components of the Box Model**: Briefly introduce the four parts of the box model: content, padding, border, and margin.

### Understanding Each Component (20 minutes)
1. **Content**: The actual content of the box, where text and images appear. Size can be controlled using width and height properties.
2. **Padding**: Space between the content and the border. It increases the size of the box but does not add to the content area. Demonstrates how padding affects the overall dimensions of an element.
3. **Border**: Surrounds the padding (if any) and content. It's the boundary between the margin and the padding. Explain how the border's thickness, style, and color can be controlled.
4. **Margin**: Space outside the border. It separates the box from other elements. Highlight how margins can collapse or combine under certain conditions.

### Visualizing the Box Model (10 minutes)
- Use diagrams or live coding examples to show how each part of the box model contributes to the element's final appearance on a webpage.
- Tools like browser developer tools can be helpful in visually demonstrating the box model in action.

### Box Model Properties in CSS (15 minutes)
- **CSS Properties**: Teach how to manipulate the box model with CSS, including `width`, `height`, `padding`, `margin`, `border`, and `box-sizing`.
- **Box-sizing Property**: Explain the difference between `content-box` (default) and `border-box`, highlighting how `border-box` makes it easier to control the element's size as padding and border sizes are included.  W3 documentation: https://www.w3schools.com/css/css3_box-sizing.asp

#### Box Model Properties in CSS (20 minutes)
- Dedicate a portion of this section to explain the `overflow` property, including its values: `visible` (default), `hidden`, `scroll`, and `auto`.
  - **`visible`**: Content overflows the box and is visible outside of it.
  - **`hidden`**: Content that overflows is not visible, effectively clipping the overflow.
  - **`scroll`**: Adds scrollbars to the container so users can scroll to see the hidden content.
  - **`auto`**: Browser decides whether to add scrollbars depending on whether content overflows.
- Discuss how `overflow-x` and `overflow-y` properties can be used to control overflow along specific axes, providing greater control over the layout and appearance.

### Border Radius