const displayRoundsInfo = () => {
  const winner = document.getElementById("final-winner");

  if(winner){
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const userId = card.dataset.player;
      const assignedModal = document.getElementById(`rounds-info-modal-player-${userId}`);
      const assignedSpan = document.getElementById(`rounds-info-modal-close-player-${userId}`);
      card.addEventListener('click', (event) => {
        assignedModal.style.display = "block";
      });

      assignedSpan.addEventListener('click', (event) => {
        assignedModal.style.display = "none";
      });

      window.addEventListener('click', (event) => {
        if (event.target == assignedModal) {
          assignedModal.style.display = "none";
        }
      });

    });

  }
}

export{displayRoundsInfo};
