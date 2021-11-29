import consumer from "./consumer";

const initGameSessionCable = () => {
  const gameInfo = document.getElementById('game-info');
  if(!gameInfo) return;
  console.log("initiating cable from initGameSessionCable");
  const gameEndModalWinner = document.getElementById('game-end-modal-winner');
  const id = gameInfo.dataset.gameSessionId;

  consumer.subscriptions.create({ channel: "GameSessionChannel", id: id }, {
    received(data) {
      console.log('-------------------CHANNEL----------------------');
      console.log(data); // called when data is broadcast in the cable

      if(data['end_game']){

        // JEU TERMINÉ
        console.log('-------------------CHANNEL: END GAME----------------------');
        gameInfo.dataset.winner = data['end_game'];
        gameEndModalWinner.innerText= `Winner is : ${gameInfo.dataset.winner}`
        gameInfo.dataset.state = "ended";
      }else if(data['malus']){

        // MALUS
        console.log('-------------------CHANNEL : MALUS----------------------');
        console.log(data['malus']);
        gameInfo.dataset.sender = data['malus']['sender'];
        gameInfo.dataset.malus = data['malus']['type'];
      }else if (data.message_partial === undefined && data.player === undefined && data.end_game === undefined) {

        // LE JEU COMMENCE
        console.log('-------------------CHANNEL: START GAME----------------------');
        window.location = gameInfo.dataset.roundPath;
      }else if (data.content === undefined && data.player === undefined && data.end_game === undefined) {

        // GESTION DES MESSAGES
        console.log('-------------------CHANNEL: MESSAGE----------------------');
        const messagesContainer = document.querySelector('.messages');
        messagesContainer.insertAdjacentHTML('afterbegin', data.message_partial);
        if (data.current_user_id == gameInfo.dataset.currentUser) {
          const messageInput = document.querySelector('#message_content');
          messageInput.value = '';
        }
        const messageReceived = document.getElementById('message-received');
        const messageReceivedPromise = messageReceived.play();
        messageReceived.currentTime = 0;
        if (messageReceivedPromise !== undefined) {
          messageReceivedPromise.then(function() {
            messageReceived.play();
          }).catch(function(error) {
            messageReceived.play();
            console.log("Probleme de chargement du son pour message recu!");
          });
        }
      } else if (data.content === undefined && data.message_partial === undefined && data.end_game === undefined) {

        // CONNECTION D' UN NOUVEAU JOUEUR
        console.log('-------------------CHANNEL: NEW PLAYER----------------------');
        const playerConnected = document.querySelector('.messages');
        playerConnected.insertAdjacentHTML('afterbegin', `<p class="new-connection">- ${data.player} ${gameInfo.dataset.hasJoinedTrad}</p>`);
        const numberOfPlayers = document.getElementById('nbr-player-connected');
        numberOfPlayers.innerText = data.connected
        const playerJoinSong = document.getElementById('player-joined');
        const playerJoinSongPromise = playerJoinSong.play();
        playerJoinSong.currentTime = 0;
        if (playerJoinSongPromise !== undefined) {
          playerJoinSongPromise.then(function() {
            playerJoinSong.play();
          }).catch(function(error) {
            playerJoinSong.play();
            console.log("Probleme de chargement du son pour player joined!");
          });
        }

      }else if (data.content === undefined && data.message_partial === undefined && data.player === undefined) {
        console.log('modal pop up');

      }
    },
  });


}

export { initGameSessionCable };


