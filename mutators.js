/*
Простое число — натуральное (целое положительное) число (больше единицы),
имеющее ровно два различных натуральных делителя — единицу и самого себя.

solution.js
Реализуйте и экспортируйте функцию isPrime определяющую, является ли число простым.

Пример:

isPrime(1); // false
isPrime(7); // true
isPrime(10); // false
*/

export const isPrime = (num) => {
	if (num <= 1 || typeof(num) != 'number') return false;

	let i = 2;
	while (i < num) {
		if (num % i === 0) return false;
		i++;
	}
	return true;
}