/*Реализуйте и экспортируйте функцию reverse, которая переворачивает строку.

Пример:

reverse('hello, world!'); // !dlrow ,olleh
Подсказки
Для подсчета длины строки используйте функцию length из модуля strings.
Пример: strings.length('cat'); // 3
*/

export default (str) => {
	if (typeof(str) !== 'string') return;

	let rts = '';

	for (let i = 0; i < str.length; i++) {
		rts = str[i] + rts;
	}

	return rts;
}