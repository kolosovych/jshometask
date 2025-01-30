
//'number' + 3 + 3
// let str = 'number'; // string
// const num2 = 3; // number
// const num3 = 3; // number
// const result = str + num2 + num3 // нова змінна. 
// console.log(result, typeof result)  // result:number33 string.   Відбулась конкатенація строки та числових значень


//null + 3
// let emptyValue = null; // пусте значення null
// const num1 = 3; //number
// const result = emptyValue + num1; // нова змінна. Складення null та числа
// console.log(result, typeof result) // result: 3 number. (0+3=3)


// 5 && "qwerty"
// const num = 5; // number, значення істинне (не  0, null, undefined, NaN або "")
// let str = "qwerty"; // string, значення істинне
// const result = (num && str) // нова змінна.
// console.log(result, typeof result) // result:qwerty, string.    Tому що num і str мають істинні значення то система повертає останнє значення


// +'40' + +'2' + "hillel";
// const num = +'40' // + перетворює string в number
// const num1 = +'2' //  + перетворює string в number
// const str = "hillel" // string
// const result = (num + num1 + str); // нова змінна.
// console.log(result, typeof result) // result: 42hillel, string.    конкатенація string і number


// '10' - 5 === 6;
// const str = '10'; //string
// const num = 5; // number
// const num1 = 6// number
// const result = (str - num === num1); // нова змінна.
// console.log(result, typeof result) // result: false, boolean.    str перетворюється в числове значення. 10-5 не дорівнює 6. 



//true + false
// const bool1 = true; //boolean ("true" система інтерпретує як - 1)
// const bool2 = false; // boolean ("false" система інтерпретує як - 0)
// const result = (bool1 + bool2); // нова змінна.
// console.log(result, typeof result) // result: 1, number.  Значення boolean інтерпретовані в числа (1+0=1)


//'4px' - 3
// const str = '4px'; //string
// const num = 3; // number
// const result = (str - num); // нова змінна.
// console.log(result, typeof result) // result:NaN, number. (Змінну "str" неможливо інтерпретувати як конкретне число)


//'4' - 3
// const str = '4'; //string
// const num = 3; // number
// const result = (str - num); // нова змінна.
// console.log(result, typeof result) // result:1, number.   (Змінна "str" інтерпретована як число. 4-3=1)


//'6' + 3 ** 0;
// const str = '6'; //string
// const num = 3; // number
// const num1 = 0; // number
// const result = (str + num ** num1); // нова змінна. возведення в степіні і конкатенація.
// console.log(result, typeof result) //result: 61, string. Спершу возведення в степінь num ** num1, потім відбулась конкатенація зі строковою змінною.

//12 / '6'
// const num = 12; // number
// const str = '6'; //string
// const result = (num / str); // нова змінна.
// console.log(result, typeof result) // result: 2 number.  Змінна "str" інтерпретована як число  



// '10' + (5 === 6);
// const str = '10'; //string
// const num = 5; // number
// const num1 = 6; // number
// const result = (str + (num === num1)); // нова змінна. В дужках значення false, тому що 5 не дорінює 6. Потім відбудась конкатенація зі стрінговою змінною
// console.log(result, typeof result) // result: 10false string. 


// null == ''
// const emptyValue = null; // значення null
// const x = ''; // пуста строка
// const result = (emptyValue == x); // нова змінна 
// console.log(result, typeof result) //result: false boolean. Значення null не дорівнює пустій строкі.  


// 3 ** (9 / 3);
// const num = 3; // number
// const num1 = 9; // number
// const result = (num ** (num1 / num)); // нова змінна. Спочатку відбувається операція ділення в дужках. Далі возведення в степінь.
// console.log(result, typeof result) //result: 27 number.  Операція з числами


// !!'false' == !!'true'
// const str = 'false'; //string
// const str1 = 'true'; //string
// const result = (!!str == !!str1); // нова змінна.  !! - оператор подвійного заперечення. перетворює строку в булеве значення
// console.log(result, typeof result) //result: true boolean.    (2 булеві непорожні рядки) 


// 0 || '0' && 1
// const num = 0; // number
// const str = '0'; //string
// const num1 = 1; // number
// const result = (num || str && num1); // нова змінна.   Спочатку виконується && оператор. система обирає num1 (друга true змінна). Далі виконується ||. Система обирає num1, тому що ця змінна true
// console.log(result, typeof result) //result: 1 number


// (+null == false) < 1;
// const emptyValue = null; // значення null
// const bool = false // boolean
// const num1 = 1; // number
// const result = (+emptyValue == bool) < num1 //нова змінна.  +emptyValue - інтерпретується як 0.  bool система інтерпретує як 0. Тому (+emptyValue == bool) = true(1). Тому друга половина функції 1 < 1 це false.
// console.log(result, typeof result) //result: false boolean.   


// // false && true || true
// const bool = false // boolean
// const bool1 = true // boolean
// const result = bool && bool1 || bool1 //нова змінна. Спочатку виконується && оператор. Обирає bool (перше false значення). Далі виконується || оператор. Він повертає bool1 (перше значення true). 
// console.log(result, typeof result) //result:true boolean

// false && (false || true);
// const bool = false // boolean
// const bool1 = true // boolean
// const result = bool && (bool || bool1)//нова змінна. Спочатку виконується || оператор в дужках. Він повертає bool1 (перше значення true). Потім виконується && оператор. Обирає bool (перше false значення)
// console.log(result, typeof result) //result: false boolean


// (+null == false) < 1 ** 5; 
const emptyValue = null; // значення null
const bool = false // boolean
const num1 = 1; // number
const num2 = 5; // number
const result = (+emptyValue == bool) < num1 ** num2 //нова змінна. Спершу виконується дія в дужках. +emptyValue інтерпретується як 0, bool також інтерпретується як 0, тому (+emptyValue == bool) - true. Далі підносимо до степеня num1 ** num2 - 1. Далі порівнюємо true(1) < 1. 
console.log(result, typeof result) //result: false boolean
