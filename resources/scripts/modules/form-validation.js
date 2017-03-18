import $ from 'jquery';
import 'jquery-validation';
import ee from './ee';

const $form = $('.js-form');

function addRegisterFormValidation() {

  if ($form.length) {
    $form.submit((e) => {
      e.preventDefault();
    }).validate({
      groups: {
        /* Only display one validation message for day, month, and year: */
        dateOfBirth: 'dob-day dob-month dob-year',
      },
      rules: {
        email: {
          email: true,
        }
      },
      errorPlacement(error, element) {
        if (element.is('select') || element.is(':checkbox')) {
          error.insertAfter(element.parent());
        } else if (element.data('fieldgroup') === 'dob') {
          error.appendTo(element.closest('.c-form__input-container'));
        } else {
          error.insertAfter(element);
        }
      },
    });
  }
}

function init() {
  addRegisterFormValidation();
}

ee.addListener('init', init);
