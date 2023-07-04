//Crar um algoritmo que verifique a senha digitada e bloqueie o acesso na qarta tentativa. Senha 123456 

const senha = "123456";
let feedback = "bloqueado";
for (let tentativa = 0; tentativa < 4; tentativa++){
   senhaDigitada = prompt("Digite sua senha");
   if (senhaDigitada == senha){
       feedback = "Autorizado";
    break;
   }
   alert("Senha inválida! Tentativa ${tentativa + 1} de 4");
}
alert ("feedback");