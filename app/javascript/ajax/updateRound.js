import { fetchWithToken } from "../utils/fetchWithToken";

const updateRound = (gameOptions, gameRound, winner) => {

  const route = (gameOptions == "Standard") ? 'rounds' : 'rounds_quick';

  fetchWithToken(`${window.location.protocol}//${window.location.host}/${route}/${gameRound}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },

      body: JSON.stringify({ state: 'ended', winner: winner })
    })
      .then(response => response.json())
      .then((data) => {console.log(data);});

}

export{updateRound};

