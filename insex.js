// const [from, to] =process.argv.slice(2);
let arr = [];
// const from = 3;
// const to = 111;
nextPrime:
for (let i = from; i <= to; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }
    arr.push(i);
}

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
    console.log('colors', arr2[n], arr[i]);

    n++;
}
