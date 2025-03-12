const btnComprarCarta = document.querySelector(".btnComprarCartas")

const mesaPlayer = document.querySelector(".TelaJogo__mesaPlayer")
const campoPlayer = document.querySelector(".campoPlayer")

const mesaAdversario = document.querySelector(".TelaJogo__mesaAdversario")
const campoAdversario = document.querySelector(".campoAdversario")

btnComprarCarta.addEventListener("click", vericarCartasPlayer)

const jokempo = ["pedra", "papel", "tesoura"]

function vericarCartasPlayer() {
    const qtdCartasPlayer = mesaPlayer.children.length
    const cartaAtiva = campoPlayer.children.length

    const gerarCartaAleatoria = Math.floor(Math.random() * 3)

    if (qtdCartasPlayer < 5){

        if (cartaAtiva === 1 && qtdCartasPlayer < 4) {
            
            let cartaNovaImg = document.createElement("img")
            cartaNovaImg.setAttribute("src", `./src/assets/images/card front side/${jokempo[gerarCartaAleatoria]}.png`)
            cartaNovaImg.setAttribute("alt", `./src/assets/images/card front side/${jokempo[gerarCartaAleatoria]}.png`)
            cartaNovaImg.setAttribute("class", "mesaPlayer__CartaImg")
            cartaNovaImg.setAttribute("draggable", "false")

            if (gerarCartaAleatoria === 0) {
                cartaNovaImg.setAttribute("data-jkp", "pedra")
            }

            else if (gerarCartaAleatoria === 1) {
                cartaNovaImg.setAttribute("data-jkp", "papel")
            }

            else {
                cartaNovaImg.setAttribute("data-jkp", "tesoura")
            }

            let cartaNova = document.createElement("div")
            cartaNova.setAttribute("class", "mesaPlayer__Carta mesaPlayer__Carta_foco")
            cartaNova.setAttribute("id", `mesaPlayer__Carta_${qtdCartasPlayer+1}`)
            cartaNova.setAttribute("draggable", "true")
            
            cartaNova.appendChild(cartaNovaImg)
            mesaPlayer.appendChild(cartaNova)
        }

        else if (cartaAtiva === 0 && qtdCartasPlayer < 5){
            let cartaNovaImg = document.createElement("img")
            cartaNovaImg.setAttribute("src", `./src/assets/images/card front side/${jokempo[gerarCartaAleatoria]}.png`)
            cartaNovaImg.setAttribute("alt", `./src/assets/images/card front side/${jokempo[gerarCartaAleatoria]}.png`)
            cartaNovaImg.setAttribute("class", "mesaPlayer__CartaImg")
            cartaNovaImg.setAttribute("draggable", "false")

            if (gerarCartaAleatoria === 0) {
                cartaNovaImg.setAttribute("data-jkp", "pedra")
            }

            else if (gerarCartaAleatoria === 1) {
                cartaNovaImg.setAttribute("data-jkp", "papel")
            }

            else {
                cartaNovaImg.setAttribute("data-jkp", "tesoura")
            }

            let cartaNova = document.createElement("div")
            cartaNova.setAttribute("class", "mesaPlayer__Carta mesaPlayer__Carta_foco")
            cartaNova.setAttribute("id", `mesaPlayer__Carta_${qtdCartasPlayer+1}`)
            cartaNova.setAttribute("draggable", "true")
            
            cartaNova.appendChild(cartaNovaImg)
            mesaPlayer.appendChild(cartaNova)
        }

        else {
            console.log("Você não pode mais comprar cartas!!!")
        }
    }

    else {
        console.log("Você não pode ter mais de 5 cartas no deck!!!")
    }

    configCartasPlayer()
}

function vericarCartasAdversario() {
    const qtdCartasAdversario = mesaAdversario.children.length
    const cartaAtiva = campoAdversario.children.length

    const gerarCartaAleatoria = Math.floor(Math.random() * 3)

    if (qtdCartasAdversario < 5){

        if (cartaAtiva === 1 && qtdCartasAdversario < 4) {
            
            let cartaNovaImg = document.createElement("img")
            cartaNovaImg.setAttribute("src", `./src/assets/images/card back side/carta_parte_de_tras.png`)
            cartaNovaImg.setAttribute("alt", `./src/assets/images/card front side/${jokempo[gerarCartaAleatoria]}.png`)
            cartaNovaImg.setAttribute("class", "mesaAdversario__CartaImg")
            cartaNovaImg.setAttribute("draggable", "false")

            if (gerarCartaAleatoria === 0) {
                cartaNovaImg.setAttribute("data-jkp", "pedra")
            }

            else if (gerarCartaAleatoria === 1) {
                cartaNovaImg.setAttribute("data-jkp", "papel")
            }

            else {
                cartaNovaImg.setAttribute("data-jkp", "tesoura")
            }

            let cartaNova = document.createElement("div")
            cartaNova.setAttribute("class", "mesaAdversario__Carta")
            cartaNova.setAttribute("id", `mesaAdversario__Carta_${qtdCartasAdversario+1}`)
            cartaNova.setAttribute("draggable", "false")
            
            cartaNova.appendChild(cartaNovaImg)
            mesaAdversario.appendChild(cartaNova)
        }

        else if (cartaAtiva === 0 && qtdCartasAdversario < 5){
            let cartaNovaImg = document.createElement("img")
            cartaNovaImg.setAttribute("src", `./src/assets/images/card back side/carta_parte_de_tras.png`)
            cartaNovaImg.setAttribute("alt", `./src/assets/images/card front side/${jokempo[gerarCartaAleatoria]}.png`)
            cartaNovaImg.setAttribute("class", "mesaAdversario__CartaImg")
            cartaNovaImg.setAttribute("draggable", "false")

            if (gerarCartaAleatoria === 0) {
                cartaNovaImg.setAttribute("data-jkp", "pedra")
            }

            else if (gerarCartaAleatoria === 1) {
                cartaNovaImg.setAttribute("data-jkp", "papel")
            }

            else {
                cartaNovaImg.setAttribute("data-jkp", "tesoura")
            }

            let cartaNova = document.createElement("div")
            cartaNova.setAttribute("class", "mesaAdversario__Carta")
            cartaNova.setAttribute("id", `mesaAdversario__Carta_${qtdCartasAdversario+1}`)
            cartaNova.setAttribute("draggable", "false")
            
            cartaNova.appendChild(cartaNovaImg)
            mesaAdversario.appendChild(cartaNova)
        }

        else {
            console.log("Adversario não pode mais comprar cartas!!!")
        }
    }

    else {
        console.log("Adversario não pode ter mais de 5 cartas no deck!!!")
    }
}

function configCartasPlayer(){
    if (mesaPlayer.children.length >= 1){
        const configCartasPlayer = mesaPlayer.childNodes
        
        for (let i = 1; i <= mesaPlayer.children.length; i++) {
            const card_new_ID = configCartasPlayer[i];
            card_new_ID.setAttribute("id", `mesaPlayer__Carta_${i}`)
            //console.log(card_new_ID)
        }
    }
}

function configCartasAdversario(){
    if (mesaAdversario.children.length >= 1){
        const configCartasAdversario = mesaAdversario.children

        cartasAdversarioDisp.length = 0
        
        for (let i = 0; i < mesaAdversario.children.length; i++) {
            const card_new_ID = configCartasAdversario[i];
            card_new_ID.setAttribute("id", `mesaAdversario__Carta_${i+1}`)
            //console.log(card_new_ID)

            cartasAdversarioDisp.push(i+1)
        }
        
        //console.log("------------------------\nCartas Disp. Adv. depois de comprar cartas:", cartasAdversarioDisp, "\n------------------------")
    }
}