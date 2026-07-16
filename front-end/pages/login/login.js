function Logar(){
    const login = document.getElementById("idEmail") 
    const senha = document.getElementById("idPassword")
    const bttn = document.getElementById("bttn")

    bttn.addEventListener('click' ,function(e){
        e.preventDefault()
        console.log(login.value)
        console.log(senha.value)
    })
}
Logar()