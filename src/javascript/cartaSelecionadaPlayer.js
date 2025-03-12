const lixeira = document.querySelector(".lixeiraCartas")

lixeira.addEventListener("dragover", permitirDropCard)

mesaPlayer.addEventListener("dragover", permitirDropCard)
campoPlayer.addEventListener("dragover", permitirDropCard)

mesaPlayer.addEventListener("drop", mouseUp)
campoPlayer.addEventListener("drop", mouseUp)

mesaPlayer.addEventListener("mousedown", (e)=>{
    const cartaSelecionada = e.target.parentElement.id

    const carta = document.getElementById(`${cartaSelecionada}`)
    
    if (carta.classList.contains("mesaPlayer__Carta_foco")){
        carta.classList.remove("mesaPlayer__Carta_foco")
    }

    carta.addEventListener("dragstart", mouseDown)
})

function permitirDropCard(e) {
    e.preventDefault()
}

function zonaLixeira(e){
    
    e.preventDefault()
    let data = e.dataTransfer.getData("text")
    const cartaEscolhida = document.getElementById(data)

    lixeira.appendChild(cartaEscolhida)

    lixeira.removeChild(cartaEscolhida)
    
}

function mouseDown(e){
    
    const cartaSelecionada = e.target.id

    const card = document.getElementById(`${cartaSelecionada}`)

    card.classList.remove("mesaPlayer__Carta_foco")

    lixeira.addEventListener("drop", zonaLixeira)

    if (card.classList.contains("mesaPlayer__Carta_Arena")){
        card.classList.remove("mesaPlayer__Carta_Arena")
        card.classList.add("mesaPlayer__Carta")
    }

    e.dataTransfer.setData("text", e.target.id)

}

function mouseUp(e){

    e.preventDefault()
    let data = e.dataTransfer.getData("text")
    const cartaEscolhida = document.getElementById(data)

    setTimeout(()=>{
        const cartaEscolhidaParent = cartaEscolhida.parentElement.classList[0]
        
        if (cartaEscolhidaParent == "campoPlayer"){
            cartaEscolhida.classList.remove("mesaPlayer__Carta")
            cartaEscolhida.classList.add("mesaPlayer__Carta_Arena")
            campoPlayer.setAttribute("data-allowed", "negado")

            if (campoPlayer.children.length === 1){
                btnIniciarPartida.style.display = "block";
        
                btnIniciarPartida.addEventListener("click", verificarCartasArena)
            }
        }
        
        else if (cartaEscolhidaParent == "TelaJogo__mesaPlayer") {
            cartaEscolhida.classList.add("mesaPlayer__Carta_foco")
            verificarCampoCarta()
            configCartasPlayer()

            if (campoPlayer.children.length === 0){
                btnIniciarPartida.style.display = "none";
            }
        
            else {
                btnIniciarPartida.style.display = "block";
            }
        }
        
    }, 50)
    
    if (campoPlayer.getAttribute("data-allowed") === "permitido"){
        campoPlayer.appendChild(cartaEscolhida)
    }

    else {
        mesaPlayer.appendChild(cartaEscolhida)
    }
}

function verificarCampoCarta(){
    const permissaoZonaCarta = campoPlayer.getAttribute("data-allowed")
    const cartaAtiva = campoPlayer.children.length

    if (permissaoZonaCarta === "negado" && cartaAtiva === 0){
        campoPlayer.setAttribute("data-allowed", "permitido")
    }

}