# Day 3

## pt. 1 - Functions
- Function signatures 
```js
// declaration
function descriptiveFunctionName(parameter names/types): return type
{
	// implementation
}
```
- Function expressions
```js
const descriptiveOtherFunctionName = (someParam) => {
	//implementation
    return 'x'; //explicit return
}

//implicit return (no curly braces)
const fightTheFoo = () => 'The Foo Has Been Faught.'

```
- arrow function implicit v explicit return

- conditional early return
- side effects
- 'pure' functions

- common 'smells':
	- too many parameters
	- multiple responsibilities
	- side effects + return values
	- multiple return types

// TODO - revisit some Array methods that take functions:
// "Truth tests"
- find((name) => nameInArray === name)/findlast()
- filter()
- every()/some()

// "Operations"
- sort()
- map()

## pt. 2 - Local Scope vs Global Scope
- local scope vs global scope
- function expressions vs funciton declarations - hoisting and context(this)
- brief intro to boolean logic (will cover in more depth next week):
	- &&, ||, and ! operators (AND, OR, NOT)
	- Ternary operator
    ```js
    let value;
    if (true){
        value = x
    }else{
        value = y
    }

    //AS TERNARY
    let value = someCondition ? x : y
    ```
