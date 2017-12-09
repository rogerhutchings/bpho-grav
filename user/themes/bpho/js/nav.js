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

function initNavToggle() {
  const openMenuButton = $('.js-open-menu');
  const closeMenuButton = $('.js-close-menu');
  const nav = $('.js-nav');

  const MENU_TRANSITION = 200;

  function openNav() {
    nav.removeClass('translate-y--100');
    closeMenuButton.one('click', closeNav);
  }

  function closeNav() {
    nav.addClass('translate-y--100');
    openMenuButton.one('click', openNav);
  }

  nav
    .removeClass('js-dn')
    .addClass('db absolute top-0 left-0 tr-translate translate-y--100');

  openMenuButton.one('click', openNav);
}

$(document).ready(() => {
  initNavHeight();
});

// We use load() here so that FontAwesome has time to finish manipulating the
// DOM and we therefore get the right elements to attach our click event
// listeners to.
$(window).load(() => {
  initNavToggle();
});
