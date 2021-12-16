import { fetchWithToken } from "../utils/fetchWithToken";

const getRecord = (start_end, callback) => {

  fetchWithToken(`${window.location.protocol}//${window.location.host}/path?${start_end}`, {
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

export{getRecord};
