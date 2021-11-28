import Mark  from "mark.js/dist/mark.js" ;

const highlight = () => {
  const gameContainer = document.getElementById('game-container');
  const searchField = document.getElementById('seach-field');

  if(gameContainer){
    searchField.addEventListener('keyup', (event) => {
      const instance = new Mark(document.getElementById("wikipage-container"));
      instance.unmark(input_to_search);
      const input_to_search = searchField.value
      instance.mark(input_to_search);
    });
  }
}


export { highlight };


