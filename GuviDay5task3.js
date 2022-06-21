//1. Print odd numbers in an array using Arrow function

let numberArray = [1, 2, 3, 4, 5, 6]

console.log(numberArray.filter((item) => {

    return item % 2 !== 0

}))

//2.Convert all the strings to title caps in a string array using Arrow function

let stringArray = ["naveen", "is", "a", "good", "boy"]

stringArray = stringArray.map((item) => {

    return (item[0].toUpperCase() + item.slice(1))

})

console.log(stringArray);

//3.Sum of all numbers in an array using Arrow function

let numbArray = [1, 2, 3, 4, 5]

let sum = numbArray.reduce((currentTotal, item) => {

    return currentTotal + item

}, 0)

console.log(sum);

//4.Return all the prime numbers in an array using Arrow function
let prnum = [1,2,3,4,5,6,7,8,9,10]
console.log(prnum.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }))

//5.Return all the palindromes in an array using Arrow function

let arrayPallindrome = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip']

console.log(arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))