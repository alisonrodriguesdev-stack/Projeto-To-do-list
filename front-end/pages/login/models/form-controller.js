
function state(){
    this.senha = null
    this.email= null

    this.btnLogin= null;
}

export function init(){
    state.email= document.getElementById("idEmail");
    state.senha= document.getElementById("idPassword");
    state.btnLogin= document.getElementById("btnLogin");

    btnLogin.addEventListener('click', Login)
}






function Login(e){
    e.preventDefault()

    validarFormulario();
}

let validarFormulario = ()=>{
    let email = state.email.value
    let senha = state.senha.value
    console.log("validando formulario")
    if(email === ""){
        //msgErro.innerHTML ="Preencha o campo";
        console.log("Dados não foram aceitos");
        state.email.focus();
    }else{
        console.log("Dados aceitos")
        //msgErro.innerHTML =""
        aceitaDados();
    }
    if(senha === ""){
        console.log("Dados não informados 2")
    }else{
        console.log("Dados aceitos")
        //msgErro.innerHTML =""
    }
}

let dados={};
let aceitaDados=()=>{
    dados["email"]= state.email.value;
    dados["senha"]= state.senha.value

    console.log(dados);
}
