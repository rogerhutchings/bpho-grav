function initFaqs() {
  const faq = $('.js-faq');
  const answers = $('.js-faq-answer');
  const questions = $('.js-faq-question');

  questions
    .addClass('pointer dim')
    .append('<i class="fal fa-angle-down pe-none" aria-hidden="true"></i>');

  answers
    .removeClass('js-dn')
    .hide();

  questions.on('click', toggleFaqState);
}

function toggleFaqState({ target }) {
  const question = $(target);
  const arrow = question.children('.fal');
  const isOpen = question.data('is-open');
  // const rotation = (isOpen) ? '0deg' : '-180deg';
  // arrow.css('transform', `rotate(${rotation})`);
  $(target).siblings().slideToggle(200);
  question.data('is-open', !isOpen);
  return false;
}

$(document).ready(initFaqs);
