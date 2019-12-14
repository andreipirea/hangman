const newWord = document.querySelector('#new-word')
const openWindow = document.querySelector('#open-window')
const start = document.querySelector('#start')
const title = document.querySelector('#title')
const divUnknownWord = document.querySelector('#unknown-word')



let rounds = 5

let unknownWord = []

const titleContainer = document.querySelector('.title-container')
const div = document.createElement('div')
div.setAttribute('id', 'unknown-word')

const guess = document.createElement('input')
guess.setAttribute('id', 'guess')
const submitGuess = document.createElement('input')
submitGuess.setAttribute('id', 'submit')
submitGuess.setAttribute('type', 'submit')


start.addEventListener('click', startGame)
guess.addEventListener('keyup', playGame)
openWindow.addEventListener('click', chooseWord)



function startGame(){
    rounds = 5
    unknownWord = []
    div.innerText = ''

    for (let i = 0; i < newWord.value.length; i++){
      unknownWord.push('_')
    }
    const node1 = document.createTextNode(unknownWord.join(' '))
    div.appendChild(node1)
    titleContainer.insertBefore(div, title)
    titleContainer.insertBefore(guess, title)
    document.getElementById('unknown-word').style.fontSize = '60px'
    document.getElementById('guess').style.width = '35px'
      
  
    title.innerText = `Ai ${rounds} incercari. Succes!`
}




function playGame(){ 
    div.innerText = ''
    for(let j = 0; j < newWord.value.length; j++ ){
      if(guess.value === newWord.value[j]){
        unknownWord[j] = guess.value.toUpperCase()
        title.innerText = `Ai ghicit! Litera \"${guess.value}\" se afla in cuvant!`
        console.log(rounds)
        if(unknownWord.includes('_') === false){
          document.getElementById('guess').remove()
          title.innerText =  'AI CASTIGAT!!!'
        }
      }
      
    }
    if(newWord.value.includes(guess.value) === false){
        rounds--
        title.innerText = `Litera \"${guess.value}\" nu se afla in cuvant. Mai ai ${rounds} incercari!`
        guess.value = ''
        if(rounds === 0){
          document.getElementById('guess').remove()
          title.innerText = `Nu ai ghicit cuvantul. Cuvantul corect este \"${newWord.value}\"`
        }
    }

    guess.value = ''
    
    const node2 = document.createTextNode(unknownWord.join(' '))
    div.appendChild(node2)
    titleContainer.insertBefore(div, guess)
  
}


function chooseWord(){

  newWord.value = ''
  start.style.display = 'none'
  newWord.addEventListener('keyup', () => {
    if(newWord.value.length === 0){
      start.style.display = 'none'
    }
  })
  newWord.addEventListener('keyup', () => {
    if(newWord.value.length !== 0){
      start.style.display = 'block'
    }
  })
}
