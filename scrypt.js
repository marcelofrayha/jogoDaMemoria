let sequencia = [];
let sequenciaJogada = [];
let placar = 0;
let ordem = [];

//0 = verde
//1 = amarelo
//2 = vermelho
//3 = azul

const azul = document.querySelector('.azul');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');
const vermelho = document.querySelector('.vermelho');

let mudaOrdem = () => {
    let ordemCor = Math.floor(Math.random() * 4);
    ordem[ordem.length] = ordemCor;
    sequenciaJogada = [];

    for (let i in ordem) {
        let corElemento = criarCorElemento(ordem[i]);
        acendeCor(corElemento, Number(i) + 1);
    }
}

//acende a próxima cor
let acendeCor = (elemento, numero) => {
    numero = numero * 500;
    setTimeout(() => {
        elemento.classList.add('selecionado');
        }, numero - 250);
        setTimeout(() => {
            elemento.classList.remove('selecionado');
        });
}

//checa se os botões clicados estão certos
let checarOrdem = () => {
    for (let i in sequenciaJogada) {
        if (sequenciaJogada[i] != ordem[i]) {
            perdeu();
            break;
        }
    }
    if (sequenciaJogada.length == ordem.length) {
        alert('Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!');
        proximoNivel();
    }
}

//função para o clique do usuário
let seleciona = (cor) => {
    sequenciaJogada[sequenciaJogada.length] = cor;
    criarCorElemento(cor).classList.add('selecionado');

    setTimeout(() => {
        criarCorElemento(cor).classList.remove('selecionado');
        checarOrdem();
    }, 250)
}

//função que retorna a cor
let criarCorElemento = (cor) => {
    if(cor == 0) {
        return verde;
    } else if(cor == 1) {
        return amarelo;
    } else if(cor == 2) {
        return vermelho;
    } else if(cor == 3) {
        return azul;
    }
}
//função para o próximo nível
let proximoNivel = () => {
    score++;
    mudaOrdem();
}

//função para lose
let perdeu = () => {
    alert('Pontuação: ${score}\nVocê perdeu o jogo. Clique em OK para iniciar um novo jogo');
    ordem = [];
    sequenciaJogada = [];
    jogar();    
}

let jogar = () => {
    alert('Bem vindo ao Jogo da Memória! Iniciando novo jogo.')
    score = 0;
    proximoNivel();
}

verde.addEventListener('seleciona', seleciona(0));
amarelo.addEventListener('seleciona', seleciona(1));
vermelho.addEventListener('seleciona', seleciona(2));
azul.addEventListener('seleciona', seleciona(3));


verde.onclick = () => seleciona(0);
amarelo.onclick = () => seleciona(1);
vermelho.onclick = () => seleciona(2);
azul.onclick = () => seleciona(3);

jogar();