const random_path_btn = document.getElementById("random-path");

const defineRandomPath = () => {

  if (random_path_btn) {

    const startPage = null;
    const endPage = null;
    const recordSentence = document.getElementById("nombre-de-clicks-record");

    random_path_btn.addEventListener('click', (event) => {

      $('#round_start_page')
        .val(startPage)
        .trigger('change')
        .trigger('select2:select');

      $('#round_end_page')
        .val(endPage)
        .trigger('change')
        .trigger('select2:select');

      recordSentence.innerHTML = "Pas encore de record sur ce chemin";
    });
  };
}

export {defineRandomPath};
