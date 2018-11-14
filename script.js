// DESAFIO
/*
- Gerar 5 números aleatórios;
- Concatenar os 5 números em uma string;
  Número aleatório: '14590'
- Pedir para o usuário tentar descobrir sua senha (que é o número aleatório)
  - Se o usuário digitar um número no local correto, colocar um 'O';
    Senha: '14590'
    Input: '24607'
    Saída: ' O   '
  - Se o usuário digitar um número que está no local errado, mas existe na string, colocar um '-';
    Senha: '14590'
    Input: '42607'
    Saída: '-    '
  - Se o usuário digitar um número que está no local errado, e não existe na string, colocar um 'X';
    Senha: '14590'
    Input: '42507'
    Saída: '-xOxx'
- O usuário precisa acertar a senha por completo;
- O usuário tem 10 tentativas de acerto;
*/
let senha = [];
let chute = '';
let resposta = [];
let j = 10;
let senhaText = '';
let gerarSenha = () =>{
 for(i=0 ; i <= 4 ; i++){
     senha.push(getRandomInt(0,9));
 }
 console.log(senha);
  let senhaText= `${senha[0]}`+`${senha[1]}`+`${senha[2]}`+`${senha[3]}`+`${senha[4]}`;
 return senhaText;
}
let façaUmChute = () =>{
 chute = prompt('Faça um chute');
 analisador(chute)
 return chute
}
let analisador = () =>{
  let chuteArray = chute.split('');
   for(i=0 ;  i <= 4; i++){
    if(chuteArray[i]==senha[i]){
      resposta[i] = 'O';
    }
    else{
      if(chuteArray[i] == senha[0]|| chuteArray[i] == senha[1]|| chuteArray[i] == senha[2]||chuteArray[i] == senha[3]||chuteArray[i] == senha[4]){
        resposta[i]='-';
      }
      else{
        resposta[i]='x';
        
      }
    }
  }return resposta;
}

