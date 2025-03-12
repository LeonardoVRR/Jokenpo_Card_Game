const btnIniciarPartida = document.getElementById("btnIniciarPartida")
const btnIniciarProxPartida = document.getElementById("btnIniciarProxPartida")

const telaJogo = document.querySelector(".TelaJogo")
let timerInteration = 3

let qtdVitorias = 0
let qtdEmpates = 0
let qtdDerrotas = 0

for (let i = 1; i <= 5; i++) {
    vericarCartasAdversario()
    vericarCartasPlayer()
}

setTimeout(()=>{
    jogadaAdversario()
}, 1000)

function verificarCartasArena(){

    if (campoPlayer.children.length === 1 && campoAdversario.children.length === 1){
        const cartaAtivaPlayer = campoPlayer.childNodes[1]
        cartaAtivaPlayer.classList.toggle("flip-card_back")
        cartaAtivaPlayer.setAttribute("draggable", "false")

        if (cartaAtivaPlayer.classList.contains("flip-card_back")){
            setTimeout(()=>{cartaAtivaPlayer.children[0].setAttribute("src", "./src/assets/images/card back side/carta_parte_de_tras.png")},300)
    
            cartaAtivaPlayer.addEventListener("animationend", ()=>{
                setTimeout(()=>{cartaAtivaPlayer.classList.remove("flip-card_back")}, 3000)
            })
        }

        timerIniciarPartida()
    }

}

function iniciarPartida() {
    btnIniciarPartida.setAttribute("disabled", "true")

    const cartaAtivaPlayer = campoPlayer.childNodes[1]
    const cartaAtivaAdversario = campoAdversario.children[0]

    const cartaAtivaPlayer_Img = cartaAtivaPlayer.childNodes[0].getAttribute("alt")
    const cartaAtivaAdversario_Img = campoAdversario.children[0].children[0].getAttribute("alt")

    cartaAtivaPlayer.children[0].setAttribute("src", `${cartaAtivaPlayer_Img}`)
    cartaAtivaPlayer.classList.toggle("flip-card_front")

    cartaAtivaAdversario.children[0].setAttribute("src", `${cartaAtivaAdversario_Img}`)
    cartaAtivaAdversario.classList.toggle("flip-card_front")
    
    setTimeout(()=>{
        regrasJokenpo() 
    }, 1000)

}

function regrasJokenpo(){
    const cartaAdversario = campoAdversario.children[0].children[0].getAttribute("data-jkp")
    const cartaPlayer = campoPlayer.childNodes[1].childNodes[0].getAttribute("data-jkp")

    const resultadoPartida = document.createElement("img")
    resultadoPartida.setAttribute("class", "resultadoPartida")

    if (cartaAdversario === cartaPlayer){
        resultadoPartida.setAttribute("src", "./src/assets/images/game match/TIED-MATCH.gif")
        qtdEmpates += 1
    }

    else if (cartaAdversario === "pedra" && cartaPlayer !== "papel"){
        resultadoPartida.setAttribute("src", "./src/assets/images/game match/YOU-LOSE.gif")
        qtdDerrotas += 1
    }

    else if (cartaAdversario === "papel" && cartaPlayer !== "tesoura"){
        resultadoPartida.setAttribute("src", "./src/assets/images/game match/YOU-LOSE.gif")
        qtdDerrotas += 1
    }


    else if (cartaAdversario === "tesoura" && cartaPlayer !== "pedra"){
        resultadoPartida.setAttribute("src", "./src/assets/images/game match/YOU-LOSE.gif")
        qtdDerrotas += 1
    }

    else {
        resultadoPartida.setAttribute("src", "./src/assets/images/game match/YOU-WIN.gif")
        qtdVitorias += 1
    }

    document.querySelector(".qtdVitorias").innerHTML = `Victories: ${qtdVitorias}`
    document.querySelector(".qtdEmpates").innerHTML = `Draws: ${qtdEmpates}`
    document.querySelector(".qtdDerrotas").innerHTML = `Defeats: ${qtdDerrotas}`

    telaJogo.appendChild(resultadoPartida)

    btnIniciarProxPartida.style.display = "block";

    btnIniciarProxPartida.addEventListener("click", proximaPartida)

}

function proximaPartida() {
    const removerCartaPlayer = campoPlayer.childNodes[1]
    const removerCartaAdversario = campoAdversario.children[0]

    campoPlayer.removeChild(removerCartaPlayer)
    campoAdversario.removeChild(removerCartaAdversario)

    btnIniciarProxPartida.style.display = "none";
    btnIniciarPartida.style.display = "none"

    btnIniciarPartida.removeAttribute("disabled")

    campoPlayer.setAttribute("data-allowed", "permitido")
    timerInteration = 3

    const removerResultadoPartida = document.querySelector(".resultadoPartida")

    telaJogo.removeChild(removerResultadoPartida)

    jogadaAdversario()
}

function timerIniciarPartida(){

    if (timerInteration <= 3 && timerInteration > 0){
        const timer = document.createElement("img")
        timer.setAttribute("src", `./src/assets/images/game match/timer_${timerInteration}.png`)
        timer.setAttribute("class", "timerPartida")
        
        telaJogo.appendChild(timer)
        
        timer.classList.toggle("timerAnimation")

        timer.addEventListener("animationend", ()=>{
            const removerTimer = document.querySelector(".timerAnimation")
            telaJogo.removeChild(removerTimer)
            timerIniciarPartida()
        })
    }

    else if (timerInteration === 0) {
        const timer = document.createElement("img")
        timer.setAttribute("class", "endTimerAnimation")
        timer.setAttribute("src", `./src/assets/images/game match/Fight.png`)

        telaJogo.appendChild(timer)
        timer.classList.toggle("timerAnimation")

        timer.addEventListener("animationend", ()=>{
            const removerTimer = document.querySelector(".endTimerAnimation")
            telaJogo.removeChild(removerTimer)

            iniciarPartida()
        })
    }

    timerInteration -= 1

}