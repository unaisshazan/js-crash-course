
//string operation
let fruit ='banana,unais ,ali,mango';
let moreFruits='banana\apple';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','))
console.log(fruit.split(''))
//array
let fruits = ['banana','apple','orange','pineapple'];
 fruit = new Array ('banana','apple','orange','pineapple');
 console.log(fruits[2]);
 fruits[0]='pear';
 console.log(fruits);

 for ( let i=0; i < fruits.length; i++){
     console.log(fruits[i]);
 }
 //array common method

 console.log('to string', fruits.toString());
 console.log(fruits.join('-'));
 console.log(fruits.join('*'));
 console.log(fruits,fruits.pop(),fruits); // remove last element
 console.log(fruits.push('blueberry'),fruits);
 console.log(fruits[3]);
 fruits[4]='new fruits';
 fruit[fruits.length]='new fruit';
 console.log(fruits)
 fruits.shift(); // remove 1st element
 console.log(fruits)
 fruits.unshift('kiwi');// add  1st element
 console.log(fruits);
 let vegetables=['tomoto','asparagus','broccoli'];
 let allGroceries = fruits.concat(vegetables);
 console.log(allGroceries);
 //adding arrays in js 

 console.log(allGroceries.slice(1,4));
 console.log(allGroceries.reverse());
 console.log(allGroceries.reverse());
 let num=[2,4,5,6,7,5,6]
 console.log(num.sort())
 console.log(num.sort(function(a,b){
     return a-b
 }));
 console.log(num.sort(function(a,b){
    return b-a
}));
//asending desending order
let emptyArray= new Array();
for(let num=0 ; num <= 10 ;num++){
emptyArray.push(num)

}
console.log(emptyArray)
// adding elements in empty array

//Objects in Js
let student={
    first : 'unais',
    last: 'ali',
    age:20,
    height:160,
    studentInfo: function(){
        return this.first + '\n' +
        this.last + '\n' +this.age;
         
    }
}
console.log(student.first); // access data using .
console.log(student.last,student.age);
//update data
student.first='Mr Unais';
console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo()); // function under the list
// conditionals,control flows (if else)
//let age = prompt('what is your age?');
// if ((age >=18)&& (age <=35)){
//     status ='target demo';
//     console.log(status);
// }
// else{
//     status='not my audience';
//     console.log(status);

// }
// //switch statements
//differentiate between weekday vs weekend
// day 0----> sunday
// day 6----> saturday
// day 4----> Thursday

switch(0){
    case 0:
        text='weekend';
    case 5:
        text='weekend';
    case 6:
        text='weedays'
        default:
            text='weekday'
}
console.log(text);