// const cars=["toyota","Volvo","BMW"]
// console.log(cars)
// document.write(cars[0]);
// const fruits= new Array("banana","Mango")
// console.log(fruits);

// document.getElementById('demo').innerHTML=cars;
// cars[0]="Lexus";
// console.log(cars);

// console.log(cars.length)

//push array method

// let vehicles=cars.push("toyota");
// console.log(vehicles);
// document.getElementById('cars').innerHTML=vehicles;
// console.log(typeof(cars));

//to string method

// console.log(cars.toString());

//pop method
// console.log(cars.pop())
// console.log(cars)

//shift method
 const names=['John','James','Doe']
 console.log(names.shift())
 console.log(names)

 //unshift method
 console.log(names.unshift("Lizzy"));

 //.concat method

 const myGirls=["Cecille",'Lone','Alison']
 const myBoys=['John','JAMES','dOE']

 const children=myGirls.concat(myBoys);
 document.getElementById('demo').innerHTML=children;

//splice
//adding operation 
/*
SYNTAX= splice(first argument, second argument,elements to be added)


*/

const fruits=['Banana','orange','apple','mango'];
console.log(fruits.splice(1,2,'lemon','grapes'))
console.log(fruits)

//splice to remove

console.log(fruits.splice(0,2))
console.log(fruits)

//slice method
console.log(fruits.slice(2));

//sort method

const foods=['rice','beans','macaroni','cassava'];
// console.log(foods)
// console.log(foods.sort())
let chops=foods
document.getElementById('unsort').innerHTML=chops
let shop=foods.sort();
document.getElementById('sort').innerHTML=shop

const numbers=[1,2,3,4,5,6,7,8,9]
let rev=numbers.reverse()
document.getElementById('numbers').innerHTML=rev;


