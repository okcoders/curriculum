## Cheat Sheet because I be forgetting

This overwrites the whole file

```
fs.writeFile("server/books.json", JSON.stringify(newBooks), (err) => {
if (err) {
throw err;
}

    console.log("Finished writing!");

});
```
