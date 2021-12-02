//Генерація рандомних чисел від 1 до 6
const firstRandomNum = Math.floor(Math.random()* 6) +1

const firstDiceImg = 'dice' + firstRandomNum + '.png';

document.querySelectorAll
('img')[0]. setAttribute
('src', firstDiceImg);


const secondRandomNum = Math.floor(Math.random()* 6) +1

const secondDiceImg = 'dice' + secondRandomNum + '.png';

document.querySelectorAll
('img')[1]. setAttribute
('src', secondDiceImg);

if (firstRandomNum>secondRandomNum) {
  document.querySelector('h1').innerHTML = '&#128681;Player 1 Wins';
} else if (firstRandomNum<secondRandomNum) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins&#128681;';
} else {
  document.querySelector('h1').innerHTML = 'Draw!';
}
