import { requestEndPageContent } from './game_model';
import { requestPageContent } from './game_model';
import { initGameActionsBar } from '../components/game_actions_bar';
import { notifyRoundEnded } from './game_model';

//DOM ELEMENTS---------------------------------------------------
const gameInfo = document.getElementById('game-info');
const timerContainer = document.getElementById('timer-container');
const pageTitleContainer = document.getElementById('wikipage-title-container');
const pageContainer = document.getElementById('wikipage-container');
const infoContainer = document.getElementById('info-your-target-modal');
const infoGameCounter = document.getElementById('info-game-counter');
const infoGameMode = document.getElementById('info-game-mode');
const infoGameEndPageTitleContainer = document.getElementById('info-game-end-page-title-container');
const infoGameEndPageContainer = document.getElementById('info-game-end-page-container');
const infoGameCounterBig = document.getElementById('info-game-counter-big');
const gameEndModal = document.getElementById('game-end-modal');
//DATASET--------------------------------------------------------
let gameRound;
let gameState;
let gameStartPage;
let gameEndPage;
let gameParticipation;
let gameMode;
let currentUserId;

//Time-----------------------------------------------------------
let gameStartTime;
let gameLaunchTime;
let hoursElapsed = 0;
let minuteElapsed = 0;
let secondElapsed;
let myInterval;
const waitingTime = 10;
let counterDisplay;

//Current page--------------------------------------------------
let currentPage = gameStartPage;



const initGame = () => {
  if(gameInfo){
    gameRound = gameInfo.dataset.round;
    gameState = gameInfo.dataset.state;
    gameStartPage = gameInfo.dataset.startPage;
    gameEndPage = gameInfo.dataset.endPage;
    gameParticipation = gameInfo.dataset.participation;
    gameMode = gameInfo.dataset.gameMode;
    currentUserId = gameInfo.dataset.currentUser;
    gameStartTime = parseInt(gameInfo.dataset.startTime);
    gameLaunchTime = gameStartTime + waitingTime * 1000;
    const realTitle = gameEndPage.replace(/_/g, " ");
    infoGameEndPageTitleContainer.innerText = `La page cible est : ${realTitle}`;
    requestEndPageContent(gameEndPage);
    infoContainer.style.display = "block";
    myInterval = setInterval(gameLoop, 250);
  }
};

const gameLoop = () => {

  gameState = gameInfo.dataset.state;
  currentPage = gameInfo.dataset.currentPage;
  // checkGameState();
  // applyGameModeConditions();

  switch (gameState) {
  //Game initialization-----------------------------------------------------------
  case 'init':
    secondElapsed = Math.round(((gameLaunchTime - Date.now()) / 1000) % 60);
    if(secondElapsed > 4){
      counterDisplay = `Round starts in : ${secondElapsed}sec`;
      infoGameCounter.innerText = counterDisplay;
    } else {
      const realTitle = gameStartPage.replace(/_/g, " ");
      pageTitleContainer.innerText = realTitle;
      requestPageContent(gameStartPage);
      gameInfo.dataset.state = 'imminent';
      infoGameCounter.style.display= "none";
    }
    break;
  //-----------------------------------------------------------------------------
  case 'imminent':
    infoContainer.style.display = "block";
    infoGameCounterBig.style.display = "block";
    secondElapsed = Math.round(((gameLaunchTime - Date.now()) / 1000) % 60);
    counterDisplay = `Round starts in : ${secondElapsed}sec`;
    infoGameCounter.innerText = counterDisplay;
    if(secondElapsed === 0) {
      infoGameCounterBig.innerText = "GO!";
    } else if(secondElapsed < 0) {
      infoContainer.style.display = "none";
      infoGameCounterBig.style.display = "none";
      initGameActionsBar();
      //gameLaunchTime = Date.now();
      gameInfo.dataset.state = 'playing';
      // gameState = gameInfo.dataset.state;
    } else {
      infoGameCounterBig.innerText = secondElapsed;
    }
    break;
  //-----------------------------------------------------------------------------
  case 'playing':
    // GESTION DU TIMER----------
    secondElapsed = Math.round(((Date.now() -gameLaunchTime) / 1000) % 60);
    minuteElapsed = Math.floor(((Date.now() -gameLaunchTime) / 1000) / 60 % 60);
    hoursElapsed = Math.floor(((Date.now() -gameLaunchTime) / 1000) / 60 /60 % 60);
    if(secondElapsed < 10){
      secondElapsed = `0${secondElapsed}`
    } else if (secondElapsed === 60){
      minuteElapsed = minuteElapsed + 1;
      secondElapsed = '00';
    }
    if(minuteElapsed < 10){
      minuteElapsed = `0${minuteElapsed}`
    } else if (minuteElapsed === 60){
      hoursElapsed = hoursElapsed + 1;
      minuteElapsed = '00';
    }
    if(hoursElapsed < 10){
      hoursElapsed = `0${hoursElapsed}`
    }
    counterDisplay = `${hoursElapsed}:${minuteElapsed}:${secondElapsed}`;
    timerContainer.innerText = counterDisplay;
    // FIN DE LA GESTION DU TIMER----------


    if(gameMode === "Premier arrivé"){
      if(currentPage === gameEndPage){
        gameInfo.dataset.winner = currentUserId;
        notifyRoundEnded();
      }
    }

    if(gameInfo.dataset.malus === "reverse"){
      if(gameInfo.dataset.sender !== currentUserId){
        if(pageContainer.classList.contains('reverse-effect')){
        }else{
          pageContainer.classList.add('reverse-effect');
          const messageReceived = document.getElementById('malus-reverse');
          const messageReceivedPromise = messageReceived.play();
          messageReceived.currentTime = 0;
          if (messageReceivedPromise !== undefined) {
            messageReceivedPromise.then(function() {
              messageReceived.play();
            }).catch(function(error) {
              messageReceived.play();
              console.log("Probleme de chargement du son pour reverse effect!");
            });
          }
        }
      }else {
        if(pageContainer.classList.contains('reverse-effect')){pageContainer.classList.remove('reverse-effect')}
      }
    }

    if(gameInfo.dataset.malus === "reverse-end"){
      if(pageContainer.classList.contains('reverse-effect')){pageContainer.classList.remove('reverse-effect')}
    }

    break;
  //-----------------------------------------------------------------------------
  case 'ended':
  // display modal of end game with a button link to the show de round
    gameEndModal.style.display = 'block';
    break;
  //-----------------------------------------------------------------------------
  default:
    // console.log('Sorry, we are out of ' + expr + '.');
}

};


// au moment ou on click sur la last page alors game ended

export{initGame};

