const requestRandomPageTitle = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://fr.wikipedia.org/api/rest_v1/page/random/title", requestOptions)
    .then(response => response.json())
    .then(result =>console.log(result.items[0].title));
}
