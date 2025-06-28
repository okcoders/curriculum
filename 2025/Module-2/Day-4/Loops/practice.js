let array = [
    {blue: 5},
    {green: 3},
    {red: 2}
];


function findColorInObject(color){
    for (let index = 0; index < array.length; index++) {
        console.log(Object.hasOwn(array[index], color))
        // if(Object.hasOwn(array[i] === color)){

        // }
        
    }
}

findColorInObject('red');


// function findColor(color){
//     console.log('getting into findColor', color)
//     for(let outsideIndex=0; outsideIndex<array.length; outsideIndex++){
//         for (let insideIndex = 0; insideIndex < array[outsideIndex].length; insideIndex++) {
//             if(color === array[outsideIndex][insideIndex]){
//                 return array[outsideIndex][1]
//             }
//         }

//     }
// };


// let isFound = findColor('blue');
// console.log('isFound', isFound)





