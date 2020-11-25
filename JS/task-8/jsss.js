// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const tearea = document.getElementById('area');
// tearea.value = localStorage.getItem('tearea');

// tearea.oninput = (ev)=>{
// localStorage.setItem('tearea', ev.target.value);
// }


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// const form0 = document.getElementById('form0');

// function save(t) {
//     Stor(t)

// }

// function Stor(teg) {
//     for (let i = 0; i < teg.length; i++) {
//         const tagelement = teg[i];
//         if (tagelement.type === 'checkbox' || tagelement.type === 'radio');
//         tagelement.checked
//         // ? tagelement.value = true
//         // : tagelement.value = false
//         localStorage.setItem(tagelement.id, tagelement.value);
//     }

// }

// function data(teg) {
//     for (let o = 0; o < localStorage.length; o++) {
//         if (localStorage.hasOwnProperty(teg.children[o].id)) {
//             teg.children[o].value = localStorage.getItem(teg.children[o].id);
//             if (teg.children[o].value === 'true') {
//                 teg.children[o].setAttribute('checked', 'checked');
//             }
//         }

//     }

// }
// data(form0)





// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
//  затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории 
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const text1 = document.querySelector('#text1');
const left = document.getElementById('left');
const right = document.getElementById('right');
const save = document.getElementById('save');

save.onclick = () => {
    localStorage.setItem(localStorage.length + 1, text1.value);
    console.log('ww');
}

left.onclick = () => {
    
    left.style.background = 'silver';
    let i;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === text1.value) {
                i = key;
            }
        }
    }
    if (i === '1') {
        left.style.background = 'red'
        return;
    }
    text1.value = localStorage.getItem(i -1)
}

right.onclick = () => {
    right.style.background = 'silver';
    let i;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === text1.value) {
                i = key;
            }
        }
    }
    if (i === localStorage.length.toString()) {
        right.style.background = 'red'
        return;
    }
    text1.value = localStorage.getItem(+i +1)
}






// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, 
//в которой есть
//  все необходимые инпуты для редактирования, которые уже заполнены данными объекта



