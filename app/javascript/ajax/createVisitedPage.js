import { fetchWithToken } from "../utils/fetchWithToken";

const createVisitedPage = (page, gameParticipation) => {

  fetchWithToken(`${window.location.protocol}//${window.location.host}/round_participations/${gameParticipation}/visited_pages`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ visited_page: {title: page} })
    })
      .then(response => response.json())
      .then((data) => {console.log(data);});

}

export{createVisitedPage};

