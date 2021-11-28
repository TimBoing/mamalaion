import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const title = document.getElementById('#home-page-title');
  const language = document.getElementById('locale');

  if(title){
    if (language.textContent === "fr") {
      new Typed(title, {
        strings: ["", "Defiez-vous","sur", "WikiRACE !!!"],
        typeSpeed: 120,
        loop: true
      });
    } else {
      new Typed(title, {
        strings: ["", "Face","the", "WikiRACE !!!"],
        typeSpeed: 120,
        loop: true
      });
    }

  }
}

export { loadDynamicBannerText };
