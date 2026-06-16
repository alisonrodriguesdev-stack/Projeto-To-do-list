
function state(){
    this.senha = null
    this.email= null

    this.btnLogin
}

export function init(){
    state.email= document.getElementById("idEmail");
    state.senha= document.getElementById("idPassword");
    state.btnLogin= document.getElementById("btnLogin");

    btnLogin.addEventListener('click', Login)
}


function Login(e){
    e.preventDefault()
    const email = state.email.value
    const senha= state.senha.value

    console.log(email, senha)
    email =+ ""
    senha =+ ""
}