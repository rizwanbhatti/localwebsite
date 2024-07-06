
var createAcc = document.getElementById('btnca')

var userName = document.getElementById('username')
var email = document.getElementById('email')
var password = document.getElementById('pass')



createAcc.addEventListener('click', function(){

// console.log(userName.value , email.value , password.value);

var userData = {
    userName : userName.value,
    email : email.value,
    password : password.value
}

console.log(userData);


localStorage.setItem('createAcc', JSON.stringify(userData))

window.location.href ='../../index.html'

})