import { fetchWithToken } from "../utils/fetchWithToken";

const getVisitedPages = (roundParticipationId, callback) => {

  fetchWithToken(`${window.location.protocol}//${window.location.host}/round_participations/${roundParticipationId}/visited_pages`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

      // body: JSON.stringify({ state: 'ended', winner: winner })
    })
      .then(response => response.json())
      .then((data) => {callback(data);});

}

export{getVisitedPages};
