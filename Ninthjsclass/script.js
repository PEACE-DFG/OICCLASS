//check if user exists in local storage
const storedUserData=JSON.parse(localStorage.getItem('userData'))
console.log(storedUserData);

if(!storedUserData){
    alert('No user data found please Regitser');
    window.location.href='index.html'
}

//for the form to compare that of the local storage
const loginForm=document.getElementById('login-form');
const loginEmail=document.getElementById('login-email');
const loginPassword=document.getElementById('login-password')

loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const emailValue=loginEmail.value.trim();
    const passwordValue=loginPassword.value.trim();

    if(emailValue!=storedUserData.email && passwordValue!=storedUserData.password){
        alert('Invalid Details')
    }
    else{
        alert('Login Succesful')
        window.location.href='home.html'
    }
})