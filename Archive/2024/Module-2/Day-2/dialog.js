// get info from user with prompt - ask for name
const userName = prompt("Please enter first and last name");
// add greeting message to the document with html
const titleDisplay = document.getElementById('greeting');
titleDisplay.innerHTML = `<p>Hello, ${userName[0]}</p>`;
// add button to randomly change background color
const colorButton = document.getElementById('color-changer')
let colorIndex = 0;
colorButton.onclick = changeColor

// string concatenation/indexing/template literals
// user avatar first name initial and last name initial from name string

function changeColor() {
    //do the thing
    const body = document.querySelector('body');
    const colors = ["red", "green", "blue"];
    console.log("setting color to index: ", colorIndex);
    body.style.backgroundColor = colors[colorIndex]
    
    if (colorIndex < colors.length - 1) {
        colorIndex++
    } else {
        colorIndex = 0;
    }
}
