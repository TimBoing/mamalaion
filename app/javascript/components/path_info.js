const displayPathInfo = () => {
  const winner = document.getElementById("score-page-winner");

  if(winner){
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const userId = card.dataset.player;
      const assignedModal = document.getElementById(`path-info-modal-player-${userId}`);
      const assignedSpan = document.getElementById(`path-info-modal-close-player-${userId}`);
      card.addEventListener('click', (event) => {
        assignedModal.style.display = "block";
      });

      if(assignedSpan){
        assignedSpan.addEventListener('click', (event) => {
          assignedModal.style.display = "none";
        });
      }


      window.addEventListener('click', (event) => {
        if (event.target == assignedModal) {
          assignedModal.style.display = "none";
        }
      });

    });

  }
}

export{displayPathInfo};
