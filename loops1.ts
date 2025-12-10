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

// console.log("Numbers greater than 25:", greaterThanEqual25);
// console.log("Numbers divisible by 5:", divisibleBy5);


/*****************************************************************
Part 2: Mapping

Write code to perform the following:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

let sqNumbers: number[] = numbers.map((numb: number) => numb ** 2);
let doubleNumbers: number[] = numbers.map((numb: number) => numb * 2);

// console.log("Squared values of the array", sqNumbers);
// console.log("array with doubled numbers", doubleNumbers);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

let sqNumbersGE20: number[] = numbers.filter((num: number) => num >= 20).map((num: number) => num ** 2);

let trippleNumbers: number[] = numbers.filter((value: number) => value % 5 === 0).map((numb: number) => numb * 3);

// console.log("Filtered and Squared Values", sqNumbersGE20);
// console.log("Numbers divisible by 5 then trippled", trippleNumbers);

/*****************************************************************
Part 4: Extra 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs (prints) every element of the array
 ************************************/


const array = ["Emp1", "Emp2", "Emp3", "Emp4"];
function logger(array: any[]): void {
    array.forEach((logdata) => console.log(logdata));
}

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/

const tempratures = [100, 87, 99, 44, 32];
const threshhold = 50;

function toCelsius(tempratures: number[]) : number[] {
    return tempratures.map((temprature) => ((temprature - 32) * 5 / 9));
}

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/




function hottestDays(temperatures: number[], threshhold: number) : number[] {
    return tempratures = tempratures.filter((temp) => temp > threshhold);
}



/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
function logHottestDays(tempratures: number[], threshhold: number): void {
    const hottestTemps: number[] = hottestDays(tempratures, threshhold);
    const hottestCTemps: number[] = toCelsius(hottestTemps);
    logger(hottestCTemps);
}
