// if (condition) {

// }

// while (condition) {

// }

// function (params) {

// }

// console.log('Hello');
// console.log('Hello');
// console.log('Hello');

// let count = 0;
// while (count < 3) {
//   console.log('Hello');
//   count++;
// }

// for (let i = 0; i <= 2; i++) {
//   console.log('Hello for');

// }

// for (let j = 0; j <= 15; j + 5) {
//   console.log(j);

// }

// for (; ;) {

// }

// let pass;
// let count = 0;

// do {
//   if (count >= 3) {
//     alert('Пароль неверный')
//   }

//   pass = Number(prompt('Введите пароль'));
//   count++;
// } while (pass !== 234);

// const arr = [];
// arr.push(1);
// console.log(arr);
// let arrNew = [];
// arrNew = 6;

// const arr = [1, 2, 'hello', 4, 5, 9];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]);

// const user = [];

// const userName = prompt('Ваше имя');
// const userAge = prompt('Возраст');

// user.push(userName);
// user.push(userAge);

// user.push(prompt('Ваше имя'));
// user.push(Number(prompt('Возраст')));

// console.log(user);

// const numbers = [2, 3, 19, 15];

// console.log(numbers);
// alert(`Запомни цифры ${numbers}`);

// console.log(numbers[numbers.length - 1]);
// console.log(numbers.pop());
// console.log(numbers);

// const word = 'example';
// // console.log(word.split(''));
// const arrWord = word.split('');
// // console.log(arrWord.pop());
// const upWord = arrWord.pop();
// // console.log(upWord.toUpperCase());
// arrWord.push(upWord.toUpperCase());
// console.log(arrWord.join(''));

// const arr = [5, 2, 3, 7, 19, 7, 13, 3];

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   // console.log(element);
//   if (element >= 5) {
//     console.log(element);
//   } else {
//     continue;
//   }
// }

// console.log(arr.indexOf('3'));

const arrAnswers = ['елка', 'ёлка', 'ель'];
const userAnswer = prompt('Зимой и летом одним цветом');

for (let i = 0; i < arrAnswers.length; i++) {
  const element = arrAnswers[i];
  if (element === userAnswer) {
    console.log('Молодец');
    break;
  } else {
    continue;
  }
}