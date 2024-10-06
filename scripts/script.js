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
    console.log('Player Pressed',playerPressed);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //console.log(currentAlphabetElement.innerText);
    console.log(playerPressed,expectedAlphabet);


    if(playerPressed === expectedAlphabet){
        console.log('You got a point');
    }
    else{
        console.log('You missed. You lost a life');
    }

}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);

function continueGame(){
      const alphabet = getARandomAlphabet();
      console.log('Your random alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}