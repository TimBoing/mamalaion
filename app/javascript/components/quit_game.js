import swal from 'sweetalert/dist/sweetalert.min.js';

const quitAlert = () => {

  const quitIcon = document.getElementById("quit-icon");

  if(quitIcon) {
    const quitContainer = document.getElementById("quit-icon-container");
    quitContainer.addEventListener('click', (event) => {
      window.onbeforeunload = function() {
        return "";
      }
    });
  };
}

export { quitAlert };
