// Resizes the nav bar to the same height as the header.
function initNavHeight() {
  const nav = $('.js-nav');
  const navItems = $('.js-nav-items');
  const header = $('.js-header');

  // The width at which the nav items start to hit the buttons.
  const MIN_WIDTH = 700;

  function setNavHeight() {
    const isNarrow = (header.outerWidth() < MIN_WIDTH);
    const navHeight = (isNarrow) ? 'auto' : header.height();

    nav.height(navHeight);

    if (isNarrow) {
      navItems.find('ul')
        .addClass('flex-column')
        .removeClass('flex-row');
    } else {
      navItems.find('ul')
        .addClass('flex-row')
        .removeClass('flex-column');
    }
  }

  setNavHeight();
  $(window).resize(() => $.throttle(setNavHeight(), 200));
}

$(document).ready(initNavHeight);

function initNavToggle() {
  const header = $('.js-header');
  const nav = $('.js-nav');

  const MENU_TRANSITION = 200;

  function openNav() {
    nav.removeClass('translate-y--100');
  }

  function closeNav() {
    nav.addClass('translate-y--100');
  }

  nav
    .removeClass('js-dn')
    .addClass('db absolute top-0 left-0 tr-translate translate-y--100')

  header.on('click', function(event) {
    var classes = event.target.className.baseVal || false;
    if (classes && classes.indexOf('js-open-menu') > -1) {
      openNav();
    } else if (classes && classes.indexOf('js-close-menu') > -1) {
      closeNav();
    }
  });
}

$(window).ready(initNavToggle);
