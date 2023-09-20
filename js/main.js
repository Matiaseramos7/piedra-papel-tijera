const contador = document.querySelector('.contador')
// console.log(contador.textContent.trim())
const resultado = document.querySelector('.ganador')
// console.log(resultado.textContent)
const piedra = document.querySelector('.piedra')
// console.log(piedra.alt)
const papel = document.querySelector('.papel')
// console.log(papel.alt)
const tijera = document.querySelector('.tijera')
// console.log(tijera.alt)
const pptOpciones = ['piedra', 'papel', 'tijera']

const pGanador = document.querySelector('.ganador')

const usuario = document.querySelector('.usuario')
const player2 = document.querySelector('.player2')

const contadorUsuario = document.querySelector('.usuarioNumber')
const contadorPC = document.querySelector('.pc')

let contadorPuntos = 0
let contadorPuntosPc = 0

const nombreJugador = prompt('ingrese su nombre')

const parrafoNombre = document.querySelector('.nombrePrompt')

if (nombreJugador === null || nombreJugador === '') {
    console.log('no se ingreso nada')
}else{
    parrafoNombre.innerHTML = nombreJugador.toUpperCase() 
}





function getRandomPPT() {
    const indiceRandom = Math.floor(Math.random() * pptOpciones.length)
    return pptOpciones[indiceRandom]
}


piedra.addEventListener('click', () => {
    const eleccionUsuario = 'piedra'
    const resultadoPC = getRandomPPT(pptOpciones)

    if (resultadoPC === eleccionUsuario) {
        console.log('Empate, ambos hicieron piedra')
        pGanador.textContent = 'Empate, ambos hicieron piedra'
        usuario.textContent = 'PIEDRA'
        player2.textContent = resultadoPC.toUpperCase()
    }

    else if (resultadoPC === 'tijera') {
        console.log('Ganaste, piedra rompe tijera')
        pGanador.textContent = 'Ganaste, piedra rompe tijera'
        usuario.textContent = 'PIEDRA'
        player2.textContent = resultadoPC.toUpperCase()
        contadorUsuario.textContent = contadorPuntos += 1
    }

    else if (resultadoPC === 'papel') {
        console.log('Perdiste, papel envuelve piedra')
        pGanador.textContent = 'Perdiste, papel envuelve piedra'
        usuario.textContent = 'PIEDRA'
        player2.textContent = resultadoPC.toUpperCase()
        contadorPC.textContent = contadorPuntosPc += 1
    }
})

papel.addEventListener('click', () => {
    const eleccionUsuario = 'papel'
    const resultadoPC = getRandomPPT(pptOpciones)


    if (resultadoPC === eleccionUsuario) {
        console.log('Empate, ambos hicieron papel')
        pGanador.textContent = 'Empate, ambos hicieron papel'
        usuario.textContent = 'PAPEL'
        player2.textContent = resultadoPC.toUpperCase()
    }

    else if (resultadoPC === 'tijera') {
        console.log('Perdiste, tijera corta papel')
        pGanador.textContent = 'Perdiste, tijera corta papel'
        usuario.textContent = 'PAPEL'
        player2.textContent = resultadoPC.toUpperCase()
        contadorPC.textContent = contadorPuntosPc += 1

    }

    else if (resultadoPC === 'piedra') {
        console.log('Ganaste, papel envuelve piedra')
        pGanador.textContent = 'Ganaste, papel envuelve piedra'
        usuario.textContent = 'PAPEL'
        player2.textContent = resultadoPC.toUpperCase()
        contadorUsuario.textContent = contadorPuntos += 1
    }
})

tijera.addEventListener('click', () => {
    const eleccionUsuario = 'tijera'
    const resultadoPC = getRandomPPT(pptOpciones)

    if (resultadoPC === eleccionUsuario) {
        console.log('Empate, ambos hicieron tijera')
        pGanador.textContent = 'Empate, ambos hicieron tijera'
        usuario.textContent = 'TIJERA'
        player2.textContent = resultadoPC.toUpperCase()
    }

    else if (resultadoPC === 'papel') {
        console.log('Ganaste, tijera corta papel')
        pGanador.textContent = 'Ganaste, tijera corta papel'
        usuario.textContent = 'TIJERA'
        player2.textContent = resultadoPC.toUpperCase()
        contadorUsuario.textContent = contadorPuntos += 1
    }

    else if (resultadoPC === 'piedra') {
        console.log('Perdiste, piedra rompe tijera')
        pGanador.textContent = 'Perdiste, piedra rompe tijera'
        usuario.textContent = 'TIJERA'
        player2.textContent = resultadoPC.toUpperCase()
        contadorPC.textContent = contadorPuntosPc += 1

    }
})


