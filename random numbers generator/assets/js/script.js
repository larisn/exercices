
const button = document.getElementById('generate');

button.addEventListener('click', () => {
   const min = parseInt(document.getElementById('min').value);
   const max = parseInt(document.getElementById('max').value);

   let result = Math.floor(Math.random() * (max - min + 1)) + min; 
   // floor (arredonda pra baixo), round (arredonda pro valor mais próximo), ceil (arredonda pra cima)

   if (isNaN(result)) {
      result = 'Valor inválido.'
   }
   
   document.querySelector('#result > span').textContent = result;
});