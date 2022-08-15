// let index = 0;
// const arr = [1, 2, 3, 4, 5, 6];
// const obj = { baar: 11231312 };
// let foo = 'baar';
// let baar = 'baaz';

// // arr = ''; // n pode

// arr.push(7); // pode

// // obj = ''; n pode

// obj.baar++;

// // desvio condicional

// if (true) {
//   foo = 'nope'
// }

// if (false) {
//   baar = 'yep'
// } else {
//   baar = 1
// }

// switch (index) {
//   case index === 1:
//     console.log('first')
//     break;

//   case index < 1:
//     console.log('not first')
//     break;
//   default:
//     break;
// }

// // laços de repetição básicos

// for (index; index < array.length; index++) {
//   foo = arr[index];

//   if (foo > 4) break;
// }

// do {
//   baar = baar + 1
//   index++;
// } while (index <= 10);

// while (index < 5) {
//   foo += index;
//   index++;
// }

// // const fn = (arg1, arg2, arg3) => {
// //   const a = arg1 + arg3;
// //   const b = arg2 + arg1;
// //   const c = arg1 + arg2;

// //   return a + b + (c * c);
// // }

// function fn(arg1 = 1, arg2 = 3, arg3 = 5) {
//   const a = arg1 + arg3;//4
//   const b = arg2 + arg3;//5
//   const c = arg1 + arg2;//3

//   return a + b + (c * c);
// }

// fn(1, 2, 3); // qual o valor retornado? 18
// fn(1, undefined, 3); // qual o valor retornado?
// fn(1, 2); // qual o valor retornado?
// fn('a', 'b', 3); // qual o valor retornado?


// qual o valor de foo e de baar?

// lembrando que

// valores primários
// 1,2,3,4,5,6... n, como numeral
// qualquer string... 'adasd' 'a' ''
// Object
// {}, como objeto literal
// undefined
// null

// truthy and falsy

// truthy é tudo aquilo que o JS avalia como "verdadeiro" como valor lógico
// 'asdas' string que n sejam vazias
// numerais mairoes que 0
// true, o booleano

// falsy é tudo aquilo que o JS avalia como "falso" como valor lógico
// false, o booleano
// '' string vazia
// 0, o numeral
// undefined
// null

const rodaTabuada = () => {
  const target = document.querySelector('.target').value;
  let inicio = document.querySelector('.inicio').value;
  const fim = document.querySelector('.fim').value;
  const container = document.querySelector('.container');


  for (inicio; inicio <= fim; inicio++) {
    const newElement = document.createElement('li');
    const result = Number(target) * inicio;

    newElement.textContent = `${target} * ${inicio} = ` + String(result);

    container.appendChild(newElement);
  }
}

const botao = document.querySelector('.botao');

botao.addEventListener('click', rodaTabuada);

// (function foo() {
  
// })() // IIFE