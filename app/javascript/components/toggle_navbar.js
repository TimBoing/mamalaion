// Objectif de ce bout de code est d´enlever la nav bar quand on repère qu´on est sur le jeu!

const toggleNavbar = () => {
  const pageContainer = document.getElementById('wikipage-container');
  const navbar = document.getElementById('main-navbar');
  if(pageContainer){
    if(navbar.classList.contains('disapear-effect')){
      //stay with no navbar
    } else {
      navbar.classList.add('disapear-effect');
    }
  } else {
    if(navbar.classList.contains('disapear-effect')){
      navbar.classList.remove('disapear-effect');
    }
  }
}

export{toggleNavbar};
