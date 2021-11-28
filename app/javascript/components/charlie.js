import { requestPageContent } from './game_model';

const unblockLinks = (wikiLinks) => {
  alert("Charlie trouvé! Les liens sont réactivés...");
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
}


const addCharlieLink = (wikiLinks) => {
  const pageContainer = document.getElementById('wikipage-container');
  const wikiContent = pageContainer.querySelectorAll('p');
  const paragraphSelected = wikiContent[Math.floor(Math.random() * wikiContent.length)];
  paragraphSelected.insertAdjacentHTML('beforeEnd', '<a class="charlie-btn"><i class="fas fa-user-secret"></i></a>');

  const charlieButton = pageContainer.querySelector('.charlie-btn');
  charlieButton.addEventListener('click', (event) => {
    unblockLinks(wikiLinks);
  });
}


export{addCharlieLink};
