function Cad(){
    const Nome = document.getElementById("IDName")
    const Email = document.getElementById("IDEmail")
    const User = document.getElementById("Username")
    const Pass = document.getElementById("Password")
    const PassC = document.getElementById("PSWConfirm")
    const Btn = document.getElementById("BtCad")
    const Halog = document.getElementById("HL")

    Btn.addEventListener('click' , function(e){
        e.preventDefault()
        console.log(Nome.value)
        console.log(Email.value)
        console.log(User.value)
        console.log(Pass.value)
        console.log(PassC.value) 
    })
}
Cad()