// Example programs 


// var firstName = prompt('What\'s your first name');
// var lastName = prompt('What\'s your last name');
// var age = prompt('What\'s your age ');
// var fullName = firstName + lastName ;
// console.log('Your full name is '+ fullName);
// console.log('Your age is '+age );


// var age = prompt('What\'s your age?');
// var days = age * 365.25;
// alert(age + ' years is roughly ' + days + ' days.');



// var age = parseInt(prompt('What\'s your age?'));
// if(age < 18){
//     console.log('Sorry');
// }
// else if(age<21){
//     console.log('You can enter, but cann\'t drink');
// }
// else{
//     console.log('Come on in, You can drink');
// }




// var age = parseInt(prompt('What\'s your age?'));
// if(age < 0){
//     console.log('Enter a valid age');
// }
// if(age == 21){
//     console.log('Happy 21st birthday');
// }
// if(age % 2 !== 0){
//     console.log('Your age is odd');
// }
// if(age % Math.sqrt(age) == 0){
//     console.log('Your age is a perfect square');
// }



// var secretNumber = Math.floor(Math.random() * 100);
// var guess = parseInt(prompt('Guess a number'));
// if(guess == secretNumber){
//     console.log('Your guess is correct');
// }
// else{
//     console.log('SecretNumber is' , secretNumber)
//     console.log('Have a better luck next time');
// }




// var answer = prompt('are we there yet?');
// while(answer !== 'yes' && answer !== 'yeah'){
//     var answer =  prompt('are we there yet?');
// }
// alert('Yay, We made it');



// var answer = prompt('are we there yet?');
// while(answer.indexOf('yes') == -1){
//     var answer =  prompt('are we there yet?');
// }
// alert('Yay, We made it');




// var str = 'Jashan';
// for(var i=0; i<str.length; i++){
//     console.log(str[i]);
// }




// function captialize(str){
//     if(typeof str === 'number'){
//         return 'That\'s not a string';
//     }
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }




// function kebabToSnake(str){
//     var newStr = str.replace(/-/g, '_');
//     return newStr;
// }
// console.log(kebabToSnake('Jashan-Bansal-Jimmy-Bansal'));


// function sing(){
//     console.log('Twinkle Twinkle little star');
//     console.log('How i woder what u are');
// }
// var interval = setInterval(sing, 2000);
// clearInterval(interval);



// var friendGroups = [
//     ['Jashan', 'Harsimran', 'Chahat'],
//     ['Romit', 'Kansal', 'Nash'],
//     ['Anmol', 'Nikhil', 'Hello']
// ]
// console.log(friendGroups[2][0]);



// var colors = ['red', 'orange', 'yellow', 'green'];
// colors.forEach(function( color ){
//     console.log(color);
// })


// var todos = ['Buy new turtle'];
// var input = prompt('What would you like to do?');
// while(input !== 'quit'){
//     if(input === 'list'){
//         listTodos();
//     }
//     else if(input === 'new'){
//         addTodo();
//     }
//     else if(input === 'delete'){
//         deleteTodo();
//     }
//     input = prompt('What would you like to do?');
// }
// function addTodo(){
//     var newTodo = prompt('Enter new todo');
//     todos.push(newTodo);
// }
// function listTodos(){
//     console.log('*******************');
//     todos.forEach( function(todo, i){
//         console.log(i + ': '  + todo);
//     })
//     console.log('*******************');
// }
// function deleteTodo(){
//     var index = prompt('Enter index of todo to delete');
//     todos.splice(index,1);
//     console.log('Deleted Todo');
// }




// function myForEach(arr, func){
//     for(var i=0; i < arr.length ; i++){
//        func();
//     }
// }
// var colors = ['red', 'green', 'blue'];
// myForEach(colors, alert);



// ================== Anonymous function ===============
// (function(){
//     console.log('I am a function');
// })




// (function(){
//     console.log('I am a function');
// })();




// Array.prototype.myForEach = function(func) {
//     for(var i=0; i< this.length; i++){
//         func(this[i]);
//     }
// }
// var friends = ['charlie', 'dave', 'maddy'];
// friends.myForEach(alert);



// Array.prototype.myForEach = function(func) {
//     for(var i = 0 ; i< this.length; i++){
//         func(this[i]);
//     }
// }
// var friends = ['charlie', 'dave', 'maddy'];
// friends.myForEach(function(name){
//     console.log('I Love ' + name);
// });




