
const button = document.querySelector('.button');

button.addEventListener('click', calcular = () => {
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;

    const imc = getImc(peso, altura).toFixed(2);
    const medidaImc = medidasImc(imc);

    if (peso == '' || altura == '') {
        resultado('ERRO! Resultado inválido.')
    }
    else {
        resultado(`Seu IMC é ${imc} (${medidaImc})`);
    }
})

function criaP() {
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('paragrafo-resultado')
    return paragrafo;
}

function resultado(msg) {
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const paragrafo = criaP();
    resultado.appendChild(paragrafo);
    paragrafo.innerHTML = msg;
}

function getImc(peso, altura) {
    return peso / (altura * altura);
}

function medidasImc(imc) {
    if (imc >= 39.9) {return 'Você está com obesidade grau 3, procure um médico.'}
    if (imc >= 34.9) {return 'Você está com obesidade grau 2.'}
    if (imc >= 29.9) {return 'Você está com obesidade grau 1.'}
    if (imc >= 24.9) {return 'Você está acima do peso.'}
    if (imc >= 18.5) {return 'Você está com peso normal.'}
    if (imc < 18.5) {return 'Você está abaixo do peso.'}
}