
let button = document.getElementById('button');
let titleQuote = document.getElementById("quote1");
let genQuote = document.getElementsByClassName("quote1");
let quote2 = document.getElementById('quote2');
let quote3 = document.getElementById('quote3');


let phrases = { 
    quote1: ['jaws', 'O/Brother Where Art Tho', 'The Lord of The Ring Trilogy', 'Shawshank Redemtion', 'Saving Private Ryan'],
    quote2: ['lacking production value', 'more dry than a pop tart', 'not violent enough', 'shity', 'absolute trash'],
    quote3: ['I heard the director had a stomich bug', "the budget wasn't big enough", 'it looked like iphone footage', 'i said so', 'bad acting'],
 }




 let getOpinion = () => {

   let one = phrases.quote1[Math.floor(Math.random() * 5)]
   let two = phrases.quote2[Math.floor(Math.random() * 5)]
   let three = phrases.quote3[Math.floor(Math.random() * 5)]

  
   //  return `I thought ${one} was ${two} because ${three}`

   titleQuote.innerHTML = one;
   genQuote[0].innerHTML = one
   quote2.innerHTML = two;
   quote3.innerHTML = three;

 }




button.addEventListener('click', getOpinion);