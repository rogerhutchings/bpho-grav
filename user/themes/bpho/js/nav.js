function initNav() {
  const openMenu = $('.js-open-menu');
  const closeMenu = $('.js-close-menu');
  const nav = $('.js-nav');

  const MENU_TRANSITION = 200;

  nav
    .removeClass('js-dn')
    .addClass('db absolute top-0 left-0 tr-translate translate-y--100');

  openMenu.on('click', () => {
    nav.removeClass('translate-y--100');
    openMenu.addClass('is-active');
    setTimeout(() => closeMenu.addClass('is-active'), MENU_TRANSITION);

  });

  closeMenu.on('click', () => {
    nav.addClass('translate-y--100');
    openMenu.removeClass('is-active');
    setTimeout(() => {
      closeMenu.removeClass('is-active');
      closeMenu.removeClass('is-active');
    }, MENU_TRANSITION);

  });
}

$(document).ready(initNav);
