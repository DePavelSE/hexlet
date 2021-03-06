// Функция calc представляет из себя простейший калькулятор, 
//которому передается бинарная операция, а так же два числа, 
//а на выходе получается результат применения операции к этим числам.

// Реализуйте и экспортируйте функцию calc, аргументами которой являются:

// Операция в виде строки. Поддерживаются +, -, /,*.
// Первый операнд.
// Второй операнд.
// Если передается операция которая не поддерживается, то функция должна вернуть NaN.

// Примеры:

// calc('+', 3, 10); // 13
// calc('-', -8, 6); // -14
// calc('$', 0, 9); // NaN

export default (oper, first, sec) => {

	switch (oper) {
		case '+':
			return first + sec;
			break;
		case '-':
			return first - sec;
			break;
		case '*':
			return first * sec;
			break;
		case "/":
			if (sec !== 0) return first / sec;
			break;
		default: return NaN;
	}

}