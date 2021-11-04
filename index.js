const colors = require('colors');
const arr = [];
const [from, to] = process.argv.slice(2);
for (let i = from; i <= to; i++) {
    let isPrime = true;
    console.log(isPrime);
    for (let j = 2; j < i; j++) {
        if (i % j === 0) { isPrime = false; break; }
    }
    if (isPrime) arr.push(i);
}
console.log(arr);
let n = 0;
// let arr = [3, 5, 7, 11, 12, 13, 145];
let arr2 = ['red', 'yellow', 'green'];
if (arr.length == 0) {
    console.log('No number');
}
for (let i = 0; i <= arr.length; i++) {
    if (n === arr2.length) {
        n = 0;
    }
    if (!arr[i]) {
        break;
    }
    console.log(colors.arr2[n], arr[i]);

    n++;
}

//версия преподавателя
// require('colors')
// const Colors = { GREEN: 0, YELLOW: 1, RED: 2 };
// let currentColor = Colors.GREEN;
// const leftRest = process.argv[2];
// const rightRest = process.argv[3];
// let noPrimeNum = true;
// if (isNaN(leftRest) || isNaN(rightRest)) {
//     console.log('incorrect'.red);
//     return;
// }
// const isPrimeNum = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return true;
// }
// const changeColor = () => {
//     currentColor++;
//     if (currentColor > Colors.RED)
//         currentColor = Colors.GREEN;
// }
// const colorPrint = (num) => {
//     if (noPrimeNum) noPrimeNum = false;
//     switch (currentColor) {
//         case Colors.RED:
//             console.log(`${num}`.red);
//             break;
//         case Colors.GREEN:
//             console.log(`${num}`.green);
//             break;
//         case Colors.YELLOW:
//             console.log(`${num}`.yellow);
//             break;
//     }
//     changeColor();
// }
// for (let i = leftRest; i <= rightRest; i++) {
//     if (isPrimeNum(i)) colorPrint(i);
// }
// if (noPrimeNum)
//     console.log(`there are no prime numbers in this range [${leftRest},${rightRest} ]`.red);