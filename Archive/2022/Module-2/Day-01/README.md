## Notes

- new people intros and team assignments

- class structure: questions about freecodecamp and real world examples, with intentional live discovery so you can see how developers implement new things.

- what you should do to succeed: do freecodecamp lessons, extend/tweak my real world examples to have more functionality 

- Why do we need javascript/what is it for? 
    - changing the page in response to user interaction/or based on user data
    - capturing information the user provides
    - so much more

- the javascript console (repl vs script)

- inline script vs loaded script

- So much happening in this one little script:

```
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
```

- Hooking up the Let's Connect section of the portfolio from Module 1

## Homework

Free Code Camp:
- up to this one: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/finding-a-remainder-in-javascript