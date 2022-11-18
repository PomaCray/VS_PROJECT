// //function declarations
// function greet(firstName = 'Awwal', lastName = 'Don'){
//     // if(typeof firstName === 'undefined'){firstName ='Awwal'}
//     // if(typeof lastName === 'undefined'){lastName = 'Don'}
//     return 'Hello ' + firstName +' '+ lastName
// }

// //console.log(greet());

// //function expression

// const square = function(x=4, y=3, z=2.5){
//     return x*y/z
// }
// //console.log(square());

// //IIFEs- IMMEDIATELY AND INVOKABLE FUNCTION EXPRESSION
// // (function(naim = 'bradson', naim2 = 'Awwal'){
// //     console.log('This code worked' +' '+ naim +' and' +' '+ naim2);
// // })();

// //PROPERTY METHOD

// const todo = {
//     dda: function(){
//         console.log('Add to do list');
//     },
//     dite: function(id){
//         console.log(`to do ${id}`);
//     }
// }

// todo.delete = function(){
//     console.log('to do deleted')
// }
// todo.delete()
// todo.dda()
// todo.dite('editted')




//FOR LOOP
    // for(let i =0; i < 10; i++){
    //     if(i === 2){
    //     console.log('Number 2 is my favorite')
    //     continue;
    //     }
    //     if(i === 5){
    //     console.log('Stop loop')
    //     break;
    //     }
    // console.log('Number' + i);
    // }


//WHILE LOOP
    // let i = 0

    // while(i < 10){
    //     console.log('Number' + i)
    //     i++;
    // }

// DO WHILE LOOP
    // let i = 0;

    // do {
    //     console.log('Number' + i);
    //     i++;
    // }
    // while(i < 10);

    


//LOOP THROUGH cars
// const cars = ['Benz', 'Toyota', 'Nissan', 'Honda'];
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]); 
// }
// cars.forEach(function(car, index){
//     console.log(`${index} : ${car}`);
// });

// const users = [
//     {id: 1, name:'tim'},
//     {id: 2, name:'brad'},
//     {id: 3, name:'jack'},
//     {id: 4, name:'dean'}
// ];

// const ids = users.map(function(user){
//     return user.id
// })

// console.log(ids)
// const user = {
//     firstName: 'Jack',
//     lastName: 'nancy',
//     age: 18
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`)
// }




