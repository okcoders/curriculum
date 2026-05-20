# Module 3, Week 3: Read the Code Exercises

## Exercise 1: Supabase Select
```javascript
const { data, error } = await supabase
  .from("expenses")
  .select("*")
  .eq("category", "Food");
```
What does this return?

Answer: All expenses where category equals "Food"

## Exercise 2: Supabase Insert
```javascript
const { data, error } = await supabase
  .from("expenses")
  .insert({ description: "Coffee", amount: 5 })
  .select()
  .single();
```
What does data contain?

Answer: The newly inserted row with its generated id

## Exercise 3: Error Handling
```javascript
const { data, error } = await supabase
  .from("expensess")  // typo!
  .select("*");
console.log(data);
console.log(error);
```
What happens?

Answer: data is null, error contains message about table not existing