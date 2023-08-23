const array = [1, 2, 3, 10, 15];
const arrayUp = array.map(item => item * 2);

array.filter(item => item >= 10);

array.some(item => item >= 10); // true

array.some(item => item >= 20); // false

array.reduce((a, b) => a + b);

array.reduce((a, b) => a + b) / array.length;