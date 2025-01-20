// Referenciar inputs e eventos
let inpHoras = document.querySelector('#horas');
let btn = document.querySelector('#btn');
let art = document.querySelector('#div');
const horaFixa = 24;

btn.onclick = function(){
   // Recuperamos o valor do input e transformamos ele em float
   let Horas = parseFloat(inpHoras.value);
   // Verifica se o valor inserido nao e um numero, ABC = True nao e um numero, 34 = False e um numero
   if(isNaN(Horas)){
      // Remover msg anteriores para evitar duplicatas
      art.innerHTML = '';

      // Criar mensagem de erro
      let span = document.createElement('span');
      // Msg de erro
      let error = document.createTextNode('Apenas numeros sao permitidos.');
      // Adicionar ao span
      span.appendChild(error);
      // Adicionar span a div
      art.appendChild(span);
   }
   // Negamos o valor de horas == NaN verifica se nao e um numero, ! inverte isso entao == ABC, nao e um numero entao True o !(Not) inverte isso ele passa a ser false, 34 == False e um numero, ! inverte isso, entao True para numeros
   if(!isNaN(Horas)){
      // Removemos os resultados anteriores
      art.innerHTML = '';
      // Dividimos a horas por 24 horas (horaFixa)
      let dias = Horas / horaFixa;
      // Mostramos apenas seis casas apos a virgula
      convert = dias.toFixed(6);
      // Transformamos esse numero em uma string
      convert + '';

      // Criar elemento
      let span = document.createElement('p');
      // Criar elemento de texto
      let txtP = document.createTextNode(`O total de dias: ${convert}`);
      // Adicionar ao paragrafo
      span.appendChild(txtP);
      // Adicionar o paragrafo na div
      art.appendChild(span);
   }
}