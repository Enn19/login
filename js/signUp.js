var userNameInput = document.getElementById('userName');
var userEmailInput = document.getElementById('userEmail');
var userPasswordInput = document.getElementById('userPassword');

var loginEmailInput=document.getElementById('loginEmail');
var loginPasswordInput =document.getElementById('loginPassword');
var loginEmail;
var loginPassword;

var mainIndex=0;


var oldEmail;
var oldPass;



var userContainer =[];

function cheakUserInfo(){
    if(localStorage.getItem('userData')!=null){
        userContainer=JSON.parse(localStorage.getItem("userData"));
    }
    
}
cheakUserInfo();

function addUser(){

    if(validation(regexName,userNameInput.value)==true && validation(regexEmail,userEmailInput.value)==true && validation(regexPassword,userPasswordInput.value)==true){
        var user ={
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPasswordInput.value
        }

        oldEmail=userEmailInput.value;
        oldPass=userPasswordInput.value;
        
        if(searchOldUser(oldEmail,oldPass)){
            console.log("wright")
        }
        else{
            userContainer.push(user);
            localStorage.setItem("userData",JSON.stringify(userContainer));
            document.querySelector('#success').classList.replace('d-none', 'd-block');
            console.log(userContainer);
        }

    }
    else{
        alert("wrong validation")
    }
    clearForm()
}

function searchOldUser(email , password ){

    for(var i=0;i<userContainer.length;i++){
        if(userContainer[i].email.includes(email)==true && userContainer[i].password.includes(password)==true){
            alert("user is already exist");
            break;
        }
    }
}

console.log(userContainer);



function logIn(){
    loginEmail=loginEmailInput.value;
    loginPassword=loginPasswordInput.value;
    console.log(loginEmail+"  "+loginPassword);
    searchUser(loginEmail,loginPassword);
}



function searchUser(email , password ){

    for(var i=0;i<userContainer.length;i++){
        if(userContainer[i].email.includes(email)==true && userContainer[i].password.includes(password)==true){
            mainIndex=i;

            window.location.href='home.html'
            console.log(mainIndex)

        }

    }

}



function clearForm(){
    userNameInput.value="";
    userEmailInput.value="";
    userPasswordInput.value="";
}

function logOut(){
    window.location.href='index.html';
}








function validation(regex,input){
    return regex.test(input)
}

var regexName=/^[a-z]\w{2,20}$/;
var regexEmail=/^[a-z]\w{3,15}@\w{3,10}(\.[a-z]{2,7}){1,3}$/;
var regexPassword=/^\d{6,}$/;


/************************************ */



function display(index){
    var cartona=`
        <div class="sign-up text-center w-50  mx-auto py-5 px-5 ">
        <H1 class="mb-4 title">${'Welcome'+' '+ userContainer[index].name}</H1>
    
        </div>`;
    
    document.getElementById('my-home').innerHTML=cartona;
}
display(mainIndex);









