var message : string ="Hello Eric";
console.log(message);

let identification : boolean =true;
console.log(identification);

const accountNumber: number =1483818;
console.log(accountNumber);

/*let num1 =1;
let num2 =1;
console.log(num1 + num2);*/

// string concenate
let num1:string = "1";
let num2:string = "1";
console.log(num1 + num2);

//template literal
let firstName: string = "Hina";
let age: number = 31;
let message1 =`Hello my name is ${firstName} and my age is ${age}`;
console.log(message1);

// Data types (Explict casting)                 // UnKnown //
let myName: unknown = "Hina";
console.log((myName as string).length);  //1st Method   4
console.log((<string> myName).length);   //2nd Method   4

//Data type (any)
// let value : any = "Hina";
// value =123;
// value = true;
// value.whatever();
// value.kuchbhi();value.happybirthday();
// value = "Rina"; // (any) kuch bhi datatype absorb kar layta h error show nahi karta.it,s very flexible 

// Data type  (unKnown)
let value1 : unknown = "Humaira";
value1 = 147;
value1 = false;
//value1.whatever();  //unknown error show karta h

// Example
let age1: unknown;
age1 = 23;
let newAge = (age1 as number).toFixed(4);  // k (dot .) k baad kitnay 0 add karay
console.log(newAge);   //23.0000

// Example bmi
let height = 40;
let weight = 20;
//let bmi = weight / height **2;  //0.01
let bmi = weight / height * height;
console.log(bmi.toFixed(2));    //20.00

// Example
let value2: unknown =12;
console.log((value2 as number));  //12

// Example
let value3: unknown = 12;
console.log((value3 as number).toFixed(2)); //12.00

// example
let value4: unknown = 12.3;
console.log((value4 as number).toFixed(3));  //12.300

