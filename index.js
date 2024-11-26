const maxInput = document.getElementsByClassName('maxInput')[0];
const minInput = document.getElementsByClassName('minInput')[0];
const generateBtn = document.getElementsByClassName('generateBtn')[0];
const randomNumber = document.getElementsByClassName('randomNumLabel')[0];

generateBtn.addEventListener('click', function() {
  console.log('clicked');
  let max = parseInt(maxInput.value);
  let min = parseInt(minInput.value);
  let randomNum = Math.floor(Math.random() * (max - min)) + min;
  randomNumber.textContent = randomNum;
});