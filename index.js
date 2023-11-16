
function calcularNivel (vitorias, derrotas) {
    let saldoPartidas = vitorias - derrotas
let nivelJogador;

if (vitorias < 10) {
    nivelJogador ="Ferro";
} else if (vitorias >= 10 && vitorias <= 20){
    nivelJogador = "Bronze";

} else if (vitorias >= 21 && vitorias <= 50) {
    nivelJogador = "Prata";

} else if (vitorias >= 51 && vitorias <= 80) {
    nivelJogador = "Ouro";

} else if (vitorias >= 81 && vitorias <= 90) {
    nivelJogador = "Diamante";

} else if (vitorias >= 91 && vitorias <= 100) {
    nivelJogador = "Lendario";

} else {
    nivelJogador = "Imortal";
}

    return "O jogador tem um saldo de " + saldoPartidas + " e está no nível " + nivelJogador;
}

let resultado = calcularNivel(120, 34)
console.log(resultado); 