// создать массив с 20 числами......
// -- при помощи метода sort и колбека  отсортировать массив....
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.....
// -- при помощи filter получить числа кратные 3....
// -- при помощи filter получить числа кратные 10....
// -- перебрать (проитерировать) массив при помощи foreach()....
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут 
//в 3 раза больше....

// let array =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];



// array.sort((a, b ) => {

//     console.log(b);
//     console.log(a);
//     console.log('---------------');

//     return b - a       //  '+'

// })

//  console.log(array);
//--------------------------------
// let fil = array.filter((array) => {
//     return array % 10 === 0 /// % 3 === 0 _**_ получить числа кратные 3
// })

// console.log(fil);
//----------------------------------
// array.forEach( value  => {
//     console.log(value);
// })
//------------------------------------
// let a = array.map(value => {
//     if (value % 1 === 0 ) {
//         return value + 3
//     } 
// });
// console.log(a);
//  console.log(array);
//   document.write(`<h2>${a}`);
//     document.write(`<h2>${array}`);
//-------------------------------------------

// - создать массив со словами на 15-20 элементов.....
// -- отсортировать его по алфавиту в восходящем порядке.....
// -- отсортировать его по алфавиту  в нисходящем порядке.....
// -- отфильтровать слова длиной менее 4х символов....
// -- перебрать массив при помощи map() .....
// и получить новый массив в котором все значения будут со знаком "!" в конце

//  let str = [
//     'создать',
//     'массив', 
//     'со', 
//     'словами', 
//     'отсортировать',
//     'его',
//     'по' ,
//     'алавиту',
//     'восходящем' ,
//     'порядке',
//     'отфильтровать',
//     'слова',
//     'длиной',
//     'мен'
//         ]
// str.sort( (a,b)=>{
//     if (a < b ){
//         return 1
//     }
//     return -1

// })
// console.log(str);
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// let r = str.filter((value) =>{
//     if (value.length < 4){

//         return value
//     }
//     return 0

// })

// console.log(r);
//*-*-*-*-*-*-*-*-*-*-*-*

// let a = str.map(function (a){
//     return a
// })
// console.log(a);
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// и получить новый массив в котором все значения будут со знаком "!" в конце
// let a = str.map((index ) => {
//     return index + '!!!!!!!'
// });

// console.log(a);
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let users = [{ name: 'vasya', age: 31, status: false },
//             { name: 'petya', age: 30, status: true },
//             { name: 'kolya', age: 29, status: true },
//             { name: 'olya', age: 28, status: false },
//             { name: 'max', age: 30, status: true },
//             { name: 'anya', age: 31, status: false },
//             { name: 'oleg', age: 28, status: false },
//             { name: 'andrey', age: 29, status: true },
//             { name: 'masha', age: 30, status: true },
//             { name: 'olya', age: 31, status: false },
//             { name: 'max', age: 31, status: true }
//             ];


//- відсортувати його за  віком (зростання , а потім окремо спадання)
// * -* -* -* -* -* -* -* -* -* -* -* -* -* -*
//     let u = users.sort((a, b) => {
//         if (a.age < b.age) {
//             return 1
//         }
//         return -1
//     })
// console.log(u);

//     * -* -* -* -* -* -* -* -* -* -* -* -* -* -*
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let r = users.sort((a, b) =>{
//     if (a.name.length < b.name.length >= 0){   ////// <=
//         return -1
//     }

// })
//         console.log(r);

//     * -* -* -* -* -* -* -* -* -* -* -* -* -* -*
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
//(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив 
//(первинний масив залишиться без змін)
// let u = []
// users.map((value, index) => {

//         u.push({value, id: index + 1})

// })

// console.log(u);
// console.log(users);

//     * -* -* -* -* -* -* -* -* -* -* -* -* -* -*
// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calculator(a, b , callback) {
//     console.log(callback(a ,b));
// }
// calculator(100, 200, function (a, b){

// return a + b;

// });

// calculator ( 400, 100, function (a, b){

//     return a - b + a

// });


// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculator(a, b, c,callback) {
//     console.log(callback(a, b, c));
// }
// calculator(6, 3, 2, function (a, b, c){

// return a - b - c;

// });

// calculator ( 1, 2, 3,  function (a, b, c){

//     return a + b  + c

// });

//     * -* -* -* -* -* -* -* -* -* -* -* -* -* -*

// let cars = [
//     { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
//     { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250 },
//     { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
//     { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
//     { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
//     { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
//     { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
//     { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
//     { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
// ];
// Відфільтрувати масив за наступними крітеріями :

// - двигун більше 3х літрів

// let res = cars.filter(itt => itt.volume >= 3)
// console.log(res);

// - двигун = 2л

// let res = cars.filter(itt => itt.volume === 2)
// console.log(res);

// - виробник мерс

// let res = cars.filter(itt => itt.producer === 'mercedes' )
// console.log(res);

// // - двигун більше 3х літрів + виробник мерседес

// let res = cars.filter(itt => itt.producer === 'mercedes' && itt.volume >= 3 )
// console.log(res);

// - двигун більше 3х літрів + виробник субару

// let res = cars.filter(itt => itt.producer === 'subaru' && itt.volume >= 3 )
// console.log(res);

// - сили більше ніж 300

// let res = cars.filter(itt => itt.power >= 300)
// console.log(res);

// - сили більше ніж 300 + виробник субару

// let res = cars.filter(itt => itt.producer === 'subaru' && itt.power > 300 )
// console.log(res);

// - мотор серіі ej

// let res = cars.filter(itt => itt.engine.startsWith('ej'))
// console.log(res);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let res = cars.filter(itt => itt.producer === 'subaru' && itt.power > 300 && itt.engine.startsWith('ej'))
// console.log(res);

// - двигун меньше 3х літрів + виробник мерседес

// let res = cars.filter(itt => itt.producer === 'mercedes' && itt.volume >= 3 )
// console.log(res);

// - двигун більше 2л + сили більше 250

// let res = cars.filter(itt => itt.power > 250 && itt.volume >= 2 )
// console.log(res);

// - сили більше 250  + виробник бмв

// let res = cars.filter(itt => itt.producer === 'bmw' && itt.power >= 250 )
// console.log(res);


let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];
    // -- отсортировать его по id пользователей
     // -- отсортировать его по id пользователей в обратном опрядке
    // let u = usersWithAddress.sort((a, b) => {
    //             if (a.id < b.id) {
    //                 return 1
    //             }
    //            return -1
    //         })
    //     console.log(u);
   
    // -- отсортировать его по возрасту пользователей
    // -- отсортировать его по возрасту пользователей в обратном порядке
//     let u = usersWithAddress.sort((a, b) => {
//         if (a.age < b.age) {
//             return -1
//         }
//        return 1
//     })
// console.log(u);
    // -- отсортировать его по имени пользователей
    // -- отсортировать его по имени пользователей в обратном порядке
//     let u = usersWithAddress.sort((a, b) => {
//         if (a.name < b.name) {
//             return -1
//         }
//        return 1
//     })
// console.log(u);
    // -- отсортировать его по названию улицы  в алфавитном порядке
//     let u = usersWithAddress.sort((a, b) => {
//         if (Object(a.address.street)  < Object(b.address.street) {
//             return -1
//         }
//        return 1
//     })
// console.log(u);

    // -- отсортировать его по номеру дома по возрастанию
    // let u = usersWithAddress.sort((a, b) => {
    //             if (a.address.number < b.address.number) {
    //                 return -1
    //             }
    //            return 1
    //         })
    //     console.log(u);

    // -- отфильтровать (оставить) тех кто младше 30
        // let u = usersWithAddress.filter(itt => itt.age <=30  )
        // console.log(u);

    // -- отфильтровать (оставить) тех у кого отрицательный статус
    // let u = usersWithAddress.filter(itt => itt.status === false)
    // console.log(u);

    // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
    // let u = usersWithAddress.filter(itt => itt.status === false && itt.age <= 30 )
    // console.log(u);

    // -- отфильтровать (оставить) тех у кого номер дома четный
    // let result = usersWithAddress.filter(function(elem) {
    //     return elem.address.number % 2 == 0;
    // });
    // console.log(result);


//     Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, 
//то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

