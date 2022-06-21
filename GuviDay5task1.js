//1.a. Print odd numbers in an array using anonymous function & IIFE
let arr = [1,2,3,4,5]                    

let oddnum = arr.filter (function(arr){             
        return(arr%2!==0)
    });
console.log(oddnum);                                //anonymous function

(()=>{
    let oddnumber = arr.filter (function(arr){
        return (arr%2!==0)
    });
    console.log(oddnumber);                         //IIFE Function
})()

//1.b. Convert all the strings to title caps in a string array
let stringarray = ['naveen', 'is', 'a', 'good', 'guy']

let strarr=stringarray.map(function toTitlecase(stringarray){
    return (stringarray[0].toUpperCase() + stringarray.slice(1))
});
console.log(strarr);                                //anonymous function

(()=>{
    let strarray=stringarray.map(function toTitlecase(stringarray){
        return (stringarray[0].toUpperCase() + stringarray.slice(1))
    });
    console.log(strarray);                           //IIFE Function
})()

//1.c. Sum of all numbers in an array
let arrnum = [1,2,3,4,5]

let sumnum = arrnum.reduce (function(n1,n2){
         return (n1+n2)
})
console.log(sumnum);                                  //anonymous function

(()=>{
    let sumnum = arrnum.reduce (function(n1,n2){
        return (n1+n2)
})
console.log(sumnum); 
})()                                                  //IIFE Function

//1.d. Return all the prime numbers in an array
let prnum = [1,2,3,4,5,6,7,8,9,10]

let primenum = prnum.filter(function (num){
    for (let i=2; i<num; i++){
        if (num%i===0) 
        return false;
    }
    return num!==1;
});
console.log(primenum);                                //anonymous function

(()=>{
    let primenumber = prnum.filter(function (num){
        for (let i=2; i<num; i++){
            if (num%i===0) 
            return false;
        }
        return num!==1;
    });
    console.log(primenumber);                          //IIFE Function
})()

//1.e Return all the palindromes in an array using anonymous and IIFE function
let palin= ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip']

let resultPallindromeArray = (function (palin) {

    return (palin.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + ""){
            return true
        }else
        return false
    }))
})(palin);

console.log(resultPallindromeArray);

//1.f. Return median of two sorted arrays of the same size using anonymous and IIFE function
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [8, 9, 10, 12, 16]

let resultMedian = function (arr1, arr2) {

    let result = []

    let lenArr1 = arr1.length

    let lenArr2 = arr2.length

    if (lenArr1 % 2 === 0) {

        console.log(arr1[(lenArr1 / 2)-1])

    } else {

        console.log(arr1[((lenArr1 + 1) / 2)-1])
    }

    if (lenArr2 % 2 === 0) {

        console.log(arr2[(lenArr2 / 2)-1])

    } else {

        console.log(arr2[((lenArr2 + 1) / 2)-1])
    }

    return
}(arr1, arr2)

//1.g. Remove duplicates from an array using anonymous and IIFE function
let names = ["Mike","Matt","Nancy","Matt","Jenny","Nancy","Carl"];

let duplicate = (function(names){
    return [ ...new Set(names)]
})(names)
console.log(duplicate);

//1.h. Rotate an array by k times using anonymous and IIFE function

let arrforrotation = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = (function(array,k){

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation,3)
console.log(resultArrayShifted);