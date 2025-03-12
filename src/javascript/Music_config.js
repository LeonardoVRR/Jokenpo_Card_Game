const gameMusic = document.getElementById("gameMusic")
const musicControler = document.querySelector(".musicControler")
const controlesPlayerMusic = document.querySelector(".controlesPlayerMusic")
const music_volume_control_container = document.querySelector(".music_volume_control")

let volumemusicaAtualPlaylist_1 = 0.2
let music_Status = "Off"
let volumeMusicControl = document.getElementById("music_volume_control")

const btnMusica = document.querySelector(".TelaJogo__btnMusica")
const btnProxMusic = document.querySelector(".proxMusic")
const btnPrevMusic = document.querySelector(".prevMusic")

let musicaAtualPlaylist_1 = 1
let musicaAtualPlaylist_2 = 0
let playListAtual = 1

volumeMusicControl.addEventListener('input', function() {
    document.querySelector(".volumeMusicaAtual").textContent = this.value + "%"
    volumemusicaAtualPlaylist_1 = Number(this.value / 100)

    gameMusic.volume = volumemusicaAtualPlaylist_1
});

btnMusica.addEventListener("click", ()=>{
    btnMusica.classList.toggle("mudo")

    if (btnMusica.classList.contains("mudo")){
        btnMusica.children[0].setAttribute("src", "./src/assets/images/music controls/SoundOff/Hover@2x.png")

        gameMusic.pause()

        music_Status = "Off"
    }

    else {
        btnMusica.children[0].setAttribute("src", `./src/assets/images/music controls/SoundOn/Hover@2x.png`)

        gameMusic.play()
        gameMusic.volume = volumemusicaAtualPlaylist_1

        music_Status = "On"
    }
})

btnMusica.addEventListener("mouseover", ()=>{
    btnMusica.children[0].setAttribute("src", `./src/assets/images/music controls/Sound${music_Status}/Hover@2x.png`)

    music_volume_control_container.style.display = "block";

    controlesPlayerMusic.addEventListener("mouseover", ()=>{
        btnPrevMusic.style.visibility = "visible";
        btnProxMusic.style.visibility = "visible";
        music_volume_control_container.style.display = "block";
    })
})

btnProxMusic.addEventListener("mouseover", ()=>{
    btnProxMusic.children[0].setAttribute("src", `./src/assets/images/music controls/ArrowRight/Hover@2x.png`)
})

btnPrevMusic.addEventListener("mouseover", ()=>{
    btnPrevMusic.children[0].setAttribute("src", `./src/assets/images/music controls/ArrowLeft/Hover@2x.png`)
})

music_volume_control_container.addEventListener("mouseover", ()=>{
    music_volume_control_container.style.display = "block";
})

controlesPlayerMusic.addEventListener("mouseover", (e)=>{
    const btnPlayerAtivo = e.target.parentElement

    if (btnPlayerAtivo.classList.contains("TelaJogo__btnMusica")){
        btnPlayerAtivo.addEventListener("mouseout", ()=>{
            btnPlayerAtivo.children[0].setAttribute("src", `./src/assets/images/music controls/Sound${music_Status}/Default@2x.png`)
        })

    }

    else if (btnPlayerAtivo.classList.contains("proxMusic")) {
        btnPlayerAtivo.addEventListener("mouseout", ()=>{
        btnPlayerAtivo.children[0].setAttribute("src", `./src/assets/images/music controls/ArrowRight/Default@2x.png`)
        })
    }

    else {
        btnPlayerAtivo.addEventListener("mouseout", ()=>{
        btnPlayerAtivo.children[0].setAttribute("src", `./src/assets/images/music controls/ArrowLeft/Default@2x.png`)
        })
    }

})

controlesPlayerMusic.addEventListener("mouseout", ()=>{
    btnPrevMusic.style.visibility = "hidden";
    btnProxMusic.style.visibility = "hidden";
})

music_volume_control_container.addEventListener("mouseout", ()=>{
    music_volume_control_container.style.display = "none";
})

musicControler.addEventListener("mouseout", ()=>{
    music_volume_control_container.style.display = "none";
})

btnProxMusic.addEventListener("click", ()=>{
    music_Status = "off"
    btnMusica.classList.add("mudo")

    btnMusica.children[0].setAttribute("src", `./src/assets/images/music controls/Sound${music_Status}/Default@2x.png`)

    if (musicaAtualPlaylist_1 < 16 && musicaAtualPlaylist_2 === 0){
        playListAtual = 1

        musicaAtualPlaylist_1 += 1
        gameMusic.setAttribute("src", `./src/assets/sounds/music_pack_${playListAtual}/Stream Loops 2024 (${musicaAtualPlaylist_1}).ogg`)
    }

    else {
        playListAtual = 2
        musicaAtualPlaylist_1 = 0

        if (musicaAtualPlaylist_2 < 9 && musicaAtualPlaylist_1 === 0){
            
            musicaAtualPlaylist_2 += 1
            gameMusic.setAttribute("src", `./src/assets/sounds/music_pack_${playListAtual}/DavidKBD - Pink Bloom Pack - 0${musicaAtualPlaylist_2}.ogg`)
        }

        else {   
            playListAtual = 1
            musicaAtualPlaylist_1 = 1
            musicaAtualPlaylist_2 = 0

            gameMusic.setAttribute("src", `./src/assets/sounds/music_pack_${playListAtual}/Stream Loops 2024 (${musicaAtualPlaylist_1}).ogg`)
        }

    }

})

btnPrevMusic.addEventListener("click", ()=>{
    music_Status = "off"
    btnMusica.classList.add("mudo")
    
    btnMusica.children[0].setAttribute("src", `./src/assets/images/music controls/Sound${music_Status}/Default@2x.png`)

    if (musicaAtualPlaylist_1 > 1 && musicaAtualPlaylist_2 === 0){
        musicaAtualPlaylist_1 -= 1
        gameMusic.setAttribute("src", `./src/assets/sounds/music_pack_${playListAtual}/Stream Loops 2024 (${musicaAtualPlaylist_1}).ogg`)
    }

    else {
        musicaAtualPlaylist_1 = 0
        playListAtual = 2

        if (musicaAtualPlaylist_2 === 0){
            musicaAtualPlaylist_2 = 10
        }

        if (musicaAtualPlaylist_2 > 1 && musicaAtualPlaylist_1 === 0) {
            playListAtual = 2
            musicaAtualPlaylist_2 -= 1
            gameMusic.setAttribute("src", `./src/assets/sounds/music_pack_${playListAtual}/DavidKBD - Pink Bloom Pack - 0${musicaAtualPlaylist_2}.ogg`)
        }

        else {
            musicaAtualPlaylist_1 = 16
            musicaAtualPlaylist_2 = 0
            playListAtual = 1
            gameMusic.setAttribute("src", `./src/assets/sounds/music_pack_${playListAtual}/Stream Loops 2024 (${musicaAtualPlaylist_1}).ogg`)
        }
    }

})
