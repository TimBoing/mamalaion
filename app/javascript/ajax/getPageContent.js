// import { fetchWithToken } from "../utils/fetchWithToken";

const getPageContent = (page, language, callback) => {

  // Pas possible de fetch with token parce que sinon ca signe avec le host du jeu et c' est bloqué!

  fetch(`https://${language}.wikipedia.org/api/rest_v1/page/html/${page}`, {method: "GET",redirect: 'follow'})
      .then(response => response.text())
      .then((data) => {callback(data);});

}

export{getPageContent};

