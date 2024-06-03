//To use the particular export in class use impoer and 
//add relative path of that file
import {Login,User} from "./interface"
//another way
// import * as userLogin from "./interface"
// and if we use this then we vale to use implemeyts like userLogin.Login

interface Address {
    street: string
    city: string
    state: string
    pin: number
}

class Employee  implements Login{
    // by default it is public
    //protected is avaible in class and the extend classes
    #id!: number;
    // to declare privet we use # and also add the # in constructor too
    // Property 'id' has no initializer and is not definitely assigned 
    // in the constructor to avoid this we use !
    protected name!: string
    email!: string;
    // uses interfaces
    address!: Address;

    get empId() {
        return this.#id;
    }
    set empId(id: number) {
        this.#id = id;
    }


    // in other languages we ahve both default constaructore and parameterized constructor
    // but in Ts we have onlyu one
    //constructor(id:number,name:string,email:string){}; 
    //Multiple constructor implementations are not allowed.
    constructor(id: number, name: string, email: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }

    login(): User {
       return { id: 1, age: 20, email: "john@gmail.com" }
    }
;
    // to craete the methoid in class
    getNamesWitthIdAndEmail(): string {
        // return this.name + " " + this.email + " " + this.id;
        //better alternative way is to use string literal
        return `${this.name} ${this.email} has id is ${this.#id}`;
        //the space between specify how much space we want and
        //we can use ant string between thaem
    }
}

// create a instance
// if we donot create constructor then  we can assign after 
//else after creating the constructor we are suppose to pass the properties
//while creating the instance 
// let john= new Employee();
// john.id=1;
// john.name="john";
// john.email="john@gmail.com";
// console.log(john);
let john = new Employee(1, "john", "john@gmail.com", {
    street: "laveKush",
    city: "delhi",
    state: "New Delhi",
    pin: 110044
});
console.log(john);

//john.id 
// here we are unable to access the id because it is private
// but we can access by getter and setter
console.log(john.empId);

console.log(john.getNamesWitthIdAndEmail());



class Manager extends Employee {
    #id: number
    constructor(id: number, name: string, email: string, address: Address) {
        super(id, name, email, address);
        this.#id = id;
    }
    getNamesWitthIdAndEmail(): string {
        return `${this.name} has emailid ${this.email} has id ${this.#id}`;
    }
    //we can directly called by Class name and no need to instainsiate the object
    static getEmployeeCount(): number {
        return 20;
    }
}

let mike = new Manager(5, "Mike", "mike2gmail.com", {
    street: "laveKush",
    city: "delhi",
    state: "New Delhi",
    pin: 110044
});
console.log(mike);
console.log(mike.getNamesWitthIdAndEmail());
let count: number = Manager.getEmployeeCount();
console.log(count);
