/* function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    //console.log(homeSection.classList);


    const playgroundSection = document.getElementById('play-ground');
    playgroundSection.classList.remove('hidden');
    //console.log(playgroundSection.classList); 
} */

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    //console.log('Player Pressed',playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //console.log(currentAlphabetElement.innerText);
    //console.log(playerPressed,expectedAlphabet);


    if(playerPressed === expectedAlphabet){
        console.log('You got a point');

        //Update score:
        //1. get the current score
        
        
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScoreText);

        //2. increase the score by 1
        const newScore = currentScore+1;
        

        //3. Show the updated score
        currentScoreElement.innerText = newScore;


        //Start new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed. You lost a life');

        //Step-1 : get the current Life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        //Step-2 : reduce the life count
        const newLife =currentLife - 1;
        
        //Step-3: display the updated life count
        currentLifeElement.innerText = newLife;

        if(newLife === 0)
        {
            gameOver();
        }

    }

}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame(){
      const alphabet = getARandomAlphabet();
      //console.log('Your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}