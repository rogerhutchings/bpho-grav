function initNav () {
  const nav = $('.js-nav');
  const header = $('.js-header');
  const homeButton = $('.js-home-button');
  const openButton = $('.js-open-menu');
  const closeButton = $('.js-close-menu');
  const navButtons = $('.js-nav-buttons');
  const navWrapper = $('.js-nav-wrapper');

  // The width at which the nav items start to hit the buttons.
  const MIN_WIDTH = 916;

  // Initial state
  navButtons.addClass('dn')
  closeButton.addClass('dn')

  function toggleNavContent () {
    const isNarrow = (header.outerWidth() < MIN_WIDTH);

    if (isNarrow) {
      navButtons
        .addClass('db')
        .removeClass('dn')
      nav
        .addClass('flex-column')
        .removeClass('flex-row')
      navWrapper
        .addClass('justify-center absolute top-100 left-0 bg-white pb3')
        .removeClass('justify-start')
      closeMenu()
    } else {
      navButtons
        .addClass('dn')
        .removeClass('db')
      nav
        .addClass('flex-row')
        .removeClass('flex-column')
      navWrapper
        .addClass('justify-start')
        .removeClass('justify-center absolute top-100 left-0 bg-white pb3')
      openMenu()
    }
  }

  function openMenu () {
    openButton
      .addClass('dn')
      .removeClass('db')
    closeButton
      .addClass('db')
      .removeClass('dn')
    navWrapper
      .addClass('flex')
      .removeClass('dn')
  }

  function closeMenu () {
    openButton
      .addClass('db')
      .removeClass('dn')
    closeButton
      .addClass('dn')
      .removeClass('db')
    navWrapper
      .addClass('dn')
      .removeClass('flex')
  }

  closeMenu()
  openButton.on('click', openMenu)
  closeButton.on('click', closeMenu)

  $(window).resize(() => $.throttle(toggleNavContent(), 200))
  toggleNavContent()
}

$(window).ready(initNav);

// // Resizes the nav bar to the same height as the header.
// function initNavHeight() {
//   const nav = $('.js-nav');
//   const header = $('.js-header');
//   const homeButton = $('.js-home-button');
//   const navButtons = $('.js-nav-buttons');
//   const navWrapper = $('.js-nav-wrapper');
//
//   // The width at which the nav items start to hit the buttons.
//   const MIN_WIDTH = 740;
//
//   function setNavHeight() {
//     // const isNarrow = (header.outerWidth() < MIN_WIDTH);
//     // const navHeight = (isNarrow) ? 'auto' : header.height();
//     //
//     // nav.height(navHeight);
//     //
//     // if (isNarrow) {
//     //   navItems.find('ul')
//     //     .addClass('flex-column')
//     //     .removeClass('flex-row');
//     // } else {
//     //   navItems.find('ul')
//     //     .addClass('flex-row')
//     //     .removeClass('flex-column');
//     // }
//   }
//
//   function toggleNarrowNav() {
//     // const isNarrow = (header.outerWidth() < MIN_WIDTH);
//     // const narrowNavActive = '';
//     //
//     // nav
//     //   .removeClass('js-dn')
//     //
//     // if (isNarrow) {
//     //   nav
//     //     .addClass('flex-column')
//     //     .addClass('dn')
//     //     .removeClass('flex-row')
//     //   .navWrapper
//     //     .insertAfter(header);
//     //   navButtons
//     //     .addClass('db')
//     //     .removeClass('dn')
//     //
//     //
//     // } else {
//     //   nav
//     //     .addClass('flex-row')
//     //     .removeClass('flex-column')
//     //   navWrapper
//     //     .insertAfter(navButtons);
//     //   navButtons
//     //     .addClass('dn')
//     //     .removeClass('db');
//     // }
//
//   }
//
//   toggleNarrowNav();
//   $(window).resize(() => $.throttle(toggleNarrowNav(), 200));
// }
//
// $(document).ready(initNavHeight);
//
// function initNavToggle() {
//   // const nav = $('.js-nav');
//   // const navWrapper = $('.js-nav-wrapper');
//   // const openButton = $('.js-open-menu');
//   // const closeButton = $('.js-close-menu');
//   //
//   // openButton
//   //   .addClass('db')
//   //   .removeClass('dn');
//   // closeButton
//   //   .addClass('dn')
//   //   .removeClass('db');
//   //
//   // openButton.on('click', function(event) {
//   //   openButton
//   //     .addClass('dn')
//   //     .removeClass('db');
//   //   closeButton
//   //     .addClass('db')
//   //     .removeClass('dn');
//   //   navWrapper
//   //     .addClass('db')
//   //     .removeClass('dn')
//   // });
//   //
//   // closeButton.on('click', function(event) {
//   //   openButton
//   //     .addClass('db')
//   //     .removeClass('dn');
//   //   closeButton
//   //     .addClass('dn')
//   //     .removeClass('db');
//   //   navWrapper
//   //     .addClass('dn')
//   //     .removeClass('db')
//   // });
//
//   // const header = $('.js-header');
//   // const nav = $('.js-nav');
//   //
//   // const MENU_TRANSITION = 200;
//   //
//   // function openNav() {
//   //   nav.removeClass('translate-y--100');
//   // }
//   //
//   // function closeNav() {
//   //   nav.addClass('translate-y--100');
//   // }
//   //
//   // nav
//   //   .removeClass('js-dn')
//   //   .addClass('db absolute top-0 left-0 tr-translate translate-y--100')
//   //
//   // header.on('click', function(event) {
//   //   var classes = event.target.className.baseVal || false;
//   //   if (classes && classes.indexOf('js-open-menu') > -1) {
//   //     openNav();
//   //   } else if (classes && classes.indexOf('js-close-menu') > -1) {
//   //     closeNav();
//   //   }
//   // });
//
// }
//
// $(window).ready(initNavToggle);
