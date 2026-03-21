function whatever(number){
    let bool;
    if(number > 0 && number < 9){
        bool = true
    }
    else if(number >= 9 && number < 20){
        bool = 'true'
    }
    else{
        bool = false;
    }

    return bool
}

let isPositive = whatever(8);

console.log('isPositive', isPositive)


let a = 'a'
let b = 'b'
let c = 'c'
let d = 'd'


let letter = a === 'a' ? 'ayyy' : b === a ? 'beee' : 'cccc';