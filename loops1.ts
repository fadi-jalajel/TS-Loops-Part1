//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

let greaterThanEqual25: number[] = numbers.filter((num: number) => num >= 25);
let divisibleBy5: number[] = numbers.filter((value: number) => value % 5 === 0);

console.log("Numbers greater than 25:", greaterThanEqual25);
console.log("Numbers divisible by 5:", divisibleBy5);


/*****************************************************************
Part 2: Mapping

Write code to perform the following:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

let sqNumbers: number[] = numbers.map((numb: number) => numb ** 2);
let doubleNumbers: number[] = numbers.map((numb: number) => numb * 2);

console.log("Squared values of the array", sqNumbers);
console.log("array with doubled numbers", doubleNumbers);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

let sqNumbersGE20: number[] = numbers.filter((num: number) => num >= 20).map((num: number) => num ** 2);

let trippleNumbers: number[] = numbers.filter((value: number) => value % 5 === 0).map((numb: number) => numb * 3);

console.log("Filtered and Squared Values", sqNumbersGE20);
console.log("Numbers divisible by 5 then trippled", trippleNumbers);