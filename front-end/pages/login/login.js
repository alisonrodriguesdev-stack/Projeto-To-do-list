function Logar(){
var login = document.getElementById("idEmail") 
var senha = document.getElementById("idPassword")
var bttn = document.getElementById("bttn")

bttn.addEventListener('click' ,function(e){
    e.preventDefault()
    console.log(login.value)
    console.log(senha.value)
})
}
Logar()