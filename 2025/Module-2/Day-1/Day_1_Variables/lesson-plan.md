
### Lesson Plan: Introduction to JavaScript Arrays

**Objective:**  
- Understand basic JavaScript concepts like variables, strings, numbers, and basic arithmetic.
- Learn the concept of arrays as a way to store multiple values in one variable.

### 1. Review of Variables and Data Types (15-20 min)
- **What are Variables?**
  - Variables are containers for storing data values.
  - Example:
    ```javascript
    let myNumber = 10; // A number
    let myString = "Hello, world!"; // A string
    ```
  
- **Data Types:**
  - **Strings:** Text data enclosed in quotation marks (either single or double quotes).
  - **Numbers:** Integer or decimal values.
  - **Booleans:** `true` or `false`.
  - **Undefined:** A variable that has been declared but not assigned a value.
  
  Example:
  ```javascript
  let myString = "JavaScript";  // String
  let myNumber = 25;            // Number
  let myBoolean = true;         // Boolean
  ```

- **Assigning Values:**
  - **Using the Assignment Operator (`=`):**
    ```javascript
    let x = 10;  // The value 10 is assigned to variable x.
    ```

---

### 2. Basic Arithmetic with JavaScript (15-20 min)
- **Operations:**
  - **Add Two Numbers:**
    ```javascript
    let sum = 10 + 5;  // sum is 15
    ```
  - **Subtract One Number from Another:**
    ```javascript
    let difference = 10 - 5;  // difference is 5
    ```
  - **Multiply Two Numbers:**
    ```javascript
    let product = 10 * 5;  // product is 50
    ```
  - **Divide One Number by Another:**
    ```javascript
    let quotient = 10 / 2;  // quotient is 5
    ```
  - **Increment a Number:**
    ```javascript
    let num = 5;
    num++;  // num becomes 6
    ```
  - **Decrement a Number:**
    ```javascript
    let num = 5;
    num--;  // num becomes 4
    ```

- **Discuss var/let/const and scope:**

### 3. Working with Strings (20-25 min)
- **Creating Strings:**
  - Strings are created by enclosing text in quotes.
    ```javascript
    let greeting = "Hello, world!";
    ```

- **Concatenating Strings:**
  - Combining strings using the `+` operator.
    ```javascript
    let fullGreeting = "Hello, " + "world!";
    ```

- **Template Literals:**
  - Template literals are a new way to create strings in JavaScript.
  - They are enclosed in backticks (` `) instead of quotation marks.
  - Use the `${}` syntax to insert variables into the string.

    ```javascript
    let name = "John";
    let greeting = `Hello, ${name}!`;
    ```

- **String Length:**
  - Use `.length` to find out how many characters are in a string.
    ```javascript
    let message = "Hello";
    console.log(message.length);  // Outputs: 5
    ```

- **Bracket Notation to Access Characters:**
  - You can access individual characters of a string using bracket notation.
    ```javascript
    let message = "Hello";
    console.log(message[0]);  // Outputs: H
    ```

---

### 4. Introduction to Arrays (20-25 min)
- **What is an Array?**
  - An array is a way to store multiple values in a single variable.
  - Arrays are ordered, meaning the values have an index (position in the array) starting at 0.
    ```javascript
    let shoppingList = ["milk", "eggs", "bread"];
    ```

- **Accessing Array Elements:**
  - You access elements by using their index (position in the array).
    ```javascript
    let firstItem = shoppingList[0];  // "milk"
    let secondItem = shoppingList[1]; // "eggs"
    ```

- **Modifying Array Elements:**
  - You can change an array element by assigning a new value to its index.
    ```javascript
    shoppingList[2] = "butter";  // "bread" becomes "butter"
    ```

- **Using Arrays to Store Multiple Values:**
  - Arrays can store strings, numbers, or even other arrays.
    ```javascript
    let mixedArray = [1, "apple", 3.14, true];
    ```

- **Array Methods:**
  - **Adding an Item to the Array:**
    ```javascript
    shoppingList.push("cheese");  // Adds "cheese" to the end
    ```
  - **Removing the Last Item:**
    ```javascript
    shoppingList.pop();  // Removes the last item (cheese)
    ```

---

### Document Object Model (DOM)
  - show DOM page

### terminal and browser console
 - console.log()

# Do 99 bottles of beer

# Do Shopping list
