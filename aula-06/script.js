let palpite = null;
let tentativas = 0;
let primeiraVez = true;
let chute;

const sorteado = Number(Math.round(Math.random() * 10));

alert(`Estou pensando em um número entre 0 e 10. Advinhe qual é!`);

while (palpite != sorteado) {

    if(primeiraVez) {
        chute = prompt('Insira o seu palpite:');
    } else {
        chute = prompt(`Errou! Tente novamente:`)
    }

    primeiraVez = false;    
    palpite = Number(chute);
    tentativas++;
}

let dePrimeira = tentativas == 1;

const acertouDePrimeira = `Uou! Você acertou de primeira!`;
const acertou = `Parabéns! Você acertou em ${tentativas} tentativas.`;

dePrimeira ? alert(acertouDePrimeira) : alert(acertou);