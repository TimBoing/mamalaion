import { displayPageContentOnInfoModal } from './game_view';
import { displayPageContent } from './game_view';

const gameInfo = document.getElementById('game-info');

let visitedPages = [];

const visitedPagesGetter = () => {
  return visitedPages;
}
const visitedPagesSetter = (visitedPagesUpdated) => {
  visitedPages = visitedPagesUpdated;
}

const addVisitedPageToDatabase = (page) => {
  if(visitedPages[visitedPages.length - 1] !== page){visitedPages.push(page);};
  const gameParticipation = gameInfo.dataset.participation;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({visited_page:{title:`${page}`}})
  };
  fetch(`http://${window.location.host}/round_participations/${gameParticipation}/visited_pages`, requestOptions)
    .catch(error => console.log('error', error));
};

const requestEndPageContent = (page) => {
  const language = gameInfo.dataset.language
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  if (language === "fr") {
    fetch(`https://fr.wikipedia.org/api/rest_v1/page/html/${page}`, requestOptions)
      .then(response => response.text())
      .then(result => displayPageContentOnInfoModal(result));
  } else {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${page}`, requestOptions)
      .then(response => response.text())
      .then(result => displayPageContentOnInfoModal(result));
  }
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

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  if (language === "fr") {
    fetch(`https://fr.wikipedia.org/api/rest_v1/page/html/${page}`, requestOptions)
      .then(response => response.text())
      .then(result => displayTitleAndContent(result));
  } else {
    fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${page}`, requestOptions)
      .then(response => response.text())
      .then(result => displayTitleAndContent(result));
  }
};


const notifyRoundEnded = () => {
  const gameRound = gameInfo.dataset.round;
  const gameOptions = gameInfo.dataset.options

  if(gameOptions == "Standard") {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({state: 'ended', winner: gameInfo.dataset.winner})
    };
    fetch(`http://${window.location.host}/rounds/${gameRound}`, requestOptions)
      .catch(error => console.log('error', error));
  } else {
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({state: 'ended', winner: gameInfo.dataset.winner})
    };
    fetch(`http://${window.location.host}/rounds_quick/${gameRound}`, requestOptions)
      .catch(error => console.log('error', error));
  }

}


export{requestEndPageContent};
export{requestPageContent};
export{notifyRoundEnded};
export{visitedPagesGetter};
export{visitedPagesSetter};







