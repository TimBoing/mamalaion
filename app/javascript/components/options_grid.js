const optionsSelection = () => {

  const searchBar = document.getElementById("round_search_bar");
  const reverse = document.getElementById("round_reverse");
  const back = document.getElementById("round_back");
  const charlie = document.getElementById("round_charlie");
  const searchBarOption = document.getElementById("grid-option-search-bar");
  const reverseOption = document.getElementById("grid-option-reverse");
  const backOption = document.getElementById("grid-option-back");
  const whereIsCharlieOption = document.getElementById("grid-option-where_is_charlie");


  const toggleActive = (element) => {
    element.classList.toggle("selected");
  }


  if(searchBar){

    searchBarOption.addEventListener('click', (event) => {
      toggleActive(searchBarOption);
      if(searchBar.checked === true){
        searchBar.checked = false;
      } else {
        searchBar.checked = true;
      }
    });

    if(reverseOption) {
      reverseOption.addEventListener('click', (event) => {
        toggleActive(reverseOption);
        if(reverse.checked === true){
          reverse.checked = false;
        } else {
          reverse.checked = true;
        }
      });
    }

    backOption.addEventListener('click', (event) => {
      toggleActive(backOption);
      if(back.checked === true){
        back.checked = false;
      } else {
        back.checked = true;
      }
    });

    whereIsCharlieOption.addEventListener('click', (event) => {
      toggleActive(whereIsCharlieOption);
      if(charlie.checked === true){
        charlie.checked = false;
      } else {
        charlie.checked = true;
      }
    });

  }
}

export{optionsSelection};




