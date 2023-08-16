let numberFromString = Number('12');
console.log(numberFromString - 1); // 11 - строка "12" была переведена в число,
// и операция вычитания прошла успешно.
let numberToString = String(numberFromString);
console.log(numberToString.length); // 2 - numberToString — это строка, так как 
// у числа нет свойства length

// let stringNumber = '12';
let realNumber = 1;
console.log(stringNumber + realNumber); // "121" - получили строку из соединения
// первой переменной и второй, вторая переменная была преобразована в строку.
console.log(stringNumber - realNumber); // 11 - получили число, так как при
// вычитании строка была преобразована
// в число.

let stringNumber = '12';
console.log(!true); // false -- оператор отрицания инвертировал значение нашей
// булевой переменной.
console.log(!!stringNumber); // true — получили логическое значение «правда»,
// так как наша строка была не пустой. Обратите внимание, как используется
// оператор отрицания для приведения к булеву типу, тут он использован дважды:!!

// let a = "42";
// let b = 42;
a == b; // true
a === b; // false

[] == ![] // true
  // Пустой массив при преобразовании в число даёт 0.
  +
  [] // 0
// Отрицания массива — это преобразование массива в булев тип, что даёт true, а
// затем отрицание булева типа, что даёт false.
![] // false
// И в итоге преобразование полученного булева значения false в число даёт нам 0.
// А 0 == 0 - true.

// let a = 41;
// let b = "42";
let c = "43";
a < b; // true
b < c; // true

// let a = 43;
// let b = "foo";
a < b; // false
b > c; // false
a == b; // false

// let a = 1;
a = -a; // унарный минус

// let a = 1;
let b = 2;
a + b; // бинарный плюс

// let a;
if (a) {
  console.log(a);
}

// let a = "42";
// const result = +a + 3; // 45

// let a = 42;
const result = a + ''; // "42" - сложение с пустой строкой приводит число в
// строку.

let a = [];
if (a.length) {
  console.log(a) // не отработает, так как a.length равно 0, и это falsy 
  // значение.
}

alert(message);

// prompt(message, default);

confirm(message);

let personName = prompt('Как вас зовут?');
alert(`Добро пожаловать на сайт ${personName}`);

alert('Добро пожаловать на сайт' + personName);

if (Условие) {
  // действие
}

if (Условие) {
  // Действие1;
} else {
  // Действие2;
}

// let x = 5;
// let y = 42;
if (x > y) {
  alert(x + y); // сложить значения переменных если условие верно
} else {
  alert(x * y); // умножить значения переменных если условие
  ложно
}

// (Условие) ? (Оператор по истине) : (Оператор по лжи);

let x = 10;
let y = 15;
let max = (x > y) ? x : y;
alert(max);