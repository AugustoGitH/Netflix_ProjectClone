const inputMail = document.getElementById("inputtext")
const inputPass = document.getElementById("inputpassword")

const active_input = document.querySelectorAll(".active_input")
function borderAlertEmail(){
    let msg;
        if(inputMail.value.length <= 1){
            msg = "Informe um email ou número de telefone válido."
            inputMail.style.borderBottom = "2px solid rgb(209, 209, 10)"
        }else if(inputMail.value.length >= 1 && inputMail.value.length <= 5){
            msg = "Informe um email válido."
        }else{
            msg = " "
        }
    active_input[0].innerHTML = msg
}

const mostrar = document.getElementById("buttonMostrarO")

const inputpasscontainer = document.querySelector(".inputpassword")

function borderAlertPassWord(i){
    if(inputPass.value.length < 4){
        active_input[i].innerHTML = "A senha deve ter entre 4 a 60 caracteres."
        inputPass.style.borderBottom = "2px solid rgb(209, 209, 10)"
        mostrar.style.borderBottom = "2px solid rgb(209, 209, 10)"
    }else{
        active_input[i].innerHTML = ""
        inputPass.style.borderBottom = "2px solid rgb(79, 74, 74)"
        mostrar.style.borderBottom = "2px solid rgb(79, 74, 74)"
    }
}
mostrar.addEventListener("click", ()=>{
    if(mostrar.innerHTML == "mostrar"){
        mostrar.innerHTML = "ocultar"
        inputPass.type = "text"
    }else{
        mostrar.innerHTML = "mostrar"
        inputPass.type = "password"
    }

})
inputPass.addEventListener("focus", ()=>{
    mostrar.style.display = "flex"
})





