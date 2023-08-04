var userNameInput = document.getElementById('userName');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');
var loginEmailInput=document.getElementById('loginEmail');
var loginPasswordInput =document.getElementById('loginPassword');

var userContainer =[];

//LOCAL STORAGE//
    if(localStorage.getItem('userData')!=null){
        userContainer=JSON.parse(localStorage.getItem("userData"));
    }else{
        userContainer=[];
    }


//TO ADD USER IN SUGN UP///
function addUser(){

    if(validation(regexName,userNameInput.value)==true && validation(regexEmail,userEmailInput.value)==true && validation(regexPassword,userPasswordInput.value)==true){
        var user ={
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }
        userContainer.push(user);
        localStorage.setItem("userData",JSON.stringify(userContainer));
        document.querySelector('#success').classList.replace('d-none', 'd-block');
        clearForm();
        }
         else{
        alert("wrong validation");
        }

    }

    // TO DO LOGIN BY USER
function logIn(){
    if (loginEmailInput.value =="" || loginPasswordInput.value =="") {
        alert("user not found")
    }
    else{
        searchUser();
    }
}



function searchUser(){

    for(var i=0;i<userContainer.length;i++){
        if(loginEmailInput.value ==userContainer[i].email && loginPasswordInput.value == userContainer[i].password){
            var nam =userContainer[i].name;
            localStorage.setItem("name",nam)
            window.location.href='home.html'
            clearForm()
            break;

        }

    }

}

//CLEAR FORM

function clearForm(){
    userNameInput.value="";
    userEmailInput.value="";
    userPasswordInput.value="";
}

//LOGOUT
function logOut(){
    window.location.href='index.html';
}

//VALIDATION 

function validation(regex,input){
    return regex.test(input)
}

var regexName=/^[a-z]\w{2,20}$/;
var regexEmail=/^[a-z]\w{3,15}@\w{3,10}(\.[a-z]{2,7}){1,3}$/;
var regexPassword=/^\d{6,}$/;

// DISPLAY IN HOME

function display(){
    var cartona=`
        <div class="sign-up text-center w-50  mx-auto py-5 px-5 ">
        <H1 class="mb-4 title">${'Welcome'+' '+localStorage.getItem("name")}</H1>
    
        </div>`;
    
    document.getElementById('my-home').innerHTML=cartona;
}
display();









