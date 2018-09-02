/*

  TOP HERO resizer

  Looks for a hero element at the top of the page (designated by class), and
  resizes it to fill the viewport space minus the nav height.

 */

function initTopHero() {
  const resizers = $('.js-top-hero');

  if (!resizers.length) {
    return false;
  }

  function setHeight(el) {
    const navHeight = $('#header').outerHeight();
    const windowHeight = $(window).height();
    $(this).height(windowHeight - navHeight);
  }

  resizers.each(setHeight);
  resizers.children('.js-dn').removeClass('js-dn');

  $(window).resize(() =>
    $.throttle(resizers.each(setHeight), 100));
}

$(document).ready(initTopHero);
