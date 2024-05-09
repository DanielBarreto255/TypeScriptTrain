//primitives


let age: number;
age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

//more complex

let hobbies: string[];

hobbies =['sports', 'cookies'];

let person: {
    name: string;
    ag: number;
}

let people:{
    name: string
    age: number;
}[]; 

//type inferance

let course = 'nlanlçabsddsf';

//course = 123;

//union

let course2: string | number = 'nlanlçabsddsf';

course2 = 123;


//alias

type Person = {
    name: string;
    ag: number;
}

let people2: Person;

let person2: Person[]; 


// functions

function add(a:number, b:number){
    return a + b;
}

function print(value:any){
    console.log(value);
}