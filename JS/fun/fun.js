// - створити функцію яка виводить масив
// - створити функцію яка заповнює масив рандомними числами та
//  виводить його. Для виведення використати попвередню функцію.

// function rand(a) {

//     a = Math.floor(Math.random() * 100);
//     console.log(a);
// }

// rand([]);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// let sum = [40, 100, 1,];
// sum.sort(function (a, b) {
//     return a - b                  ////повертає найбільше.
// });
// console.log(sum);

// - створити функцію яка приймає будь-яку кількість чисел, 
//повертає найменьше, 
//а виводить найбільше
// function eee() {
//     let min = arguments[0];
//     let max = arguments[0];

//     for (let i = 0; i < arguments.length; i++) {

//         if (arguments[i] < min) {
//             min = arguments[i]

//         }

//         if (arguments[i] > max) {
//             max = arguments[i]
//         }

//     }
//     console.log(min);

//     console.log(max);
//     return min
// }

// eee(22, 33, 444, 66, 2);

// створити функцію 
//яка виводить масив

// function mmmm(){
// let a = [555555];
// console.log(a);
// }
// mmmm()

// - створити функцію яка повертає найменьше число з масиву   max
// Array.prototype.min = function(){
//     let min = parseInt(this[this.length-1]), el;
//     for(let i=this.length-2; i>=0; i--){
//         el = parseInt(this[i]);
//         if(el<min){
//             min = el;
//         }
//     }

//     return min;
// };
// let array = [15,32,57,87,100];
// ;
// console.log(array.min());




// - створити функцію яка приймає масив чисел
// та складає значення елементів масиву 
//та повертає його.
// let qqq = [1, 2, 3, 10];
// function arraySum(array){
//     let sum = 0;
// for(let i = 0; i < array.length; i++){
//     sum += array[i];
//     }
// console.log(sum);
// return sum
// }
// arraySum(qqq);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function qw(a) {

//     let su = 0;
//     for (let i = 0; i < a.length; i++) {

//         su += a[i];
//     }
//     let res = su / a.length;
//     console.log(res);

// }
// qw([2, 57, 87, 100, 5])

// - Створити функцію 
// яка приймає масив будь яких объектів,
//  та повертає значення кількості об єктів в масиві

// let a = [ {ab: 22,}, 'rrrrr', 'yyy', 44]
// function ar() {
//     console.log(Object.length);
//     console.log(a.length);

//     return length;

// } ar()

// Створити функцію яка приймає масив будь яких объектів,
//  та повертає загальн кількість полів в них

// let arr = ['tttt', 'tttt', 'tyyy'];

// arr = arr.map(function (value, index, ) {

//     return function () {

//         console.log(index + ': ' + value);

//     };

// });
// arr.forEach(function (fn) {

//     fn();

// });
// - створити функцію  яка скаладає 
// значення елементів з однаковими індексами  та повертає новий результуючий масив.

// let qqq = [1, 2, 3, 4];
// function del() {
//     www = []
//     let index = qqq.indexOf(1);
//     if (index > -1) {
//         qqq.splice(index,);
//     }
//     qqq.push(2, 3, 4, 5)
//     return www.push(3,5,7,9)
// }
// del()
// console.log(qqq);
// console.log(www);

// *** приймає масив та число "i",
//  та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function iiii(ar, i) {

//     const q = ar[i];
//     ar[i] = ar[i + 1]
//     ar[i +1] = q;
//     console.log(ar);
// }


// iiii([33, 55, 6, 7, 4, 3, 5,], 2)

// - Додає в боді блок з текстом "Hello owu"
// function bod(ell, txt) {

//     const h = document.createElement('div');
//     h.innerHTML = 'Hello owu';
//     document.body.appendChild(h);
//     // Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//     let ells = document.createElement('ell');
//     ells.innerText = `txt`;
//     document.body.appendChild(ells)




// }
// bod()




// // - приймає масив автомобілів (можна взяти з попередніх дз ),
// // та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в 
// // елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// // - приймає масив автомобілів (можна взяти з попередніх дз ),
// // та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// // Для кожного автомобіля створити свій блок, та додати його в 
// // елемент, індентифікатор якого ви отримали.
// // Для кожної властивості створити всередені блока автомоблія свій блок
const car = [
    {
        c: 'МАШИНА',
        name: 'ww',
        door: 5,
        kola: 4

    },
    {
        c: 'МАШИНА',
        name: 'peugo',
        door: 5,
        kola: 4,
        transmission: 'automatic'
    },
    {
        c: 'МАШИНА',
        name: 'lendrower',
        door: 5,
        kola: 4

    },
    {
        c: 'МАШИНА',
        name: 'ford',
        door: 5,
        kola: 4

    }
]
// console.log(car);
function w(car) {
    for (let i = 0; i < car.length; i++) {
        const cardiv = document.createElement('div');
        const eee = car[i];
        let a = document.createElement('h1');
        cardiv.style.background = 'silver'
        cardiv.style.margin = '50px';
        cardiv.innerHTML = `  name -- ${eee.name} <br> 
    door --- ${eee.door} <br> kola -- ${eee.kola}<br> ---${eee.transmission}`;
        cardiv.classList.add(eee.name)
        a.innerText = `marka---${eee.c}`
        document.body.appendChild(a);
        document.body.appendChild(cardiv);

    }
} w(car)


// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:


let obj1 = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },]
let obj2 = [
    { user_id: 1, country: 'USA', city: 'Portland' },
    { user_id: 2, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 3, country: 'Poland', city: 'Wroclaw' },
    { user_id: 4, country: 'Poland', city: 'Krakow' }];

 
function us(obj1, qqq, ) {

    function ii(obj2, rr,) {

        for (let users of obj2) {
            const id = document.createElement('li');
            id.innerText = `----${users.user_id}---${users.country}--${users.city}---`
            id.style.margin = '50px';
            document.body.appendChild(id);
            let we = document.getElementById(rr);
            we.appendChild(id);
            
        }
        
  
    }
    ii(obj2, 'ttt');
   

    for (const user of obj1) {
        let div = document.createElement('div');
        div.style.margin = '50px';
        div.innerText = user.id + '---' + user.name + '--' + user.age + '--' + user.status;
        let ell = document.getElementById(qqq);
        ell.appendChild(div);

    }
   

}   

us(obj1, 'tt1');



 