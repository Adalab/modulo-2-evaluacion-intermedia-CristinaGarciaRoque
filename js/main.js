'use strict'
const dado = document.querySelector('.js-dado');
const bet = document.querySelector('.input-bet');
const btn = document.querySelector('.js-play-btn');
let saldo = document.querySelector('.saldo').innerHTML

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

   btn.addEventListener("click", () => {
    let randomNumber = getRandomNumber(6);
    let numeroApostado = dado.options[dado.selectedIndex].value;
    let money = bet.value;
    if(numeroApostado == randomNumber){ saldo = saldo*2;
    }else{
        saldo = saldo-money;
    }
    console.log(randomNumber);
     
  }); 
