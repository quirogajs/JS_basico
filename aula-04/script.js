// nome do aluno
const nomeAluno = prompt('Informe o seu nome:');
let aprovado = false;

// notas
const nota1 = prompt('Informe a primeira nota:');
const nota2 = prompt('Informe a segunda nota:');
const nota3 = prompt('Informe a terceira nota:');

// calculo
let mediaBimestre = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

if (mediaBimestre >= 6) {
    aprovado = true;
}

mediaBimestre = mediaBimestre.toFixed(2);

// mensagens
const mensagemMedia = `A sua média foi ${mediaBimestre}.`;

const mensagemAprovado = `${mensagemMedia} Parabéns, ${nomeAluno}! Você está aprovado.`;

const mensagemReprovado = `${mensagemMedia} Ei, ${nomeAluno}. Você está de recuperação, estude e vai dar tudo certo!`;

// resultado
aprovado ? alert(mensagemAprovado) : alert(mensagemReprovado);