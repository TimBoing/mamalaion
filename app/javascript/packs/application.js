// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

import { loadDynamicBannerText } from '../components/banner_typed';
import { handleRoundOptionsModal } from '../components/handle_modals';
import { initGame } from '../components/game_controller';
import { trackMouse } from '../components/mouseTrack';
import { joinRound } from '../components/join_round';
import { toggleNavbar } from '../components/toggle_navbar';
import '../components/copy_url';
import { handleRoundInfoModal } from '../components/handle_modals';
import { highlight } from '../components/marker';
import { alertBrowser } from '../components/alert_browser';
import { checkRecord } from '../components/check_record';
import { displayPathInfo } from '../components/path_info';
import { displayRoundsInfo } from '../components/rounds_info';
import { searchBar } from '../components/search_bar';
import { optionsSelection } from '../components/options_grid';
import { select2js } from '../components/select2';
import { quitAlert } from '../components/quit_game';

import { modalInfoJoin, modalInfoPages, modalInfoModes, modalInfoOptions } from '../components/modal_info';
import { defineEasyPath } from '../components/easy_path';
import { defineRandomPath } from '../components/random_path';
import { collapsibleChevrons } from '../components/chevrons';
import { gamePath } from '../components/game_path';
import { copyURL } from '../components/copy_url';

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();

  loadDynamicBannerText();
  handleRoundOptionsModal();
  initGame();
  toggleNavbar();
  joinRound();
  handleRoundInfoModal();
  highlight();
  alertBrowser();
  displayPathInfo();
  displayRoundsInfo();
  searchBar();
  select2js();
  checkRecord();
  defineEasyPath();
  defineRandomPath();
  optionsSelection();
  quitAlert();
  modalInfoJoin();
  modalInfoPages();
  modalInfoModes();
  modalInfoOptions();
  collapsibleChevrons();
  gamePath();
  copyURL();
});
