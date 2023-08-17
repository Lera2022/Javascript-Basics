while (condition) {
  //Тело цикла
}

const number = Number(prompt('Введите значение N'));
let i = 1;
while (i <= number) {
  console.log(i++);
}

// let pass = Number(prompt('Введите пароль в числовом формате'));
while (pass !== 123) {
  pass = Number(prompt('Введите пароль в числовом формате'));
}

let pass;
do {
  pass = Number(prompt('Введите пароль в числовом формате'));
} while (pass !== 123);

for (инициализация; проверка; инкремент) {
  инструкция
}

инициализация;
while (проверка) {
  инструкция;
  инкремент;
}

// const number = Number(prompt('Введите значение N'));
for (let i = 1; i <= number; i++) {
  console.log(i);
}

// const number = Number(prompt('Введите значение N'));
for (let i = 1; i <= number; i++) {
  console.log(i);
}

while (true) {
  //будет выполняться бесконечное количество раз
}

const student1 = 'Ivanov';
const student2 = 'Petrov';
const student3 = 'Sidorov';
const student1PracticeTime = 20;
const student2PracticeTime = 135;
const student3PracticeTime = 87;
// const fullPracticeTime = student1PracticeTime + student2PracticeTime + student3PracticeTime;
console.log(student1, ' - practice time: ', student1PracticeTime); // Ivanov -practice time: 20
console.log(student2, ' - practice time: ', student2PracticeTime); // Petrov -practice time: 135
console.log(student3, ' - practice time: ', student3PracticeTime); // Sidorov -practice time: 87
console.log('Full practice time: ', fullPracticeTime); // Full practice time: 242

// Массивы всегда называются множественным числом, т.к. массив хранит список чего - либо.
// const students = ['Ivanov', 'Petrov', 'Sidorov'];
const studentsPraticeTimes = [20, 135, 87];
// Воспользуемся циклом, чтобы сложить время практики каждого студента. Пока у нас
// только три студента, цикл выглядит страшнее, чем просто сложения отдельных переменных,
// но когда у нас будет 30 студентов, обрабатывать их в цикле будет намного проще, чем
// писать 30 переменных вручную и не запутаться в них. Тут же в цикле мы можем выводить
// информацию по каждому студенту.
let fullPracticeTime = 0;
for (let index = 0; index < students.length; index++) {
  fullPracticeTime = fullPracticeTime + studentsPraticeTimes[index];
  console.log(students[index], ' - practice time: ', studentsPraticeTimes[index]);
}
// Ivanov - practice time: 20
// Petrov - practice time: 135
// Sidorov - practice time: 87
console.log('Full practice time: ', fullPracticeTime); // Full practice time: 242

// const students = [];

// const students = [];
students.push('Иванов');
students.push('Петров');
students.push('Сидоров');
console.log(students); // ['Иванов', 'Петров', 'Сидоров']

// const students = [];
students.push('Иванов', 'Петров', 'Сидоров');
console.log(students); // ['Иванов', 'Петров', 'Сидоров']

// const students = ['Иванов', 'Петров', 'Сидоров'];
const lastStudent = students.pop();
console.log(lastStudent); // 'Сидоров'
console.log(students); // ['Иванов', 'Петров']

// const filePath = "C:/projects/bestProject/src/images/background-image.png";
const fileName = filePath.split('/').pop(); // Разделим строку на составляющие и
// превратим её в массив по средствам split('/'), а потом уже вызовем новый метод pop()
console.log(fileName); // "background-image.png"

// const students = ['Иванов', 'Петров', 'Сидоров'];
const firstStudent = students.shift();
console.log(firstStudent); // 'Иванов'
console.log(students); // ['Петров', 'Сидоров']

const filePath = "C:/projects/bestProject/src/images/background-image.png";
const diskName = filePath.split('/').shift(); // Разделим строку на составляющие и
// превратим её в массив по средствам split('/'), а потом уже вызовим новый метод
shift()
console.log(diskName); // "C:"

// const students = ['Иванов', 'Петров', 'Сидоров'];
// Попробуем скопировать массив students в новую переменную.
// const students2 = students;
// Добавим в новую переменную нового студента.
students2.push('Белкин');
console.log(students); // ['Иванов', 'Петров', 'Сидоров', 'Белкин']
console.log(students2); // ['Иванов', 'Петров', 'Сидоров', 'Белкин']

// const students = ['Иванов', 'Петров', 'Сидоров'];
// Попробуем скопировать массив students в новую переменную.
const students2 = students.slice();
// Добавим в новую переменную нового студента.
students2.push('Белкин');
console.log(students); // ['Иванов', 'Петров', 'Сидоров']
console.log(students2); // ['Иванов', 'Петров', 'Сидоров', 'Белкин']

// const students = ['Иванов', 'Петров', 'Сидоров', 'Белкин'];
const firstTwoStudents = students.slice(0, 2);
console.log(firstTwoStudents); // ['Иванов', 'Петров']

// const students = ["Ivanov", "Petrov", "Sidorov", "Alexandrov", "Belkin", "Avdeev"];
console.log(students.slice()); // "Ivanov", "Petrov", "Sidorov", "Alexandrov",
// "Belkin", "Avdeev" - копия исходного массива.
console.log(students.slice(1)); // "Petrov", "Sidorov", "Alexandrov", "Belkin",
// "Avdeev" - часть исходного массива от первого элемента и до конца.
console.log(students.slice(7)); // [] - пустой массив, т.к. Стартовыйы аргумент
// больше длины массива.
console.log(students.slice(-2)); // "Belkin", "Avdeev" - часть исходного массива со
// второго элемента с конца.
console.log(students.slice(2, 3)); // "Sidorov" - часть исходного массива со второго
// элемента по третий.
console.log(students.slice(2, -1)); // "Sidorov", "Alexandrov", "Belkin", - часть
// исходного массива со второго элемента по предпоследний.

const students = ["Ivanov", "Petrov", "Sidorov", "Alexandrov", "Belkin", "Avdeev"];
// Неправильная проверка.
if (students.indexOf("Ivanov")) {
  console.log("Среди студентов есть Иванов!"); // Ничего не будет выведено, т.к.
  // Иванов является нулевым элементом массива, а ноль приводится к false значению,
  // поэтому такая проверка не сработает.
}
// Правильная проверка.
if (students.indexOf("Ivanov") !== -1) {
  console.log("Среди студентов есть Иванов!"); // "Среди студентов есть Иванов!"
}
const indexOfBelkin = students.indexOf("Belkin"); // 4

const products = ['Кофта', 'Куртка', 'Футболка', 'Брюки'];
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}