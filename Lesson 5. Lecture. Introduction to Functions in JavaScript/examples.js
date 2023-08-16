// Данные об успеваемости трёх студентов.
/*const ivanov = 4.5;
const petrov = 3.7;
const sidorov = 3.2;
// Расчет стипендии.
let scholarshipIvanov = 0;
if (ivanov > 3.4 && ivanov < 4) {
  scholarshipIvanov = 5000;
} else if (ivanov > 4) {
  scholarshipIvanov = 7500;
}
let scholarshipPetrov = 0;
if (petrov > 3.4 && petrov < 4) {
  scholarshipPetrov = 5000;
} else if (petrov > 4) {
  scholarshipPetrov = 7500;
}
let scholarshipSidarov = 0;
if (sidorov > 3.4 && sidorov < 4) {
  scholarshipSidarov = 5000;
} else if (sidorov > 4) {
  scholarshipSidarov = 7500;
}
console.log(scholarshipIvanov); // 7500
console.log(scholarshipPetrov); // 5000
console.log(scholarshipSidarov); // 0

// function имя_функции(параметр1, параметр2, …) {
// Действия
// }

function average(x, y) {
  return (x + y) / 2;
}
avg = average(42, 100500);
alert(avg);

/* Декларативный подход к объявлению функций. Мы объявляем ключевое слово
function, за которым идёт имя функции (его может и не быть) и её тело.
// Именованная функция.
function getMaximum(numbers) {
// Реализация алгоритма поиска максимального значения.
}
// Анонимная функция. В данном случае эта функция будет бесполезной, так как
без имени мы не сможем её вызвать. Анонимные функции встречаются в местах, где
они передаются в качестве функции обратного вызова или возвращаются из другой
функции. Об этом поговорим позже.
function (result) {
// Какой-то код обработки результата.
}
// Функциональное выражение.
const getMaximum = function(numbers) {
// Реализация алгоритма поиска максимального значения.
}
// или в стиле ES6 с использованием толстой стрелки (fat arrow)
const getMaximum = (numbers) => {
// Реализация алгоритма поиска максимального значения.
} */

// Функция для расчета стипендии.
function getScholarship(academicPerformance) {
  if (academicPerformance < 3.4) {
    return 0;
  }
  if (academicPerformance < 4) {
    return 5000;
  } else {
    return 7500;
  }
}
// Данные об успеваемости трёх студентов.
const ivanov = 4.5;
const petrov = 3.7;
const sidorov = 3.2;
// Расчет стипендии.
let scholarshipIvanov = getScholarship(ivanov);
let scholarshipPetrov = getScholarship(petrov);
let scholarshipSidarov = getScholarship(sidorov);
console.log(scholarshipIvanov); // 7500
console.log(scholarshipPetrov); // 5000
console.log(scholarshipSidarov); // 0

var f = function (number) {
  return number + 1;
}

let f = (number) => {
  return number + 1;
}

let f = number => {
  return number + 1;
}

let f = () => {
  doSomething;
}

let f = number => {
  return number + 1;
}

let f = number => number + 1;

const f = (param = 5) => {
  console.log(param);
}
f(); // 5
f(10); // 10

const sum1 = function (a, b) {
  return a + b;
}
// Код с использованием стрелочной функциии
const f = (a, b) => a + b;

function changeX(x) {
  x += 5;
  alert(x);
}
var x = 1;
alert(x); // выводит 1
changeX(x); // выводит 6
alert(x); // выводит 1

function buy() {
  alert('Поздравляем!');
  alert('Вы нажали на кнопку купить');
}

let userAnswer = prompt('Не лает, не кусает, а в дом не пускает');
if (userAnswer === 'замок') {
  alert('Молодец, ответил верно');
} else {
  alert('Не угадал');
}

function riddles(question, answer) { // где первый параметр это загадка, а второй ответ не нее
  let userAnswer = prompt(question); // внутри prompt передаём
  вопрос
  if (userAnswer === answer) { // внутри условия if вместо answer будет ответ на загадку
    alert('Молодец, ответил верно');
  } else {
    alert('Не угадал');
  }
}
riddles('Не лает, не кусает, а в дом не пускает', 'замок');

riddles('Сто одёжек и все без застежек', 'капуста');

// Плохие имена функций.
// const user = nameOfUser(); // Понятно, что функция что-то делает с именем пользователя.Можно догадаться, что получает его имя, но для полного понимания надо заходить в функцию.
// const hourlyRate = rateTable(user); // Тут непонятно, что делает функция. Может, она устанавливает какой - то рейт для пользователя или возвращает его рейт.
// const workedHours = tableOfhours(user); // То же самое, что и выше.
// const result = salary(hourlyRate, workedHours); // Ну и, как результат, мы получаем зарплату пользователя, а может быть, сравниваем внутри что - то.
// // Ещё один пример плохого имени, когда функция делает больше, чем положено.
// Const access = getUserByNameSaveDBAuth(user);
// // Хорошие имена функций — код читается как книга и всё понятно.
// const user = getUserFromDB();
// const hourlyRate = getUserHourlyRate(user);
// const workedHours = getUserWorkedHours(user);
// const result = calculateUserSallary(hourlyRate, workedHours);
// // Тут мы видим, что получаем пользователя из базы данных, потом получаем его часовую ставку и количество отработанных этим пользователем часов и в итоге рассчитываем его зарплату.

// const showProperties = (length, width, weight, color, material) => {
//   console.log('Item length: ', length);
//   console.log('Item width: ', width);
//   console.log('Item weight: ', weight);
//   console.log('Item color: ', color);
//   console.log('Item material: ', material);
// };
// // Лучше все эти параметры передать одним аргументом.
// const showProperties = (properties) => {
//   if (!properties) return;
//   console.log('Item length: ', properties.length);
//   console.log('Item width: ', properties.width);
//   console.log('Item weight: ', properties.weight);
//   console.log('Item color: ', properties.color);
//   console.log('Item material: ', properties.material);
// };