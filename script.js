// iterative
function fibs(number) {
    if (number <= 0) return [];
    if (number === 1) return [0];
    
    let array = [0, 1];
    for (let i = 1; i < number - 1; i++){
        array.push(array[i] + array[i - 1])
    };
    return array
};
console.log(fibs(20));

// recursive
function fibsRec(number) {
    console.log("This was printed recursively")
    if (number <= 0) return [];
    if (number === 1) return [0];
    if (number === 2) return [0, 1];

    let prev = fibsRec(number - 1);
    let sum = prev[prev.length - 1] + prev[prev.length - 2];
    
    return prev.concat(sum);
}



