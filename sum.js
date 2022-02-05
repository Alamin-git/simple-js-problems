function sum(num) {
    number = 0;
    for (let i = 0; i <= num; i++) {
        number = number + i;
    }
    return number;
}

let myNum = sum(5);
console.log(myNum);

// reverce way
function sum2(num) {
    number = 0;
    for (let i = num; i >= 1; i--) {
        number = number + i;
    }
    return number;
}

let myNum2 = sum2(5);
console.log(myNum2);
// defrent way & this is recursion


function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(--i);
}

console.log(sum(6));