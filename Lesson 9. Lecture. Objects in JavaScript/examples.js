const car = {
  make: "Audi",
  model: "A5",
  year: 2023,
  color: "red",
  passengers: 2,
  power: 249
};

console.log(car.model);
car.power = 350;

car.odometer = 100;

delete car.odometer;

const productNew = {
  productImg: 'photo.png',
  productText: 'крутое кресло'
}

productNew;
productNew.productText;

let text = productNew.productText;
text;

productNew.lint = 'product/linkname.html';

productNew;

delete productNew.productText; // true

productNew.link = 'catalog/linkname.html';

productNew;

delete productNew.lint;

const car = {
  make: "Audi",
  model: "A5",
  year: 2023,
  color: "red",
  passengers: 2,
  power: 249
};

function haveRoadTrip(myСar, distance) {
  myСar.odometer += distance;
}
haveRoadTrip(car, 150);
console.log(car.odometer);

const car = {
  make: "Audi",
  model: "A5",
  year: 2023,
  color: "red",
  passengers: 2,
  power: 249,
  odometer: 0,
  startEngine: function () {
    console.log("Engine started");
  }
};

const car = {
  make: "Audi",
  model: "A5",
  year: 2023,
  color: "red",
  passengers: 2,
  power: 249,
  odometer: 0,
  engineIsStarted: false,
  startEngine: function () {
    this.engineIsStarted = true;
  },
  stopEngine: function () {
    this.engineIsStarted = false;
  },
  haveRoadTrip: function (distance) {
    if (this.engineIsStarted) {
      this.odometer += distance;
    } else {
      alert("Сначала запустите двигатель!");
    }
  }
};

for (const key in object) {
  console.log(key + ": " + object[key]);
}

const car = {
  make: "Audi",
  model: "A5",
  year: 2023,
  color: "red",
  passengers: 2,
  power: 249,
  odometer: 0,
};
console.log('Все ключи объекта car');
for (const key in car) {
  console.log(key);
}
console.log('Все значения объекта car');
for (const key in car) {
  console.log(car[key]);
}

const object = {
  1: 'Ivanov',
  2: 'Petrov',
};
const students = object.map((student) => `student: ${student}`); // VM223: 6 Uncaught TypeError: object.map is not a function at<anonymous>:6: 25

const group1 = {
  "Ivanov": {
    practicePlace: "ldu-1",
    practiceTime: 56
  },
  "Petrov": {
    practicePlace: "kamaz",
    practiceTime: 120
  },
  "Sidorov": {
    practicePlace: "ldu-1",
    practiceTime: 148
  },
  "Belkin": {
    practicePlace: "GosDZU",
    practiceTime: 20
  },
  "Avdeev": {
    practicePlace: "LPK",
    practiceTime: 160
  }
}
const group1Students = Object.keys(group1);
console.log(group1Students); // ["Ivanov", "Petrov", "Sidorov", "Belkin", "Avdeev"]

const car = {
  make: "Audi",
  model: "A5",
  year: 2023,
  color: "red",
  passengers: 2,
  power: 249,
  odometer: 0,
};
console.log(Object.values(car)); // ['Audi', 'A5', 2023, 'red', 2, 249,0]

const car = {
  make: "Audi",
  model: "A5",
  year: 2023,
  color: "red",
  passengers: 2,
  power: 249,
  odometer: 0,
};
console.log(Object.entries(car));
// 0: (2) ['make', 'Audi']
// 1: (2) ['model', 'A5']
// 2: (2) ['year', 2023]
// 3: (2) ['color', 'red']
// 4: (2) ['passengers', 2]
// 5: (2) ['power', 249]
// 6: (2) ['odometer', 0]

// const studentsPracticeTime = [{
//         firstName: "Ivanov",
//         practiceTime: 56
//     },
//     {
//         firstName: "Petrov",
//         practiceTime: 120
//     },
//     {
//         firstName: "Sidorov",
//         practiceTime: 148
//     },
//     {
//         firstName: "Belkin",
//         practiceTime: 20
//     },
//     {
//         firstName: "Avdeev",
//         practiceTime: 160
//     }
// ];
// Мы хотим вывести в таблицу студентов и информацию для каждого, прошел ли он практику уже. Практика будет считаться пройденной, если студент отработал 120 часов или больше.
const dataForTable = studentsPracticeTime.map((student) => {
  if (student.practiceTime < 120) {
    return { // Мы возвращаем новый объект, более удобный для вывода.
      Student: student.firstName,
      Practice: "Not passed"
    };
  } else {
    return {
      Student: student.firstName,
      Practice: "Passed"
    };
  }
});
console.table(dataForTable); // В консоль можно выводить разными способами, если использовать метод table, и передать туда массив или объект, этот метод выводит данные в виде таблицы.
// (index) Student Practice
// 0 "Ivanov" "Not passed"
// 1 "Petrov" "Passed"
// 2 "Sidorov" "Passed"
// 3 "Belkin" "Not passed"
// 4 "Avdeev" "Passed"

// const studentsPracticeTime = [{
//   firstName: "Ivanov",
//   practiceTime: 56
// },
// {
//   firstName: "Petrov",
//   practiceTime: 120
// },
// {
//   firstName: "Sidorov",
//   practiceTime: 148
// },
// {
//   firstName: "Belkin",
//   practiceTime: 20
// },
// {
//   firstName: "Avdeev",
//   practiceTime: 160
// }
// ];
// Мы хотим отфильтровать массив студентов, оставив в новом массиве только тех, кто уже прошел практику. Практика будет считаться пройденной, если студент отработал 120 часов или больше.
const studentsPassedPractice = studentsPracticeTime.filter((student) => {
  if (student.practiceTime < 120) return false
  return true
});
console.log(studentsPassedPractice); // Получили новый массив, в котором только те студенты, кто уже прошел практику.
// [ {
// "firstName": "Petrov",
// "practiceTime": 120
// }, {
// "firstName": "Sidorov",
// "practiceTime": 148
// }, {
// "firstName": "Avdeev",
// "practiceTime": 160
// }
// ]

// const studentsPracticeTime = [{
//   firstName: "Ivanov",
//   practiceTime: 56
// },
// {
//   firstName: "Petrov",
//   practiceTime: 120
// },
// {
//   firstName: "Sidorov",
//   practiceTime: 148
// },
// {
//   firstName: "Belkin",
//   practiceTime: 20
// },
// {
//   firstName: "Avdeev",
//   practiceTime: 160
// }
// ];
// Посчитаем сколько всего часов практики отработали студенты.
// let totalTime = 0; // Объявим переменную для хранения суммы всех часов.
for (let index = 0; index < studentsPracticeTime.length; index++) {
  totalTime = totalTime + studentsPracticeTime[index].practiceTime;
}
console.log(totalTime); // 504

// const studentsPracticeTime = [{
//   firstName: "Ivanov",
//   practiceTime: 56
//   },
//   {
//   firstName: "Petrov",
//   practiceTime: 120
//   },
//   {
//   firstName: "Sidorov",
//   practiceTime: 148
//   },
//   {
//   firstName: "Belkin",
//   practiceTime: 20
//   },
//   {
//   firstName: "Avdeev",
//   practiceTime: 160
//   }
//   ];
// Посчитаем сколько всего часов практики отработали студенты.
// const totalTime = studentsPracticeTime.reduce((acc, student) => { // Первое значение - это функция обратного вызова, которая будет получать значение аккумулятора (acc) при каждой итерации; и текущий элемент массива (student). return acc + student.practiceTime; }, 0); // Второй аргумент - это первоначальное значение аккумулятора - 0.
console.log(totalTime); // 504
// const studentsPracticeTime = [{
//   firstName: "Ivanov",
//   practiceTime: 56
// }, {
//   firstName: "Petrov",
//   practiceTime: 120
// }, {
//   firstName: "Sidorov",
//   practiceTime: 148
// }, {
//   firstName: "Belkin",
//   practiceTime: 20
// }, {
//   firstName: "Avdeev",
//   practiceTime: 160
// }];
// Посчитаем сколько всего часов практики отработали студенты.
const totalTime = studentsPracticeTime.reduce((acc, student) => { // Первое значение - это функция обратного вызова, которая будет получать значение аккумулятора (acc) при каждой итерации; и текущий элемент массива (student). return acc + student.practiceTime;
}, 0); // Второй аргумент - это первоначальное значение аккумулятора - 0.
console.log(totalTime); // 504

// const studentsPracticeTime = [{
//   firstName: "Ivanov",
//   practiceTime: 56
// },
// {
//   firstName: "Petrov",
//   practiceTime: 120
// },
// {
//   firstName: "Sidorov",
//   practiceTime: 148
// },
// {
//   firstName: "Belkin",
//   practiceTime: 20
// },
// {
//   firstName: "Avdeev",
//   practiceTime: 160
// }
// ];
// Проверим, есть ли хоть один студент, который прошел практику.
const isSomebodyPassedPractice = studentsPracticeTime.some((student) => {
  console.log(student.firstName); // Добавим вывод студента, чтобы посмотреть сколько элементов массива будет проитерированно.
  return student.practiceTime >= 120;
});
// "Ivanov"
// "Petrov" - итерации остановились на втором элементе массива, т.к. он удовлетворяет нашему условию и метод some дальше итерации не выполняет.
console.log(isSomebodyPassedPractice); // true - среди студентов есть те, кто прошел практику.

const studentsPracticeTime = [{
  firstName: "Ivanov",
  practiceTime: 56
},
{
  firstName: "Petrov",
  practiceTime: 120
},
{
  firstName: "Sidorov",
  practiceTime: 148
},
{
  firstName: "Belkin",
  practiceTime: 20
},
{
  firstName: "Avdeev",
  practiceTime: 160
}
];
// Мы хотим найти студента Belkin и посмотреть сколько времени он отработал на практике.
const studentBelkin = studentsPracticeTime.find((student) => {
  return student.firstName === "Belkin";
});
console.log(studentBelkin.practiceTime); // 20

// Сбор данных из объекта.
// const student = {
//   firstName: "Ivan",
//   lastName: "Petrov",
//   age: 21,
// };
// const firstName = student.firstName; // мы объявляем отдельно переменную, под каждый нужный нам параметр.
// const lastName = student.lastName;
// const age = student.age;
// Сбор данных из массива.
// const students = ["Ivanov", "Petrov", "Belkin"];
// const student1 = students[0];
// const student2 = students[1];
// const student3 = students[2];

// Сбор данных из объекта.
// const student = {
//   firstName: "Ivan",
//   lastName: "Petrov",
//   age: 21,
// };
// const { firstName, lastName, age } = student; // Деструктуризация - мыобъявляем все переменные в фигурных скобках, название должно совпадать снужным нам параметром.
// Сбор данных из массива.
// const students = ["Ivanov", "Petrov", "Belkin"];
// const [student1, student2, student3] = students; // Деструктуризация - Тумы указываем имена переменных в квадратных скобках, и в них по порядкубудут записаны элементы массива.

// Сбор данных из объекта.
const student = {
  firstName: "Ivan",
  lastName: "Petrov",
  age: 21,
};
// Деструктурируем значение ключа firstName в переменную studentName. Изададим для возраста значение по умолчанию, равное 20.
const { firstName: studentName, lastName, age = 20 } = student;
// Сбор данных из массива.
// const students = ["Ivanov", "Petrov", "Belkin"];
const [student1, student2, student3] = students; // Тут мы указываем именапеременных в квадратных скобках, и в них по порядку будут записаныэлементы массива.