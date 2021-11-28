const easy_path_btn = document.getElementById("easy-path")
const recordSentence = document.getElementById("nombre-de-clicks-record");
let startPage = "Page aléatoire";
let endPage = "Page aléatoire";
const localeLanguage = document.getElementById("local-language");

const defineEasyPath = () => {

  const lookInDB = (start_end) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    fetch(`http://${window.location.host}/path?${start_end}`, requestOptions)
      .then(response => response.json())
      .then((data) => {

        if (data.min_click === "") {
          recordSentence.innerHTML = "Pas encore de record sur ce chemin";
        } else {
          recordSentence.innerHTML = `Le record pour ce couple de pages est de : <strong>${data.min_click} clicks</strong>`;
        }
    });
  };

  const buildQueryString = (start, end) => {
    return new URLSearchParams({start_page: start, end_page: end}).toString();
  }

  const buildQueryString2 = (localLanguage) => {
    return new URLSearchParams({language: localLanguage}).toString();
  }

  const firstFilter = () => {
    const startEnd = buildQueryString(startPage, endPage);
    lookInDB(startEnd);

  }


  if (easy_path_btn) {

    easy_path_btn.addEventListener('click', (event) => {
      const locale = buildQueryString2(localeLanguage.textContent);
      const requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
        fetch(`http://${window.location.host}/path?${locale}`, requestOptions)
        .then(response => response.json())
        .then((data) => {

          startPage = data.start_page.id
          endPage = data.end_page.id

          $('#round_start_page')
            .val(startPage)
            .trigger('change')
            .trigger('select2:select');

          $('#round_end_page')
            .val(endPage)
            .trigger('change')
            .trigger('select2:select');

            firstFilter();
        });

    });
  }
}

export {defineEasyPath};



