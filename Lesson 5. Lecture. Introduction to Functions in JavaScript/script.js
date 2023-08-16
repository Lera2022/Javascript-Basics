// alert('Hello script js');

// function helloName(name) {
//   console.log(name);
// }

// helloName('Lera');

// let count = 5;

// function counter() {
//   // let count = 0;
//   return count++; // count = count + 1
// }

// counter();
// counter();

// console.log(count);

// let age = Number(prompt('Сколько вам лет?'))

// function upAge() {
//   return age + 5;
// }

// upAge();

// const lvlUpAge = () => age + 5;

// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

// function hello() {
//   console.log('Hello function');
// }

// hello();

// const sum = (param1, param2) => {
//   return param1 + param2;
// }

// // const result = sum(2, 5);

// console.log(sum(2, 5));

// const salary = (money) => {
//   money = money * 0.87; // money - money * 0.13
//   return money * 0.75;
// }

// const userMoney = Number(prompt('Сколько ты зарабатываешь?'));

// // console.log(salary(userMoney));

// let moneyMonth = salary(userMoney);

// console.log(`Для расходов можно использовать ${salary(userMoney)}`);

// console.log(`На еду желательно потратить не более чем ${moneyMonth * 0.3}`);

// sayHello();

// function sayHello() {
//   alert('Привет');
//   alert('Нажали на кнопку');
// }

// const hello2 = () => {
//   alert('Hello 2');
// }

// hello2();

// let userAnswer = prompt('Зимой и летом одним цветом');

// if (userAnswer === 'елка') {
//   console.log('Угадал');
// } else {
// console.log('Не угадал');
// }

// let userAnswer2 = prompt('Сидит дед во сто шуб одет. Кто его раздевает, то слёзы проливает');

// if (userAnswer2 === 'лук') {
//   console.log('Угадал');
// } else {
// console.log('Не угадал');
// }

function askQuestion(answer, question) {
  const userAnswer = prompt(question);

  if (userAnswer.toLowerCase() === answer) {
    console.log('Молодец, угадал');
  } else {
    console.log('Не угадал');
  }
}

function puzzle() {
  askQuestion('лук', 'Сидит дед во сто шуб одет. Кто его раздевает, то слёзы проливает');
  askQuestion('елка', 'Зимой и летом одним цветом');
}