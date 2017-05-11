//var years = prompt('Сколько вам лет?', 100);
//
//alert('Вам ' + years + ' лет!')


/* 1 */
function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("Введите число?", '');
var n = prompt("Укажите в какую степень его возвести?", '');

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}




/* 2 */
var name = prompt('Введите Ваше имя?', '');

if (name == 'Андрей') {
	
	function showMessage() {
  var message = name + ',' + 'Вы успешно вошли';
  alert(message);
}

showMessage(); 
	
} else {
  alert( 'А вот и неправильно!' ); 
}







