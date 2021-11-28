const gamePath = () => {
  const pathIconContainer = document.getElementById("path-icon-container");

  if(pathIconContainer){
    const modalGamePath = document.getElementById("game-path-modal");
    const closeGamePath = document.getElementById("close-game-path-modal");
    const pathBeginning = document.getElementById("beginning-of-the-path");
    const gameInfo = document.getElementById("game-info");
    const roundParticipationId = gameInfo.dataset.participation;

    pathIconContainer.addEventListener('click', (event) => {
      pathBeginning.innerHTML = "";
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      fetch(`http://${window.location.host}//round_participations/${roundParticipationId}/visited_pages`, requestOptions)
        .then(response => response.json())
        .then((data) => {
          const pathPoints = document.querySelectorAll(".path-point");
          if (pathPoints) {
            pathPoints.forEach(function (item) {
              item.remove();
            });
          };
          Object.keys(data.visited_page).forEach(function (item) {
            pathBeginning.insertAdjacentHTML('afterbegin', `<div class="path-point">${data.visited_page[item].title}</div><i class="fas fa-arrow-up"></i>`);
          });
      });
      modalGamePath.style.display = "block";
    });

    closeGamePath.addEventListener('click', (event) => {
      modalGamePath.style.display = "none";
    });

    window.addEventListener('click', (event) => {
      if (event.target == modalGamePath) {
        modalGamePath.style.display = "none";
      }
    });
  }
}

export{gamePath};

