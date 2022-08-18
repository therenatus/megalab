let text = 'Hey fellow warriors';
let text2 = 'This is another test';

const wordReverse = (text) => {
    let array = text.split('');
    let reverse = array.reverse().join('')
    return reverse;
}

const findLongWord = (text) => {
    let array = text.split(' ');
    let lenArray = array.length;
    for(let i=0, rev; i < lenArray; i++) {
        if(array[i].length>5){
            rev = wordReverse(array[i]);
            array[i] = rev
        }
    }
    return array.join(' ')
}

console.log(findLongWord(text));
console.log(findLongWord(text2));