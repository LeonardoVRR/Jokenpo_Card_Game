let cartasAdversarioDisp = []

const campoArena = document.querySelector(".TelaJogo__arenaCartas")
const campoArenaAdversario = document.querySelector(".campoAdversario")

function jogadaAdversario(){

    let qtdCartasAdversario = mesaAdversario.children.length

    if (qtdCartasAdversario >= 0 && qtdCartasAdversario <= 2){
        for(let i=1; i <= (Math.floor(Math.random() * 5)+1); i++){
            vericarCartasAdversario()
        }
    }

    let escolherCarta = Math.floor(Math.random() * cartasAdversarioDisp.length)

    //console.log("------------------------\nCartas Disp. Adv. antes da jogada:", cartasAdversarioDisp)
    //console.log("carta escolhida: ", escolherCarta+1)
    
    const cartaSelecionada = document.getElementById(`mesaAdversario__Carta_${escolherCarta+1}`)

    let distancia_Adversario_Arena_Right = cartaSelecionada.offsetLeft - campoArenaAdversario.offsetLeft
    document.body.style.setProperty(`--posRight_Carta${escolherCarta+1}`, `${distancia_Adversario_Arena_Right}`)

    const distancia_Adversario_Arena_Top = campoArena.offsetTop - mesaAdversario.offsetTop
    document.body.style.setProperty("--posTop_Carta", `${distancia_Adversario_Arena_Top}`)

    cartaSelecionada.classList.add(`escolher_carta_${escolherCarta+1}_Adversario`)

    cartaSelecionada.addEventListener("animationend", ()=>{
        cartaSelecionada.setAttribute("class", "mesaAdversario__Carta_Arena")

        campoAdversario.appendChild(cartaSelecionada)
        document.body.removeAttribute("style")

        configCartasAdversario()
        
    })
    
    cartasAdversarioDisp.splice(escolherCarta, 1)
    //console.log("Cartas Disp. Adv. depois da jogada:", cartasAdversarioDisp, "\n------------------------")

}