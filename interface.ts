export interface User {
    id: number;
    age: number;
    email: string;
    name?: string
}

// if we  remove any one feild then we get Property 'name' is missing in type 
//'{ id: number; age: number; email: string; }' but required in type 'User'
//to make the field optional we use ?
let user: User = { id: 1, age: 20, email: "john@gmail.com" }


// object destructring
let {age: employeeAge,email}:User= { id: 1, age: 20, email: "john@gmail.com" }

console.log(employeeAge);


interface Employees extends User {
    salary: number;
}
let employee: Employees = {
    id: 1, age: 20, email: "john@gmail.com",
    salary: 700
}

// interfaces fas method declarations
// if we mark any thing is export then we can use this in other class
export interface Login{
    login():User;
}

// array destructring
let [users1,user2,...restUsers]:User[]=[
    { id: 1, age: 20, email: "john@gmail.com"},
    { id: 2, age: 21, email: "mike@gmail.com"},
    { id: 3, age: 20, email: "alex@gmail.com"},
    { id: 4, age: 23, email: "alina@gmail.com"},
    { id: 5, age: 28, email: "lesa@gmail.com"}
];
console.log(users1);
console.log(user2);
console.log(restUsers);

let result= restUsers.filter((user)=> user.id>1);
console.log(result);
