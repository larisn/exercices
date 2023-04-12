
const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updateValue = () => {
   value.innerHTML = count; // att o valor exibido na tela
}

let count = 0; // valor que vai aparecer na tela - inicia em 0
let intervalId = 0;

plusButton.addEventListener('mousedown', () => {
   intervalId = setInterval(() => {
      count += 1;
      updateValue();
   }, 50);
});

minusButton.addEventListener('mousedown', () => {
   intervalId = setInterval(() => {
      count -= 1;
      updateValue();
   }, 50);
});

resetButton.addEventListener('click', () => {
   count= 0;
   updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId)); // para programa entender que o mouse foi soltado

