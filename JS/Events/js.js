// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, ч
//тобы при клике на кнопку исчезал элемент с id="text".

// let txt = document.getElementById('text');

// let btn = document.getElementById('button')

// btn.onclick = function () {
//    txt.style.display = 'none'
// }
//--------------------------------------------------------------------------------------------------
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let btns = document.getElementById('buttons');

// btns.onclick = function(e){

//     btns.style.display = 'none'
// }
//--------------------------------------------------------------------------------------------------
 

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, 
//та повідомити про це користувача

// let bt = document.getElementById('butto');

// bt.onclick = () => {
//     let inpu = document.getElementById('input');
//       let val = inpu.value;
//         if(val <= 18){
//             document.write('ВАМ НЕМА 18!!!!!')

//         }
//             if (val >= 18){
//                 alert('УРА ВАМ БІЛШЕ ЯК 18+++')
//                 bt.style.background = 'silver'
//             }
// }
//--------------------------------------------------------------------------------------------------

// - Создайте меню, которое раскрывается/сворачивается при клике
// let bt = document.getElementById('bta');
// let div = document.getElementById('div');

// bt.onclick = function () {

//  div.style.display = 'block'
//  div.innerText = '-_- Hellow -_- Hellow -_- Hellow -_- Hellow -_- Hellow -_- Hellow -_- Hellow -_- Hellow -_- Hellow -_- '

// }
//--------------------------------------------------------------------------------------------------

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let arr = { title: 'lorem', body: 'body lorem ipsum dolo sit ameti' }

// let btns = document.getElementById('btns');

// let com = document.getElementById('com');
// btns.onclick = function () {
//     com.innerText = " ";
//     console.log('ddd');
//     if (btns.onclick) {
//         let div = document.createElement('div');
//         div.innerText = JSON.stringify(arr);
//         com.appendChild(div);
//     } 

// }


// let ar1 = { comm: 'lorem', html: 'body lorem ipsum dolo sit ameti' }
// let b1 = document.getElementById('bnt');

// let dv = document.getElementById('dov');

// b1.onclick = function () {
//     dv.innerText = ' '
//    if(b1.onclick){
//        let d = document.createElement('p');
//        d.innerText = JSON.stringify(ar1);
//        dv.appendChild(d);
//    }

// }

//--------------------------------------------------------------------------------------------------

// - створити 2 форми  по 2 інпути в кожній. 
//ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let form1 = document.forms.Form1;

// form1.Btn.onclick = () => {
//     let txt = form1.som.value;
//     let txt1 = form1.somm.value;

//     const obj = {
//         txt,
//         txt1
//     }
//     console.log(obj);
// }

// let bt2 = document.getElementById('bt2');

// bt2.onclick = () => {
//     let login = form2.some.value;
//     let pasword = JSON.parse(form2.somo.value);
//     const obje = {
//         login,
//         pasword
//     }

//     console.log(obje);
//     if (bt2.onclick)
//         alert('ВіТАЮ ВИ ЗА РЕГАЛИСЬ')

// }
//--------------------------------------------------------------------------------------------------

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.



// let butn = document.getElementById("butn")
// let elem = document.getElementById('elem');
// const s = document.getElementById('slova').value;
// butn.onclick = () => {
//     let w = document.getElementById('in').value;
//     let e = document.getElementById('inp').value;
//     const text = document.getElementById('slova').value;
//     let a = JSON.parse(w);
//     const b = JSON.parse(e);

//     if (butn.onclick) {

//         function tableT(param, a, b,) {

//             let table = document.createElement('table');

//             for (let i = 0; i < a; i++) {
//                 let tr = document.createElement('tr');

//                 for (let j = 0; j < b; j++) {
//                     let td = document.createElement('td');
//                     tr.appendChild(td).textContent = text;
//                     table.appendChild(tr);

//                 }

//             }

//             param.appendChild(table);

//         }
//         tableT(elem, a, b);
//     }

// }

//--------------------------------------------------------------------------------------------------

// (Додатковачастина для завдання)
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let i = 1;
// for (let li of carousel.querySelectorAll('li')) {
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//     i++;
// }

// let width = 130;
// let count = 1;

// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');

// let position = 0;

// carousel.querySelector('.prev').onclick = function () {
//     position += width * count;
//     position = Math.min(position, 0)
//     list.style.marginLeft = position + 'px';
// };

// carousel.querySelector('.next').onclick = function () {
//     position -= width * count;
//     position = Math.max(position, -width * (listElems.length - count));
//     list.style.marginLeft = position + 'px';
// };

//--------------------------------------------------------------------------------------------------

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
let arr = ['ghg','hg','gh', 'koko']

const inp = document.createElement('input');
const btn = document.createElement('button');
btn.innerText = 'OK';

btn.onclick = () => {
    btn_arr = inp.value;
    arr.includes(btn_arr.toLowerCase()) ? alert('STOP') : console.log(inp.value);
}

document.body.appendChild(inp);
document.body.appendChild(btn);

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку



// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

