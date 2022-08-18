let num = 42145;
let num2 = 145263;
let num3 = 123456789;

const sort = (number) => {
    let string = number.toString();
    let sort = string.split("").sort().reverse().join("");
    return sort;
}
console.log(sort(num));
console.log(sort(num2));
console.log(sort(num3));