//1)
console.log("string, number, boolean, any, null, undefined");
//2
var firstName = "Angelo";
var age = 31;
var studyingTS = true;
console.log(firstName);
console.log(age);
console.log(studyingTS);
//3 const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 56));
//5
var price = function (a) {
    return a + (a * 22) / 100;
};
console.log(price(10));
//6
var concatStrings = function (a, b) {
    return (a + b).length;
};
console.log(concatStrings("Ciao", "Angelo"));
//7
console.log("Un TYPE UNION   (es:number|string) può essere paragonato ad un insieme matematico che permette di unire due tipi di dato insieme, in modo tale da poter accettare valori diversi");
var prova = function (a) {
    return a;
};
console.log(prova(10));
console.log(prova(null));
console.log(prova(undefined));
//9
//10 const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
console.log(numbers);
//11
var myTuple = ["ciao", 23, 32];
console.log(myTuple);
//12
console.log("Type si utilizza per dati primitivi, interface per oggetti");
var mario = {
    firstName: "Mario",
    lastName: "Bros",
    age: 50,
};
console.log(mario);
var user = {
    name: "Mario",
    phone: 335428511155,
};
console.log(user);
//15
var student = ["mario", 10];
console.log(student);
//17
var why = [
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
console.log("Sono argomenti di tipo, servono a rendere più generichele interfacce per poterle utilizzare più volte più facilmente");
//19
console.log("Sì");
//20
