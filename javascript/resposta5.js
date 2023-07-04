let contador =0;

do {
    contador++;
    var resposta = prompt ("Eu sou lindo").toLowerCase().trim();
    if (resposta != "sim" && resposta != "s") {
        alert("Resposta errada! Tente Novamente $ {contador}.");
    }
} 

while (resposta != "sim" && resposta != "s");
alert("Parabéns! Você acertou");