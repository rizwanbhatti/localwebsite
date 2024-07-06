var login = document.getElementById('login')



var email = document.getElementById('email')
var password = document.getElementById('pass')

var getData = JSON.parse(localStorage.getItem('createAcc'))

console.log(getData);

login.addEventListener('click', function(){

if(getData.email === email.value && getData.password === password.value){

location.href = './src/pages/dashboard.html'
}
else{

    
}

})
