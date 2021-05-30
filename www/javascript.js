// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Whats you age', '18');
// console.log(typeof(answer));

//Все данные от пользователя приходят в string

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// console.log(typeof (null)); // общепризнанная ошибка

let category = 'Toys';

console.log('http://url.com/' + category);

// Интерполяция 007
// console.log(`http://url.com/${category}/5`);

// let user  = 'axe';
// alert(`Hello, ${user}`);

// Базовые операторы 008
// console.log(4 + +'5'); // 9

// Префикс постпрефикс

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(2 * 4 == '8');      //true
console.log(2 * 4 === '8');     //false

const isChecked = false,
      isClose   = true;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);



