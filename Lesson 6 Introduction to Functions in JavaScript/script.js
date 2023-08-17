// Задание 1:

// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна 
// вывести в консоль строку: 
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// const userName = prompt('Введите ваше имя');
// const userSurname = prompt('Введите вашу фамилию');
// const userAge = prompt('Введите ваш возраст');

// function greet(userName, userSurname, userAge) {
//   console.log(`Привет, ${userName} ${userSurname}. Вы уже большой, вам ${userAge}.`);
// }

// greet(userName, userSurname, userAge);

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// const mynumber = prompt('Введите число');

// const square = (mynumber) => {
//   console.log(`Квадрат числа ${mynumber} равен ${mynumber ** 2}`);
// }

// square(mynumber);

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// const number = Number(prompt('Введите число'));

// const isPositive = (number) => {
//   if (Number.isFinite(number)) {
//     number > 0 ?
//       console.log('+++') :
//       console.log('---');
//   }
// }

// isPositive(number);

// Тайминг: 20 минут.

// Задание 2: 
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в 
// консоль сумму этих чисел.

// const sumThree = (num1, num2, num3) => {
//   return num1 + num2 + num3;
// }

// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

// const num1 = Math.floor(Math.random() * (100 - 1) + 1);
// const num2 = Math.floor(Math.random() * (100 - 1) + 1);
// const num3 = Math.floor(Math.random() * (100 - 1) + 1);
// console.log(num1, num2, num3);

// const result = sumThree(num1, num2, num3);
// console.log(result);

// 3. Дан код:

// ```
// func(2);
// func(3);
// func();

// function func(num = 5) {
//   console.log(num * num);
// }
// ```

// Расскажите, каким будет результат каждого из вызовов функции.

// Тайминг: 20 минут.

// Задание 3: 

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень 
// переданного числа. 

// const sqrt = (myNumber) => Math.sqrt(myNumber);

// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

// console.log(`Сумма корней чисел 3 и 4 равна ${sqrt(3) + sqrt(4)}`);

// 2. Создайте функцию, которая находит минимальное число из 2х переданных аргументов функции и вернет найденное значение.

// const num1 = prompt('Введите первое число');
// const num2 = prompt('Введите второе число');

// const findMin = (number1, number2) => Math.min(num1, num2);

// console.log(findMin(num1, num2));
// Тайминг: 20 минут.

// const test = prompt('Enter smth');
// setTimeout(function () {
//   alert('Hello');
// }, 2000);
// console.log(test);

// Задание 4:

// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// const num = Number(prompt('Введите число от 1 до 7'));

// const dayOfWeek = (num) => {
//   switch (num) {
//     case 1:
//       return 'Monday';
//     case 2:
//       return 'Tuesday';
//     case 3:
//       return 'Wednesday';
//     case 4:
//       return 'Thursday';
//     case 5:
//       return 'Friday';
//     case 6:
//       return 'Saturday';
//     case 7:
//       return 'Sunday';
//     default:
//       return 'Wrong input';
//   }
// }

// console.log(dayOfWeek(num));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в
// зависимости от времени суток(утро, день, вечер, ночь), например:
// "Добрый день, Иван."
// или "Доброй ночи, Иван.".

const myName = prompt('Введите имя');

/**
 * 
 * @param {string} myName 
 */
function greetTimeOfDay(myName) {

  const currentTime = new Date;
  const hours = currentTime.getHours();

  if (hours > 0 && hours < 6) {
    console.log(`Доброй ночи, ${myName}`);
  } else if (hours > 6 && hours < 12) {
    console.log(`Доброе утро, ${myName}`);

  } else if (hours > 12 && hours < 18) {
    console.log(`Добрый день, ${myName}`);

  } else {
    console.log(`Добрый вечер, ${myName}`);
  }
}

greetTimeOfDay(myName);

//   Тайминг: 30 минут.