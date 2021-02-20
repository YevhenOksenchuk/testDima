// // // class Circle {
// // //   constructor(radius) {
// // //     this.radius = radius;
// // //   }
// // //
// // //   get radiusSize() {
// // //     return this.radius
// // //   }
// // //
// // //   set radiusSize(size) {
// // //     this.radius = size;
// // //   }
// // //
// // //   get diameter() {
// // //     return this.radius * 2
// // //   }
// // //
// // //   getSquare() {
// // //     return +(Math.PI * (this.radius ** 2)).toFixed(2)
// // //   }
// // //
// // //   borderLength() {
// // //     return +(2 * Math.PI * this.radius).toFixed(2)
// // //   }
// // // }
// // //
// // //
// // // const circle = new Circle(20)
// // //
// // // circle.radiusSize = 15
// // // console.log(circle.radiusSize);
// // // console.log(circle.diameter);
// // // console.log(circle.getSquare())
// // // console.log(circle.borderLength())
// //
// // class HtmlElement {
// //   constructor(element, isClosed, content, attributes, styles, insertElements) {
// //     this.element = element;
// //     this.isClosed = isClosed;
// //     this.content = content;
// //     this.attributes = attributes;
// //     this.styles = styles;
// //     this.insertElements = insertElements;
// //   }
// //
// //   setAttributes() {
// //     for (let prop in this.attributes) {
// //       if (this.attributes.hasOwnProperty(prop)) {
// //         this.element.setAttribute(prop, this.attributes[prop]);
// //       }
// //     }
// //   }
// //
// //   setStyles() {
// //     this.element.style.cssText = this.styles.join(';')
// //   }
// //
// //   appendElement(el) {
// //     this.element.append(el)
// //   }
// //
// //   prependElement(el) {
// //     this.element.prepend(el)
// //   }
// //
// //   getHtml() {
// //     return `${this.element}`
// //   }
// // }
// //
//
//
// // const div = document.createElement('div')
// //
// // const div2 = document.createElement('div')
// // div2.textContent = 'div2'
// // const div3 = document.createElement('div')
// // div3.textContent = 'div3'
// //
// // const res = new HtmlElement(div, true, 'lorem ipsum', {
// //     id: 'wrapper',
// //     'class': 'wrapper',
// //     'data-check': 'test'
// //   },
// //   [
// //    'display: flex',
// //    'color: #000000',
// //   ],
// //   [
// //     div2, div3
// //   ])
// //
// // res.setAttributes()
// // res.setStyles()
// // res.appendElement(res.insertElements[0])
// // res.prependElement(res.insertElements[1])
// // console.log(res)
//
//
// class CssClass {
//   constructor(className, styles) {
//     this.className = className;
//     this.styles = styles;
//   }
//
//   addNewStyle(style) {
//     this.styles.push(style);
//   }
//
//   deleteStyle(style) {
//     this.styles = this.styles.filter((el) => el.indexOf(style) === -1);
//   }
//
//   getCss() {
//     return `.${this.className}{ ${this.styles.join(';')} }`;
//   }
// }
//
// const test = new CssClass('test', ['display: flex', 'color: #000000'])
// test.addNewStyle('font-size: 35px')
// test.deleteStyle('color')
// console.log(test)
// console.log(test.getCss())
//
// class HtmlBlock {
//   constructor(styleCollection, htmlElement) {
//     this.styleCollection = styleCollection;
//     this.htmlElement = htmlElement;
//   }
//
//   getCode() {
//     return `
//       <style>${this.styleCollection}</style>
//       ${this.htmlElement}
//     `
//   }
// }
//
// const block = new HtmlBlock(test.getCss(), '123')

// 1. Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// // количество других знаков.
//
//
// function counter(str) {
//
//   let numbers = 0;
//   let letters = 0;
//   let others = 0;
//   const arrSymbol = ['<>', '@', '!', '#', '$', '%', '^', '&', '*', '()', '_', '+', '[] ', '{}', '?', ':', ';', '|', ',', '-', '='];
//   const arrSymbo2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//   const arrSymbolLetters = ['a', 'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
//
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < arrSymbo2.length; j++) {
//       if (str[i] === arrSymbo2[j]) {
//         numbers++;
//       }
//     }
//   }
//   ;
//
//   for (let value of str) {
//     for (let element of arrSymbol) {
//       if (value === element) {
//         others++
//       }
//     }
//   }
//
//   for (let value of str) {
//     for (let element of arrSymbolLetters) {
//       if (value === element) {
//         letters = letters + 1;
//       }
//     }
//   }
//
//   return {
//     numbers,
//     others,
//     letters
//   };
//
// }
//
// let result = counter('aas!@@df1234');
// console.log(result);
//
//
// // 2. Написать функцию, которая принимает двузначное число
// // и возвращает его в текстовом виде.
// // Например: 35 – тридцать пять, 89 – восемьдесят девять,
// // 12 – двенадцать.
// function textNumber(number) {
//   let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//   let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//   let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//   if (number > 0 && number <= 9) {
//     return first[number - 1];
//   }
//   if (number >= 10 && number <= 20) {
//     return second[number - 10];
//   }
//   if (number > 20 && number <= 99) {
//     let str = ${number};
//     str = str.split('');
//     let firstNumber = str[0];
//     let secondNumber = str[1];
//
//     return ${third[firstNumber - 2]} ${first[secondNumber - 1]};
//   }
// }
//
// console.log((textNumber(7)));
// console.log((textNumber(20)));
// console.log((textNumber(58)));
//
//
// //   3. аписать функцию, которая заменяет в полученной строке
// // большие буквы на маленькНие, маленькие – на большие, а
// // цифры – на знак нижнего подчеркивания.
//
//
// function replace(str) {
//
//   let line = str.replaceAll('b', 'B').replaceAll('A', 'a').replaceAll('1', '_').split(' ');
//
//   return line;
// }
//
// console.log(replace('bA1'));
//
// // 4. Написать функцию, которая преобразует названия css-
// // стилей с дефисом в название в СamelСase стиле: font-size
// // в fontSize, background-color в backgroundColor, textalign
// // в textAlign.
//
// function camelCase(input) {
//   return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
//     return group1.toUpperCase();
//   });
//   return input.split('-').map((el, i) => i > 0 ? el[0].toUpperCase() + el.slice(1) ? el)
// };
//
// let a = camelCase('font-size');
// console.log(a);
//
// // 5. Написать функцию, которая принимает словосочетание
// // и превращает его в аббревиатуру.
// // Например: cascading style sheets в CSS, объектно-
// // ориентированное программирование в ООП.
//
//
// function acronym(words) {
//   if (!words) {
//     return '';
//   }
//
//   var first_letter = function (x) {
//     if (x) {
//       return x[0];
//     } else {
//       return '';
//     }
//   };
//
//   return words.split(' ').map(first_letter).join('');
// }
//
// let b = acronym('Cascading Style Sheet');
// console.log(b);
//



// function f(...arg) {
//   return arg.join('')
// // }
//
// function f(arg) {
//  const arr = arg.split(' ');
//
//  switch (arr[1]) {
//    case '+':
//      return +arr[0] + +arr[2]
//  }
// }
//
//
// f('100 * 100')
//
// function f1(str) {
//   const protocol = str.slice(0, str.indexOf(':'))
//   const test = str.slice(str.indexOf('/')+2)
//   const domen = test.slice(0, test.indexOf('/'))
//   const path = test.slice(test.indexOf('/')+1)
// }

function nnn(str, sep) {
  let arr =[]
  let first = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sep) {
      arr.push(str.slice(first, i))
      first = i + 1
    }
  }

  arr.push(str.slice(first))
  console.log(arr)
}

function nnn(str, ...sep) {
  let ind = null
  do{
    ind = str.indexOf('%')
    str.splice()

    if (ind === -1) {
      return
    }
  }while (ind)
    }
nnn('22/22/2222/213', '/')


