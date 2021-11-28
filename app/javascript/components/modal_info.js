const modalInfoJoin = () => {
  const infoBubbleJ = document.querySelector(".info-bubble-join");
  if (infoBubbleJ){
    const infoBubbleJoin = document.getElementById("info-bubble-join");
    const modalInfoJoin = document.querySelector(".modal-info-join");
    const closeJoin = document.getElementById("close-join");
    infoBubbleJ.addEventListener('click', (event) => {
      modalInfoJoin.style.display = "block";
    });
    closeJoin.addEventListener('click', (event) => {
      modalInfoJoin.style.display = "none";
    });
    window.addEventListener('click', (event) => {
      if (event.target == modalInfoJoin) {
        modalInfoJoin.style.display = "none";
      }
    });
  }
}

const modalInfoPages = () => {
  const infoBubbleP = document.querySelector(".info-bubble-pages");
  if (infoBubbleP){
    const infoBubblePages = document.getElementById("info-bubble-pages");
    const modalInfoPages = document.querySelector(".modal-info-pages");
    const closePages = document.getElementById("close-pages");
    infoBubbleP.addEventListener('click', (event) => {
      modalInfoPages.style.display = "block";
    });
    closePages.addEventListener('click', (event) => {
      modalInfoPages.style.display = "none";
    });
    window.addEventListener('click', (event) => {
      if (event.target == modalInfoPages) {
        modalInfoPages.style.display = "none";
      }
    });
  }
}

const modalInfoModes = () => {
  const infoBubbleM = document.querySelector(".info-bubble-modes");
  if (infoBubbleM){
    const infoBubbleModes = document.getElementById("info-bubble-modes");
    const modalInfoModes = document.querySelector(".modal-info-modes");
    const closeModes = document.getElementById("close-modes");
    infoBubbleM.addEventListener('click', (event) => {
      modalInfoModes.style.display = "block";
    });
    closeModes.addEventListener('click', (event) => {
      modalInfoModes.style.display = "none";
    });
    window.addEventListener('click', (event) => {
      if (event.target == modalInfoModes) {
        modalInfoModes.style.display = "none";
      }
    });
  }
}

const modalInfoOptions = () => {
  const infoBubbleO = document.querySelector(".info-bubble-options");
  if (infoBubbleO){
    const infoBubbleOptions = document.getElementById("info-bubble-options");
    const modalInfoOptions = document.querySelector(".modal-info-options");
    const closeOptions = document.getElementById("close-options");
    infoBubbleO.addEventListener('click', (event) => {
      modalInfoOptions.style.display = "block";
    });
    closeOptions.addEventListener('click', (event) => {
      modalInfoOptions.style.display = "none";
    });
    window.addEventListener('click', (event) => {
      if (event.target == modalInfoOptions) {
        modalInfoOptions.style.display = "none";
      }
    });
  }
}

export { modalInfoJoin, modalInfoPages, modalInfoModes, modalInfoOptions };
