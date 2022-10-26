let phrases = { 
    quote1: ['jaws', 'O/Brother Where Art Tho', 'The Lord of The Ring Trilogy', 'Shawshank Redemtion', 'Saving Private Ryan'],
    quote2: ['lacking production value', 'more dry than a pop tart', 'not violent enough', 'shity', 'absolute trash'],
    quote3: ['I heard the director had a stomich bug', "the budget wasn't big enough", 'it looked like iphone footage', 'i said so', 'bad acting'],
 }



 let getOpinion = () => {

    return `I thought ${phrases.quote1[Math.floor(Math.random() * 4)]} was ${phrases.quote2[Math.floor(Math.random() * 4)]} because ${phrases.quote3[Math.floor(Math.random() * 4)]}`

 }

 console.log(getOpinion())

