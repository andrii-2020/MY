// // зяти файл template_2.html та працювати в ньому
// // - Напишіть код, який :
// // -- змінює колір тексту елемнту з ід main_header на будь-який інший
// // -- робить шириниу елементу ul 400 пікселів

 let header = document.getElementById ('main_header');
 header.style.color = ('#0066ff');
 header.style.width = ('400px');
 header.style.backgroundColor = ('#AEE8E4'); 
 header.innerText = ' ))))))))))))' 

// // -- робить шириниу всіх елементів з класом linkList шириною 50%
//  let list = document.getElementsByTagName ('ul')[0];
//  list.style.width = ('400px');
//  console.log(list)

// // //-- отримує текст який зберігається в елементі з класом listElement2
//  let listElement = document.querySelector (".listElement2");
// console.log(listElement.textContent);

// // // -- отримує всі елементи li та змінює ім колір фону на сірий
 let lis = document.getElementsByTagName ('li');
 for (let i = 0; i < lis.length; i++)(
     lis[i].style.backgroundColor = 'silver'
)


// // отримує всі елементи 'a' та додає їм клас anchor
//  let aa = document.getElementsByTagName ('a');
//  for (let i = 0; i < aa.length; i++)(
//      aa[i].classList.add('eee')
//  )
//  console.log(aa);

// //  отримує  всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// //   змінює йому розмір тексту на 40 пікселів

 let alll = document.getElementsByTagName ('a');

 for (let a = 0; a < alll.length; a){
     let eee = alll[a++];
     if(eee.textContent === 'link3') eee.style.fontSize = '40px'
 }
   
// // -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

//  let a1 = document.getElementsByTagName ('a');
//  for (let a = 0; a < a1.length; a++){
//      let a2 = a1[a]
//      a2.classList.add(`element_${a2.textContent}`);
//  }

// // -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//  let h = prompt('Фон');
// let e = document.getElementsByClassName ('sub-header');
//  for (let a = 0; a < e.length; a++){
//      let as = e[a]
//      as.style.background = h;
  
//  }
 



// -- отримує всі елементи 'sub-header' та змінює колір тексту у
//  видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()                    
// let alll = document.getElementsByClassName ('sub-header');
// let g = prompt()
//  for (let a = 0; a < alll.length; a){
//      let eee = alll[a++];
//      if(eee.textContent = 'content 2 segment') ;
//      eee.style.backgroundColor = g;
//  }

// отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let text = document.getElementsByClassName ('content_1');
// let p =prompt('НАЖМИ НА БУКВИ')
// for (let a = 0; a < text.length; a){
//          let w = text[a++]
//          w.innerText  = p;
//      }

// -- отримати елементи p та змінити їм paddin на довільне значення
// let p = document.getElementsByTagName ('p');
// for (let a = 0; a < p.length; a++){
//              let w = p[a];
//              w.style.padding = ('55px');
//          }

// console.log(p)


// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let l = document.getElementsByClassName ('text2')
// for (let a = 0; a < l.length; a++){
//                  let w = l[a];
//                  w.innerText = '// -- отримати елементи з класом text2 та змінити їм текст на довільне значення'
//              }


