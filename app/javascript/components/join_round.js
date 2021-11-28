const joinRound = () => {
  const roundInput = document.getElementById("round-input");
  const btnSubmit = document.getElementById("blue-pill");

  const testURL = (url) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`${url}`, requestOptions)
      .then(response => {
        if(response.status === 200){
          window.location.href = `../rounds/${roundInput.value}/round_participations/new`;
        } else {
          alert("Code incorrect");
        }
      });
  }

  if (btnSubmit){
    btnSubmit.addEventListener("click", (event) => {
      testURL(`../rounds/${roundInput.value}/round_participations/new`);
    });
  }
}

export {joinRound};
