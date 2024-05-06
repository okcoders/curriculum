function fizz_buzz(numbers){
    let result = [];
    numbers.forEach( (num) => {
        if( num % 15 === 0 ){
            result.push("fizzbuzz");
        } else if ( num % 5 === 0 ) {
            result.push("buzz");
        } else if ( num % 3 === 0){
            result.push("fizz");
        } else {
            result.push(num);
        }
    });

    return result.join(', ');
}

module.exports = fizz_buzz;

