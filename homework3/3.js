"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const num1 = prompt('Введите первое число');
const num2 = prompt('Введите второе число');
const num3 = prompt('Введите третье число');

/**
 * Определяет максимальное среди переданных ей значение и выводит его в консоль
 * @param {number} n1 Первое число
 * @param {number} n2 Второе число
 * @param {number} n3 Третье число
 */
function maxNumber(n1, n2, n3) {
  console.log(`Максимальное значение среди чисел ${n1}, ${n2}, ${n3} равно ${Math.max(n1, n2, n3)}.`);
}

maxNumber(num1, num2, num3);