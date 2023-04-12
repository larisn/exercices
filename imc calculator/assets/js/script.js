
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
   event.preventDefault(); // para a pag não atualizar

   const weight = document.getElementById('weight').value;
   const height = document.getElementById('height').value;

   const imc = (weight / (height * height)).toFixed(2);

   const value = document.getElementById('value');
   let description = ''; // variável que pode ter vários valores, no caso se encaixa no valor dos if's

   value.classList.add('attention'); // deixa o texto vermelho caso o imc seja maior que o normal

   document.getElementById('infos').classList.remove('hidden');

   if(imc < 18.5) {
      description = 'Cuidado! Você está abaixo do peso.';
   } else if (imc >= 18.5 && imc <= 25) {
      description = 'Você está no peso ideal';
      value.classList.remove('attention');
      value.classList.add('normal'); // deixa o texto verde caso o imc normal
   } else if (imc >= 25 && imc <= 30) {
      description = 'Cuidado! Você está com sobrepeso';
   } else if (imc >= 30 && imc <= 35) {
      description = 'Cuidado! Você está com obesidade moderada';
   } else if (imc >= 35 && imc <= 40) {
      description = 'Cuidado! Você está com obesidade severa';
   } else {
      description = 'Cuidado! Você está com obesidade mórbida';
   }

   value.textContent = imc.replace('.', ','); // adicionando o imc ao value / trocando o ponto pela vírgula
   document.getElementById('description').textContent = description;
});