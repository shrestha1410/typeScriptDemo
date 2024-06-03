//Named fuction
function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(add(1, 2));

//Arrow function
const subNum = (num1: number, num2: number): number => num1 - num2;
console.log(subNum(3, 2));

//Function Expression
const multiNum = function (num1: number, num2: number): number {
    return num1 * num2;
}
console.log(multiNum(2, 3));

//Optional Parameters
function addOptional(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 = num2 + num3 : num1 + num2;
}
console.log(addOptional(1, 2));
// ? makes thye feild optional if we give the number 
//then it works other wise not work   

//Required parameters
function addRequired(num1: number, num2: number, num3 = 10): number {
    return num3 ? num1 = num2 + num3 : num1 + num2;
}
console.log(addRequired(1, 2));
// if the num3 is not provided then it uses the value 10 

//Rest Paramerters
function addRest(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b);
}
let numbers = [1, 2, 3];
console.log(addRest(1, 2, ...numbers));
console.log(addRest(1, 2, ...[2, 5, 6]));
console.log(addRest(1, 2, 2, 5, 6));


//Generic Function
function getItems<Type> (items:Type[]):Type[]{
return new Array<Type>().concat(items);
}

let numitem=getItems<number>([1,2,3,4]);
console.log(numitem);
let stringitem=getItems<string>(["a","b","c"]);
console.log(stringitem);
