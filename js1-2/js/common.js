
/* 1 */
(function () {
  'use strict';
function pow(x, n) {

 var result = x;

 for (var i = 1; i < n; i++) {
   result *= x;
 }

 return result;
}

var x = prompt('Введите число?', '');
var n = prompt('Укажите в какую степень его возвести?', '');

if(!isNaN(x)) {
	alert('');
} else {
	alert('not a number');
}


if (n <= 1) {
 alert('Степень ' + n +
   'не поддерживается, введите целую степень, большую 1'
 );
} else {
 alert ( pow(x, n) );
}

	})();

/*2*/
(function() {
  'use strict';

  var userNames = ['Антон', 'Валерий', 'Ольга', 'Иван', 'Сергей'];

  var name = prompt('введите имя для поиска: ', '');

  var result = 'такого пользователя нет ' ;

  for (var i = 0; i < userNames.length; i++) {
    if (name === userNames[i]) {
    result = name + 'вы вошли '
      break;
    }
  }

  alert(result);
})();
