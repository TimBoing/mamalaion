const searchBar = () => {
  const searchBar = document.getElementById("game-actions-search");
  const searchIconContainer = document.getElementById("search-icon-container");
  const searchField = document.getElementById('seach-field');


  if(searchBar){
    //const searchBox = document.getElementById("userFindInput");

    searchIconContainer.addEventListener('click', (event) => {

      if(searchIconContainer.classList.contains("fake-class")){
        searchBar.style.maxWidth = "70px";
        searchBar.style.width = "15%";
        searchBar.style.opacity = "0.5";
        searchField.style.width = "0px";
        searchIconContainer.classList.remove("fake-class");
        searchField.value= "";

      }else {
        searchBar.style.maxWidth = "85%";
        searchBar.style.width = "85%";
        searchBar.style.opacity = "1";
        searchField.style.width = "100%";
        searchIconContainer.classList.add("fake-class");
      }


      // searchBox.classList.toggle("hidden");
    });
  };
}


export{searchBar};
