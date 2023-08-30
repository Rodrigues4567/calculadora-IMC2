
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const button = document.querySelector('.button');

button.addEventListener('click', calcular = () => {
    resultado('olá galerinha!')
})

function resultado(msg) {
    let resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('paragrafo-resultado');
    resultado.appendChild(paragrafo);
    paragrafo.innerHTML = 'Fala ai, man'
}