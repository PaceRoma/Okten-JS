// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 1
// if (x !== 0){
//     console.log('True');
// }else {
//     console.log('False');
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 21
// if (time >=0 && time <=15){
//     console.log('1/4Time');
// } else if(time >=16 && time <=30) {
//     console.log('2/4Time');
// } else if(time >=31 && time <=45){
//     console.log('3/4Time');
// } else if(time >=32 && time <=59){
//     console.log('4/4Time');
// } else {
//     console.log('error');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це ч
// исло (у першу, другу чи третю).


// let x = 31
// if (x >=0 && x <=15 ){
//     console.log('1/3');
// } else if (x >=16 && x <=22) {
//     console.log('2/3');
// } else if (x >=22 && x <=31) {
//     console.log('3/3');
// } else {
//     console.log(NaN);
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відобража
// ється інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let num = +prompt('Enter Your Day')
// switch (num) {
//     case 1:
//         console.log('Mon');
//         break;
//     case 2:
//         console.log('Thu');
//         break;
//     case 3:
//         console.log('Wed');
//         break;
//     case 4:
//         console.log('Thur');
//         break;
//     case 5:
//         console.log('Fri');
//         break;
//     case 6:
//         console.log('Sat');
//         break;
//     case 7:
//         console.log('San');
//         break;
//     default:
//         console.log(NaN);
// }


// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let a = 21
// let b = 21
// if(a>b){
//     console.log(a);
// }else if (b>a) {
//     console.log(b);
// } else if (a===b) {
//     console.log('Ohuuu');
// } else {
//     console.log('Nan');
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = +prompt() || 'default'
// console.log(x);