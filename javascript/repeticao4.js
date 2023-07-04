let resposta = prompt ("Eu sou lindo").toLowerCase().trim();
let naeSatsfatorio = resposta != "sim";
while (naeSatsfatorio){
    alert("Resposta errada! Tente Novamente.")
    resposta = prompt ("Eu sou lindo").toLowerCase().trim();
    naeSatsfatorio = prompt ("Eu sou lindo");
}
alert("Parabéns! Você acertou");

