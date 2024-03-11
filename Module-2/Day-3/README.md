# Day 3

## pt. 1 - Functions
- Function signatures 
```js
// declaration
function descriptiveFunctionName(parameters + types) -> return value(+ type)
{
	// implementation
}
```

- Function expressions
```js
const descriptiveOtherFunctionName = (someParam) => {
	//implementation
}
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


## pt. 2 - Local Scope vs Global Scope
- local scope vs global scope (variables)
- function expressions vs funciton declarations - hoisting and context(this)
