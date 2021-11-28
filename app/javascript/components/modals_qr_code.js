const handleQrCodeModals = () => {

const modal_display = document.getElementById("click_modal")

if (click_modal) {
  modal_display.addEventListener('click', (event) => {
    modal_display.style.display = "block";
  });

  //  span.addEventListener('click', (event) => {
    //  click_modal.style.display = "none";
  //  });

  //  window.addEventListener('click', (event) => {
  //    if (event.target == click_modal) {
     //   click_modal.style.display = "none";
   //   }
   // });
 }
}

export { handleQrCodeModals };
