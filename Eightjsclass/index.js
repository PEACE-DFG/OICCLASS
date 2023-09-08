// Object syntax
const myObject={
    // 'objectproperty':'Object value'
}

const posts={
    'id':1,
    'title':'Post Title',
    'body':"Post Body",
    'footer':'post footer'
}

// syntax for For in loop
// for(let variable in object){
    //Execute the code
//}

for(let post in posts){
    console.log(posts[post])
}

//For in with array
const numbers=[1,3,5,7,9];
for(let number in numbers){
    console.log(number)
}

/*
for(variable of iterable array){
    //code to be executed
}
*/

for(let number of numbers){
    console.log(number)
}

// localstorage
const input =document.querySelector('input')
h2=document.querySelector('h2')

input.addEventListener('keyup',display);
function display(){
    // h2.innerHTML=input.value
    localStorage.setItem('user',input.value)// to set
    console.log(localStorage.getItem('user'))
}
h2.innerHTML=localStorage.getItem('user')


// to insert into local storage(setItem)
// Syntax= localStorage.setItem('keyName', value)

function clear(){
    
}
