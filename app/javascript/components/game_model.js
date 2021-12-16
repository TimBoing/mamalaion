import { displayPageContentOnInfoModal } from './game_view';
import { displayPageContent } from './game_view';
import { getPageContent } from '../ajax/getPageContent';
import { createVisitedPage } from '../ajax/createVisitedPage';
import { updateRound } from '../ajax/updateRound';

const gameInfo = document.getElementById('game-info');

let visitedPages = [];

const visitedPagesGetter = () => {
  return visitedPages;
}
const visitedPagesSetter = (visitedPagesUpdated) => {
  visitedPages = visitedPagesUpdated;
}

const addVisitedPageToDatabase = (page) => {
  const gameParticipation = gameInfo.dataset.participation;
  createVisitedPage(page, gameParticipation);
};

const requestEndPageContent = (page) => {
  const language = gameInfo.dataset.language;
  getPageContent(page, language, displayPageContentOnInfoModal);
};


const requestPageContent = (page) => {
  const pageTitleContainer = document.getElementById('wikipage-title-container');
  const language = gameInfo.dataset.language

  const displayTitleAndContent = (result) => {
    if(result.substring(0,1) !== "{"){
      const realTitle = page.replace(/_/g, " ");
      pageTitleContainer.innerText = realTitle;
      gameInfo.dataset.currentPage = page;
      displayPageContent(result);
      addVisitedPageToDatabase(page);
    } else {
      alert("Tu ne peux pas accéder à cette page!");
    }
  }
  getPageContent(page, language, displayTitleAndContent);

};


const notifyRoundEnded = () => {
  console.log("I am in notifyRoundEnded");
  const gameRound = gameInfo.dataset.round;
  const gameOptions = gameInfo.dataset.options
  const winner =  gameInfo.dataset.winner

  updateRound(gameOptions, gameRound, winner);

}


export{requestEndPageContent};
export{requestPageContent};
export{notifyRoundEnded};
export{visitedPagesGetter};
export{visitedPagesSetter};






