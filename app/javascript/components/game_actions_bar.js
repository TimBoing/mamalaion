import { requestPageContent } from './game_model';
import { visitedPagesGetter } from './game_model';
import { visitedPagesSetter } from './game_model';

let visitedPages = [];

const initGameActionsBar = () => {
  const gameInfo = document.getElementById('game-info');
  const infoContainer = document.getElementById('info-your-target-modal');
  const actionTargetPage = document.getElementById("action-target-page");
  const actionPreviousPage = document.getElementById("action-previous-page");
  const spanInfo = document.getElementById("info-close");



  const initActionTargetPage = () => {
    actionTargetPage.addEventListener('click', (event) => {
      infoContainer.style.display = "block";
    });

    spanInfo.addEventListener('click', (event) => {
      infoContainer.style.display = "none";
    });

    // When the user clicks anywhere outside of the endPageModal, close it
    window.addEventListener('click', (event) => {
      if (event.target == infoContainer) {
        infoContainer.style.display = "none";
      }
    });
  }

  if (actionPreviousPage) {
    const initActionPreviousPage = () => {
      actionPreviousPage.addEventListener('click', (event) => {
        visitedPages = visitedPagesGetter();
        if(visitedPages.length > 1){
          visitedPages.pop();
          visitedPagesSetter(visitedPages);
          const previousPage = visitedPages[visitedPages.length - 1];
          requestPageContent(previousPage);
        }
      });
    }
    initActionPreviousPage ();
  }


  initActionTargetPage ();
}





export { initGameActionsBar };

