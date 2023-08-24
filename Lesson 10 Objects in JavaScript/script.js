/* 
1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
дней недели. Выведите на экран “Вторник”.
2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
фамилию, имя и возраст одной строкой.
3. Добавьте в объект user свойство отчество, которое пользователь должен 
ввести с клавиатуры.
4. Удалите свойство surname. */

/* 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена 
дней недели. Выведите на экран “Вторник”. */

/* const weeks = {
    [Symbol('wel')]: 'Понедельник',
    [Symbol('wel')]: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
};
 
console.log(weeks[2]);
 
console.log(weeks); */

/* 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
фамилию, имя и возраст одной строкой. */

/* const user = {
    name: 'имя',
    surname: 'Фамилия',
    age: 19
};
 
console.log(`${user.name} ${user.surname} ${user.age}`);
 
user.midlName = 'Отчество';
 
console.log(user); */

/* Удалите свойство surname */

const user = {
  name: 'имя',
  surname: 'Фамилия',
  age: 19
};

user.midlName = 'Отчество';

console.log(user);

delete user.midlName;

console.log(user);



//--------------------------
/* 1. Создайте два массива: первый с названиями дней недели, а второй - с их 
порядковыми номерами:
`['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
`[1, 2, 3, 4, 5, 6, 7]`
2. С помощью цикла создайте объект, ключами которого будут названия дней, 
а значениями - их номера.
3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
возведите каждый элемент этого объекта в квадрат. */

/* 1. Создайте два массива: первый с названиями дней недели, а второй - с их 
порядковыми номерами:
`['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
`[1, 2, 3, 4, 5, 6, 7]` */

/* const weekName = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const weekNumber = [1, 2, 3, 4, 5, 6, 7]; */

/* С помощью цикла создайте объект, ключами которого будут названия дней, 
а значениями - их номера. */

/* const weekName = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const weekNumber = [1, 2, 3, 4, 5, 6, 7];

const week = [];

for (let i = 0; i < weekName.length; i++) {
  week[weekName[i]] = weekNumber[i];
}

console.log(week); */

/* 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и 
возведите каждый элемент этого объекта в квадрат. */

const myObj = {
  x: 1,
  y: 2,
  z: 3
};

for (const key in myObj) {
  myObj[key] **= 2;
}

console.log(myObj);
//-----------------------------------
/* const obj = {
key1: {
  key1: 1,
  key2: 2,
  key3: 3,
},
key2: {
  key1: 4,
  key2: 5,
  key3: 6,
},
key3: {
  key1: 7,
  key2: 8,
  key3: 9,
},
}
```

Найдите сумму всех чисел, приведенного объекта. */

// const obj = {
//   key1: {
//       key1: 1,
//       key2: {
//           key55: 13,
//           key77: 14
//       },
//       key3: 3,
//   },
//   key2: {
//       key1: 4,
//       key2: 5,
//       key3: 6,
//   },
//   key3: {
//       key1: 7,
//       key2: 8,
//       key3: 9,
//   },
//   key4: 10
// }

// let sum = 0;
/* for (const keyOut in obj) {
  for (const keyIn in obj[keyOut]) {
      sum += obj[keyOut][keyIn];
  }
}

console.log(sum); */

const myFun = (obj) => {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      sum += myFun(obj[key]);
    } else {
      sum += obj[key];
    }
  }

  return sum;
};

// myFun(obj);
// console.log(sum);

console.log(myFun(obj));
//---------------------------------------------
/* 1. Создайте объект riddle.
2. Добавьте свойства question со значениями(текст загадки) и 
answer (ответ на загадку).
3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
question и сравнивает ответ с answer.
В случае верного ответа, необходимо поздравить пользователя.
В случае, если пользователь ответил неверно, необходимо сообщить ему об этом и 
подсказать.
Если ответил неверно во второй раз, то в консоль выводится текст: 
“вы проиграли”. */

/* const riddle = {
  question: 'Какой фрукт погубил человечество?',
  answer: 'яблоко',
  answerTrue: 'Ответ верный',
  answeFalse: 'вы проиграли',
  helper: ['Что Ева принесла Адаму?', 'Какой фрукт Ева сорвала с яблони?'],
  askQuestion() {
      let question = prompt(this.question);

      if (question.toLowerCase().trim() === this.answer) {
          console.log(this.answerTrue);
      } else {
          for (const key of this.helper) {
              question = prompt(key);

              if (question.toLowerCase().trim() === this.answer) {
                  console.log(this.answerTrue);
                  return;
              }
          }
          console.log(this.answeFalse);
      }
  }
}; */

// const riddle = {
//     question: 'Какой фрукт погубил человечество?',
//     answer: 'яблоко',
//     answerTrue: 'Ответ верный',
//     answeFalse: 'вы проиграли',
//     helper: ['Что Ева принесла Адаму?', 'Какой фрукт Ева сорвала с яблони?'],
//     askQuestion() {
//         if (this.checkIf(this.question)) {
//             console.log(this.answerTrue);
//             return;
//         }

//         for (const hint of this.helper) {
//             if (this.checkIf(this.question)) {
//                 console.log(this.answerTrue);
//                 return;
//             }
//         }
//         console.log(this.answeFalse);

//     },
//     checkIf(myQuestion) {
//         return prompt(myQuestion).toLowerCase().trim() === this.answer;
//     }
// };
/* 
const riddle = {
  question: 'Какой фрукт погубил человечество?',
  answer: 'яблоко',
  answerTrue: 'Ответ верный',
  answeFalse: 'вы проиграли',
  helper: ['Что Ева принесла Адаму?', 'Какой фрукт Ева сорвала с яблони?'],
  askQuestion() {
      for (const hint of [this.question, ...this.helper]) {
          if (this.checkIf(hint)) {
              console.log(this.answerTrue);
              return;
          }
      }
      console.log(this.answeFalse);
  },
  checkIf(myQuestion) {
      return prompt(myQuestion).toLowerCase().trim() === this.answer;
  }
};

riddle.askQuestion(); */

/* const arr = [1, 3, 5, 7];
const arr2 = [100, 200, ...arr];

console.log(arr2); */

/* const fun = (a, b, c) => {
  console.log(a, b, c);
};

const arr = [100, 2, 45];

fun(...arr); */

//rest
/* const fun = (a, ...nums) => {
  console.log(nums);
  console.log(a);
};

fun(100, 200, 400); */

const obj = {
  name: 'Коля',
  age: 24
};

const obj2 = {
  test: 'Hello',
  age: 34
};

const obj3 = {
  ...obj,
  ...obj2
};

console.log(obj3);

/*Шувалов Антон https://pastebin.com/gpQcP6K3
Павел Тарасов Полный курс:
1 - https://youtu.be/MbRmNGKXVOg
2 - https://youtu.be/dUlEIwEDkV4
3 - https://youtu.be/7qpbKy9XS48
4 - https://youtu.be/Su9Gml6xUUU
5 - https://youtu.be/lXJH1l9s214
6 - https://youtu.be/qdyJkc-BjQA
7 - https://youtu.be/fGTG-mrGpFY
8 - https://youtu.be/lXbF_Jta6vQ
Павел Тарасов https://disk.yandex.ru/d/dNcHjZs3c96ypw*/