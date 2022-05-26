let closeX = document.querySelectorAll(".x")
let respostas = document.querySelectorAll(".reposta_card")

for(let i = 0; i < closeX.length; i++){
    closeX[i].addEventListener("click", ()=>{
        if( respostas[i].style.display === "none"){
            respostas[i].style.display = "inline-block"
            closeX[i].style.transform = "rotate(0deg)"
        }else{
            respostas[i].style.display = "none"
            closeX[i].style.transform = "rotate(-136deg)"
        }
    })
}

