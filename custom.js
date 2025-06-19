// const dom = document.getElementsByClassName("search").innerHTML = "It is true or false";
// console.log(dom);

//console.log( "hello" || 42 );
//console.log( "hello" || 0 );
//console.log( "" || 42 );
//console.log( "" || 0 );
// console.log( "hello" || 0 );
// console.log( !"" || !42 );

// function mu (a){
//     document.write("Hello Word");
// }

// mu(a);


// js Basic 8 Hours Start


// console.log("Hello word");

// Js Variable
//console.log("10 + 15");

// console.log("10 + 15 =" + (10 + 15));
// console.log("10 - 15 =" + (10-15));
// console.log("10 * 15 " + (10*15));
// console.log("10 / 15 =" + (10/15));

// let a = 35;
// let b = 40;
// let c = a + b;

// console.log("a + b + c");
// console.log(a + " + " + b + " = " + c);
// console.log(a + " - " + b + " = " + (a-b));
// console.log(a + " * " + b + " = " + (a*b));
// console.log(a + " / " + b + " = " + (a/b));


// DataType 

// let a = 10;
// let b = 10.5;
// let c = "Hello";
// let d = 'Hello';
// let e = true;
// let u
// let n = null;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof u);
// console.log(typeof n);

//operator 
// console.log("Arithmetic operator");
// let a = 20, b = 10;
// // a + b = 30
//  console.log(a + " + " + b + " = " + (a+b));
//  console.log(a + " - " + b + " = " + (a-b));
//  console.log(a + " * " + b + " = " + (a*b));
//  console.log(a + " / " + b + " = " + (a/b));
//  console.log(a + " % " + b + " = " + (a%b));

//  console.log("Assignment Operator");
//  let aso = 10;
//  console.log("a = " + aso);
//  //aso = aso + 5;
//  // a += 15;
//  aso += 5;
//  console.log("a += " + aso);
//  aso -= 5;
//  console.log("a -= " + aso);
//  aso *= 5;
//  console.log("a *= " + aso);
//  aso /= 5;
//  console.log("a /= " + aso);
//  aso %= 4;
//  console.log("a %= " + aso);

//  console.log("Relational operator");
//  let m = 10, n = 15, o = 10;
//  //m > n = false
//  console.log(m + " > "+ n +"=" + (m > n));
//  console.log(m + " >= "+ o +"="+ (m >= o));
//  console.log(m + " < "+ n +"="+ (m < n));
//  console.log(m + " <= "+ n +"="+ (m <= n));
//  console.log(m + " == "+ n +"="+ (m == n));
//  console.log(m + " == "+ o +"="+ (m == o));
//  console.log(m + " != "+ n +"="+ (m != n));
//  console.log(m + " != "+ o +"="+ (m != o));

//  console.log("Logical operator");
//  let k = 50, l = 100;
//  let operation = (k > 20) && (100 < 150);
//  // (k > 20) && (l < 150) = Result
//  console.log("("+ k +" > 20) && (" + l +" < 150) = " + operation );
// /*
// A  B   R
// T  T   T
// T  F   F
// F  T   F
// F  F   F 
// */
//  operation = (k > 20) || (l < 80);
//  // (k > 20) && (l < 150) = Result
//  console.log("("+ k +" > 20) || (" + l +" < 150) = " + operation );
//  /*
// A  B   R
// T  T   T
// T  F   T
// F  T   T
// F  F   F 
// */

//  console.log("operation = " + operation + " and not operation = " + !operation );

//  // 2: 12: 00 Time complete
//  console.log(!operation);

 //Increment
 //let n = 5;
//  n++;
//  ++n;
//  console.log(n++);
//  console.log(n);
//  console.log(++n);
//  console.log(n);

// let m = 10 + ++n;
// console.log(m);
// console.log(n);

// let m = 10 + n++;
// console.log(m);
// console.log(n);

// console.log(n +" " + ++n +" " +n++);
// console.log(n);

// console.log(n +" " + --n +" " + n--);
// console.log(n);

//Js Condition

// const yourAge = 25;
// const yourBrotherAge = 25;
// // const whoIsElder = yourAge > yourBrotherAge;
// // console.log(whoIsElder);

// if (yourAge > yourBrotherAge){
//     console.log("You are elder"); 
// } else if (yourBrotherAge > yourAge) {
//     console.log("Your brother is elder");   
// }else {
//      console.log("You both are same");
     
// }

// // if (yourBrotherAge > yourAge){
// //     console.log("Your brother is elder");
    
// // }

// //JS Switch Statement
// const day = 2; 
 
// switch (day){
//     case 0:
//         console.log("Monday");
//         break;
//     case 1:
//         console.log("Tuesday");
//         break;
//     case 2:
//         console.log("Wednesday");
//         break;
//     case 3:
//         console.log("Thursday");
//         break;
//     case 4:
//         console.log("Friday");
//         break;
//     case 5:
//         console.log("Saturday");
//         break;
//     case 6:
//         console.log("Sunday");
//         break;
// default:
//     throw new Error ('Invalid Days')

        
// }



// //Ternary Operator
//  const theme = 'light';
// // let bgColor = '';

// // if (theme == 'dark'){
// //     bgColor = '#F1F1F1';
// // }else {
// //     bgColor = '#333333'
// // }

// let bgColor = theme == 'dark' ? '#333333' : '#efefef';
// console.log(bgColor);


// loop 
// For ,While, Do While, for In , For Of;
// i = i + 2;
// for (let i = 1; i <= 100; i++){
//     console.log(i);
    
// }    


// let sum = 0;
// for (let i = 1; i <= 5; i++ ){
//     console.log('sum =',sum, 'i =', i, 'sum + i =',sum + i);
//     sum = sum + i; 
// } 
//  console.log('sum =',sum);

//while loop
// let i = 1;
// while(i <= 100){
//     console.log(i);
//     i++;
// }

//3.41.00
// let sum = 0;
// let i = 1;
// while(i <= 5){
//    sum += i;
//     i++;
// } 

// console.log(sum);


//Do While Loop

// const isLoop = false;
// while(isLoop){
//     console.log('This loop will never run');
    
// }

// do {
//     console.log('It will run at list once');
    
// }while(isLoop);

// For in Loop
// const cname = 'Stack Learner';
// //['s','t','a','c','k','L','e','a','r','n','e','r']
// for (let i in cname){
//     console.log(i);   
// }

// const lname = 'Stack Learner';
// for (let i in lname){
    
//     console.log(cname[i]);   
// }
// //i ,v 
// //What is Itarator

//For off Loop
// const oname = 'Stack Learner';
// for (let v of oname){
//     console.log(v);
    
// }

//Array And String Use to For in And For of.
//For in loop return to Index Number ta.
//For of loop return to Actual Index Value ta.






//Array Literel And Array Start 4: 15 :00


// const arr = []
// //Array Length Account
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[99] = 100;
// console.log(arr.length);
// console.log(arr);

// length = lastIndex + 1;
// lastIndex = length - 1;

// const names = [
//     'Naim','Khlid','Jarif','Hanif','Dalim','Garbase','jaber',
// ];
// //Array to New Value Add
// names[6] = 'Asif Mahir';
// // Array Last Value Add
// names[names.length] = 'Minhaz';

// console.log(names.length);
// console.log(names);

//Array Object Constructor Pattern 
// const ai = new Array(); // 1.length  2.length  3.Items
// console.log(ai,ai.length);

// const a2 = new Array(5);
// console.log(a2,a2.length);

// const a3 = new Array(1,2,3,4,5);
// console.log(a3,a3.length);



// //Array Object Factory Pattern

// const b1 =  Array(); // 1.length  2.length  3.Items
// console.log(b1,b1.length);

// const b2 =  Array(5);
// console.log(b2,b2.length);

// const b3 =  Array(1,2,3,4,5);
// console.log(b3,b3.length);

// console.log(ai.__proto__.constructor);
// console.log(b1.__proto__.constructor);

// // Array 3 type 
// // 1. constructor 2. Factory 3.Literel

// //Array Traverse
// const arr = [1,2,3,4,5];
// const n = arr[3]
// const m = arr[2]
// const x = 1, y = 0

// console.log(m,n,arr[x],arr[y],arr[x] + arr[y], arr[x + y + 1] );
// arr[0]
// arr[2]
// arr[3]
// arr[4]

// const arr1 = [1,2,3,4,5,6];
// for (let i = 0; i < arr1.length; i++){
//     console.log(arr1[i]);
    
// }

// 4.42. 00 minute Finished


//5.15.00 minute Finished
//  //Two Dimansonal Array Traverse 
// const numbers = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,8],
// ];
// //console.log(Numbers[1][0]);
// for(let i = 0; i < numbers.length; i++){
//     for(let j =0; j < numbers[i].length; j++){
//         console.log(numbers[i][j]); 
//     }
// };

// const pointTable = [
//     [0,0],
//     [3,5],
//     [5,7],
//     [10,23],
// ];
// for(let i = 0; i < pointTable.length; i++){
//     for (let j = 0; j < pointTable[i].length; j++){
//         console.log(`Points [${i} ${j}] = ${pointTable[i][j]}`);
//     }
// }



// const matrixA = [
//     [1,3],
//     [1,0],
//     [1,2],
// ];

// const matrixB = [
//     [0,0],
//     [7,5],
//     [2,1],
// ];
// const matrixSum = (matrixA, matrixB) => {
//     const result = [];
//     for(let i = 0; i < matrixA.length; i++){
//         const row = [];
//         for(let j = 0; j < matrixA[i].length; j++){
//             row.push(matrixA[i][j] + matrixB[i][j])
//         }
//         result.push(row);
//     }
//     return result;
// }
// const matrixC = matrixSum(matrixA,matrixB);
//  console.log(matrixC);
//console.log(matrixSum(A,B));


// const matrixA = [
//     [1,3],
//     [1,0],
//     [1,2],
// ];

// const matrixB = [
//     [0,0],
//     [7,5],
//     [2,1],
// ];
// //matrixA[1][1].push
// const matrixSum = (A, B) => {
//     const result = [];
//     //console.log(result);
//     for(let i = 0; i < A.length; i++){
//         const row = [];  
//         for(let j = 0; j < A[i].length; j++){
//             row.push(A[i][j] + B[i][j]) // Add Array Element
//         }
//         result.push(row);
//     }
//     return result;
// }
// // const matrixC = matrixSum(matrixA,matrixB);
// //  console.log(matrixC);
// console.log(matrixSum(matrixA,matrixB));

// //console.log(matrixSum(A,B));

//5. 24 Minute End


// Object Start

// const o = {}
// console.log(typeof o);

// const person1 = {};
// person1.firstName = 'HM'; //object Add
// person1.lastName = 'Nayem';
// person1.email = 'hmNayam@gmail.com';

// console.log(person1);
// console.log(person1.firstName); // object property Output
// console.log(person1.email);

// const person2 = {
//     firstName : 'Md',
//     lastName: 'Mustakim Billah',
//     Email: 'MustakimBillah@gmail.com',
// };
// person2.id = '123456'; // Object Add
// person2.age = 15;
// person2.phone = '01933258714';
// //console.log(person2);
// //console.log(person2.Email);
// //console.log(person2['Email']); // object Add Multiple Way


// delete person2.age; // Delete object Property
// console.log(person2);

// const key = 'Email';
// console.log(person2[key]);

// const p1 = {
//     name: 'Sakib Hasan',
//     email: 'SakibHasan@gmail.com',
// };
// const p2 = {
//     name: 'Nayem Uddin',
//     email: 'NayemUddin@gmail.com',
// };
// const p3 = {
//     name: 'Mustakim Billah',
//     email: 'MustakimBillah@gmail.com',
// };
// const people = [p1,p2,p3];

// console.log(people[0]);
// console.log(people[0].name);
// console.log(people[1]);
// console.log(people[1].email);

// const people = [
//     {
//         name: 'Sakib Hasan',
//         email: 'SakibHasan@gmail.com',
//     },
//     {
//         name: 'Nayem Uddin',
//         email: 'NayemUddin@gmail.com', 
//     },
//     {
//         name: 'Mustakim Billah',
//         email: 'MustakimBillah@gmail.com',
//         friends: ['Nayem','Rohim'],
//     },
// ];

// // console.log(people[0]);
// // console.log(people[0].name);
// // console.log(people[1]);
// // console.log(people[1].email);

// for(let p of people){
//     //console.log(p);
//     console.log(`${p.name} (${p.email}) ${p.friends}`);
    
// };


//5:46:00 Minute End


// What is Function
// const arr1 = [4,6,10,3,29,3,23,12];
// const arr2 = [6,11,21,32,4,3,20,10];

// let max1 = arr1[0];
// for(let v of arr1){
//     if(v>max1){
//         max1 = v;
//     }
// }
// console.log(max1);

// let max2 = arr2[0];
// for(let v of arr2){
//     if(v>max2){
//         max2 = v;
//     }
// }
// console.log(max2);
// const arr1 = [4,6,10,3,29,3,23,12];
// const arr2 = [6,11,21,32,4,3,20,10];

// function findMax(arr){

// let max = arr[0];
// for(let v of arr){
//     if(v>max){
//         max = v;
//     }
// }
// return max;
// }
// console.log(findMax(arr1));
// console.log(findMax(arr2));


// //function Declaration or Define
// function myFunction() {
//     console.log('My Frist Function');
//     const a = 10;
//     const b = 20;
//     console.log(`Sum = ` + (a+b));
    
// }
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();
// myFunction();


// // Function Arguments
// function sum(a,b){
//     const c = a + b;
//     console.log(c);
    
// }
// sum(10,20);
// sum(20,30);
// sum(100,200);
// sum(50,50);


// //Return StateMent
// //if you function no return , As a result undefined;

//  function sum(a,b){
//         const c = a + b;
//         return c;
        
//     }
//     const f1 = sum(30,50);
//     const f2 = sum(20,30);
//     const f3 = sum(100,200);
//     const f4 = sum(50,50);
// console.log(sum(10,20));
//         console.log(f1,f2,f3,f4);
 
 
// //Function Expression
// const sum = function(a , b){
//     return a + b;
// };
// console.log(sum(10,20));

//  // Arrow Function or Fat Arrow Function
 
// const sum = (a , b) => {
//     //console.log(`A + B = `,a + b );
//     return a + b;
// };
// sum(10,20);
 
// const sum1 = (a,b) => a + b;
// const isMax =(a,b) => a > b;
// const max = (a,b) => Math.max(a,b);

// console.log(sum1(10,20.6));
// console.log(isMax(10,20.6));
// console.log(max(10,20.6));

 // // Function is a Frist Class Citizen ba Hiyerorder Function
// //variable name call exm : sayHi();
 
//  function sayHello(name){
//     console.log('Hello',name);
//  };
//   //const sayHi = sayHello();
//   const sayHi = sayHello;
//   //console.log(sayHi);
//   sayHi('Stack Learner');
  
 
// // //inner Function
// //console.log(0%2 !== 0);

// function displayTable(n){
//     const isOdd = (n) => n % 2 !== 0;
//     const isEven = (n) => n % 2 === 0;

//     for (let i = 0; i < n; i++){
//         if(isOdd(i)){
//             console.log(`Table row [#000] -`, i + 1);
//         }else if (isEven(i)){
//             console.log(`Table row [#fff] -`, i + 1);
//         }
        
        
//     }
// }
// displayTable(10);

// function m(a,b){
//     function n(a,b){
//         return a + b;
//     }
//    return n(a,b);
// }

// console.log(m(10,20));


// // Callback Function
// const arr = [1,2,3,4,5];

// arr.forEach((v) => {
//     console.log(`Value`,v * v);
    
// });

// const arr = [1,2,3,4,5];
// let sum = 0;
// arr.forEach((v) => {
//     //console.log(`Value`,v * v);
//     sum += v;
// });
// console.log(sum);


// function toUpper(str,cb) {
//     const upper = str.toUpperCase()
//     cb(upper)
// }

// toUpper('Stack Learner',(str)=> {
//     console.log(str);
//     console.log('Hello', str.length);
    
// })


// // Return Function

// function returnIsEvent() {
//     const isEven = (n) => n % 2 === 0;
//     return isEven;
// }
// // const isEven = returnIsEvent();
// // console.log(isEven());

// console.log(returnIsEvent()(99));


// function returnIsEvent() {
//     const isEven = (n) => n % 2 === 0;
//     return isEven();
// }
// console.log(returnIsEvent());

// // Function Scopes

// let globalVariable = 'global value';
// function outerFunction(){
//     let scopedVariable = 'scoped value';


// function innerFunction(){
//     let innerVariable = 'Inner value';
//     console.log(scopedVariable); // Flexical Scope
    
// };
// //console.log(innerVariable);
// innerFunction();
// };
// outerFunction();

// //parent near Scope use child , Child near Scope use not parent.

// // Understand Closer
// //Closer is a Memory.

// function multiplier (t){
//     return function (n) {
//         return n * t;
//     }
// }

// const multiplyBy5 = multiplier(5);
// console.log(multiplyBy5(10));
// console.log(multiplyBy5(20));
// console.log(multiplyBy5(5));
// console.log(multiplyBy5(15));

// const multiplyBy10 = multiplier(10);
// console.log(multiplyBy10(10));
// console.log(multiplyBy10(20));
// console.log(multiplyBy10(5));
// console.log(multiplyBy10(15));


// // What is Dom 

// console.log('I have been loaded');

//Dom Seclected by Id
// const title = document.getElementById('title');
// title.innerHTML = 'My Custom Title Changed by JavaScript';
// console.log(title);

// //Dom Seclected by Class
// const paragraphs = document.getElementsByClassName('para');
// console.log(paragraphs);


// Object.assign(title.style, {
//     fontSize: '24px',
//     color: 'red',
//     backgroundColor: 'yellow',
//     margin: '10px'
// });

// for (let v of paragraphs){
//     Object.assign(v.style, {
//         fontSize: '24px',
//         color: 'red',
//         backgroundColor: 'yellow',
//         margin: '10px'
//     });
// }

// title.style.cssText = `
// font-size: 24px;
// color: red;
// background-color: yellow;
// margin: 10px;
// `;

// for(let v of paragraphs){
//     v.style.cssText = `
//     font-size: 24px;
//     color: red;
//     background-color: yellow;
//     margin: 10px;
// `;
// }

// for(let v of paragraphs){
//     //console.log(v);
//     v.style.color = 'red';
//     v.style.padding = '24px';
//     v.style.backgroundColor = 'lime';
// };

//console.log(document.getElementsByClassName('container'));

//Dom Secleted by QuarySeclector

// const title = document.querySelector('#title');
// console.log(title);

// // const paragraphs = document.querySelectorAll('*');
// // paragraphs.style.color = 'red';
// // console.log(paragraphs);

// const paragraphs = document.querySelectorAll('*');
// // paragraphs.forEach(element => {
// //   element.style.color = 'red';
// // });

// for(let v of paragraphs){
//      v.style.color = 'red';
// };
// All Selector, Name Selector,Class Selector, Id Selector

// // Understand Onload Function

// window.onload = function () {
//     main();
// };

// function main() {
//     window.alert('Hello world')
// }

// //Handle Click Event
//   window.onload = function () {
//         main();
//     };
    
//     function main() {
//         // const btn = document.getElementById('click-btn');
//         // let times = 0;
//         // btn.onclick = function (){
//         //     alert('clicked' + times++);
//         // };


//         const btn = document.getElementById('click-btn');
//         let times = 0;
//         btn.addEventListener('click', function(e){
//             console.log(e);
            
//             alert('clicked' + times++);
//         });
//     };

    // // change content Onclick

    // window.onload = function () {
    //     main();
    // };
    // function main() {
    //     const btn = document.getElementById('click-btn');
    //     const title = document.getElementById('title');
    //     btn.addEventListener('click', function(e){
    //        title.innerText = 'Changed Dom Element' 
    //     });
    // };


    // //Toggle Title

    // window.onload = function () {
    //     main();
    // };
    // function main() {
    //     const btn = document.getElementById('click-btn-1');
    //     const title = document.getElementById('title');

    //     let currentTitle = title.textContent;
    //     let nextTitle = 'Changed Dom Element';
    //     btn.addEventListener('click', function(e){
    //        title.innerText = nextTitle;
    //        const temp = currentTitle; // USe Swept Logic
    //        currentTitle = nextTitle;
    //        nextTitle = temp ; 

    //     });
    // };

// a = 10;
// b = 20;

// c = 10
// a = 20
// b = 10;

// // Change Class onClick

// window.onload = function () {
//     main();
// };
// function main() {
//     const btn = document.getElementById('click-btn-1');
//     const title = document.getElementById('title');

//     let currentTitle = title.textContent;
//     let nextTitle = 'Changed Dom Element';
//     btn.addEventListener('click', function(e){
//        title.innerText = nextTitle;
//        const temp = currentTitle; // USe Swept Logic
//        currentTitle = nextTitle;
//        nextTitle = temp ; 

//         if(title.classList.contains('title1')){
//             title.classList.remove('title1');
//             title.classList.add('title2');
//         }else {
//             title.classList.remove('title2');
//             title.classList.add('title1');
//         }

//     });
// };

// window.onload = function () {
//     main();
// };
// function main() {
//     const btn = document.getElementById('click-btn-1');
//     const title = document.getElementById('title');

//     let currentTitle = title.textContent;
//     let nextTitle = 'Changed Dom Element';
//     btn.addEventListener('click', function(e){
//        title.innerText = nextTitle;
//        const temp = currentTitle; // USe Swept Logic
//        currentTitle = nextTitle;
//        nextTitle = temp ; 

//         title.classList.toggle('title1');
//         title.classList.toggle('title2');
    
//     });
// };

// // Handle Input Event

// window.onload = function () {
//     main();
// };
// function main() {
//     const btn = document.getElementById('click-btn-1');
//     const title = document.getElementById('title');
//     const input = document.getElementById('input');
//     const output = document.getElementById('output'); 

//     let currentTitle = title.textContent;
//     let nextTitle = 'Changed Dom Element';
//     btn.addEventListener('click', function(e){
//        title.innerText = nextTitle;
//        const temp = currentTitle; // USe Swept Logic
//        currentTitle = nextTitle;
//        nextTitle = temp ; 
    
//     });

//     input.addEventListener('focus', function () {
//         input.style.padding = '0.5rem 1rem';
//     })

//     input.addEventListener('blur', function () {
//         input.style.padding = '0rem';
//     })

//     input.addEventListener('keyup', function (e){
//         output.innerText = e.target.value;
        
//     })

// };

// // Created And Append Dom Element

// window.onload = function () {
//         main();
//     };
//     function main() {
//         const input = document.getElementById('input-name');
//         const addBtn = document.getElementById('add-btn');
//         const nameList = document.getElementById('name-list');

//         addBtn.addEventListener('click', function () {
//            if(input.value){
//             const li = document.createElement('li');
//             li.innerText = input.value;
//             nameList.appendChild(li);
//             input.value = "";
//            }
//         })
    
//     };

//   // Create Dom Attribute

// window.onload = function () {
//     main();
// };
// function main() {
//     const input = document.getElementById('input-name');
//     const addBtn = document.getElementById('add-btn');
//     const nameList = document.getElementById('name-list');

//     addBtn.addEventListener('click', function () {
//        if(input.value){
//         const li = document.createElement('li'); 
//         // const titleAttr = document.createAttribute('title');// Attribute Create
//         // titleAttr.value = 'List Title';
//         // li.setAttributeNode(titleAttr);
//         //or
//         li.setAttribute('title','List Title')

       
//         li.innerText = input.value; // Html Element Create
//         nameList.appendChild(li); 
//         input.value = "";// Input Faka 
//        }
//     })

// };

// // Update InnerHtml And InnerText 

// window.onload = function () {
//     main();
// };
// function main() {
//     const input = document.getElementById('input-name');
//     const addBtn = document.getElementById('add-btn');
//     const nameList = document.getElementById('name-list');

//     addBtn.addEventListener('click', function () {
//        if(input.value){
//         const li = document.createElement('li'); 
//         // const titleAttr = document.createAttribute('title');// Attribute Create
//         // titleAttr.value = 'List Title';
//         // li.setAttributeNode(titleAttr);
//         //or
//         li.setAttribute('title','List Title')

       
//         li.innerText = input.value; // Html Element Create // only Text Output
//         //li.innerHTML = input.value; // Html Element Create // Html Element text outputs
//         nameList.appendChild(li); 
//         input.value = "";// Input Faka 
//        }
//     })

// };


// const body = document.body;
// body.innerHTML = '<h1>Hello Word</h1>';

// //Handle input Event

window.onload = function () {
    main();
};
function main() {
    const input = document.getElementById('input-name');
    const addBtn = document.getElementById('add-btn');
    const nameList = document.getElementById('name-list');

    addBtn.addEventListener('click', function () {
       if(input.value){
        const li = document.createElement('li'); 
        li.innerText = input.value; // Html Element Create // only Text Output
        
        li.addEventListener('click', function (){ // Click Remove Output
            li.remove();
        })

        nameList.appendChild(li); 
        input.value = "";// Input Faka 
       }
    })

};


