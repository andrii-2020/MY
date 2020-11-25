// // -- створити об'єкт (не меньше 5ти властивостей) який описує
// let obje = {
//     name: 'собаку', 
//     age: 30, 
//     name: 'людину', 
//     age: 21,
//     name: 'автомобіль'
//      ,age: 12,
//     name: 'квартиру', 
//     age: 55,
//     name: 'книгу', 
//     age: 100,
// };

// // Створити масив та вивести його в консоль:
//  let mass = [
// ['dogs', 'vasya'] ,
// ['dogs', 'wwww'],
//  ['dogs', `wxxx`],
//  ['dogs', 'vaaaa'],
//  ['dogs', 'xxx', ],
//  ['люди', 'vasya', 'petya', 'kolya', 'olya', 'max' ],
//  ['автомобілі', 'bmw', 'micik', 'peugoet', 'vaz', 'gaz' ]
//  ]
//  console.log(mass);



// створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей 
// обов'язково повинна бути об'єктом,ще одна - масивом
// let obe = [
//     {a:'будинок', b: 'водій'},
//     {c: 'іграшку',},
//     ['сумка','стіл']
// ]
//     console.log(obe);


// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
// console.log(users)
// console.log(users [7].status);
// console.log(users [10].status);
// console.log(users [9].name);
// console.log(users [4].name);
// console.log(users [6].age);
// console.log(users [9].age);
// console.log(users[4].name, users[4].age);
// console.log(users[5].name, users[5].status);

// -- Напишіть код,  який за допомоги document.getElementById
//  або document.getElementsByClassName або document.getElementsByTagName 
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний

let contte = document.getElementById ('content');
contte.style.backgroundColor = 'red'
contte.style.color = '#AEE8E4'
contte.innerText = 'ПРИВІТ ЛЮДИ *-*)';
contte.style.fontSize = '55px'
contte.style.textAlign = 'center'
// console.log(contte);


let ress = document.getElementById ('rules');
ress.style.color = '#FFE9A0'
ress.style.backgroundColor = 'red'
ress.style.textAlign = 'center'
ress.innerText = 'Я ТЕКСТ....';
ress.style.fontSize = '55px';
// console.log(rules);

let fc = document.getElementsByTagName  ('ul');
fc[0].style.color = 'red'
fc[0].style.fontSize = '25px'
console.log(fc);

