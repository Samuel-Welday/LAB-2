"use strict"

//number 1
function max(a,b) {
    if(a>b) return a;
    else return b;
}

console.log("Max of 2 & 3: " + max(2,3))

//number 2
function maxOfThree(a,b,c) {
    if(a>b && a>c) return a;
    else if(b>c) return b;
    else return c;
}
console.log("Max of 40, 370, 9: " + maxOfThree(40,370,9))

//number 3
function isVowel(ch) {
    let vowels = ["a","e","i","o","u"];
    if(vowels.includes(ch)) return true;
    return false;
}
console.log("Is vowel 'e': " + isVowel("e"))

//number 4
function sum(array) {
    let sum = 0;
    let index = 0;
    while(index < array.length) {
        sum += array[index++];
        //index++;
    }
    return sum;
}
console.log("Sum of 1,2,3,4 is: " + sum([1,2,3,4])); 

// number 4 part 2
function multiply(array) {
    let product = 1;
    for(let val of array) {
        product *= val;
    }
    return product;
}
console.log("Product of 1,2,3,4 is: " + multiply([1,2,3,4])); 

//number 5
function reverse(str) {
    let reversed = "";
    for(let i=str.length; i>=0; i--) reversed += str.charAt(i);
    return reversed;
}
console.log("Reverse of 'victor' is: " + reverse("victor")); 

//number 6
function findLongestWord(words) {
    let length =0;
    for(let word of words) {
        if(word.length > length) length = word.length;
    }
    return length;
}
console.log("Longest word of ['samuel', 'victor','gerbreegizabher']: " + findLongestWord( ['samuel', 'gerbreegizabher','victor']));

//number 7
function filterLongWords(words, i) {
    let filteredWords =[];
    for(let word of words) {
        if(word.length > i) filteredWords.push(word);
    }
    return filteredWords;
}
console.log("Longest word of ['samuel', 'victor','gerbreegizabher']: " + filterLongWords( ['samuel', 'gerbreegizabher','victory'],6));


//number 8
function computeSumOfSquares(nums) {
    return nums.reduce(function(accum,x) {return accum += x*x},0);
}
console.log("Sum of squares [1,2,3] is: " + computeSumOfSquares([1,2,3]) )

// number 9
function printOddNumbersOnly(array) {
    if (array.length == 0) {
        return false;
    }
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            res.push(array[i]);
        }

    }
    return res;
}
console.log('Print of Odd num: ' + printOddNumbersOnly([1, 2, 3, 4, 5, 6,7,8,9]));

// number10
const computeSumOfSquaresOfEvensOnly = array => array
    .filter(x => x % 2 == 0)
    .map(x => x * x)
    .reduce((a, b) => a + b, 0);

console.log('Sum square ofEven num: ' + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5,6]))

//number 11a
const summation = arr => arr
    .map(x => x)
    .reduce((a, b) => a + b, 0);
console.log('Sum of values in array: ' + sum([1, 2, 3, 4]));

//number 11b
const multiplication = arr => arr
    .map(x => x)
    .reduce((a, b) => a * b, 1);
console.log('Multiplication of values in array: ' + multiplication([1, 2, 3, 4]));

//number 12
function getSecondHighest(arrCheck) {
    var first = 0, second = 0;
    for (var i = 0; i < arrCheck.length; i++) {
        if (arrCheck[i] > first) {
            second = first;
            first = arrCheck[i];
        }
        else if (arrCheck[i] > second && arrCheck[i] < first) {
            second = arrCheck[i];
        }
    }
    return second;
}
console.log('Print the second highest num: ' + getSecondHighest([1, 2, 3, 4, 5]));


//number 13
function printFibo(x, a, b) {
    console.log("Question 13: ")
    for (let i = 0; i < x; i++) {
        console.log("\t"+a);
        const sum = a + b;
        a = b;
        b = sum;

    }

}

printFibo(5, 0, 1);

//number 14a
function sum(arr) {
  return arr.filter((num) => num > 20)
            .reduce((acc, cur) => acc + cur, 0);
}
const numbers = [10, 24, 32, 17, 60];
console.log("Sum of Num greaterthan 20: "+sum(numbers)); 

//number 14b
const getNewArray = function(arr) {
  return (arr.filter((str) => str.length >= 5 && str.includes('a')).map((str) => str.toUpperCase()));
};
const words = ['apple', 'banana', 'grapefruit', 'avocado', 'pear'];
console.log("Question number 14b "+getNewArray(words)); 










