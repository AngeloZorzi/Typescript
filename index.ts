//1)
console.log("string, number, boolean, any, null, undefined");
//2
let firstName: string = "Angelo";
let age: number = 31;
let studyingTS: boolean = true;
console.log(firstName);
console.log(age);
console.log(studyingTS);
//3 const sum = (a: number, b: number) => { return a + b }

const sum = function (a: number, b: number): number {
  return a + b;
};

console.log(sum(10, 56));

//5
const price = function (a: number): number {
  return a + (a * 22) / 100;
};
console.log(price(10));

//6

const concatStrings = function (a: string, b: string) {
  return (a + b).length;
};

console.log(concatStrings("Ciao", "Angelo"));

//7
console.log(
  "Un TYPE UNION   (es:number|string) può essere paragonato ad un insieme matematico che permette di unire due tipi di dato insieme, in modo tale da poter accettare valori diversi"
);

//8

type Myvar = number | null | undefined;

let prova = function (a: Myvar) {
  return a;
};
console.log(prova(10));
console.log(prova(null));
console.log(prova(undefined));

//9

//10 const numbers = [1, 2, 3]

const numbers: number[] = [1, 2, 3];

console.log(numbers);

//11

const myTuple: [string, number, number] = ["ciao", 23, 32];
console.log(myTuple);

//12
console.log("Type si utilizza per dati primitivi, interface per oggetti");
//13

interface Human {
  firstName: string;
  lastName: string;
  age: number;
}

const mario: Human = {
  firstName: "Mario",
  lastName: "Bros",
  age: 50,
};

console.log(mario);

//14
interface User {
  name: string;
  phone: number;
  email?: string;
}

const user: User = {
  name: "Mario",
  phone: 335428511155,
};

console.log(user);

//15
const student: [string, number] = ["mario", 10];
console.log(student);

//16
interface Veicolo {
  ruote: number;
  portiere: number;
  neopatentati: boolean;
}

interface Auto extends Veicolo {
  brand: string;
  color: string;
}

//17

const why: Auto[] = [
  {
    ruote: 2,
    portiere: 5,
    neopatentati: false,
    brand: "Fiat",
    color: "grey",
  },
];
console.log(why);

//18
console.log(
  "Sono argomenti di tipo, servono a rendere più generichele interfacce per poterle utilizzare più volte più facilmente"
);

//19
console.log("Sì");

//20
