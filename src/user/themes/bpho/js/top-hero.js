/*

  TOP HERO resizer

  Looks for a hero element at the top of the page (identified by the
  `.js-top-hero` class), and resizes it to fill the viewport space minus the
  nav height.

 */

function initTopHero() {
  const resizers = $('.js-top-hero');

  if (!resizers.length) {
    return false;
  }

  const breakpoint = 960

  function setHeight(el) {
    const windowWidth = $(window).width()

    if (windowWidth < breakpoint) {
      const navHeight = $('#header').outerHeight();
      const windowHeight = $(window).height();
      $(this).height(windowHeight - navHeight);
    } else {
      $(this).css('height', 'auto')
    }
  }

  resizers.each(setHeight);

  $(window).resize(() =>
    $.throttle(resizers.each(setHeight), 100));
}

$(document).ready(initTopHero);
