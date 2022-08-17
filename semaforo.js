const img = document.getElementById( 'img' );
const buttons = document.getElementById( 'buttons' );
let colorIndex = 0;
let intervalId = null;
let sinal_vermelho = document.getElementById("red");
let sinal_amarelo = document.getElementById("yellow");
let sinal_verde = document.getElementById("green");
let sinal_automatico = document.getElementById("automatic")


sinal_vermelho.addEventListener("click", () => {
    alert("Aguarde!!!");
})

sinal_amarelo.addEventListener("click", () => {
    alert("Atenção!!!");
})

sinal_verde.addEventListener("click", () => {
    alert("Siga!!!");
})

sinal_automatico.addEventListener("click", () => {
    alert("O Semáforo está quebrado, siga as orientações do guarda!!!");
})


function trafficLight(event) {
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red','yellow','green']
    const color = colors[ colorIndex ];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval ( intervalId );
}

const turnOn = {
    'red':      () => img.src = './img/vermelho.png',
    'yellow':   () => img.src = './img/amarelo.png',
    'green':    () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval( changeColor, 1000 )
}

buttons.addEventListener('click', trafficLight );

