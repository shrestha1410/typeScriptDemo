//String

let fname:string;
fname="Shrestha";
console.log(fname.toUpperCase());

//number

let age : number;
age=20;
age=20.5;
// age="20"; //gives error Type 'string' is not assignable to type 'number'
console.log(age);
//To parse the value
let dob="25";
let dobInt=parseInt(dob);
console.log(dobInt);

//boolean
let isValid:boolean;
// console.log(isValid);  
//Give error Variable 'isValid' 
//is used before being assigned it will give warning but after run 
//it will give undefined it uis because the js doesnot have data typer concept 
//when we assigned the it will know the datatype
// we get this error because the tsconfig.json has field strict that is true
// it checks the type checking true
isValid=false;
console.log(isValid);

// array
let empList:string[];
//empList=["abc",1]; //ype 'number' is not assignable to type 'string'
let numList:Array<number>;
numList=[1,2,3,4,5];
let getNum=numList[5];
console.log(getNum);
let result=numList.filter((num)=> num%2==0);
console.log(result);
let num=numList.find((number)=> number===2);
console.log(num);
let sum= numList.reduce((num1,num2)=>num1+num2);
console.log(sum);

//enum
const enum Color {
 Red,
 Blue,
 Green
}

let c:Color=Color.Blue;

//tuple 
let swapNumber:[number,number];
function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1];
}
let swap=swapNumbers(19,20);
console.log(swap);

swap[0];
swap[1];
console.log(swap[1]);
// swap[2]; //Tuple type '[number, number]' of length '2' has no element at index '2

//any
//any is type of equivalent
let department:any;
department="iot";
department=123;
//we can assoigned any type
// if you weant to stop using any then  disable noImplicitAny=true


//void
//it will not return anything
function addNum(num1:number,num2:number){
    return num1+num2;
    }
    console.log(addNum(1,2));
// if we removethe return then it will become void

//never








