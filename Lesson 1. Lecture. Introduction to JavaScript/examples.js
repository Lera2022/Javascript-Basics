if (3 > 1) {
  let a = 5;
}

console.log(a); // error a is not defined

if (3 > 1) {
  var b = 5;
}

console.log(b); // 5

var notInitialized; // неинициализированная переменная.
var age = 20; // инициализированная значением 20 переменная.
var age = 10; // нет ошибки несмотря на то, что мы использовали уже занятое имя, тем самым переопределив значение в другой переменной, которая была создана ранее. В старом коде можно было легко создать переменную с тем же именем, что уже есть в другом скрипте на странице, тем самым предопределив её значение и сломав чужой код.var notInitialized; // неинициализированная переменная.
var age = 20; // инициализированная значением 20 переменная.
var age = 10; // нет ошибки несмотря на то, что мы использовали уже занятое имя, тем самым переопределив значение в другой переменной, которая была создана ранее. В старом коде можно было легко создать переменную с тем же именем, что уже есть в другом скрипте на странице, тем самым предопределив её значение и сломав чужой код.

let age = 20;
let age = 10; // SyntaxError: Identifier 'age' has already been declared — с использованием let мы не можем переопределить чужую переменную, и всё будет работать хорошо.

console.log(age); // undefined
var brotherAge = age + 12;
console.log(brotherAge); // NaN
var age = 10;
console.log(name); //
name = "Ivan"; // Uncaught ReferenceError: name is not defined

// let result = 8;
// console.log(result); // 8

let updateResult = result + 2;
console.log(updateResult); // 10

const GAP_SIZE = 5;
GAP_SIZE = 3; // TypeError: Assignment to constant variable.

// let result = 5;
let Result = 3;
console.log(result); // 5
console.log(Result); // 3

console.log(typeof 2) // "number"
console.log(typeof "2") // "string"

let string = "Hello";
string = 'Hello';
// let result = 8;
let literal = `Результат: ${result}`; // Результат: 8
let emptyString = "";

let numberGradeValue = 5;
let stringGradeValue = "A";
const result = numberGradeValue - stringGradeValue; // NaN

// let isPassExam = true;
if (isPassExam) console.log('Поздравляем, Вы сдали экзамен!'); // Поздравляем, вы сдали экзамен!

let isPassExam;
console.log(isPassExam); // undefined
if (isPassExam) console.log('Поздравляем, Вы сдали экзамен!'); // '', так как undefined в условиях приводится к false (смотри ниже про приведение типов).

let student = {
  firstName: "Ivan",
  lastName: "Petrov",
  age: 33,
  faculty: "Information Technologies"
};
console.log(`${student.firstName} ${student.lastName} is ${student.age} years
  old`); // Ivan Petrov is 33 years old.

let listOfBooks = ['Стив Макконел "Совершенный код"', 'Роберт Мартин "Чистый код"'];
console.log(listOfBooks[0]); // Стив Макконнелл "Совершенный код"
console.log(listOfBooks.length); // 2 - длина массива (2 элемента).

const add2 = function (x) {
  return x + 2;
}
console.log(add2.toString()); // function(x) { return x + 2; }
console.log(add2(10)); // 12 - выводится результат выполнения функции.

const uniqKey = Symbol();
console.log(uniqKey.toString()); // Symbol()
const uniqKey2 = Symbol('test');
const uniqKey3 = Symbol('test');
console.log(uniqKey2.toString()); // Symbol('test')
console.log(uniqKey2 == uniqKey3) // false - символы всегда создаются уникальными.

//let bigNumber = 6337485137501000n;
console.log(bigNumber); // 63374851375010000n