// -  Створити функцію
// конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

// function Tag(div, h1, a, span, arr) {
//     this.div = div;
//     this.a = a;
//     this.arr = [22,55];
//     this.h1 = h1;
//     this.span = span;
//
//     this.ops = function () {
//         document.write(`${this.div} <hr> ${this.h1} <hr> ${this.a} <hr> ${this.span}`)
//
//     }
// }
// let s = new Tag('Элемент является блочным элементом и предназначен для выделения',
//                     `HTML предлагает шесть заголовков разного уровня, которые показывают
//                           относительную важность секции, расположенной после заголовка.`,
//                         'Тег является одним из важных ' +
//                         'элементов HTML и предназначен для создания ссылок.',
//                          'Тег предназначен для определения строчных элементов документа');
// console.log(s);
// s.ops()
//

// class Tog {
//     constructor(divElement, divopt, attr) {
//         this.divElement = divElement;
//         this.divopt = divopt;
//         this.attr = attr;
//     }
//
// }
// let gg = new Tog('div',"Элемент является блочным элементом и предназначен для выделения" , [{name:'dddd', age:54}]
//
//
// )

// console.log(gg);





// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, virobnik, rok, maximumspeed, revdviguna  ) {
//         this.m = model;
//        this.v = virobnik;
//        this.rok = rok;
//        this. max = maximumspeed;
//        this.rev = revdviguna;
//
//
//     }
//
//     drive (){
//         console.log(`їдемо зі швидкістю... максимальна швидкість ${this.max } на годину`)
//         document.write(`їдемо зі швидкістю... максимальна швидкість ${this.max } K/M на годину <hr>`)
//     }
//
//     newSpeed(newSpeed){
//         this.newSpeed = 500;
//         document.write (`максимальна швидкість ${this.newSpeed} <hr>`);
//         console.log(`максимальна швидкість ${this.newSpeed}`)
//     }
//
//     info(){
//         console.log(`Saab Automobile AB (швед. SAAB) — шведская автомобилестроительная компания,
//          выпускавшая легковые автомобили под маркой SAAB. `)
//     }
//
//     newValue(newValue){
//         this.newValue = 2010;
//         document.write(`Rok -new-${this.newValue}`)
//         console.log()
//
//
//     }
//
// }
//             class Kerowca extends Car{
//                 constructor(model, virobnik, rok, maximumspeed, revdviguna) {
//                     super(model, virobnik, rok, maximumspeed, revdviguna)
//                     ;
//                 }
//             }
//
//
//
// let  ca = new Car('saab', 'mc', '2000', '100', '3.0')
//
// let re = new Kerowca('ciroen', 'fr', '2019', '280', '4.0')
//
// console.log(ca);
//
// ca.drive();
// ca.newSpeed(500);
// ca.info();
// ca.newValue();
// console.log(re);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

//
// function Car(marka, color, speed, rik) {
//     this.marka = marka;
//     this.color = color;
//     this.spped = speed;
//     this.rik = rik;
//
//
//     this.drive = function () {
//         document.write(`I am riding ${this.spped}<hr>`)
//
//     }
//     this.info = function () {
//         document.write(`marka-${this.marka}<br>color-${this.color}<br>speed-${this.spped}<br>Rik-${this.rik}   <hr>`)
//     }
//
//     this.upgradeSpeed = function (newSpeed) {
//
//         this.spped = newSpeed
//         document.write('newSpeed' + '--' + newSpeed + `<hr>`)
//
//     }
//
//     this.newValue = function (newValue) {
//         document.write('newValue' + '--' + newValue +`<hr>`)
//
//     }
//         this.addDriver = function  (name, age,) {
//         this.name = name;
//         this.age = age;
//
//             document.write(`водій--${this.name}-Rokiv-${this.age}`)
//
//         }
//
// }
//
// let citroen = new Car('citroen', 'blue', '400-K\M', '2020')
//
// let k = new Car('---','---','----','----',)
//
//
// console.log(citroen);
//
// citroen.drive();
//
// citroen.info();
//
// citroen.upgradeSpeed(500);
//
// citroen.newValue(2050);
//
// citroen.addDriver('Vasia', '99');
//
// console.log(k);



// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Popelushka {
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
//
// }
// let po = new Popelushka('malgosha', 25, 33 )
//
// class Prunc{
//     constructor(name, age, f_size) {
//         this.name = name;
//         this.age = age;
//         this.f_size = f_size;
//     }
//
//
//     findd(array){
//         for(let find of array){
//             if (this.f_size === find.size){
//                 console.log(find);
//             }
//         }
//     }
//
// }
//                 const popelushka0 = new Popelushka('nastia', 50, 31);
//                 const popelushka1 = new Popelushka('lila', 33, 41);
//                 const popelushka2 = new Popelushka('katia', 26, 38);
//                 const popelushka3 = new Popelushka('oksana', 19, 32);
//                 const popelushka4 = new Popelushka('banana', 27, 40);
//                 const popelushka5 = new Popelushka('malgosha', 25, 33);
//
// let prunc = new Prunc('Vasia', 100, 33);
//
// const  array = [popelushka0,
//                  popelushka1,
//                   popelushka2,
//                    popelushka3,
//                     popelushka4,
//                      popelushka5]
//
// prunc.findd(array);
//

// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Popelushka (name, age, size) {
//     this.name = name;
//     this.age = age;
//     this.size = size;
// }

// let popelushk = new Popelushka('malgosha', 25, 30)


//                 function Prunc (name, age, f_size) {
//                     this.name = name;
//                     this.age = age;
//                     this.f_size = f_size;

//                 }
// let popelushka0 = new Popelushka('nastia', 50, 31);
// let popelushka1 = new Popelushka('lila', 33, 41);
// let popelushka2 = new Popelushka('katia', 26, 38);
// let popelushka3 = new Popelushka('oksana', 19, 32);
// let popelushka4 = new Popelushka('banana', 27, 40);
// let popelushka5 = new Popelushka('malgosha', 25, 30);

// let prunc1 = new Prunc('Vasia', 100, 30 );


//                 let array =[popelushka0,
//                             popelushka1,
//                              popelushka2,
//                               popelushka3,
//                                popelushka4,
//                                 popelushka5]



// for (let p of array){
//     if(prunc1.f_size === p.size){
//         console.log(p)
//     }
    
// }




























