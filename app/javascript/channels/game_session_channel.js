import consumer from "./consumer";

const initGameSessionCable = () => {
  const gameInfo = document.getElementById('game-info');
  if(!gameInfo) return;
  console.log("initiating cable from initGameSessionCable");
  const gameEndModalWinner = document.getElementById('game-end-modal-winner');
  const id = gameInfo.dataset.gameSessionId;

  consumer.subscriptions.create({ channel: "GameSessionChannel", id: id }, {
    received(data) {
      console.log(data); // called when data is broadcast in the cable

      if(data['end_game']){
        gameInfo.dataset.winner = data['end_game'];
        gameEndModalWinner.innerText= `Winner is : ${gameInfo.dataset.winner}`
        gameInfo.dataset.state = "ended";
      }else if(data['malus']){
        console.log('there is a malus');
        console.log(data['malus']);
        gameInfo.dataset.sender = data['malus']['sender'];
        gameInfo.dataset.malus = data['malus']['type'];
      }
    },
  });

  // const messagesContainer = document.getElementById('messages');
  // if (messagesContainer) {
  //   const id = messagesContainer.dataset.chatroomId;

  //   consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
  //     received(data) {
  //       console.log(data); // called when data is broadcast in the cable
  //     },
  //   });
  // }
}

export { initGameSessionCable };

