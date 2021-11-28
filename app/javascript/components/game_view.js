import { requestPageContent } from './game_model';
import { addMalusLinks } from './malus';
import { addCharlieLink } from './charlie';


const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const displayPageContentOnInfoModal = (page) => {
  const infoGameEndPageContainer = document.getElementById('info-game-end-page-container');
  infoGameEndPageContainer.insertAdjacentHTML('afterbegin', page);
  const wikiLinks = infoGameEndPageContainer.querySelectorAll('a');
  wikiLinks.forEach((link) => {
    link.addEventListener('click', (event)=> {
      event.preventDefault();
    });
  });
};


const displayPageContent = (page) => {
  const gameInfo = document.getElementById('game-info');
  const gameReverse = gameInfo.dataset.reverse;
  const charlie = gameInfo.dataset.charlie;
  const pageContainer = document.getElementById('wikipage-container');
  pageContainer.innerHTML = '';
  pageContainer.insertAdjacentHTML('afterbegin', page);
  scrollToTop();

  if(gameReverse === "true"){addMalusLinks();};

  const wikiLinks = pageContainer.querySelectorAll('a');
  if(charlie === "false"){
    wikiLinks.forEach((link) => {
      link.addEventListener('click', (event)=> {
        event.preventDefault();
        if(event.currentTarget.classList.contains('new')){
          alert('Ce lien est mort');
        }else{
          const messageReceived = document.getElementById('link-clicked');
          const messageReceivedPromise = messageReceived.play();
          messageReceived.currentTime = 0;
          if (messageReceivedPromise !== undefined) {
            messageReceivedPromise.then(function() {
              messageReceived.play();
            }).catch(function(error) {
              messageReceived.play();
              console.log("Probleme de chargement du son pour lien clické!");
            });
          }
          const linkRef = event.currentTarget.getAttribute("href");
          const stripedRef = linkRef.substring(2);
          requestPageContent(stripedRef);
        }
      });
    });
  } else {
    wikiLinks.forEach((link) => {
      link.addEventListener('click', (event)=> {
        event.preventDefault();
      });
    });
    addCharlieLink(wikiLinks);
  }
};



export {displayPageContentOnInfoModal};
export {displayPageContent};



