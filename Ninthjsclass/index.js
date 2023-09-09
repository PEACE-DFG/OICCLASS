//create an event in which all datas i want to collect will be stored
const form=document.getElementById('form');
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')

form.addEventListener('submit',(e)=>{
    //to prevent the form from refreshing
    e.preventDefault();

    //call the function to check input values
    checkInputs();
});

function checkInputs(){
    //get the values from the inputs
    const usernameValue=username.value.trim()
    const emailValue=email.value.trim()
    const passwordValue=password.value.trim()
    const password2Value=password2.value.trim()

    //condions in javascript
    if(usernameValue===''){
        //show error message
        //add error class
        //creating function if username is empty
        setErrorFor(username,'Username cannot be left Empty')
    }else{
        //add success class
        setSuccessFor(username,'')
    }
     if(emailValue===''){
        //show error message
        //add error class
        //creating function if username is empty
        setErrorFor(email,'Email cannot be left Empty')
    }else{
        //add success class
        setSuccessFor(email,'')
    } 
     if(passwordValue===''){
        //show error message
        //add error class
        //creating function if username is empty
        setErrorFor(password,'Password cannot be left Empty')
    }else{
        //add success class
        setSuccessFor(password,'')
    } 
    if(password2Value===''){
        //show error message
        //add error class
        //creating function if username is empty
        setErrorFor(password2,'Password cannot be left Empty')
    }else if(password.value.trim() !== password2.value.trim()){
        setErrorFor(password2,'Passwords do not match')
    }
    else{
        //add success class
        setSuccessFor(password2,'')

        //Storing userdatas
        const userData={
            username:usernameValue,
            email:emailValue,
            pasword:passwordValue
        }
        console.log(userData)

        // to store in localstorage convert the datas from javascript oblect to stings(JSON)
        localStorage.setItem('userData',JSON.stringify(userData));

    }
}

function setErrorFor(input,message){
    // Add the error class
    const formControl=input.parentElement;
    const small=formControl.querySelector('small')

    //sdd error message
    small.innerText=message;

    formControl.className='form-control error'
}

//function if successful
function setSuccessFor(input,message){
 // Add the error class
    const formControl=input.parentElement;
    const small=formControl.querySelector('small')

  //sdd error message
    small.innerText=message;


    formControl.className='form-control success'
}