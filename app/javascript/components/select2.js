import $ from 'jquery';
import 'select2';
import 'select2/dist/css/select2.css';

const select2js = () => {
  if (document.querySelector(".js-select2")) {
    $(document).ready(function() {
      $('.js-select2').select2({ width: '100%' });
    });
  }
};

export { select2js };

