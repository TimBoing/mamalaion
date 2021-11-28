const pageChoiceContainer = document.getElementById('page-choice-container');
const recordSentence = document.getElementById("nombre-de-clicks-record");
let startPage = "Page aléatoire";
let endPage = "Page aléatoire";

const checkRecord = () => {


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

  const firstFilter = () => {
    if( startPage === "Page aléatoire" || endPage === "Page aléatoire" ){
       recordSentence.innerHTML = "Pas encore de record sur ce chemin";
    }else{
      const startEnd = buildQueryString(startPage, endPage);

      lookInDB(startEnd);
    }
  }

  if(pageChoiceContainer){
    $('#round_start_page').on('select2:select', function (e) {
      if(!e.params) return;
      startPage = e.params.data.id;
      firstFilter();
    });

    $('#round_end_page').on('select2:select', function (e) {
      if(!e.params) return;
      endPage = e.params.data.id;
      firstFilter();
    });
  }

}




export { checkRecord };
